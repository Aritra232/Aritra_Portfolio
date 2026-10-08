import React from "react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isGithub = project.linkUrl.includes("github.com");

  return (
    <div className="editorial-project-card">
      <div>
        <div className="project-meta-top">
          <span className="project-cat-mono">{project.category}</span>
          <span className="project-badge-pill">{project.badge}</span>
        </div>
        <h3 className="project-card-h3">
          {project.linkUrl ? (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              {project.title}
              <span className="project-title-arrow">↗</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="project-card-p">{project.description}</p>
      </div>

      <div>
        <div className="project-tags-strip">
          {project.tags.map((tag, idx) => (
            <span className="tech-mini-pill" key={idx}>
              {tag}
            </span>
          ))}
        </div>

        {project.linkUrl && (
          <div className="project-action-strip">
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-text-link"
            >
              <i className={isGithub ? "fa-brands fa-github" : "fa-solid fa-arrow-up-right-from-square"}></i>
              <span>{project.linkLabel}</span>
              <span className="project-arrow-icon">↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

