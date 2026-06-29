# ⚡ Velox

A blazing-fast AI chat assistant powered by **Groq + Llama 3.3 70B**. Featuring real-time web search capabilities, multi-turn conversation memory, and a sleek, modern dark-themed React frontend.

---

## 🚀 Live Demo

* **Frontend:** [velox-henna.vercel.app](https://velox-henna.vercel.app)
* **Backend:** [velox-backend-6sqt.onrender.com](https://velox-backend-6sqt.onrender.com)

---

## ✨ Features

* **⚡ Blazing Fast:** Powered by the Groq inference engine for the fastest LLM API response times.
* **🧠 Smart Context:** Multi-turn conversation memory sustained per session.
* **🌐 Real-time Web Search:** Native Tavily API integration for fetching up-to-date answers from the web.
* **💬 Chat History:** Easily switch between multiple distinct conversations.
* **🎨 Clean UI:** Beautiful, modern, dark-themed responsive frontend built with React.
* **📱 Responsive Design:** Optimally designed for seamless use across mobile and desktop screens.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Vite |
| **Backend** | Node.js, Express.js |
| **LLM** | Llama 3.3 70B (via Groq) |
| **Web Search** | Tavily API |
| **Memory** | Node-Cache (In-memory storage) |
| **Frontend Deploy** | Vercel |
| **Backend Deploy** | Render |

---

## 📁 Project Structure

```text
Velox/
├── Frontend/          # React frontend (Vite)
│   ├── src/
│   │   └── App.jsx     # Main chat UI
│   └── package.json
├── chatbot.js          # LLM agent loop with tool calling
├── server.js           # Express REST API
├── .gitignore
└── package.json
```

## ⚙️ How It Works

```
User Message
            │
            ▼
 Express Server (server.js)
            │
            ▼
 AI Agent Loop (chatbot.js)
            │
            ▼
   Groq API (Llama 3.3 70B)
            │
     [Needs web search?] ──► Yes ──► Tavily API ──► Results back to LLM
            │
            ▼
     Final Response ──► User
```

## 🔧 Run Locally

1. Clone the repository
```
git clone [https://github.com/Sakshi123509/Velox.git](https://github.com/Sakshi123509/Velox.git)
cd Velox
```
2. Setup the Backend
```
# Install root/backend dependencies
npm install

# Create a .env file in the root directory and add your keys:
# GROQ_API_KEY=your_groq_api_key
# TAVILY_API_KEY=your_tavily_api_key

# Start the Express server
node server.js
```
Note: The backend server will run locally on http://localhost:3001

3. Setup the Frontend

```
# Navigate to the frontend folder
cd Frontend

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```
Note: The frontend application will run locally on http://localhost:5173

## 🌐 API Reference

Send a Message

* Endpoint: POST /chat
* Content-Type: application/json

Request Body:
```
{
  "message": "What is the latest news in AI?",
  "threadId": "unique-session-id"
}
```
Response Body:
```
{
  "message": "Here's the latest in AI..."
}
```
## 🔑 Get API Keys

Groq API Key: Obtain from console.groq.com
Tavily API Key: Obtain from tavily.com
