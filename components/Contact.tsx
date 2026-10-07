"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [fromText, setFromText] = useState("");
  const [message, setMessage] = useState("");
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email).then(
      () => onNotify("Email copied to clipboard!"),
      () => onNotify("Failed to copy email.")
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const subject = encodeURIComponent(`Message from ${fromText || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `From: ${fromText}\n\nMessage:\n${message}\n\nSent via Aritra Das Portfolio`
    );

    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSentStatus("Mail composer opened! If it didn't open automatically, write to aritrad768@gmail.com.");
    onNotify("Opening mail composer...");
  };

  return (
    <section className="section" id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-label">// GET IN TOUCH</div>
        <h2 className="section-editorial-h2">Start a conversation.</h2>
        <p className="section-editorial-p">
          Feel free to reach out for research collaboration, technical discussions, or consulting opportunities.
        </p>

        <div className="contact-editorial-grid">
          {/* Left: Direct Channels Card */}
          <div className="contact-direct-card">
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                marginBottom: "1.25rem",
              }}
            >
              Direct Channels
            </h3>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Email Address
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "0.2rem",
                  }}
                >
                  <span>{profileData.email}</span>
                  <button
                    className="social-pill-btn"
                    style={{ width: "28px", height: "28px", fontSize: "0.75rem" }}
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    <i className="fa-regular fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-brands fa-github"></i>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  GitHub Repositories
                </div>
                <div style={{ fontWeight: 600, marginTop: "0.2rem" }}>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent-emerald)" }}
                  >
                    github.com/Aritra232
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  LinkedIn Profile
                </div>
                <div style={{ fontWeight: 600, marginTop: "0.2rem" }}>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent-emerald)" }}
                  >
                    linkedin.com/in/aritra-das
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Current Location
                </div>
                <div style={{ fontWeight: 600, marginTop: "0.2rem" }}>
                  {profileData.location} (UTC+6)
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-divider)",
              }}
            >
              <a
                href="/docs/Aritra_Das_CV.pdf"
                download="Aritra_Das_CV.pdf"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                <i className="fa-solid fa-arrow-down-to-bracket"></i>
                <span>Download Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right: Direct Note Message Box */}
          <div className="contact-form-editorial">
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                marginBottom: "0.4rem",
              }}
            >
              Send a direct note
            </h3>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Drop a quick note below. It will open directly in your mail composer addressed to{" "}
              <strong>{profileData.email}</strong>.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group-editorial">
                <label htmlFor="form-from" className="form-label-editorial">
                  From (Your Name or Email)
                </label>
                <input
                  type="text"
                  id="form-from"
                  className="form-input-editorial"
                  placeholder="e.g. Professor Smith / alex@mit.edu"
                  value={fromText}
                  onChange={(e) => setFromText(e.target.value)}
                  required
                />
              </div>

              <div className="form-group-editorial">
                <label htmlFor="form-message" className="form-label-editorial">
                  Message
                </label>
                <textarea
                  id="form-message"
                  className="form-textarea-editorial"
                  placeholder="Write your message here..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                id="btn-send-message"
                style={{ width: "100%", padding: "0.85rem" }}
              >
                <i className="fa-regular fa-paper-plane"></i>
                <span>Send Direct Note</span>
              </button>

              {sentStatus && (
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.85rem",
                    padding: "0.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-emerald-soft)",
                    color: "var(--accent-emerald)",
                    border: "1px solid var(--accent-emerald-border)",
                  }}
                >
                  {sentStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
