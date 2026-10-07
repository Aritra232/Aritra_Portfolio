import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aritra-portfolio.vercel.app"),
  title: "Aritra Das — AI Developer & Computer Science Researcher",
  description:
    "Aritra Das — AI Developer at SM Technology & Computer Science Researcher. Working on production LLMs, n8n automations, and self-supervised computer vision.",
  authors: [{ name: "Aritra Das" }],
  openGraph: {
    type: "website",
    title: "Aritra Das — AI Developer & CS Researcher",
    description:
      "11 Publications (6 Q1 Journals) • Best Paper Award (AII 2025) • MSc in CSE • Production AI & n8n Automation.",
    images: ["/images/aritra_pic.jpeg"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Google Fonts: Fraunces, Plus Jakarta Sans, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome 6 Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
