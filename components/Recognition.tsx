import React from "react";
import { referencesData } from "@/data/experience";

export const Recognition: React.FC = () => {
  return (
    <section className="section" id="awards">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          HONORS, AWARDS &amp; ACADEMIC REFERENCES
        </div>
        <h2 className="section-title">
          Scholarly honors &amp; <span className="serif-highlight">mentorship.</span>
        </h2>
        <p className="section-subtitle">
          International peer recognition and esteemed academic supervisors who have guided my research.
        </p>

        {/* Best Paper Award Feature Block */}
        <div className="quote-editorial-block">
          <div className="award-banner-eyebrow">
            ★ BEST PAPER AWARD WINNER — AII 2025 (WASHINGTON D.C., USA)
          </div>
          <div className="quote-editorial-text">
            “CodeMixEcom-Emotion: A Large-Scale Bangla-English Review Corpus and Transformer-Based Benchmark for Fine-Grained Emotion Detection”
          </div>
          <div className="quote-author-row">
            <div className="quote-author-info">
              <span className="quote-author-name">
                5th International Conference on Applied Intelligence and Informatics (AII 2025)
              </span>
              <span className="quote-author-sub">
                Awarded Best Paper for constructing a bilingual Bangla-English review dataset and benchmarking deep transformer models for fine-grained emotion analysis.
              </span>
            </div>
            <span className="award-location-badge">
              Washington, D.C.
            </span>
          </div>
        </div>

        {/* Academic References Grid */}
        <div className="references-grid">
          {referencesData.map((ref, idx) => (
            <div className="edu-editorial-card" key={idx}>
              <div>
                <div className="edu-card-top">
                  <span className="edu-year-label">{ref.roleTag}</span>
                  <span className="edu-pill">{ref.institution}</span>
                </div>
                <h3 className="edu-card-degree" style={{ fontSize: "1.2rem" }}>
                  {ref.name}
                </h3>
                <div className="edu-card-inst">{ref.title}</div>
                <p className="edu-card-desc">{ref.description}</p>
              </div>
              <div className="ref-email-wrap">
                <a
                  href={`mailto:${ref.email}`}
                  className="ref-email-link"
                >
                  <i className="fa-regular fa-envelope"></i> {ref.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
