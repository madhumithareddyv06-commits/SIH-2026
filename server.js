const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI client
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "AI Career Assistant Backend is running!"
    });
});

// Chatbot route
app.post("/api/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            instructions: `
You are an AI Career Assistant.

Give clear, professional and practical
career guidance to the user.

Keep your answers easy to understand.
`,
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("AI ERROR:", error);

        res.status(500).json({
            error: "Something went wrong while communicating with the AI."
        });
    }
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});