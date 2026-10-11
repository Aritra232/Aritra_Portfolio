import React from "react";
import { educationData } from "@/data/education";

export const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          ACADEMIC FOUNDATION &amp; DEGREES
        </div>
        <h2 className="section-title">
          Educational <span className="serif-highlight">background.</span>
        </h2>
        <p className="section-subtitle">
          Academic credentials and degree timeline across graduate and undergraduate studies.
        </p>

        <div className="education-editorial-grid">
          {educationData.map((item) => (
            <div className="edu-editorial-card" key={item.id}>
              <div className="edu-card-top">
                <span className="edu-year-label">{item.timeframe}</span>
                <span className={`edu-grade-tag ${item.isGold ? "gold" : ""}`}>
                  {item.grade}
                </span>
              </div>
              <h3 className="edu-card-degree">{item.degree}</h3>
              <div className="edu-card-inst">{item.institution}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
