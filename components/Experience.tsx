import React from "react";
import { experienceData } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-label">// EXPERIENCE</div>
        <h2 className="section-editorial-h2">Work Experience.</h2>
        <p className="section-editorial-p">
          My roles in applied AI engineering and university teaching.
        </p>

        <div className="experience-list">
          {experienceData.map((item) => (
            <div className="exp-editorial-item" key={item.id}>
              <div className="exp-left-col">
                <span className="exp-timeframe">{item.timeframe}</span>
                <span className="exp-company">{item.company}</span>
                <span className="exp-location">{item.location}</span>
              </div>
              <div className="exp-right-col">
                <h4>{item.role}</h4>
                <ul className="exp-bullet-list">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
