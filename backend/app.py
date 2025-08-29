from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split

app = Flask(__name__)
CORS(app)  

# Load dataset
df = pd.read_csv("SMSSpamCollection", sep="\t", header=None, names=["label", "text"])

# Features & Labels
X = df['text']
y = df['label'].map({'ham': 0, 'spam': 1})

# Text to numeric (Bag of Words)
cv = CountVectorizer()
X = cv.fit_transform(X)

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = MultinomialNB()
model.fit(X_train, y_train)

# Predict function
def detect_spam(message):
    data = cv.transform([message]).toarray()
    prediction = model.predict(data)[0]
    return "Spam" if prediction == 1 else "Ham"

# API endpoint
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    message = data.get("message", "")
    if not message:
        return jsonify({"error": "No message provided"}), 400
    
    result = detect_spam(message)
    return jsonify({"message": message, "result": result})

# Run server
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)