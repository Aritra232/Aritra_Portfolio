import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          SELECTED IMPLEMENTATIONS &amp; APPLIED SYSTEMS
        </div>
        <h2 className="section-title">
          Engineered systems &amp; <span className="serif-highlight">research prototypes.</span>
        </h2>
        <p className="section-subtitle">
          A battle-tested collection of production AI backends, medical computer vision pipelines, generative video orchestrators, and peer-reviewed research implementations.
        </p>

        <div className="projects-editorial-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

