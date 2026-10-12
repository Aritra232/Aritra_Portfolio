import { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills & Technical Stack — Aritra Das",
  description:
    "Technical arsenal, deep learning frameworks, engineering tools, and system architectures mastered by Aritra Das.",
};

export default function SkillsPage() {
  return <Skills />;
}
