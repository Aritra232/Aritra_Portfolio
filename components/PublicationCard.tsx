"use client";

import React, { useState } from "react";
import { Publication } from "@/data/publications";

interface PublicationCardProps {
  publication: Publication;
  index: number;
  onCopyCitation: (citation: string) => void;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
  index,
  onCopyCitation,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyCitation(publication.citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightMyName = (authors: string) => {
    const parts = authors.split(/(A\. Das|A\. Das et al\.)/g);
    return parts.map((part, i) =>
      part === "A. Das" || part === "A. Das et al." ? (
        <strong className="author-me" key={i}>
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  const formatIndex = (idx: number) => {
    const num = idx + 1;
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <article className={`editorial-pub-item ${publication.isAward ? "award-featured" : ""}`}>
      {/* Top Meta Strip */}
      <div className="pub-item-header">
        <div className="pub-index-num">{formatIndex(index)}</div>
        <div className="pub-meta-badges">
          <span
            className={`pub-rank-tag ${
              publication.badgeType === "q1"
                ? "tag-q1"
                : publication.badgeType === "award"
                ? "tag-award"
                : "tag-conf"
            }`}
          >
            {publication.badgeLabel}
          </span>
          <span className="pub-year-tag">{publication.year}</span>
        </div>
        <span className="pub-item-venue">{publication.venue}</span>
      </div>

      {/* Paper Title */}
      <h3 className="pub-item-title">
        {publication.doi ? (
          <a href={publication.doi} target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>

      {/* Authors list */}
      <p className="pub-item-authors">{highlightMyName(publication.authors)}</p>

      {/* Highlight Narrative */}
      {publication.highlight && (
        <p className="pub-item-highlight">{publication.highlight}</p>
      )}

      {/* Key Metrics Micro-Grid (Inspired by Fahim's empirical results boxes) */}
      {publication.metrics && publication.metrics.length > 0 && (
        <div className="pub-metrics-grid">
          {publication.metrics.map((metric, mIdx) => (
            <div key={mIdx} className="pub-metric-box">
              <span className="pub-metric-label">{metric.label}</span>
              <span className="pub-metric-val">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Action Row */}
      <div className="pub-item-actions">
        {publication.doi && (
          <a
            href={publication.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link-btn"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span>DOI Link</span>
          </a>
        )}

        {publication.isAward && (
          <span className="pub-award-banner">
            <i className="fa-solid fa-trophy"></i>
            <span>AII 2025 Best Paper Winner</span>
          </span>
        )}

        <button className="pub-link-btn copy-citation-btn" onClick={handleCopy}>
          <i className={copied ? "fa-solid fa-check text-cyan" : "fa-regular fa-copy"}></i>
          <span>{copied ? "Copied BibTeX!" : "Copy Citation"}</span>
        </button>
      </div>
    </article>
  );
};
