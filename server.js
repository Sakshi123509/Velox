import express from 'express';
import { generate } from './chatbot.js';
import cors from 'cors';


const app = express()
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to chatGPT!')
})

app.post('/chat', async (req, res) => {
    const { message, threadId } = req.body;

    if (!message || !threadId) {
        res.json({ message: 'All fields required' });
        return;
    }

    console.log('message: ', message);

    const result = await generate(message, threadId);
    res.json({ Message: result })

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})