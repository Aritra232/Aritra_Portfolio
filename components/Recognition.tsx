import React from "react";
import { referencesData } from "@/data/experience";

export const Recognition: React.FC = () => {
  return (
    <section className="section" id="awards">
      <div className="container">
        <div className="section-label">// RECOGNITION</div>
        <h2 className="section-editorial-h2">Recognition &amp; References.</h2>

        {/* Best Paper Award Feature Block */}
        <div className="quote-editorial-block">
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent-amber)",
              marginBottom: "0.75rem",
            }}
          >
            ★ BEST PAPER AWARD WINNER — AII 2025 (WASHINGTON D.C., USA)
          </div>
          <div className="quote-editorial-text">
            “CodeMixEcom-Emotion: A Large-Scale Bangla-English Review Corpus and Transformer-Based Benchmark for Fine-Grained Emotion Detection”
          </div>
          <div className="quote-author-row">
            <div className="quote-author-info">
              <span className="quote-author-name">
                5th International Conference on Applied Intelligence and Informatics
              </span>
              <span className="quote-author-sub">
                Awarded Best Paper for constructing a bilingual Bangla-English review dataset and benchmarking transformer models for emotion analysis.
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--accent-emerald)",
                fontWeight: 600,
              }}
            >
              Washington, D.C.
            </span>
          </div>
        </div>

        {/* Academic References Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
            marginTop: "2rem",
          }}
        >
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
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-divider)",
                }}
              >
                <a
                  href={`mailto:${ref.email}`}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--accent-emerald)",
                  }}
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
