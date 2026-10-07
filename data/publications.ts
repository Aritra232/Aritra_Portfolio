export interface PublicationMetric {
  label: string;
  value: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  category: "q1" | "conference" | "award";
  badgeType: "q1" | "conference" | "award";
  badgeLabel: string;
  doi?: string;
  citation: string;
  isAward?: boolean;
  highlight?: string;
  metrics?: PublicationMetric[];
}

export const publicationsData: Publication[] = [
  {
    id: "bdflower-2026",
    title: "BDFlower: Growth stage flower image dataset for precision agriculture and floriculture",
    authors: "A. Das, M. R. A. Rashid, M. R. Hasan, K. Shams, and R. U. Islam",
    venue: "Data in Brief (Elsevier), Vol. 66, p. 112745",
    year: "2026",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1016/j.dib.2026.112745",
    highlight: "Comprehensive multi-stage floral image benchmark curated across diverse illumination and greenhouse settings for precision floriculture.",
    metrics: [
      { label: "Dataset Scale", value: "5,000+ Images" },
      { label: "Domain", value: "Precision Agriculture" },
      { label: "Publisher", value: "Elsevier (Q1)" },
    ],
    citation: "A. Das, M. R. A. Rashid, M. R. Hasan, K. Shams, and R. U. Islam, 'BDFlower: Growth stage flower image dataset for precision agriculture and floriculture,' Data in Brief, vol. 66, p. 112745, 2026. doi: 10.1016/j.dib.2026.112745.",
  },
  {
    id: "scientific-reports-gcn",
    title: "Benchmarking hybrid CNN and transformer backbones with graph convolution networks (GCN) for flower growth-stage classification",
    authors: "A. Das, K. Shams, M. R. A. Rashid, R. U. Islam, S. H. Ripon, and A. W. Reza",
    venue: "Scientific Reports (Nature), Vol. 16, Art. 56866",
    year: "Nature • June 2026",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1038/s41598-026-56866-y",
    highlight: "Evaluated deep vision backbones combined with Graph Convolutional Networks (GCN) to capture spatial and relational features under variable field conditions.",
    metrics: [
      { label: "Architecture", value: "Swin ViT + GCN" },
      { label: "Benchmarking", value: "CNN vs ViT vs Graph" },
      { label: "Journal Impact", value: "Nature Scientific Reports (Q1)" },
    ],
    citation: "A. Das, K. Shams, M. R. A. Rashid, R. U. Islam, S. H. Ripon, and A. W. Reza, 'Benchmarking hybrid CNN and transformer backbones with graph convolution networks (GCN) for flower growth-stage classification,' Scientific Reports, vol. 16, art. 56866, June 2026. doi: 10.1038/s41598-026-56866-y.",
  },
  {
    id: "bert-kan-2025",
    title: "BERT-KAN: Enhancing bilingual sentiment analysis in Bangladeshi e-commerce through fine-tuned large language models",
    authors: "M. R. A. Rashid, A. Das, K. F. Hasan, M. R. Hasan, M. Sultana, M. Hasan, R. U. Islam, R. A. Tuhin, and M. S. H. Khan",
    venue: "Natural Language Processing Journal (Elsevier), Vol. 13, p. 100190",
    year: "2025",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1016/j.nlp.2025.100190",
    highlight: "Integrated transformer encoders with Kolmogorov-Arnold Networks (KAN) replacing standard MLPs for improved non-linear emotion boundary modeling in low-resource bilingual reviews.",
    metrics: [
      { label: "Methodology", value: "BERT + KAN" },
      { label: "Language", value: "Bilingual Bangla-English" },
      { label: "Publisher", value: "Elsevier NLP Journal (Q1)" },
    ],
    citation: "M. R. A. Rashid, A. Das, K. F. Hasan, M. R. Hasan, M. Sultana, M. Hasan, R. U. Islam, R. A. Tuhin, and M. S. H. Khan, 'BERT-KAN: Enhancing bilingual sentiment analysis in Bangladeshi e-commerce through fine-tuned large language models,' Natural Language Processing Journal, vol. 13, p. 100190, 2025. doi: 10.1016/j.nlp.2025.100190.",
  },
  {
    id: "codemix-emotion-aii",
    title: "CodeMixEcom-Emotion: A large-scale Bangla-English review corpus and transformer-based benchmark for fine-grained emotion detection",
    authors: "A. Das, M. R. A. Rashid, K. F. Hasan, M. R. Hasan, and R. U. Islam",
    venue: "5th Int. Conf. on Applied Intelligence and Informatics (AII 2025), Washington D.C., USA",
    year: "AII 2025 • USA",
    category: "award",
    badgeType: "award",
    badgeLabel: "★ Best Paper Award",
    highlight: "Awarded Best Paper for constructing a fine-grained 7-class emotion corpus of bilingual consumer text and benchmarking transformer representations.",
    metrics: [
      { label: "Honor", value: "Best Paper Award" },
      { label: "Task", value: "7-Class Emotion AI" },
      { label: "Location", value: "Washington D.C., USA" },
    ],
    citation: "A. Das et al., 'CodeMixEcom-Emotion: A large-scale Bangla-English review corpus and transformer-based benchmark for fine-grained emotion detection,' in Proc. 5th Int. Conf. on Applied Intelligence and Informatics (AII), Washington, D.C., USA, 2025. (Best Paper Award).",
    isAward: true,
  },
  {
    id: "tfp-bd-2025",
    title: "TFP-BD: An image dataset for traffic flow and pedestrian movement analysis on Bangladeshi urban roads",
    authors: "M. M. Islam, A. Das, K. Shams, M. R. Hasan, K. F. Hasan, M. R. Rashid, A. Chowdhury, M. S. Ali, M. Islam, M. Shahjalal, and S. Masum",
    venue: "Data in Brief (Elsevier), Vol. 59, p. 111398",
    year: "2025",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1016/j.dib.2025.111398",
    highlight: "Real-world traffic flow and pedestrian movement dataset annotated under dense South Asian urban roadway conditions.",
    metrics: [
      { label: "Domain", value: "Intelligent Transportation" },
      { label: "Modality", value: "High-Res Urban Imagery" },
      { label: "Publisher", value: "Elsevier (Q1)" },
    ],
    citation: "M. M. Islam, A. Das, K. Shams, M. R. Hasan, K. F. Hasan, M. R. Rashid, A. Chowdhury, M. S. Ali, M. Islam, M. Shahjalal, and S. Masum, 'TFP-BD: An image dataset for traffic flow and pedestrian movement analysis on Bangladeshi urban roads,' Data in Brief, vol. 59, p. 111398, 2025. doi: 10.1016/j.dib.2025.111398.",
  },
  {
    id: "bd-sentiment-2024",
    title: "A comprehensive dataset for sentiment and emotion classification from Bangladesh e-commerce reviews",
    authors: "M. R. A. Rashid, K. F. Hasan, M. R. Hasan, A. Das, M. Sultana, and M. Hasan",
    venue: "Data in Brief (Elsevier), Vol. 53, p. 110052",
    year: "2024",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1016/j.dib.2024.110052",
    highlight: "A peer-reviewed benchmark corpus containing thousands of multi-aspect consumer feedback entries annotated for sentiment polarity and emotional charge.",
    metrics: [
      { label: "Dataset Scale", value: "15,000+ Reviews" },
      { label: "Annotations", value: "Sentiment & Emotion" },
      { label: "Publisher", value: "Elsevier (Q1)" },
    ],
    citation: "M. R. A. Rashid, K. F. Hasan, M. R. Hasan, A. Das, M. Sultana, and M. Hasan, 'A comprehensive dataset for sentiment and emotion classification from Bangladesh e-commerce reviews,' Data in Brief, vol. 53, p. 110052, 2024. doi: 10.1016/j.dib.2024.110052.",
  },
  {
    id: "bd-mango-2025",
    title: "BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves",
    authors: "M. M. Islam, M. J. Ahmed, M. B. Shafi, A. Das, M. R. Hasan, A. A. Rafi, M. R. Rashid, N. T. Niloy, M. S. Ali, A. Chowdhury, and A. A. Rasel",
    venue: "Data in Brief (Elsevier), Vol. 58, p. 111241",
    year: "2025",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1016/j.dib.2024.111241",
    highlight: "Botanical image dataset for agricultural variety identification and disease classification based on subtle foliar morphology.",
    metrics: [
      { label: "Task", value: "Botanical Classification" },
      { label: "Samples", value: "Multi-Cultivar Leaves" },
      { label: "Publisher", value: "Elsevier (Q1)" },
    ],
    citation: "M. M. Islam, M. J. Ahmed, M. B. Shafi, A. Das, M. R. Hasan, A. A. Rafi, M. R. Rashid, N. T. Niloy, M. S. Ali, A. Chowdhury, and A. A. Rasel, 'BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves,' Data in Brief, vol. 58, p. 111241, 2025. doi: 10.1016/j.dib.2024.111241.",
  },
  {
    id: "mango-varieties-discover",
    title: "Classification of mango varieties using leaf imagery: A deep learning-based approach",
    authors: "M. M. Islam, A. Das, M. R. Hasan, K. Shams, M. J. Ahmed, and R. U. Islam",
    venue: "Discover Applied Sciences (Springer Nature), Vol. 7, p. 284",
    year: "Springer Nature • 2025",
    category: "q1",
    badgeType: "q1",
    badgeLabel: "Q1 Journal",
    doi: "https://doi.org/10.1007/s42452-025-06830-6",
    highlight: "Applied transfer learning and convolutional feature extractors for high-precision botanical leaf cultivar classification.",
    metrics: [
      { label: "Architecture", value: "Deep CNNs + Attention" },
      { label: "Accuracy", value: "97.8% Top-1" },
      { label: "Journal", value: "Springer Nature (Q1)" },
    ],
    citation: "M. M. Islam, A. Das, M. R. Hasan, K. Shams, M. J. Ahmed, and R. U. Islam, 'Classification of mango varieties using leaf imagery: A deep learning-based approach,' Discover Applied Sciences, vol. 7, p. 284, 2025. doi: 10.1007/s42452-025-06830-6.",
  },
  {
    id: "bangla-ecommerce-iccit",
    title: "Bangla e-commerce customer review sentiment analysis using transformer-based models",
    authors: "M. R. A. Rashid, A. Das, K. F. Hasan, and M. R. Hasan",
    venue: "26th Int. Conf. on Computer and Information Technology (ICCIT 2023), IEEE",
    year: "ICCIT 2023 • IEEE",
    category: "conference",
    badgeType: "conference",
    badgeLabel: "IEEE Conference",
    doi: "https://doi.org/10.1109/ICCIT60459.2023.10441400",
    citation: "M. R. A. Rashid, A. Das, K. F. Hasan, and M. R. Hasan, 'Bangla e-commerce customer review sentiment analysis using transformer-based models,' in Proc. 26th Int. Conf. on Computer and Information Technology (ICCIT), IEEE, 2023. doi: 10.1109/ICCIT60459.2023.10441400.",
  },
  {
    id: "pedestrian-detection-tensa",
    title: "Pedestrian and vehicle detection in urban road environments using deep neural networks",
    authors: "K. Shams, A. Das, M. M. Islam, and R. U. Islam",
    venue: "IEEE Region 10 Symposium (TENSYMP 2024), Delhi, India",
    year: "TENSYMP 2024 • IEEE",
    category: "conference",
    badgeType: "conference",
    badgeLabel: "IEEE Conference",
    doi: "https://doi.org/10.1109/TENSYMP60946.2024.10591230",
    citation: "K. Shams, A. Das, M. M. Islam, and R. U. Islam, 'Pedestrian and vehicle detection in urban road environments using deep neural networks,' in Proc. IEEE Region 10 Symposium (TENSYMP), Delhi, India, 2024. doi: 10.1109/TENSYMP60946.2024.10591230.",
  },
  {
    id: "cyberbullying-iccit",
    title: "Deep learning based cyberbullying detection in social media comments",
    authors: "A. Das, M. R. Hasan, and K. Shams",
    venue: "27th Int. Conf. on Computer and Information Technology (ICCIT 2024), IEEE",
    year: "ICCIT 2024 • IEEE",
    category: "conference",
    badgeType: "conference",
    badgeLabel: "IEEE Conference",
    doi: "https://doi.org/10.1109/ICCIT64611.2024.11021850",
    citation: "A. Das, M. R. Hasan, and K. Shams, 'Deep learning based cyberbullying detection in social media comments,' in Proc. 27th Int. Conf. on Computer and Information Technology (ICCIT), IEEE, 2024. doi: 10.1109/ICCIT64611.2024.11021850.",
  },
];
