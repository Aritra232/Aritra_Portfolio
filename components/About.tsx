import React from "react";
import { profileData } from "@/data/profile";

export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="practice-grid">
          {/* Left: Narrative */}
          <div>
            <div className="section-label">// ABOUT</div>
            <h2 className="section-editorial-h2">What I focus on.</h2>
            <p className="section-editorial-p" style={{ marginBottom: "1.5rem" }}>
              I divide my work between shipping practical AI backends in industry and conducting computer vision research in academia.
            </p>
            <p
              className="section-editorial-p"
              style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}
            >
              Currently, I engineer LLM systems and workflow automations at SM Technology, while researching self-supervised models and graph networks for my MSc degree.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <a href="#contact" className="btn btn-secondary">
                <span>Start a Conversation</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* Right: Focus Areas List */}
          <div className="threads-list">
            {profileData.focusAreas.map((area) => (
              <div className="thread-row" key={area.number}>
                <span className="thread-num">{area.number}</span>
                <div className="thread-title">{area.title}</div>
                <div className="thread-desc">{area.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
