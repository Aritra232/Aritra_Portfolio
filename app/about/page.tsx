import { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About — Aritra Das | AI Engineer & Researcher",
  description:
    "Core focus and research background of Aritra Das — AI Engineer at SM Technology and Researcher at East West University.",
};

export default function AboutPage() {
  return <About />;
}
