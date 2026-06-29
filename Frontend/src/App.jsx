// import { useState, useRef, useEffect } from "react";

// // Unique threadId per session — same as your original script.js
// const threadId =
//   Date.now().toString(36) + Math.random().toString(36).substring(2, 5);

// const styles = {
//   app: {
//     fontFamily: "system-ui, -apple-system, sans-serif",
//     backgroundColor: "#171717",
//     color: "#ffffff",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     margin: 0,
//   },
//   header: {
//     borderBottom: "1px solid #262626",
//     padding: "12px 16px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexShrink: 0,
//     backgroundColor: "#171717",
//   },
//   headerLeft: { display: "flex", alignItems: "center", gap: "10px" },
//   avatarSmall: {
//     width: "28px",
//     height: "28px",
//     borderRadius: "50%",
//     backgroundColor: "#404040",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//   },
//   headerName: { fontSize: "14px", fontWeight: 500, color: "#f5f5f5" },
//   badge: {
//     fontSize: "11px",
//     color: "#737373",
//     backgroundColor: "#262626",
//     padding: "2px 8px",
//     borderRadius: "999px",
//   },
//   newChatBtn: {
//     fontSize: "12px",
//     color: "#737373",
//     backgroundColor: "transparent",
//     border: "1px solid #404040",
//     padding: "4px 10px",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   messagesArea: { flex: 1, overflowY: "auto", minHeight: 0 },
//   messagesInner: {
//     maxWidth: "768px",
//     margin: "0 auto",
//     padding: "24px 16px 16px",
//   },
//   userMsgRow: {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginBottom: "24px",
//   },
//   userBubble: {
//     backgroundColor: "#404040",
//     color: "#ffffff",
//     padding: "10px 14px",
//     borderRadius: "18px",
//     borderBottomRightRadius: "4px",
//     maxWidth: "75%",
//     fontSize: "14px",
//     lineHeight: "1.6",
//     whiteSpace: "pre-wrap",
//     wordBreak: "break-word",
//   },
//   assistantRow: {
//     display: "flex",
//     justifyContent: "flex-start",
//     marginBottom: "24px",
//   },
//   assistantInner: { display: "flex", gap: "12px", maxWidth: "85%" },
//   assistantText: {
//     color: "#e5e5e5",
//     fontSize: "14px",
//     lineHeight: "1.7",
//     paddingTop: "2px",
//     whiteSpace: "pre-wrap",
//     wordBreak: "break-word",
//   },
//   cursor: {
//     display: "inline-block",
//     width: "2px",
//     height: "16px",
//     backgroundColor: "#737373",
//     marginLeft: "2px",
//     verticalAlign: "middle",
//     animation: "blink 1s step-end infinite",
//   },
//   dotsRow: {
//     display: "flex",
//     alignItems: "center",
//     gap: "4px",
//     paddingTop: "8px",
//   },
//   inputArea: { padding: "16px", flexShrink: 0, backgroundColor: "#171717" },
//   inputWrap: { maxWidth: "768px", margin: "0 auto" },
//   inputBox: {
//     backgroundColor: "#262626",
//     borderRadius: "16px",
//     padding: "12px 16px 10px",
//     border: "1px solid #404040",
//   },
//   textarea: {
//     width: "100%",
//     backgroundColor: "transparent",
//     border: "none",
//     outline: "none",
//     resize: "none",
//     fontSize: "14px",
//     color: "#ffffff",
//     lineHeight: "1.6",
//     fontFamily: "inherit",
//     maxHeight: "160px",
//     overflowY: "auto",
//     boxSizing: "border-box",
//   },
//   inputFooter: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginTop: "8px",
//   },
//   hint: { fontSize: "11px", color: "#525252" },
//   sendBtn: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     padding: "6px 14px",
//     borderRadius: "999px",
//     fontSize: "12px",
//     fontWeight: 500,
//     border: "none",
//     cursor: "pointer",
//     transition: "background 0.15s",
//   },
//   sendBtnActive: { backgroundColor: "#ffffff", color: "#000000" },
//   sendBtnDisabled: {
//     backgroundColor: "#404040",
//     color: "#525252",
//     cursor: "not-allowed",
//   },
//   disclaimer: {
//     textAlign: "center",
//     fontSize: "11px",
//     color: "#525252",
//     marginTop: "8px",
//   },
// };

// function BotIcon() {
//   return (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="#ffffff"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 2L2 7l10 5 10-5-10-5z" />
//       <path d="M2 17l10 5 10-5" />
//       <path d="M2 12l10 5 10-5" />
//     </svg>
//   );
// }

