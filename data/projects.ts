export interface Project {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  linkUrl: string;
  linkLabel: string;
  isPrivate?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "bengali-asr",
    category: "SPEECH FOUNDATION MODELS & NLP",
    badge: "EACL RESEARCH • XLSR-53",
    title: "Transliteration-Based Zero-Shot Bengali ASR",
    description:
      "Investigated cross-lingual speech representation transfer by fine-tuning Wav2Vec2 and XLS-R (300M / XLSR-53) speech foundation models on FLEURS data. Evaluated zero-shot transliteration transfer across standard Bengali and regional Chittagonian dialects for EACL submission.",
    tags: ["Wav2Vec2", "XLS-R 300M", "Zero-Shot ASR", "Bengali Dialects", "PyTorch"],
    linkUrl: "https://github.com/Aritra232/Bengali-ASR",
    linkLabel: "GitHub Repository",
    isPrivate: true,
  },
  {
    id: "skin-diseases",
    category: "MEDICAL COMPUTER VISION & LLMS",
    badge: "FASTAPI • PYTORCH • DOCKER",
    title: "Skin Lesion Classifier & Clinical LLM Advisor",
    description:
      "End-to-end dermatological diagnostics pipeline employing fine-tuned EfficientNet deep backbones for multi-class skin lesion detection, integrated with an interactive LLM medical guidance agent served via asynchronous FastAPI and Dockerized for production deployment.",
    tags: ["EfficientNet", "PyTorch", "FastAPI", "Docker", "Medical Vision"],
    linkUrl: "https://github.com/Aritra232/Skin-Diseases",
    linkLabel: "GitHub Repository",
    isPrivate: false,
  },
  {
    id: "google-ai-review",
    category: "LLM BACKEND & ASYNC API",
    badge: "FASTAPI • DEEPSEEK • MONGODB",
    title: "FastAPI Review Intelligence & Personalization Service",
    description:
      "High-throughput asynchronous backend service combining MongoDB and DeepSeek AI (deepseek-chat) to analyze customer service interactions, synthesize customized review outreach messages, and optimize organic feedback engagement.",
    tags: ["FastAPI", "DeepSeek AI", "MongoDB", "AsyncIO", "REST API"],
    linkUrl: "https://github.com/Aritra232/Google_AI_Review",
    linkLabel: "GitHub Repository",
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
    linkUrl: "https://github.com/Aritra232/AI_Diamond",
    linkLabel: "GitHub Repository",
    isPrivate: false,
  },
  {
    id: "bert-kan",
    category: "NLP & LARGE LANGUAGE MODELS",
    badge: "ELSEVIER Q1 • 2025",
    title: "BERT-KAN Bilingual Sentiment Analysis",
    description:
      "Fine-tuned transformer architectures coupled with Kolmogorov-Arnold Networks (KAN) to capture complex non-linear sentiment and emotion nuances in low-resource bilingual Bangladeshi e-commerce reviews. Published in Elsevier Natural Language Processing Journal.",
    tags: ["BERT", "KAN", "LLM Fine-Tuning", "NLP", "PyTorch"],
    linkUrl: "https://doi.org/10.1016/j.nlp.2025.100190",
    linkLabel: "View Publication (DOI)",
    isPrivate: false,
  },
  {
    id: "newsletter-curation",
    category: "CONTENT AUTOMATION & NLP",
    badge: "N8N • BREVO • LLM PIPELINE",
    title: "Multi-Source Newsletter Curation & Dispatch",
    description:
      "Engineered an automated n8n workflow aggregating European SME market news across feeds, translating and summarizing content between German and English using LLMs, formatting an editorial newsletter, and delivering through Brevo.",
    tags: ["n8n Automation", "LLM Translation", "Brevo API", "Content Pipeline"],
    linkUrl: "https://github.com/Aritra232",
    linkLabel: "GitHub Profile",
    isPrivate: false,
  },
];
