# 🚀 Aritra Das — Personal Portfolio (Next.js & TypeScript)

Modern, high-performance personal portfolio website for **Aritra Das** (AI Developer & Computer Science Researcher). Built with **Next.js 14 (App Router)**, **TypeScript**, and modular component architecture inspired by clean editorial design.

---

## ✨ Features & Architecture

- **Clean Next.js 14 App Router + TypeScript**: Fully typed data models and modular components.
- **Data-Driven Architecture**: All data (publications, projects, education, experience) is separated into clean TypeScript files inside `data/`. Adding a new publication or project takes only a few lines without touching UI code!
- **Editorial Design System**: Warm stone paper aesthetic, Fraunces serif headings, JetBrains Mono accents, and toggleable dark mode.
- **Dynamic Publication Filtering**: Instant filtering across **All (11)**, **Q1 Journals (6)**, **Conference Papers (5)**, and **Best Paper Award (1)** using React state.
- **Interactive Features**: One-click citation copying, direct email copy, and a lightweight direct note composer.
- **Vercel Optimized**: Native Next.js build with edge caching, SEO metadata, and open-graph tags.

---

## 📁 Project Structure

```
Aritra_Portfolio/
├── app/
│   ├── layout.tsx              # Root HTML layout, SEO metadata & Google Fonts
│   ├── page.tsx                # Main single-page application orchestrator
│   └── globals.css             # Editorial design tokens & responsive CSS
├── components/
│   ├── Navbar.tsx              # Navigation bar with theme toggle & mobile menu
│   ├── Hero.tsx                # Hero section with stats and portrait card
│   ├── About.tsx               # Focus areas (Computer Vision, SSL, LLMs, Datasets)
│   ├── Education.tsx           # Academic background (MSc, B.Sc., HSC, SSC)
│   ├── Publications.tsx        # Scholarly works with interactive filter tabs
│   ├── PublicationCard.tsx     # Publication card with DOI and copy citation
│   ├── Projects.tsx            # Selected work showcase (n8n workflows & AI systems)
│   ├── ProjectCard.tsx         # Clean project card with tech tag pills
│   ├── Experience.tsx          # Professional trajectory & teaching appointments
│   ├── Recognition.tsx         # Best Paper Award & Academic References
│   ├── Contact.tsx             # Direct contact channels & note sender
│   ├── Footer.tsx              # Minimalist footer
│   └── Toast.tsx               # Notification toast component
├── data/
│   ├── profile.ts              # Bio, stats, social links, and focus areas
│   ├── education.ts            # Academic degrees, grades, and descriptions
│   ├── publications.ts         # 11 peer-reviewed publications with DOIs
│   ├── projects.ts             # 6 featured engineering & research projects
│   └── experience.ts           # Career roles and academic supervisors
├── public/
│   ├── images/
│   │   └── aritra_pic.jpeg     # Profile portrait photo
│   └── docs/
│       └── Aritra_Das_CV.pdf   # ATS CV document for download
├── legacy_static/              # Archived static HTML version
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

---

## 💻 Local Development (লোকাল কম্পিউটারে রান করার নিয়ম)

1. ডিপেন্ডেন্সি ইন্সটল করুন (যদি না করা থাকে):
   ```bash
   npm install
   ```

2. ডেভেলপমেন্ট সার্ভার চালু করুন:
   ```bash
   npm run dev
   ```

3. ব্রাউজারে ওপেন করুন: [http://localhost:3000](http://localhost:3000)

4. প্রোডাকশন বিল্ড টেস্ট করতে:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel (কীভাবে Vercel-এ ফ্রিতে লাইভ করবেন)

1. **গিটহাবে পুশ করুন**:
   ```bash
   git add .
   git commit -m "feat: migrate to Next.js with modular components"
   git push origin main
   ```

2. **Vercel-এ ইমপোর্ট করুন**:
   - [vercel.com](https://vercel.com) এ লগইন করুন।
   - **"Add New Project"** এ ক্লিক করে আপনার GitHub রিপোজিটরিটি (`Aritra_Portfolio`) সিলেক্ট করুন।
   - Vercel স্বয়ংক্রিয়ভাবে ফ্রেমওয়ার্ক হিসেবে **Next.js** ডিটেক্ট করবে।
   - **Deploy** বাটনে ক্লিক করুন!

---

## ✍️ ভবিষ্যতে নতুন পেপার বা প্রজেক্ট যোগ করার নিয়ম

- **নতুন পাবলিকেশন যোগ করতে:** শুধু `data/publications.ts` ফাইলে একটি নতুন অবজেক্ট যোগ করুন:
  ```typescript
  {
    id: "new-paper-2026",
    title: "Your Paper Title",
    authors: "A. Das et al.",
    venue: "Nature / Elsevier Journal Name",
    year: "2026",
    category: "q1", // 'q1' | 'conference' | 'award'
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/...",
    citation: "Full citation string...",
  }
  ```
- **নতুন প্রজেক্ট যোগ করতে:** শুধু `data/projects.ts` ফাইলে অবজেক্ট যোগ করুন।
- পুরো UI নিজে থেকেই রেন্ডার করে নেবে!
