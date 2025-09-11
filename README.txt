<h1 align="center">📧 Adree Spam Detection</h1>
<h3 align="center">A Full-Stack Web App for Detecting Spam Messages using ML & AI</h3>

<p align="center">
  <img src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/7d484dc9-68a9-4ee6-a767-aea59035c12d" width="100%" alt="banner"/>
</p>

---

## 🚀 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"/>
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>
</p>

---

## 📂 Project Structure

```

Adree-Spam-Detection/
├── backend/    # Flask APIs (ML & Gemini)
└── frontend/   # Next.js + Tailwind app

````

---

## ⚙️ Backend

- **app.py** → ML spam detector (Naive Bayes, port **8000**)  
- **model.py** → Gemini AI spam detector (port **7000**)  

**Run Backend:**
```bash
pip install -r backend/requirements.txt
python backend/app.py      # ML
python backend/model.py    # AI (needs GOOGLE_API_KEY in backend/.env)
````

---

## 🎨 Frontend

* Next.js + Tailwind UI for spam/ham detection
* Connects to backend `/predict` API

**Run Frontend:**

```bash
cd frontend
npm install
npm run dev
```

👉 Visit Live App: [Adree Spam Detection](https://adreespamdetection.netlify.app/)

---

## 📊 Dataset

* `backend/SMSSpamCollection` → UCI SMS Spam dataset (ham/spam labels)

---

## 📡 API Endpoints

### **POST /predict**

**Request:**

```json
{ "message": "your text" }
```

**Response (ML):**

```json
{ "result": "Spam" | "Ham" }
```

**Response (AI):**

```json
{ "result": "Spam" | "Not Spam" }
```

---

## ☁️ Deployment

* **Frontend** → Vercel / Netlify
* **Backend** → Render / Railway / Heroku (Procfile + Gunicorn)

---

## 👏 Credits

* 📊 Dataset: [UCI SMS Spam Collection](https://archive.ics.uci.edu/ml/datasets/sms+spam+collection)
* 🤖 ML: scikit-learn Naive Bayes
* 🧠 AI: Google Gemini API
* 🎨 Frontend: Next.js, React, Tailwind CSS

---

## 📈 Repo Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=adreerajdas&repo=Adree-Spam-Detection&theme=radical" />
</p>
```

✅ Fixes I made:

* Corrected **Next.js badge logo** (`nextdotjs` not `next.js`).
* Removed extra quotes in repo stats image.
* Fixed spacing & section breaks so GitHub markdown renders properly.

---
