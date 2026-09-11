async function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const message = input.value.trim();

    // Don't send empty messages
    if (message === "") {
        return;
    }

    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Show temporary thinking message
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = "Thinking...";

    chatBox.appendChild(botMessage);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        // Send message to Python/Flask backend
        const response = await fetch("http://localhost:5000/api/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        // Check if server returned an error
        if (!response.ok) {
            throw new Error(data.error || "Server returned an error.");
        }

        // Show AI response
        if (data.reply) {

            botMessage.textContent = data.reply;

        } else {

            // Use local response if backend doesn't return a reply
            botMessage.textContent = getLocalReply(message);

        }

    } catch (error) {

        console.error("Chatbot Error:", error);

        // If AI server fails, use original chatbot responses
        botMessage.textContent = getLocalReply(message);

    }

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}


/*
 * Original local chatbot responses
 * These are kept so the original functionality is not lost.
 */

function getLocalReply(userText) {

    const question = userText.toLowerCase();

    if (question.includes("readiness")) {

        return "Your readiness score can improve by learning Docker, AWS and completing deployment projects.";

    }

    else if (question.includes("skill")) {

        return "You should focus on Docker, AWS, Deep Learning and LLM applications.";

    }

    else if (question.includes("project")) {

        return "I recommend AI Resume Screening, AI Interview Assistant and Healthcare Diagnosis AI.";

    }

    else if (question.includes("roadmap")) {

        return "Start with Docker, then AWS, Cloud Deployment, Deep Learning and finally LLM applications.";

    }

    else {

        return "I recommend improving your technical skills, projects and resume to increase placement readiness.";

    }
}