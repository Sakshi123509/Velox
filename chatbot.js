import dotenv from "dotenv";
dotenv.config();
import Groq from "groq-sdk";
import { tavily } from "@tavily/core";
import NodeCache from 'node-cache';


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const tvly = tavily({ apiKey: process.env.TAVILY_API_KEY });
const cache = new NodeCache({ stdTTL: 60 * 60 * 24 });//insec for 1 day

async function webSearch({ query }) {
    console.log(`[System] Executing local webSearch for: "${query}"`);
    try {
        const response = await tvly.search(query);
        // Extract just the text content from the search results
        const finalResult = response.results.map((result) => result.content).join('\n\n');
        return finalResult;
    } catch (error) {
        console.error("Tavily search failed:", error);
        return "Failed to fetch search results.";
    }
}

export async function generate(usermessage, threadId) {

    const basemessages = [
        {
            role: "system",
            content: `You are a helpful assistant. Use your tools to look up real-time information if you don't know it.
Your primary goal is to provide accurate, helpful, and concise answers.

Rules:
1. If you know the answer with confidence, answer it directly in plain English.
2. If the question requires real-time, local, current, or up-to-date information, or if you are not confident in your answer, use the available search tool.
3. You have access to the following tool:

   searchWeb(query: string)
   - Use this tool to search the internet for current, real-time, or unknown information.

4. Decide intelligently when to answer from your own knowledge and when to use the search tool.
5. Do not mention the existence of the tool unless it is necessary for the user's request.
6. Always provide clear, natural, and user-friendly responses.

CRITICAL: The current Date and time is: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} (Indian Standard Time). 
If the user asks for the current date, time, day, or year, DO NOT use the webSearch tool. Answer directly using this provided time.`
        }
    ];


    const messages = cache.get(threadId) ?? basemessages;//threadid will give previous history if it is first msg then basemsg

    // 2. The Agent Loop: Run continuously until the LLM decides it has a final answer

    messages.push({
        role: 'user',
        content: usermessage,
    });

    const MAX_RETRIEV = 10;
    let count = 0;
    while (true) {
        if (count > MAX_RETRIEV) {
            return responseMessage.content;
        }
        count++;
        try {
            console.log("\nSending conversation context to LLM...");
            const completion = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                temperature: 0,
                messages: messages, // Send the evolving chat history
                tools: [
                    {
                        type: "function",
                        function: {
                            name: "webSearch",
                            description: "Search the internet for current events, news, or real-time details.",
                            parameters: {
                                type: "object",
                                properties: {
                                    query: {
                                        type: "string",
                                        description: "The plain text search query. Do not include quotes inside the string."
                                    }
                                },
                                required: ["query"]
                            }
                        }
                    }
                ],
                tool_choice: 'auto',
            });

            const responseMessage = completion.choices[0].message;

            // CRITICAL: Always push the assistant's response (even tool requests) into the history
            messages.push(responseMessage);

            const toolCalls = responseMessage.tool_calls;

            // BREAK CONDITION: If the LLM didn't request any tools, it has generated its final text answer
            if (!toolCalls) {
                //stopping point store msg history in db means cache
                cache.set(threadId, messages);
                // console.log('cache ', cache);

                console.log(`\n🤖 AI Assistant: ${responseMessage.content}`);
                return responseMessage.content;
            }

            // 3. Process Tool Requests
            for (const tool of toolCalls) {
                const functionName = tool.function.name;
                const functionParams = JSON.parse(tool.function.arguments);

                if (functionName === 'webSearch') {
                    // Execute our local JavaScript function using arguments provided by the LLM
                    const toolResult = await webSearch(functionParams);

                    // CRITICAL: Append the tool results back into the conversation history
                    messages.push({
                        tool_call_id: tool.id,
                        role: 'tool',
                        name: functionName,
                        content: toolResult,
                    });
                }
            }

        } catch (error) {
            console.error("Error encountered in agent loop:", error);
            break;
        }
    }
}