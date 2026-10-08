"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.filterCategory === filter);

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
          A battle-tested collection of production AI backends, medical computer vision pipelines, generative video orchestrators, and peer-reviewed research implementations with source links.
        </p>

        {/* Filter Navigation */}
        <div className="pub-filter-strip" style={{ marginBottom: "2rem" }}>
          <button
            className={`pub-pill-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Systems ({projectsData.length})
          </button>
          <button
            className={`pub-pill-tab ${filter === "production" ? "active" : ""}`}
            onClick={() => setFilter("production")}
          >
            Production Backends &amp; Vector DB
          </button>
          <button
            className={`pub-pill-tab ${filter === "vision" ? "active" : ""}`}
            onClick={() => setFilter("vision")}
          >
            Medical &amp; Vision AI
          </button>
          <button
            className={`pub-pill-tab ${filter === "nlp" ? "active" : ""}`}
            onClick={() => setFilter("nlp")}
          >
            NLP &amp; Conversational AI
          </button>
          <button
            className={`pub-pill-tab ${filter === "automation" ? "active" : ""}`}
            onClick={() => setFilter("automation")}
          >
            Generative Video &amp; Pipelines
          </button>
        </div>

        <div className="projects-editorial-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