// function SendIcon() {
//   return (
//     <svg
//       width="11"
//       height="11"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="22" y1="2" x2="11" y2="13" />
//       <polygon points="22 2 15 22 11 13 2 9 22 2" />
//     </svg>
//   );
// }

// function SpinnerIcon() {
//   return (
//     <svg
//       style={{ animation: "spin 1s linear infinite", width: 12, height: 12 }}
//       viewBox="0 0 24 24"
//       fill="none"
//     >
//       <circle
//         style={{ opacity: 0.25 }}
//         cx="12"
//         cy="12"
//         r="10"
//         stroke="currentColor"
//         strokeWidth="4"
//       />
//       <path
//         style={{ opacity: 0.75 }}
//         fill="currentColor"
//         d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
//       />
//     </svg>
//   );
// }

// function TypingDots() {
//   return (
//     <div style={styles.assistantRow}>
//       <div style={styles.assistantInner}>
//         <div style={styles.avatarSmall}>
//           <BotIcon />
//         </div>
//         <div style={styles.dotsRow}>
//           {[0, 1, 2].map((i) => (
//             <div
//               key={i}
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: "50%",
//                 backgroundColor: "#525252",
//                 animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function App() {
//   const [messages, setMessages] = useState([
//     { role: "assistant", content: "Hey! How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [streamingText, setStreamingText] = useState("");
//   const [isStreaming, setIsStreaming] = useState(false);

//   const messagesEndRef = useRef(null);
//   const textareaRef = useRef(null);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, streamingText, isLoading]);

//   const adjustHeight = () => {
//     const ta = textareaRef.current;
//     if (!ta) return;
//     ta.style.height = "auto";
//     ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
//   };

//   const sendMessage = async () => {
//     const trimmed = input.trim();
//     if (!trimmed || isLoading || isStreaming) return;

//     setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
//     setInput("");
//     if (textareaRef.current) textareaRef.current.style.height = "auto";
//     setIsLoading(true);
//     setStreamingText("");

//     try {
//       // calls YOUR Express backend (server.js) — same as your original script.js
//       const res = await fetch("http://localhost:3001/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: trimmed, threadId }),
//       });

//       if (!res.ok) throw new Error("API error");

//       const result = await res.json();
//       const reply = result.Message;

//       setIsLoading(false);

//       // Typewriter effect — since backend returns full text (not streamed)
//       setIsStreaming(true);
//       let i = 0;
//       intervalRef.current = setInterval(() => {
//         i += 8;
//         setStreamingText(reply.slice(0, i));
//         if (i >= reply.length) {
//           clearInterval(intervalRef.current);
//           setIsStreaming(false);
//           setStreamingText("");
//           setMessages((prev) => [
//             ...prev,
//             { role: "assistant", content: reply },
//           ]);
//         }
//       }, 16);
//     } catch (err) {
//       setIsLoading(false);
//       setIsStreaming(false);
//       setStreamingText("");
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "Something went wrong. Make sure your server is running on port 3001.",
//         },
//       ]);
//     }
//   };

//   const canSend = input.trim().length > 0 && !isLoading && !isStreaming;

//   return (
//     <>
//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         body { margin: 0; background: #171717; }
//         @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
//         @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes bounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-5px);opacity:1} }
//         textarea::placeholder { color: #525252; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: transparent; }
//         ::-webkit-scrollbar-thumb { background: #404040; border-radius: 2px; }
//       `}</style>

//       <div style={styles.app}>
//         {/* Header */}
//         <div style={styles.header}>
//           <div style={styles.headerLeft}>
//             <div style={styles.avatarSmall}>
//               <BotIcon />
//             </div>
//             <span style={styles.headerName}> Velox </span>
//             <span style={styles.badge}>Llama 3.3</span>
//           </div>
//           <button
//             style={styles.newChatBtn}
//             onClick={() => {
//               clearInterval(intervalRef.current);
//               setMessages([
//                 {
//                   role: "assistant",
//                   content: "Hey! How can I help you today?",
//                 },
//               ]);
//               setStreamingText("");
//               setIsLoading(false);
//               setIsStreaming(false);
//             }}
//           >
//             New chat
//           </button>
//         </div>

