import React from "react";
import { educationData } from "@/data/education";

export const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-label">// ACADEMIC BACKGROUND</div>
        <h2 className="section-editorial-h2">Educational Background.</h2>
        <p className="section-editorial-p">
          My academic coursework and research track at East West University, Dhaka.
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
