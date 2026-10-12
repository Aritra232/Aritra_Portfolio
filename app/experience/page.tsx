import { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { Recognition } from "@/components/Recognition";

export const metadata: Metadata = {
  title: "Experience & Recognition — Aritra Das",
  description:
    "Professional trajectory, engineering appointments, undergraduate laboratory instruction, and scholarly honors of Aritra Das.",
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <Recognition />
    </>
  );
}
