import React from "react";
import { experienceData } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          PROFESSIONAL TRAJECTORY
        </div>
        <h2 className="section-title">
          Engineering &amp; <span className="serif-highlight">teaching appointments.</span>
        </h2>
        <p className="section-subtitle">
          Applied engineering roles in the AI industry alongside undergraduate laboratory instruction.
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