//         {/* Messages */}
//         <div style={styles.messagesArea}>
//           <div style={styles.messagesInner}>
//             {messages.map((msg, i) =>
//               msg.role === "user" ? (
//                 <div key={i} style={styles.userMsgRow}>
//                   <div style={styles.userBubble}>{msg.content}</div>
//                 </div>
//               ) : (
//                 <div key={i} style={styles.assistantRow}>
//                   <div style={styles.assistantInner}>
//                     <div style={styles.avatarSmall}>
//                       <BotIcon />
//                     </div>
//                     <div style={styles.assistantText}>{msg.content}</div>
//                   </div>
//                 </div>
//               ),
//             )}
//             {isLoading && <TypingDots />}
//             {isStreaming && streamingText && (
//               <div style={styles.assistantRow}>
//                 <div style={styles.assistantInner}>
//                   <div style={styles.avatarSmall}>
//                     <BotIcon />
//                   </div>
//                   <div style={styles.assistantText}>
//                     {streamingText}
//                     <span style={styles.cursor} />
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//         </div>

//         {/* Input */}
//         <div style={styles.inputArea}>
//           <div style={styles.inputWrap}>
//             <div style={styles.inputBox}>
//               <textarea
//                 ref={textareaRef}
//                 value={input}
//                 rows={1}
//                 placeholder="Ask anything..."
//                 style={styles.textarea}
//                 onChange={(e) => {
//                   setInput(e.target.value);
//                   adjustHeight();
//                 }}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" && !e.shiftKey) {
//                     e.preventDefault();
//                     sendMessage();
//                   }
//                 }}
//               />
//               <div style={styles.inputFooter}>
//                 <span style={styles.hint}>
//                   {isLoading || isStreaming
//                     ? "Generating…"
//                     : "Shift+Enter for new line"}
//                 </span>
//                 <button
//                   onClick={sendMessage}
//                   disabled={!canSend}
//                   style={{
//                     ...styles.sendBtn,
//                     ...(canSend
//                       ? styles.sendBtnActive
//                       : styles.sendBtnDisabled),
//                   }}
//                 >
//                   {isLoading || isStreaming ? (
//                     <>
//                       <SpinnerIcon /> Thinking
//                     </>
//                   ) : (
//                     <>
//                       Send <SendIcon />
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//             <p style={styles.disclaimer}>
//               AI can make mistakes. Verify important information.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState, useRef, useEffect } from "react";

const generateThreadId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2, 5);

