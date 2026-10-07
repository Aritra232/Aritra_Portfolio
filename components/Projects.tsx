import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-label">// SELECTED WORK</div>
        <h2 className="section-editorial-h2">Projects &amp; Systems.</h2>
        <p className="section-editorial-p">
          A selection of production AI systems, deep learning research implementations, and practical pipelines.
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
