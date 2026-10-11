export interface SkillItem {
  name: string;
  badge?: string;
  iconType: string;
  description?: string;
}

export interface SkillDomain {
  id: string;
  number: string;
  title: string;
  tagline: string;
  toolsCount: number;
  skills: SkillItem[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "languages",
    number: "01",
    title: "Core Languages & Foundations",
    tagline: "Primary drivers for algorithm design, statistical modeling & high-throughput pipelines",
    toolsCount: 5,
    skills: [
      { name: "Python", badge: "Daily Driver", iconType: "python" },
      { name: "C++", badge: "Algorithms", iconType: "cpp" },
      { name: "SQL (PostgreSQL)", badge: "Relational", iconType: "sql" },
      { name: "Bash & Linux", badge: "Shell/OS", iconType: "bash" },
      { name: "LaTeX / Overleaf", badge: "Research Docs", iconType: "latex" },
    ],
  },
  {
    id: "deep-learning",
    number: "02",
    title: "Deep Learning & Neural Frameworks",
    tagline: "Custom architecture modeling, loss optimization & production inference",
    toolsCount: 6,
    skills: [
      { name: "PyTorch", badge: "Primary Framework", iconType: "pytorch" },
      { name: "TensorFlow", badge: "Production", iconType: "tensorflow" },
      { name: "Keras", badge: "Rapid Modeling", iconType: "keras" },
      { name: "Hugging Face", badge: "Transformers", iconType: "huggingface" },
      { name: "Scikit-Learn", badge: "Baselines", iconType: "sklearn" },
      { name: "Weights & Biases", badge: "Experiment Tracking", iconType: "wandb" },
    ],
  },
  {
    id: "computer-vision",
    number: "03",
    title: "Computer Vision & Representation Learning",
    tagline: "Self-supervised backbones, spatial attention & graph-guided vision systems",
    toolsCount: 6,
    skills: [
      { name: "OpenCV", badge: "Image Pipeline", iconType: "opencv" },
      { name: "Contrastive SSL", badge: "Representation", iconType: "ssl" },
      { name: "Graph Neural Networks (GCN)", badge: "Relational", iconType: "gcn" },
      { name: "Vision Transformers (ViT / Swin)", badge: "Attention", iconType: "vit" },
      { name: "CBAM & Spatial Attention", badge: "Feature Focus", iconType: "cbam" },
      { name: "YOLO", badge: "Detection", iconType: "yolo" },
    ],
  },
  {
    id: "nlp-llm",
    number: "04",
    title: "NLP, LLMs & Retrieval Architectures",
    tagline: "Bilingual representation, non-linear activation networks & contextual RAG engines",
    toolsCount: 7,
    skills: [
      { name: "BERT", badge: "Language Models", iconType: "bert" },
      { name: "LLMs", badge: "Generative AI", iconType: "llama" },
      { name: "Kolmogorov-Arnold Networks (KAN)", badge: "Q1 Research", iconType: "kan" },
      { name: "LangChain", badge: "Orchestration", iconType: "langchain" },
      { name: "Pinecone Vector DB", badge: "Vector Index", iconType: "pinecone" },
      { name: "FAISS & ChromaDB", badge: "Similarity Search", iconType: "vector" },
      { name: "Prompt Engineering", badge: "Context Control", iconType: "prompt" },
    ],
  },
  {
    id: "infrastructure",
    number: "05",
    title: "AI Infrastructure, MLOps & Tooling",
    tagline: "High-concurrency APIs, distributed training & automated data workflows",
    toolsCount: 5,
    skills: [
      { name: "Docker", badge: "Containers", iconType: "docker" },
      { name: "FastAPI", badge: "Model Serving", iconType: "fastapi" },
      { name: "Git & GitHub CI/CD", badge: "Version Control", iconType: "git" },
      { name: "CUDA & cuDNN", badge: "GPU Acceleration", iconType: "cuda" },
      { name: "n8n Automation", badge: "Workflow Automation", iconType: "n8n" },
    ],
  },
];