const styles = {
  app: { fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#171717", color: "#ffffff", height: "100vh", display: "flex", flexDirection: "row", margin: 0, overflow: "hidden" },
  sidebar: { width: "260px", backgroundColor: "#0f0f0f", borderRight: "1px solid #262626", display: "flex", flexDirection: "column", flexShrink: 0, transition: "width 0.2s" },
  sidebarHeader: { padding: "16px", borderBottom: "1px solid #1a1a1a" },
  sidebarTitle: { fontSize: "13px", fontWeight: 600, color: "#f5f5f5", letterSpacing: "0.05em", textTransform: "uppercase" },
  newChatBtn: { display: "flex", alignItems: "center", gap: "8px", width: "100%", marginTop: "12px", padding: "8px 10px", backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "8px", color: "#e5e5e5", fontSize: "13px", cursor: "pointer", fontFamily: "inherit" },
  historyList: { flex: 1, overflowY: "auto", padding: "8px" },
  historyItem: { padding: "8px 10px", borderRadius: "7px", cursor: "pointer", marginBottom: "2px", fontSize: "13px", color: "#a3a3a3", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", border: "1px solid transparent" },
  historyItemActive: { backgroundColor: "#1f1f1f", color: "#f5f5f5", border: "1px solid #333" },
  historyItemHover: { backgroundColor: "#1a1a1a" },
  sidebarFooter: { padding: "12px", borderTop: "1px solid #1a1a1a", fontSize: "11px", color: "#404040", textAlign: "center" },
  main: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 },
  header: { borderBottom: "1px solid #262626", padding: "12px 16px", display: "flex", alignItems: "center", gap: "10px", flexShrink: 0, backgroundColor: "#171717" },
  avatarSmall: { width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#404040", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  headerName: { fontSize: "14px", fontWeight: 500, color: "#f5f5f5" },
  badge: { fontSize: "11px", color: "#737373", backgroundColor: "#262626", padding: "2px 8px", borderRadius: "999px" },
  messagesArea: { flex: 1, overflowY: "auto", minHeight: 0 },
  messagesInner: { maxWidth: "768px", margin: "0 auto", padding: "24px 16px 16px" },
  emptyState: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#404040", gap: "12px" },
  emptyTitle: { fontSize: "22px", fontWeight: 600, color: "#525252" },
  emptySubtitle: { fontSize: "14px", color: "#3a3a3a" },
  userMsgRow: { display: "flex", justifyContent: "flex-end", marginBottom: "24px" },
  userBubble: { backgroundColor: "#404040", color: "#ffffff", padding: "10px 14px", borderRadius: "18px", borderBottomRightRadius: "4px", maxWidth: "75%", fontSize: "14px", lineHeight: "1.6", whiteSpace: "pre-wrap", wordBreak: "break-word" },
  assistantRow: { display: "flex", justifyContent: "flex-start", marginBottom: "24px" },
  assistantInner: { display: "flex", gap: "12px", maxWidth: "85%" },
  assistantText: { color: "#e5e5e5", fontSize: "14px", lineHeight: "1.7", paddingTop: "2px", whiteSpace: "pre-wrap", wordBreak: "break-word" },
  cursor: { display: "inline-block", width: "2px", height: "16px", backgroundColor: "#737373", marginLeft: "2px", verticalAlign: "middle", animation: "blink 1s step-end infinite" },
  dotsRow: { display: "flex", alignItems: "center", gap: "4px", paddingTop: "8px" },
  inputArea: { padding: "16px", flexShrink: 0, backgroundColor: "#171717" },
  inputWrap: { maxWidth: "768px", margin: "0 auto" },
  inputBox: { backgroundColor: "#262626", borderRadius: "16px", padding: "12px 16px 10px", border: "1px solid #404040" },
  textarea: { width: "100%", backgroundColor: "transparent", border: "none", outline: "none", resize: "none", fontSize: "14px", color: "#ffffff", lineHeight: "1.6", fontFamily: "inherit", maxHeight: "160px", overflowY: "auto", boxSizing: "border-box" },
  inputFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "8px" },
  hint: { fontSize: "11px", color: "#525252" },
  sendBtn: { display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "999px", fontSize: "12px", fontWeight: 500, border: "none", cursor: "pointer" },
  sendBtnActive: { backgroundColor: "#ffffff", color: "#000000" },
  sendBtnDisabled: { backgroundColor: "#404040", color: "#525252", cursor: "not-allowed" },
  disclaimer: { textAlign: "center", fontSize: "11px", color: "#525252", marginTop: "8px" },
};

function BotIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg style={{ animation: "spin 1s linear infinite", width: 12, height: 12 }} viewBox="0 0 24 24" fill="none">
      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
    </svg>
  );
}

