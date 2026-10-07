"use client";

import React, { useState } from "react";
import { publicationsData } from "@/data/publications";
import { PublicationCard } from "./PublicationCard";

interface PublicationsProps {
  onNotify: (msg: string) => void;
}

export const Publications: React.FC<PublicationsProps> = ({ onNotify }) => {
  const [filter, setFilter] = useState<"all" | "q1" | "conference" | "award">("all");

  const filteredPublications = publicationsData.filter((pub) => {
    if (filter === "all") return true;
    if (filter === "q1") return pub.category === "q1";
    if (filter === "conference") return pub.category === "conference" || pub.isAward;
    if (filter === "award") return pub.isAward;
    return true;
  });

  const handleCopyCitation = (citation: string) => {
    navigator.clipboard.writeText(citation).then(
      () => onNotify("Citation copied to clipboard!"),
      () => onNotify("Failed to copy citation.")
    );
  };

  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          SCHOLARLY WORK &amp; PEER-REVIEWED RESEARCH
        </div>
        <h2 className="section-title">
          Published papers &amp; <span className="serif-highlight">scientific rigor.</span>
        </h2>
        <p className="section-subtitle">
          11 peer-reviewed papers spanning transformer architectures, contrastive self-supervised representations, and open benchmarks — including 6 Q1 papers in Elsevier and Nature journals.
        </p>

        {/* Filter Tabs */}
        <div className="pub-filter-strip">
          <button
            className={`pub-pill-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Papers ({publicationsData.length})
          </button>
          <button
            className={`pub-pill-tab ${filter === "q1" ? "active" : ""}`}
            onClick={() => setFilter("q1")}
          >
            Elsevier &amp; Nature Q1 (6)
          </button>
          <button
            className={`pub-pill-tab ${filter === "conference" ? "active" : ""}`}
            onClick={() => setFilter("conference")}
          >
            IEEE Conferences (5)
          </button>
          <button
            className={`pub-pill-tab ${filter === "award" ? "active" : ""}`}
            onClick={() => setFilter("award")}
          >
            ★ Best Paper Award (1)
          </button>
        </div>

        {/* Publications List */}
        <div className="editorial-pub-list">
          {filteredPublications.map((pub, idx) => (
            <PublicationCard
              key={pub.id}
              index={idx}
              publication={pub}
              onCopyCitation={handleCopyCitation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
