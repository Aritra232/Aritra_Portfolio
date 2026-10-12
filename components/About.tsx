import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="practice-grid">
          {/* Left: Narrative */}
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-dot"></span>
              CORE FOCUS &amp; APPLIED RESEARCH
            </div>
            <h2 className="section-title">
              Building practical AI &amp; <span className="serif-highlight">deep learning research.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
              I work as an AI engineer developing production systems, and as a researcher investigating modern deep learning architectures.
            </p>
            <p
              className="about-secondary-text"
            >
              At SM Technology, I build and deploy LLM and RAG retrieval pipelines for real-world products. Alongside industry engineering, I conduct research at East West University, focusing on contrastive self-supervised learning and Graph Convolution networks (GCN).
            </p>
            <div style={{ marginTop: "2rem" }}>
              <Link href="/contact" className="btn btn-secondary">
                <span>Start a Conversation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Right: 4 Focus Areas */}
          <div className="threads-list">
            {profileData.focusAreas.map((area) => (
              <div className="thread-row" key={area.number}>
                <span className="thread-num">{area.number}</span>
                <div>
                  <div className="thread-title">{area.title}</div>
                  <div className="thread-desc">{area.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
