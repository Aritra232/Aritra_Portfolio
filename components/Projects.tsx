import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {
  limit?: number;
}

export const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

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
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {limit && (
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/projects" className="btn btn-secondary">
              <span>Explore All {projectsData.length} Projects</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

