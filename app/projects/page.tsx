import { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects & Systems — Aritra Das",
  description:
    "Production AI backends, medical computer vision pipelines, and deep learning research implementations by Aritra Das.",
};

export default function ProjectsPage() {
  return <Projects />;
}
