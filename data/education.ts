export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  timeframe: string;
  grade: string;
  isGold?: boolean;
}

export const educationData: EducationItem[] = [
  {
    id: "msc",
    degree: "MSc in Computer Science & Engineering",
    institution: "East West University, Dhaka, Bangladesh",
    timeframe: "January 2025 – Present",
    grade: "CGPA: 3.91 / 4.00",
    isGold: true,
  },
  {
    id: "bsc",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "East West University, Dhaka, Bangladesh",
    timeframe: "January 2020 – December 2024",
    grade: "CGPA: 3.76 / 4.00",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dhaka College, Dhaka, Bangladesh",
    timeframe: "June 2017 – July 2019",
    grade: "GPA: 4.58 / 5.00",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College, Motijheel, Dhaka",
    timeframe: "January 2007 – May 2017",
    grade: "GPA: 5.00 / 5.00 (Golden)",
    isGold: true,
  },
];
