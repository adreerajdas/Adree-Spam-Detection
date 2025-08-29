# Adree Spam Detection

A full-stack web application for detecting spam messages using both traditional machine learning and generative AI (Gemini). The project consists of a Python Flask backend and a Next.js React frontend.

---

## Project Structure

```
Adree-Spam-Detection/
│
├── backend/
│   ├── app.py              # Flask app with ML-based spam detection API
│   ├── model.py            # Flask app with Gemini AI-based spam detection API
│   ├── requirements.txt    # Python dependencies
│   └── SMSSpamCollection   # SMS spam dataset (tab-separated)
│
└── frontend/
    ├── package.json        # Next.js, React, Tailwind, ESLint, etc.
    ├── README.md           # Next.js default readme
    ├── public/             # Static assets (SVGs, presentation, etc.)
    └── src/app/            # Main Next.js app source
```

---

## Backend

### Features

- **app.py**: 
  - Loads SMS spam dataset.
  - Trains a Naive Bayes classifier using scikit-learn.
  - Exposes `/predict` endpoint for spam/ham prediction.
- **model.py**:
  - Uses Google Gemini generative AI for spam detection.
  - Exposes `/predict` endpoint for AI-based classification.

### Requirements

- Python 3.8+
- Flask, Flask-CORS
- pandas, scikit-learn
- google-generativeai
- python-dotenv

Install dependencies:
```bash
pip install -r backend/requirements.txt
```

### Running the Backend

- For ML-based API (port 8000):
  ```bash
  python backend/app.py
  ```
- For Gemini AI-based API (port 7000):
  ```bash
  python backend/model.py
  ```

---

## Frontend

### Features

- Built with Next.js, React, and Tailwind CSS.
- User interface for submitting messages and viewing spam/ham results.
- Connects to backend `/predict` API.

### Requirements

- Node.js 18+
- npm, yarn, or pnpm

Install dependencies:
```bash
cd frontend
npm install
```

### Running the Frontend

```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Dataset

- `backend/SMSSpamCollection`: Tab-separated file with SMS messages labeled as "ham" or "spam".

---

## API Endpoints

- **POST /predict** (both backends)
  - Request: `{ "message": "your message here" }`
  - Response: `{ "message": "...", "result": "Spam" | "Ham" }` (ML) or `"Spam" | "Not Spam"` (Gemini)

---

## Deployment

- Frontend can be deployed on Vercel or any static hosting.
- Backend can be deployed on any Python-compatible server.

---

## Credits

- Dataset: UCI SMS Spam Collection
- ML: scikit-learn Naive Bayes
- AI: Google Gemini API
- Frontend: Next.js, React, Tailwind CSS

---
