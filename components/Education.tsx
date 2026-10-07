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
          Educational background &amp; <span className="serif-highlight">scholarship.</span>
        </h2>
        <p className="section-subtitle">
          Graduate and undergraduate computer science coursework and research track at East West University, Dhaka.
        </p>

        <div className="education-editorial-grid">
          {educationData.map((item) => (
            <div className="edu-editorial-card" key={item.id}>
              <div>
                <div className="edu-card-top">
                  <span className="edu-year-label">{item.timeframe}</span>
                  <span className={`edu-grade-tag ${item.isGold ? "gold" : ""}`}>
                    {item.grade}
                  </span>
                </div>
                <h3 className="edu-card-degree">{item.degree}</h3>
                <div className="edu-card-inst">{item.institution}</div>
                <p className="edu-card-desc">{item.description}</p>
              </div>
              <div className="edu-card-pills">
                {item.pills.map((pill, idx) => (
                  <span className="edu-pill" key={idx}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
