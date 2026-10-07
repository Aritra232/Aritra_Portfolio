export interface Project {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: "bert-kan",
    category: "NLP & LARGE LANGUAGE MODELS",
    badge: "ELSEVIER Q1 • 2025",
    title: "BERT-KAN Bilingual Sentiment Analysis",
    description:
      "Fine-tuned transformer architectures coupled with Kolmogorov-Arnold Networks (KAN) to capture complex non-linear sentiment and emotion nuances in low-resource bilingual Bangladeshi e-commerce reviews. Published in Natural Language Processing Journal.",
    tags: ["BERT", "KAN", "LLM Fine-Tuning", "NLP", "PyTorch"],
  },
  {
    id: "prompt-to-video",
    category: "AI PIPELINE AUTOMATION",
    badge: "N8N • GOOGLE DRIVE",
    title: "Automated Prompt-to-Video Pipeline",
    description:
      "Created an automated workflow in n8n that accepts prompt inputs, triggers AI video generation in the background, uploads the rendered video directly into Google Drive, and sends a shareable link back to the user.",
    tags: ["n8n Automation", "Generative Video AI", "Google Drive API", "Cloud Storage"],
  },
  {
    id: "newsletter-curation",
    category: "CONTENT AUTOMATION & NLP",
    badge: "N8N • BREVO",
    title: "Multi-Source Newsletter Curation & Dispatch",
    description:
      "Developed an n8n workflow that aggregates European SME market news across multiple feeds, translates and summarizes content between German and English using LLMs, formats an editorial newsletter, and delivers it through Brevo.",
    tags: ["n8n Automation", "LLM Translation", "Brevo API", "Content Pipeline"],
  },
  {
    id: "rag-ecommerce",
    category: "RAG PIPELINES & LLMS",
    badge: "FASTAPI • PINECONE",
    title: "Conversational E-Commerce RAG Assistant",
    description:
      "A retrieval-augmented chatbot for e-commerce search, using fine-tuned LLaMA-2 with Pinecone for vector indexing. Built to handle bilingual queries (Bangla and English) with context-aware product recommendations.",
    tags: ["LLaMA-2", "Pinecone Vector DB", "RAG", "LangChain", "FastAPI"],
  },
  {
    id: "malware-ssl",
    category: "CYBERSECURITY & SSL",
    badge: "DEEP LEARNING",
    title: "Self-Supervised Malware Classification",
    description:
      "Converted compiled binary executables into image representations to classify malware without extensive labeling. Evaluated self-supervised models including SimCLR, MoCo, and Masked Autoencoders on benchmark binary datasets.",
    tags: ["SimCLR", "MoCo", "BYOL", "MAE", "PyTorch"],
  },
  {
    id: "vision-gcn",
    category: "APPLIED RESEARCH & GCN",
    badge: "GRAPH VISION",
    title: "Hybrid Vision & Graph Neural Backbone",
    description:
      "Combined self-supervised transformer and CNN backbones with Graph Convolutional Networks (GCN) to classify flower growth stages in variable lighting and field conditions. Published in Scientific Reports (Nature, Q1).",
    tags: ["GCN", "Swin Transformer", "Scientific Reports Q1", "PyTorch"],
  },
];
