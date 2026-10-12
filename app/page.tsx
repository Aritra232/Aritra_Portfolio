import React from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { profileData } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quick Overview Snapshot */}
      <section className="section">
        <div className="container">
          <div className="practice-grid">
            <div>
              <div className="section-eyebrow">
                <span className="eyebrow-dot"></span>
                CORE FOCUS &amp; EXPERTISE
              </div>
              <h2 className="section-title">
                Applied AI systems &amp; <span className="serif-highlight">deep learning.</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>
                I build and deploy LLM retrieval systems, train computer vision architectures, and conduct peer-reviewed research in self-supervised learning and graph networks.
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <Link href="/about" className="btn btn-primary">
                  <span>Read Full Profile</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="threads-list">
              {profileData.focusAreas.slice(0, 3).map((area) => (
                <div className="thread-row" key={area.number}>
                  <span className="thread-num">{area.number}</span>
                  <div>
                    <div className="thread-title">{area.title}</div>
                    <div className="thread-desc">{area.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications (Top 3) */}
      <Publications limit={3} showFilters={false} />

      {/* Selected Implementations (Top 3) */}
      <Projects limit={3} />

      {/* Quick Inquiries Callout */}
      <section className="section" style={{ borderBottom: "none", padding: "4rem 0 5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot"></span>
            COLLABORATION &amp; INQUIRIES
          </div>
          <h2 className="section-title" style={{ maxWidth: "680px", margin: "0 auto 1rem" }}>
            Interested in collaborating or discussing <span className="serif-highlight">research?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Whether it&apos;s production AI engineering, contrastive learning research, or peer exchange, I&apos;d love to connect.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              <i className="fa-regular fa-paper-plane"></i>
              <span>Get in Touch</span>
            </Link>
            <Link href="/publications" className="btn btn-secondary">
              <i className="fa-solid fa-book-bookmark"></i>
              <span>Browse All Research</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
