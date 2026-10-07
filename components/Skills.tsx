"use client";

import React, { useState } from "react";
import { skillDomains, SkillDomain } from "@/data/skills";

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredDomains =
    activeFilter === "all"
      ? skillDomains
      : skillDomains.filter((d) => d.id === activeFilter);

  const filterTabs = [
    { id: "all", label: "All Arsenal" },
    { id: "deep-learning", label: "Deep Learning" },
    { id: "computer-vision", label: "Computer Vision" },
    { id: "nlp-llm", label: "NLP & LLMs" },
    { id: "languages", label: "Languages" },
    { id: "infrastructure", label: "MLOps & Cloud" },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "python":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" />
          </svg>
        );
      case "pytorch":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" />
          </svg>
        );
      case "tensorflow":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z" />
          </svg>
        );
      case "docker":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954-5.03h2.118a.186.186 0 00.186-.186V3.974a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.572h2.118a.186.186 0 00.186-.186V6.547a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .103.082.186.185.186zm0 2.458h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.955-2.458h2.119a.186.186 0 00.185-.186V6.547a.185.185 0 00-.185-.185H8.074a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm0 2.458h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.074a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.954 0h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zM23.99 11.23c-.114-.738-.636-1.332-1.353-1.614l-.454-.176-.328.375c-.886 1.018-2.13 1.583-3.46 1.583h-.514v-1.89c0-.47-.384-.852-.855-.852H1.02c-.563 0-1.02.457-1.02 1.02v5.77c0 3.393 2.76 6.153 6.154 6.153 5.485 0 10.14-3.415 11.758-8.497 1.836.082 3.864-.814 4.542-2.316.095-.213.14-.442.14-.67z" />
          </svg>
        );
      case "huggingface":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378" />
          </svg>
        );
      case "cpp":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11z" />
          </svg>
        );
      case "aws":
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.763 10.03c0 .215.012.43.052.646.04.215.102.417.187.605.085.188.196.347.332.476.136.13.298.22.486.271.188.052.395.078.621.078.29 0 .543-.042.759-.126.216-.084.4-.199.552-.345.152-.146.269-.313.351-.501.082-.188.123-.393.123-.615v-1.63H6.763v1.146zm11.888 7.37c-.368.272-.785.508-1.25.708-.466.2-.977.352-1.534.456-.557.104-1.144.156-1.761.156-.81 0-1.564-.093-2.262-.279-.698-.186-1.312-.464-1.842-.834a6.666 6.666 0 01-1.378-1.282c-.378-.492-.663-1.072-.855-1.74a7.086 7.086 0 01-.288-2.083c0-.77.102-1.503.306-2.2.204-.697.51-1.315.918-1.854.408-.539.914-.972 1.518-1.3a6.83 6.83 0 012.016-.653c.75-.12 1.542-.18 2.376-.18.66 0 1.28.04 1.86.12.58.08 1.096.2 1.548.36v7.35c0 .416.03.746.09.99.06.244.168.428.324.552.156.124.384.186.684.186.192 0 .378-.024.558-.072.18-.048.33-.108.45-.18v1.44z" />
          </svg>
        );
      default:
        return (
          <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
    }
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header skills-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot"></span>
            TECHNICAL ARSENAL & CORE COMPETENCIES
          </div>
          <h2 className="section-title">
            Research tools &amp; <span className="serif-highlight">engineering depth.</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested map of the deep learning architectures, representation models, and high-concurrency tooling I leverage across academic research and production AI systems.
          </p>

          {/* Quick Stats Metric Counter */}
          <div className="skills-metrics-bar">
            <div className="skills-metric-item">
              <span className="skills-metric-num">38+</span>
              <span className="skills-metric-label">Technologies</span>
            </div>
            <div className="skills-metric-divider"></div>
            <div className="skills-metric-item">
              <span className="skills-metric-num">05</span>
              <span className="skills-metric-label">Core Domains</span>
            </div>
            <div className="skills-metric-divider"></div>
            <div className="skills-metric-item">
              <span className="skills-metric-num">11</span>
              <span className="skills-metric-label">Peer-Reviewed Papers</span>
            </div>
            <div className="skills-metric-divider"></div>
            <div className="skills-metric-item">
              <span className="skills-metric-num">06</span>
              <span className="skills-metric-label">Elsevier &amp; Nature Q1</span>
            </div>
          </div>

          {/* Domain Filter Pills */}
          <div className="skills-filter-nav">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`skills-filter-btn ${
                  activeFilter === tab.id ? "active" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categorized Grid */}
        <div className="skills-domain-list">
          {filteredDomains.map((domain: SkillDomain) => (
            <div key={domain.id} className="skills-domain-card">
              {/* Left Column: Domain Info */}
              <div className="skills-domain-meta">
                <div className="domain-index-badge">{domain.number}</div>
                <h3 className="domain-title">{domain.title}</h3>
                <p className="domain-tagline">{domain.tagline}</p>
                <div className="domain-count-pill">
                  <span className="domain-count-indicator"></span>
                  {domain.toolsCount} Frameworks &amp; Tools
                </div>
              </div>

              {/* Right Column: Pill Badges */}
              <div className="skills-pills-wrap">
                {domain.skills.map((skill, idx) => (
                  <div key={idx} className="skill-pill-item">
                    <div className="skill-pill-icon-box">
                      {renderIcon(skill.iconType)}
                    </div>
                    <div className="skill-pill-content">
                      <span className="skill-pill-name">{skill.name}</span>
                      {skill.badge && (
                        <span className="skill-pill-badge">{skill.badge}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
