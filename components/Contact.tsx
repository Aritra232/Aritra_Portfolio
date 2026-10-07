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
    onNotify("Opening mail client...");
  };

  return (
    <section className="section" id="contact" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          INQUIRIES &amp; ACADEMIC COLLABORATION
        </div>
        <h2 className="section-title">
          Start a conversation &amp; <span className="serif-highlight">collaborate.</span>
        </h2>
        <p className="section-subtitle">
          Open to selective research collaborations, peer discussions, and production AI engineering opportunities.
        </p>

        <div className="contact-editorial-grid">
          {/* Left: Direct Channels Card */}
          <div className="contact-direct-card">
            <h3 className="contact-card-heading">
              Direct Channels
            </h3>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div>
                <div className="contact-item-label">
                  Primary Email
                </div>
                <div className="contact-item-val">
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
                <div className="contact-item-label">
                  GitHub Profile
                </div>
                <div className="contact-item-val">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-link"
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
                <div className="contact-item-label">
                  LinkedIn Network
                </div>
                <div className="contact-item-val">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-link"
                  >
                    linkedin.com/in/aritra-das
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-icon-mini">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <div className="contact-item-label">
                  Google Scholar
                </div>
                <div className="contact-item-val">
                  <a
                    href={profileData.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-link"
                  >
                    Aritra Das (Citations &amp; Indices)
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card-item" style={{ borderBottom: "none", paddingBottom: 0 }}>
              <div className="contact-icon-mini">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="contact-item-label">
                  Current Location
                </div>
                <div className="contact-item-val">
                  <span>Dhaka, Bangladesh · Open to Global / Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Inquiry Composer */}
          <div className="contact-form-card">
            <h3 className="contact-card-heading">
              Dispatch an Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-sender">
                  Your Name or Affiliation
                </label>
                <input
                  type="text"
                  id="contact-sender"
                  className="form-input"
                  placeholder="e.g. Dr. Jane Doe (University / Lab) or John (Company)"
                  value={fromText}
                  onChange={(e) => setFromText(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message / Collaboration Proposal *
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  rows={5}
                  placeholder="Briefly describe your research idea, engineering inquiry, or proposal..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <i className="fa-regular fa-paper-plane"></i>
                <span>Open in Mail Client</span>
              </button>

              {sentStatus && (
                <div className="contact-status-box">
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
