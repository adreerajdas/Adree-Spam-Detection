from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os

# Flask setup
app = Flask(__name__)
CORS(app)

# Configure Gemini API (better to load from env variable instead of hardcoding)
genai.configure(api_key="AIzaSyBOMQTHWDimdh9jwI1I-JwWJoFRnRLUSJ4")

# Spam detection function
def detect_spam(text: str) -> str:
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"Classify the following message as Spam or Not Spam:\n\n{text}"
    response = model.generate_content(prompt)
    return response.text.strip()

# API route
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    message = data.get("message", "")

    # Run detection
    result = detect_spam(message)

    return jsonify({"message": message, "result": result})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=7000, debug=True)
