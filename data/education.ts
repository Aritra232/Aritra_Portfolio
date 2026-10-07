export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeframe: string;
  grade: string;
  isGold?: boolean;
  description: string;
  pills: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "msc",
    degree: "MSc in Computer Science & Engineering",
    institution: "East West University, Dhaka, Bangladesh",
    timeframe: "January 2025 – Present",
    grade: "CGPA: 3.91 / 4.00",
    isGold: true,
    description:
      "Graduate coursework and thesis research focused on self-supervised vision models and Graph Convolutional Networks under Dr. Mohammad Rifat Ahmmad Rashid, with several Q1 journal papers published during this tenure.",
    pills: ["Self-Supervised Learning", "Graph Neural Networks", "Vision Transformers", "Q1 Publications"],
  },
  {
    id: "bsc",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "East West University, Dhaka, Bangladesh",
    timeframe: "January 2020 – December 2024",
    grade: "CGPA: 3.76 / 4.00",
    description:
      "Completed undergraduate studies in computer science covering algorithms, systems, machine learning, and computer vision. Developed a bilingual AI e-commerce assistant as my capstone project.",
    pills: ["Data Structures & Algo", "Computer Vision", "NLP & LLMs", "Capstone Project"],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka, Bangladesh",
    timeframe: "June 2017 – July 2019",
    grade: "GPA: 4.58 / 5.00",
    description:
      "Completed Higher Secondary Certificate in the Science group with coursework in Higher Mathematics, Physics, Chemistry, and Information Technology.",
    pills: ["Science Group", "Higher Mathematics", "Physics"],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College, Motijheel, Dhaka",
    timeframe: "January 2007 – May 2017",
    grade: "GPA: 5.00 / 5.00 (Golden)",
    isGold: true,
    description:
      "Completed Secondary School Certificate in the Science group with a GPA of 5.00 (Golden) from Ideal School and College, Motijheel.",
    pills: ["Science Group", "Golden GPA 5.00", "Ideal School Motijheel"],
  },
];
