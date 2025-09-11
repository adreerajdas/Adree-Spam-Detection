
#Adree Spam Detection

A full-stack web app for detecting spam messages using **Naive Bayes (ML)** and **Google Gemini (AI)**.  
**Backend:** Flask (Python) | **Frontend:** Next.js + Tailwind CSS  

---

## 📂 Project Structure

```

Adree-Spam-Detection/
├── backend/    # Flask APIs (ML & Gemini)
└── frontend/   # Next.js + Tailwind app


## ⚙️ Backend

- **app.py** → ML spam detector (Naive Bayes, port **8000**)  
- **model.py** → Gemini AI spam detector (port **7000**)  

**Run Backend:**

pip install -r backend/requirements.txt
python backend/app.py      # ML
python backend/model.py    # AI (needs GOOGLE_API_KEY in backend/.env)

---

## 🎨 Frontend

* Next.js + Tailwind UI for spam/ham detection
* Connects to backend `/predict` API

**Run Frontend:**

cd frontend
npm install
npm run dev
```

👉 Live App: [Adree Spam Detection](https://adreespamdetection.netlify.app/)

---

## 📊 Dataset

* `backend/SMSSpamCollection` → UCI SMS Spam dataset (ham/spam labels)

---

## 📡 API

### **POST /predict**

Request

{ "message": "your text" }

Response (ML):
{ "result": "Spam" | "Ham" }

Response (AI):
{ "result": "Spam" | "Not Spam" }

---

## ☁️ Deployment

* **Frontend** → Vercel / Netlify
* **Backend** → Render / Railway / Heroku (Procfile + Gunicorn)

---

## 🙌 Credits

* Dataset: [UCI SMS Spam Collection](https://archive.ics.uci.edu/ml/datasets/sms+spam+collection)
* ML: scikit-learn Naive Bayes
* AI: Google Gemini API
* Frontend: Next.js, React, Tailwind CSS

```

This version is:  
✅ Clean  
✅ Easy to read  
✅ Professional  
