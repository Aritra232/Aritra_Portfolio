import React from "react";
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
              CORE FOCUS &amp; ACADEMIC INQUIRY
            </div>
            <h2 className="section-title">
              Bridging theory &amp; <span className="serif-highlight">real-world systems.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
              I divide my work between engineering resilient machine learning services in industry and conducting empirical computer vision research in academia.
            </p>
            <p
              className="about-secondary-text"
            >
              Currently, I design LLM and RAG retrieval pipelines at SM Technology, while researching contrastive self-supervised representations and Graph Convolutional Networks (GCN) for my MSc thesis at East West University.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a href="#contact" className="btn btn-secondary">
                <span>Start a Conversation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
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
