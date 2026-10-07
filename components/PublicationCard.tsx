"use client";

import React, { useState } from "react";
import { Publication } from "@/data/publications";

interface PublicationCardProps {
  publication: Publication;
  onCopyCitation: (citation: string) => void;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
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
        <span className="me" key={i}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <article className="editorial-pub-item">
      <div className="pub-item-header">
        <div className="pub-meta-badges">
          <span
            className={
              publication.badgeType === "q1"
                ? "tag-q1"
                : publication.badgeType === "award"
                ? "tag-award"
                : "tag-conf"
            }
          >
            {publication.badgeLabel}
          </span>
          <span className="tag-conf">{publication.year}</span>
        </div>
        <span className="pub-item-venue">{publication.venue}</span>
      </div>

      <h3 className="pub-item-title">
        {publication.doi ? (
          <a href={publication.doi} target="_blank" rel="noopener noreferrer">
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>

      <p className="pub-item-authors">{highlightMyName(publication.authors)}</p>

      <div className="pub-item-actions">
        {publication.doi && (
          <a
            href={publication.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link-btn"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
            DOI: {publication.doi.replace("https://doi.org/", "")}
          </a>
        )}

        {publication.isAward && (
          <span
            className="pub-link-btn"
            style={{
              color: "var(--accent-amber)",
              borderColor: "rgba(217, 119, 6, 0.3)",
            }}
          >
            <i className="fa-solid fa-trophy"></i> Best Paper Award Winner
          </span>
        )}

        <button className="pub-link-btn copy-citation-btn" onClick={handleCopy}>
          <i className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>{" "}
          {copied ? "Copied!" : "Copy Citation"}
        </button>
      </div>
    </article>
  );
};
