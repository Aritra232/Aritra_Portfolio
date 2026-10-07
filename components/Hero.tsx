import React from "react";
import { profileData } from "@/data/profile";

export const Hero: React.FC = () => {
  return (
    <section className="hero-editorial" id="hero">
      <div className="container">
        <div className="hero-editorial-grid">
          {/* Left Column: Editorial Headline, Bio & Stats */}
          <div className="hero-editorial-content">
            <div className="hero-status-pill">
              <span className="live-dot"></span>
              <span className="hero-status-text">
                AI Engineer &amp; Computer Science Researcher
              </span>
            </div>

            <h1 className="hero-editorial-h1">
              Engineering <span className="hero-gradient-text">intelligent systems</span> &amp; deep learning research.
            </h1>

            <p className="hero-editorial-bio">
              I&apos;m <strong className="text-highlight">{profileData.name}</strong>, an AI Engineer at SM Technology and CS graduate researcher at East West University. I develop production LLM &amp; retrieval pipelines, train self-supervised vision models, and publish empirical ML benchmarks in Elsevier and Nature Q1 journals.
            </p>

            {/* Impact Metric Counters */}
            <div className="editorial-stats-row">
              <div className="editorial-stat-item">
                <div className="stat-big-num">{profileData.stats.publications}</div>
                <div className="stat-sub-label">Publications</div>
              </div>

              <div className="editorial-stat-item">
                <div className="stat-big-num">{profileData.stats.q1Journals}</div>
                <div className="stat-sub-label">Q1 Journals</div>
              </div>

              <div className="editorial-stat-item">
                <div className="stat-big-num">{profileData.stats.bestPaper}</div>
                <div className="stat-sub-label">Best Paper Award</div>
              </div>

              <div className="editorial-stat-item">
                <div className="stat-big-num">{profileData.stats.degree}</div>
                <div className="stat-sub-label">CGPA 3.91 / 4.00</div>
              </div>
            </div>

            {/* Actions Row */}
            <div className="hero-actions-group">
              <a href="#publications" className="btn btn-primary" id="hero-read-pubs">
                <span>View Publications</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href="#skills" className="btn btn-secondary">
                <i className="fa-solid fa-microchip"></i>
                <span>Technical Arsenal</span>
              </a>

              <a
                href="/docs/Aritra_Das_CV.pdf"
                download="Aritra_Das_CV.pdf"
                className="btn btn-secondary"
                id="hero-download-cv"
              >
                <i className="fa-solid fa-arrow-down-to-bracket"></i>
                <span>Resume</span>
              </a>
            </div>

            {/* Mini Research Profile Badges */}
            <div className="hero-scholarly-strip">
              <span className="scholarly-label">Scholarly Profiles:</span>
              <div className="hero-social-mini-strip">
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

          {/* Right Column: Author Portrait Presentation with Status Badge */}
          <div className="hero-portrait-container">
            <div className="portrait-clean-card">
              <div className="portrait-corner-badge">
                <span className="live-dot"></span>
                <span>OPEN TO RESEARCH</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aritra_pic.jpeg"
                alt="Aritra Das — AI Engineer &amp; Computer Science Researcher"
                className="portrait-clean-img"
              />
              <div className="portrait-caption-strip">
                <div className="portrait-caption-name">Aritra Das</div>
                <div className="portrait-caption-role">AI Engineer · CS Researcher · Dhaka, BD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
