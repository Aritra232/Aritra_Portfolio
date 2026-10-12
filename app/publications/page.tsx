import { Metadata } from "next";
import { Publications } from "@/components/Publications";

export const metadata: Metadata = {
  title: "Publications — Aritra Das | Scholarly Research",
  description:
    "11 peer-reviewed research papers by Aritra Das across Elsevier and Nature Q1 journals, IEEE conferences, and Best Paper Award at AII 2025.",
};

export default function PublicationsPage() {
  return <Publications />;
}
