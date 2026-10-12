import { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & Inquiries — Aritra Das",
  description:
    "Direct contact channels, inquiries, and research collaboration proposals for Aritra Das.",
};

export default function ContactPage() {
  return <Contact />;
}
