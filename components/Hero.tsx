import React from "react";
import { profileData } from "@/data/profile";

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-ambient-bg"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content">
            {/* Modern Pill Badge */}
            <div className="hero-status-badge">
              <span className="hero-status-pulse"></span>
              <span className="hero-status-title">AI DEVELOPER &amp; CS RESEARCHER</span>
              <span className="hero-status-sep">/</span>
              <span className="hero-status-sub">EAST WEST UNIVERSITY</span>
            </div>

            {/* Bold Modern Headline */}
            <h1 className="hero-title">
              Building production AI systems &amp; practical{" "}
              <span className="hero-gradient-text">automations.</span>
            </h1>

            {/* Concise Human Bio */}
            <p className="hero-bio">{profileData.bio}</p>

            {/* Modern 4-Card Metrics Grid (Replaces old vertical lines) */}
            <div className="hero-metrics-grid">
              <div className="hero-metric-card">
                <div className="metric-card-top">
                  <span className="metric-card-num">{profileData.stats.publications}</span>
                  <i className="fa-solid fa-book-bookmark metric-card-icon"></i>
                </div>
                <div className="metric-card-label">Publications</div>
                <div className="metric-card-sub">Peer-reviewed</div>
              </div>

              <div className="hero-metric-card">
                <div className="metric-card-top">
                  <span className="metric-card-num">{profileData.stats.q1Journals}</span>
                  <i className="fa-solid fa-certificate metric-card-icon"></i>
                </div>
                <div className="metric-card-label">Q1 Journals</div>
                <div className="metric-card-sub">Elsevier &amp; Nature</div>
              </div>

              <div className="hero-metric-card">
                <div className="metric-card-top">
                  <span className="metric-card-num">{profileData.stats.bestPaper}</span>
                  <i className="fa-solid fa-trophy metric-card-icon gold"></i>
                </div>
                <div className="metric-card-label">Best Paper</div>
                <div className="metric-card-sub">AII 2025 (USA)</div>
              </div>

              <div className="hero-metric-card">
                <div className="metric-card-top">
                  <span className="metric-card-num">{profileData.stats.degree}</span>
                  <i className="fa-solid fa-graduation-cap metric-card-icon"></i>
                </div>
                <div className="metric-card-label">CGPA 3.91</div>
                <div className="metric-card-sub">East West Univ.</div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="hero-actions-row">
              <a
                href="/docs/Aritra_Das_CV.pdf"
                download="Aritra_Das_CV.pdf"
                className="btn btn-primary"
                id="hero-download-cv"
              >
                <i className="fa-solid fa-arrow-down-to-bracket"></i>
                <span>Download Resume</span>
              </a>

              <a href="#publications" className="btn btn-secondary">
                <span>Read Publications</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              {/* Social Icons */}
              <div className="hero-social-strip">
                <a
                  href={profileData.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  title="Google Scholar"
                >
                  <i className="fa-solid fa-graduation-cap"></i>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-btn"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="social-pill-btn"
                  title="Email Directly"
                >
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Tech Portrait with Floating Chips */}
          <div className="hero-visual-container">
            <div className="hero-visual-wrapper">
              <div className="hero-visual-glow"></div>

              <div className="hero-portrait-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/aritra_pic.jpeg"
                  alt="Aritra Das — AI Developer and Researcher"
                  className="hero-portrait-img"
                />
              </div>

              {/* Floating Chip 1: Top Left */}
              <div className="hero-floating-chip chip-top-left">
                <div className="chip-icon-box chip-emerald">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div className="chip-content">
                  <span className="chip-title">AI Automation</span>
                  <span className="chip-desc">n8n &bull; Twilio &bull; LLMs</span>
                </div>
              </div>

              {/* Floating Chip 2: Bottom Right */}
              <div className="hero-floating-chip chip-bottom-right">
                <div className="chip-icon-box chip-blue">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <div className="chip-content">
                  <span className="chip-title">Computer Vision</span>
                  <span className="chip-desc">SSL &bull; GCNs &bull; PyTorch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
