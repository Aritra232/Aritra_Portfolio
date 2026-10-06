# 🚀 Aritra Das - AI Researcher & Developer Portfolio

An extraordinary, high-performance portfolio website built for **Aritra Das** (Computer Science Researcher & AI Developer).

---

## ✨ Features & Highlights

- **Aesthetic Cyber-Glass UI**: Deep high-tech dark mode by default with Apple-like frosted light mode toggle.
- **Interactive Neural Particles**: Custom HTML5 Canvas background simulating neural network nodes and graph embeddings with mouse physics.
- **Scholarly Publications Showcase**:
  - Filterable by **All (11)**, **Q1 Journals (6)**, **Conference Papers (5)**, and **Best Paper Award (1)**.
  - Interactive **DOI direct links**.
  - **One-click Citation Copy** with toast feedback.
- **Dynamic Research & Technical Projects**:
  - Filterable by category (Computer Vision & SSL, LLM & GenAI, Full-Stack & Systems).
  - Highlighting key architectures (SimCLR, MoCo, BYOL, LLaMA-2-7B, Pinecone, YOLO).
- **Interactive Experience & Academic Timeline**: Dual-track timeline for professional engineering and education.
- **Direct ATS Resume Download**: Integrated one-click download for `Aritra_Das_CV.pdf`.
- **Contact & Direct Reach-out**: Form with instant mailto handler + one-click copy for email and phone.
- **100% Responsive & SEO Optimized**: Meta tags, OpenGraph previews, and smooth transitions on mobile, tablet, and desktop.

---

## 📁 Project Structure

```
Aritra_Portfolio/
├── index.html                   # Main single-page portfolio
├── vercel.json                  # Vercel deployment configuration & caching headers
├── .gitignore                   # Ignores venv and system files
├── README.md                    # Documentation & deployment guide
├── assets/
│   ├── css/
│   │   └── style.css            # Complete design system & responsive styling
│   ├── js/
│   │   └── main.js              # Canvas animation, filters, counters, theme toggle
│   ├── images/
│   │   └── aritra_pic.jpeg      # Profile portrait photo
│   └── docs/
│       └── Aritra_Das_CV.pdf    # ATS CV document for download
└── documents/                   # Original uploaded files backup
```

---

## 💻 Local Preview (কীভাবে নিজের কম্পিউটারে চালাবেন)

যেকোনো ব্রাউজারে দেখতে পারেন:
1. সরাসরি `index.html` ফাইলটিতে ডাবল ক্লিক করুন।
2. অথবা টার্মিনালে এই কমান্ডটি চালান:
   ```bash
   python -m http.server 3000
   ```
   এরপর ব্রাউজারে প্রবেশ করুন: `http://localhost:3000`

---

## 🌐 Deploy to Vercel (কীভাবে Vercel-এ ফ্রিতে লাইভ করবেন)

আপনার পোর্টফোলিওটি Vercel-এ ডেপ্লয় করার জন্য ২ মিনিটের সহজ ধাপ:

### Method 1: GitHub এর মাধ্যমে (সবচেয়ে সহজ এবং রিকমেন্ডেড)

1. **GitHub Repository তৈরি করুন**:
   - [github.com](https://github.com) এ লগইন করে একটি নতুন রিপোজিটরি তৈরি করুন (যেমন: `aritra-portfolio`)।
   - আপনার কম্পিউটারের টার্মিনালে রান করুন:
     ```bash
     git init
     git add .
     git commit -m "feat: extraordinary AI researcher portfolio"
     git branch -M main
     git remote add origin https://github.com/Aritra232/aritra-portfolio.git
     git push -u origin main
     ```

2. **Vercel-এ ইমপোর্ট করুন**:
   - [vercel.com](https://vercel.com) এ যান এবং আপনার GitHub অ্যাকাউন্ট দিয়ে Sign Up / Log In করুন।
   - **"Add New Project"** এ ক্লিক করে আপনার `aritra-portfolio` রিপোজিটরিটি সিলেক্ট করুন।
   - **Framework Preset**: "Other" থাকবে (কোনো পরিবর্তন করার প্রয়োজন নেই)।
   - **Deploy** বাটনে ক্লিক করুন!

3. **লাইভ লিঙ্ক পান! 🎉**:
   - মাত্র ২০ সেকেন্ডের মধ্যে Vercel আপনাকে একটি ফ্রি পাবলিক লিঙ্ক দিয়ে দেবে (যেমন: `aritra-portfolio.vercel.app`)।
   - এরপর আপনি চাইলে যেকোনো সময় আপনার কাস্টম ডোমেইন (যেমন: `aritradas.com` বা `aritra.ai`) ফ্রিতে যুক্ত করতে পারবেন।

---

## 🛠️ ভবিষ্যতে নতুন পেপার বা প্রজেক্ট যুক্ত করতে চাইলে
- `index.html` ফাইলটি ওপেন করে `<article class="pub-card">` অংশ কপি করে নতুন পাবলিকেশন বা প্রজেক্ট যোগ করে দিতে পারবেন।
