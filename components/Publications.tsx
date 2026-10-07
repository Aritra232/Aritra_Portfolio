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
        <div className="section-label">// SCHOLARLY WORK</div>
        <h2 className="section-editorial-h2">Peer-Reviewed Publications.</h2>
        <p className="section-editorial-p">
          11 peer-reviewed papers published in international journals and conferences, including 6 in Elsevier and Nature Q1 journals.
        </p>

        {/* Filter Tabs */}
        <div className="pub-filter-strip">
          <button
            className={`pub-pill-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Works ({publicationsData.length})
          </button>
          <button
            className={`pub-pill-tab ${filter === "q1" ? "active" : ""}`}
            onClick={() => setFilter("q1")}
          >
            Q1 Journals (6)
          </button>
          <button
            className={`pub-pill-tab ${filter === "conference" ? "active" : ""}`}
            onClick={() => setFilter("conference")}
          >
            Conference Papers (5)
          </button>
          <button
            className={`pub-pill-tab ${filter === "award" ? "active" : ""}`}
            onClick={() => setFilter("award")}
          >
            Best Paper Award (1)
          </button>
        </div>

        {/* Publications List */}
        <div className="editorial-pub-list">
          {filteredPublications.map((pub) => (
            <PublicationCard
              key={pub.id}
              publication={pub}
              onCopyCitation={handleCopyCitation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
