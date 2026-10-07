import React from "react";
import { profileData } from "@/data/profile";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-editorial">
      <div className="container footer-content">
        <div className="footer-copy">
          © 2026 <strong>{profileData.name}</strong> — {profileData.role}.
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <a
            href={profileData.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn"
            title="Google Scholar"
          >
            <i className="fa-solid fa-graduation-cap"></i>
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-btn"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="social-pill-btn"
            title="Email"
          >
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
