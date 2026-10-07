import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="editorial-project-card">
      <div>
        <div className="project-meta-top">
          <span className="project-cat-mono">{project.category}</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
            }}
          >
            {project.badge}
          </span>
        </div>
        <h3 className="project-card-h3">{project.title}</h3>
        <p className="project-card-p">{project.description}</p>
      </div>

      <div className="project-tags-strip">
        {project.tags.map((tag, idx) => (
          <span className="tech-mini-pill" key={idx}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
