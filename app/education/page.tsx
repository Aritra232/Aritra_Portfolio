import { Metadata } from "next";
import { Education } from "@/components/Education";

export const metadata: Metadata = {
  title: "Education — Aritra Das | AI Engineer & Researcher",
  description:
    "Academic credentials and degree timeline across graduate and undergraduate studies at East West University.",
};

export default function EducationPage() {
  return <Education />;
}
