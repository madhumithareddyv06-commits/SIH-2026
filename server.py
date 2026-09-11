import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

app = Flask(__name__)
CORS(app)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "AI Career Assistant Backend is running!"
    })


@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        message = data.get("message")

        if not message:
            return jsonify({
                "error": "Message is required"
            }), 400

        response = client.responses.create(
            model="gpt-5.6-luna",
            instructions="""
You are an AI Career Assistant.

Give clear, professional and practical
career guidance to the user.

Keep your answers easy to understand.
""",
            input=message
        )

        return jsonify({
            "reply": response.output_text
        })

    except Exception as error:
        print("AI ERROR:", error)

        return jsonify({
            "error": str(error)
        }), 500


if __name__ == "__main__":
    print("Backend running at http://localhost:5000")
    app.run(port=5000, debug=True)