function TypingDots() {
  return (
    <div style={styles.assistantRow}>
      <div style={styles.assistantInner}>
        <div style={styles.avatarSmall}><BotIcon /></div>
        <div style={styles.dotsRow}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#525252", animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const INITIAL_MSG = { role: "assistant", content: "Hey! How can I help you today?" };

export default function App() {
  // Each thread: { id, title, messages[] }
  const [threads, setThreads] = useState([
    { id: generateThreadId(), title: "New conversation", messages: [INITIAL_MSG] }
  ]);
  const [activeId, setActiveId] = useState(threads[0].id);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const intervalRef = useRef(null);

  const activeThread = threads.find((t) => t.id === activeId);
  const messages = activeThread?.messages ?? [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText, isLoading, activeId]);

  const adjustHeight = () => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  };

  const startNewChat = () => {
    clearInterval(intervalRef.current);
    setIsLoading(false);
    setIsStreaming(false);
    setStreamingText("");
    setInput("");
    const newThread = { id: generateThreadId(), title: "New conversation", messages: [INITIAL_MSG] };
    setThreads((prev) => [newThread, ...prev]);
    setActiveId(newThread.id);
  };

  const switchThread = (id) => {
    if (isLoading || isStreaming) return;
    setActiveId(id);
    setInput("");
    setStreamingText("");
  };

  // Update messages in active thread
  const updateThreadMessages = (threadId, updater) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, messages: updater(t.messages) } : t))
    );
  };

  // Set thread title from first user message
  const setThreadTitle = (threadId, title) => {
    setThreads((prev) =>
      prev.map((t) => (t.id === threadId ? { ...t, title: title.slice(0, 40) } : t))
    );
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading || isStreaming) return;

    const currentThreadId = activeId;

    // Set title from first user message
    const isFirstMsg = messages.filter((m) => m.role === "user").length === 0;
    if (isFirstMsg) setThreadTitle(currentThreadId, trimmed);

    updateThreadMessages(currentThreadId, (prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    setIsLoading(true);
    setStreamingText("");

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, threadId: currentThreadId }),
      });

      if (!res.ok) throw new Error("API error");
      const result = await res.json();
      const reply = result.Message;

      setIsLoading(false);
      setIsStreaming(true);

      let i = 0;
      intervalRef.current = setInterval(() => {
        i += 8;
        setStreamingText(reply.slice(0, i));
        if (i >= reply.length) {
          clearInterval(intervalRef.current);
          setIsStreaming(false);
          setStreamingText("");
          updateThreadMessages(currentThreadId, (prev) => [
            ...prev,
            { role: "assistant", content: reply },
          ]);
        }
      }, 16);

    } catch {
      setIsLoading(false);
      setIsStreaming(false);
      setStreamingText("");
      updateThreadMessages(currentThreadId, (prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Make sure your server is running on port 3001." },
      ]);
    }
  };

  const canSend = input.trim().length > 0 && !isLoading && !isStreaming;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; background: #171717; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes bounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-5px);opacity:1} }
        textarea::placeholder { color: #525252; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }

        @media (max-width: 640px) {
          .sidebar { display: none !important; }
        }
      `}</style>

      <div style={styles.app}>
        {/* Sidebar */}
        <div className="sidebar" style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <div style={styles.sidebarTitle}>⚡ Velox</div>
            <button style={styles.newChatBtn} onClick={startNewChat}>
              <PlusIcon /> New chat
            </button>
          </div>

          <div style={styles.historyList}>
            {threads.length === 0 && (
              <div style={{ fontSize: "12px", color: "#3a3a3a", padding: "8px 10px" }}>No chats yet</div>
            )}
            {threads.map((t) => (
              <div
                key={t.id}
                onClick={() => switchThread(t.id)}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  ...styles.historyItem,
                  ...(t.id === activeId ? styles.historyItemActive : {}),
                  ...(hoveredId === t.id && t.id !== activeId ? styles.historyItemHover : {}),
                }}
              >
                {t.title}
              </div>
            ))}
          </div>

          <div style={styles.sidebarFooter}>Powered by Groq + Llama 3.3</div>
        </div>

        {/* Main */}
        <div style={styles.main}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.avatarSmall}><BotIcon /></div>
            <span style={styles.headerName}>Velox</span>
            <span style={styles.badge}>Llama 3.3 70B</span>
          </div>

          {/* Messages */}
          <div style={styles.messagesArea}>
            <div style={styles.messagesInner}>
              {messages.length === 1 && messages[0].role === "assistant" && (
                <div style={styles.assistantRow}>
                  <div style={styles.assistantInner}>
                    <div style={styles.avatarSmall}><BotIcon /></div>
                    <div style={styles.assistantText}>{messages[0].content}</div>
                  </div>
                </div>
              )}
              {messages.slice(1).map((msg, i) =>
                msg.role === "user" ? (
                  <div key={i} style={styles.userMsgRow}>
                    <div style={styles.userBubble}>{msg.content}</div>
                  </div>
                ) : (
                  <div key={i} style={styles.assistantRow}>
                    <div style={styles.assistantInner}>
                      <div style={styles.avatarSmall}><BotIcon /></div>
                      <div style={styles.assistantText}>{msg.content}</div>
                    </div>
                  </div>
                )
              )}
              {isLoading && activeId === activeId && <TypingDots />}
              {isStreaming && streamingText && (
                <div style={styles.assistantRow}>
                  <div style={styles.assistantInner}>
                    <div style={styles.avatarSmall}><BotIcon /></div>
                    <div style={styles.assistantText}>
                      {streamingText}<span style={styles.cursor} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div style={styles.inputArea}>
            <div style={styles.inputWrap}>
              <div style={styles.inputBox}>
                <textarea
                  ref={textareaRef}
                  value={input}
                  rows={1}
                  placeholder="Ask anything..."
                  style={styles.textarea}
                  onChange={(e) => { setInput(e.target.value); adjustHeight(); }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
                  }}
                />
                <div style={styles.inputFooter}>
                  <span style={styles.hint}>
                    {isLoading || isStreaming ? "Generating…" : "Shift+Enter for new line"}
                  </span>
                  <button
                    onClick={sendMessage}
                    disabled={!canSend}
                    style={{ ...styles.sendBtn, ...(canSend ? styles.sendBtnActive : styles.sendBtnDisabled) }}
                  >
                    {isLoading || isStreaming ? <><SpinnerIcon /> Thinking</> : <>Send <SendIcon /></>}
                  </button>
                </div>
              </div>
              <p style={styles.disclaimer}>AI can make mistakes. Verify important information.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}