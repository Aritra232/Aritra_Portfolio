"use client";

import React, { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Default to dark theme for maximum AI computing aesthetic, or load saved
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        {/* Brand */}
        <a href="#hero" className="nav-brand" aria-label="Aritra Das">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aritra_pic.jpeg"
            alt="Aritra Das"
            className="nav-avatar-mini"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Aritra Das</span>
            <span className="nav-brand-title">AI ENGINEER · CS RESEARCHER</span>
          </div>
        </a>

        {/* Primary Links */}
        <nav>
          <ul className={`nav-links ${mobileOpen ? "open" : ""}`} id="nav-links">
            <li><a href="#about" className="nav-link" onClick={closeMobile}>About</a></li>
            <li><a href="#education" className="nav-link" onClick={closeMobile}>Education</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMobile}>Skills</a></li>
            <li><a href="#publications" className="nav-link" onClick={closeMobile}>Publications</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMobile}>Projects</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMobile}>Experience</a></li>
            <li><a href="#awards" className="nav-link" onClick={closeMobile}>Recognition</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMobile}>Contact</a></li>
          </ul>
        </nav>

        {/* Nav Actions */}
        <div className="nav-actions">
          <div className="availability-pill" title="Currently open for AI Research &amp; Engineering collaborations">
            <span className="live-dot"></span>
            <span>AVAILABLE</span>
          </div>

          <button
            className="theme-toggle-btn"
            id="theme-toggle"
            aria-label="Toggle Dark/Light Mode"
            onClick={toggleTheme}
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} id="theme-icon"></i>
          </button>

          <a
            href="/docs/Aritra_Das_CV.pdf"
            download="Aritra_Das_CV.pdf"
            className="btn btn-secondary nav-cv-btn"
            id="nav-cv-btn"
          >
            <i className="fa-solid fa-arrow-down-to-bracket"></i>
            <span>Resume</span>
          </a>

          <button
            className="mobile-nav-toggle"
            id="mobile-toggle"
            aria-label="Open Navigation Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};
