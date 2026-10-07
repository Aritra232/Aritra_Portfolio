"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Recognition } from "@/components/Recognition";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Publications onNotify={showToast} />
        <Projects />
        <Experience />
        <Recognition />
        <Contact onNotify={showToast} />
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </>
  );
}
