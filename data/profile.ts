export interface ProfileData {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  headline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  scholar: string;
  stats: {
    publications: string;
    q1Journals: string;
    bestPaper: string;
    degree: string;
    university: string;
  };
  focusAreas: {
    number: string;
    title: string;
    description: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Aritra Das",
  role: "AI Developer & CS Researcher",
  affiliation: "SM Technology • East West University",
  location: "Dhaka, Bangladesh",
  headline: "Building production AI systems & practical automations.",
  bio: "I'm an AI developer at SM Technology and a graduate researcher at East West University, Dhaka. Most of my work involves building production LLM services, automating workflows with n8n, and researching self-supervised computer vision for my MSc in CSE.",
  email: "aritrad768@gmail.com",
  github: "https://github.com/Aritra232",
  linkedin: "https://linkedin.com/in/aritra-das-9a1051225",
  scholar: "https://scholar.google.com/citations?user=WkuhmCUAAAAJ",
  stats: {
    publications: "11+",
    q1Journals: "6",
    bestPaper: "1st",
    degree: "MSc",
    university: "East West Univ.",
  },
  focusAreas: [
    {
      number: "01",
      title: "Self-Supervised Learning",
      description:
        "Training vision backbones with contrastive methods (SimCLR, MoCo) and masked autoencoders to reduce dependence on expensive manual data labeling.",
    },
    {
      number: "02",
      title: "Vision Transformers & GCNs",
      description:
        "Combining CNNs and Vision Transformers with Graph Convolutional Networks (GCN) to capture spatial and relational features in complex image domains.",
    },
    {
      number: "03",
      title: "Production LLMs & n8n Automation",
      description:
        "Building practical RAG pipelines with FastAPI and Pinecone, alongside multi-service workflow automations in n8n connecting Twilio, Brevo, and cloud APIs.",
    },
    {
      number: "04",
      title: "Open Benchmark Datasets",
      description:
        "Curating, annotating, and publishing open scientific datasets (including BDFlower, TFP-BD, and BDMANGO) for reproducible research in Elsevier Q1 journals.",
    },
  ],
};
