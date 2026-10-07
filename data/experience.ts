export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  timeframe: string;
  bullets: string[];
}

export interface AcademicReference {
  name: string;
  title: string;
  institution: string;
  roleTag: string;
  description: string;
  email: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "sm-technology",
    role: "AI Engineer",
    company: "SM Technology",
    location: "Dhaka, Bangladesh",
    timeframe: "April 2026 – Present",
    bullets: [
      "Build and deploy RAG pipelines and LLM backend services for client projects using FastAPI, LangChain, and vector databases.",
      "Fine-tune open-source models and evaluate vector embeddings for domain-specific retrieval and semantic accuracy.",
      "Work on prompt engineering, chunking strategies, and latency optimization to reduce API costs and improve response quality.",
    ],
  },
  {
    id: "acme-ai",
    role: "Machine Learning Engineer",
    company: "ACME AI",
    location: "Dhaka, Bangladesh",
    timeframe: "June 2024 – September 2024",
    bullets: [
      "Trained and benchmarked computer vision and NLP models for internal and client datasets.",
      "Set up data preprocessing scripts and quality-check pipelines for supervised model training.",
      "Wrote evaluation routines to test model accuracy and inference latency against production baselines.",
    ],
  },
  {
    id: "ewu-ta",
    role: "Teaching Assistant",
    company: "East West University",
    location: "Dhaka, Bangladesh",
    timeframe: "January 2024 – December 2025",
    bullets: [
      "Assisted faculty with undergraduate lab sessions, guided students through assignments, and helped grade coursework in CSE.",
      "Held weekly problem-solving hours helping students with Python programming, data structures, and machine learning fundamentals.",
      "Collaborated with faculty on computer vision and NLP research papers published in peer-reviewed journals.",
    ],
  },
];

export const referencesData: AcademicReference[] = [
  {
    name: "Dr. Mohammad Rifat Ahmmad Rashid",
    title: "Associate Professor, Department of CSE",
    institution: "East West University",
    roleTag: "ACADEMIC SUPERVISOR",
    description:
      "Research supervisor for MSc thesis and co-author on several Q1 journal papers in computer vision and natural language processing.",
    email: "rifat.rashid@ewubd.edu",
  },
  {
    name: "Dr. Maheen Islam",
    title: "Chairperson & Associate Professor, Department of CSE",
    institution: "East West University",
    roleTag: "DEPARTMENT CHAIR",
    description: "Chairperson of the Department of Computer Science & Engineering at East West University.",
    email: "maheen@ewubd.edu",
  },
];
