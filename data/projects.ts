export interface Project {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  linkUrl?: string;
  linkLabel?: string;
  filterCategory: "production" | "vision" | "nlp" | "automation";
  isPrivate?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "r-raoclinical",
    category: "CAREER AI & VECTOR MATCHING",
    badge: "FASTAPI • QDRANT • MONGODB",
    title: "Skill & Clinical Career AI Intelligence Platform",
    description:
      "Production-grade semantic talent matching platform using FastAPI, Qdrant Vector DB, and BAAI/bge-base-en-v1.5 embeddings. Features automated PDF/DOCX resume parsing, skill-gap analysis, mentor recommendation, clarity scoring via APScheduler, and Dockerized deployment.",
    tags: ["FastAPI", "Qdrant Vector DB", "MongoDB", "LangChain", "Docker"],
    filterCategory: "production",
    isPrivate: true,
  },
  {
    id: "skin-diseases",
    category: "MEDICAL COMPUTER VISION & LLMS",
    badge: "FASTAPI • PYTORCH • DOCKER",
    title: "Skin Disease Detection & Clinical LLM Advisor",
    description:
      "AI-powered dermatological diagnostics system detecting multi-class skin lesions with fine-tuned EfficientNet backbones (PyTorch), integrated with an interactive LLM clinical guidance advisor served via asynchronous FastAPI and Streamlit, fully containerized with Docker.",
    tags: ["EfficientNet", "PyTorch", "FastAPI", "Docker", "Streamlit"],
    filterCategory: "vision",
    isPrivate: false,
  },
  {
    id: "social-safety",
    category: "MULTIMODAL SAFETY & CONTENT MODERATION",
    badge: "GEMINI AI • FASTAPI • OPENCV",
    title: "Child Safety Multimodal Content Moderator",
    description:
      "Automated multimodal moderation service analyzing text, images, and video keyframes for child safety and toxicity compliance using Google's Gemini AI. Features PII blocking, automated quota management, rate-limit retry logic, and local toxicity detection fallback.",
    tags: ["Gemini AI", "FastAPI", "Computer Vision", "Content Moderation", "NLP"],
    filterCategory: "vision",
    isPrivate: false,
  },
  {
    id: "food-ai",
    category: "CONVERSATIONAL COMMERCE & LLMS",
    badge: "FASTAPI • MONGODB • CLAUDE",
    title: "Food AI: Conversational Ordering Assistant",
    description:
      "Personalized conversational food-ordering engine backed by MongoDB as the source of truth for restaurant menus, variations, user preferences, and cart sessions. Uses LLM intent extraction to parse natural-language orders without hallucinating catalog items.",
    tags: ["FastAPI", "MongoDB", "Streamlit", "Claude LLM", "Intent Extraction"],
    filterCategory: "nlp",
    isPrivate: false,
  },
  {
    id: "ai-diamond",
    category: "AI PIPELINE AUTOMATION & VIDEO",
    badge: "GEMINI VEO • AWS S3 • FASTAPI",
    title: "Diamond Motion Generative Video Pipeline",
    description:
      "Automated text-to-video and image-to-video generative pipeline orchestrating Gemini and Veo video foundation models. Manages asynchronous rendering tasks and persists rendered high-resolution media assets directly to AWS S3 storage buckets.",
    tags: ["Gemini / Veo", "Generative Video AI", "AWS S3", "FastAPI", "Automation"],
    filterCategory: "automation",
    isPrivate: false,
  },
  {
    id: "bert-kan",
    category: "NLP & LARGE LANGUAGE MODELS (CV)",
    badge: "ELSEVIER Q1 • 2025",
    title: "BERT-KAN Bilingual Sentiment Analysis",
    description:
      "Fine-tuned transformer architectures coupled with Kolmogorov-Arnold Networks (KAN) to capture complex non-linear sentiment and emotion nuances in low-resource bilingual Bangladeshi e-commerce reviews. Published in Elsevier Natural Language Processing Journal.",
    tags: ["BERT", "KAN", "LLM Fine-Tuning", "NLP", "PyTorch"],
    linkUrl: "https://doi.org/10.1016/j.nlp.2025.100190",
    linkLabel: "View Publication (DOI)",
    filterCategory: "nlp",
    isPrivate: false,
  },
  {
    id: "newsletter-curation",
    category: "CONTENT AUTOMATION & NLP (CV)",
    badge: "N8N • BREVO • LLM PIPELINE",
    title: "Multi-Source Newsletter Curation & Dispatch",
    description:
      "Engineered an automated n8n workflow aggregating European SME market news across feeds, translating and summarizing content between German and English using LLMs, formatting an editorial newsletter, and delivering through Brevo.",
    tags: ["n8n Automation", "LLM Translation", "Brevo API", "Content Pipeline"],
    filterCategory: "automation",
    isPrivate: false,
  },
  {
    id: "rag-ecommerce",
    category: "RAG PIPELINES & LLMS (CV)",
    badge: "FASTAPI • PINECONE",
    title: "Conversational E-Commerce RAG Assistant",
    description:
      "A retrieval-augmented chatbot for e-commerce search, using fine-tuned LLaMA-2 with Pinecone for vector indexing. Built to handle bilingual queries (Bangla and English) with context-aware product recommendations.",
    tags: ["LLaMA-2", "Pinecone Vector DB", "RAG", "LangChain", "FastAPI"],
    filterCategory: "production",
    isPrivate: false,
  },
  {
    id: "vision-gcn",
    category: "APPLIED RESEARCH & GCN (CV)",
    badge: "NATURE SCIENTIFIC REPORTS • Q1",
    title: "Hybrid Vision & Graph Neural Backbone",
    description:
      "Combined self-supervised transformer and CNN backbones with Graph Convolutional Networks (GCN) to classify flower growth stages in variable lighting and field conditions. Published in Scientific Reports (Nature, Q1).",
    tags: ["GCN", "Swin Transformer", "Scientific Reports Q1", "PyTorch"],
    linkUrl: "https://doi.org/10.1038/s41598-026-56866-y",
    linkLabel: "View Publication (DOI)",
    filterCategory: "vision",
    isPrivate: false,
  },
];
