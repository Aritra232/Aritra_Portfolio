import React from "react";
import { profileData } from "@/data/profile";

export const Hero: React.FC = () => {
  return (
    <section className="hero-editorial" id="hero">
      <div className="container">
        <div className="hero-editorial-grid">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="hero-editorial-content">
            <div className="hero-mono-label">
              <span>//</span> {profileData.role.toUpperCase()}
            </div>

            <h1 className="hero-editorial-h1">
              Building production AI systems &amp; deep learning{" "}
              <span className="hero-italic-highlight">research.</span>
            </h1>

            <p className="hero-editorial-bio">{profileData.bio}</p>

            {/* Vertical Stats Divider */}
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
                <div className="stat-sub-label">{profileData.stats.university}</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="hero-actions-group">
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

              {/* Mini Social Strip */}
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

          {/* Right Column: Clean Premium Portrait Presentation */}
          <div className="hero-portrait-container">
            <div className="portrait-clean-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/aritra_pic.jpeg"
                alt="Aritra Das — AI Developer &amp; Researcher"
                className="portrait-clean-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
