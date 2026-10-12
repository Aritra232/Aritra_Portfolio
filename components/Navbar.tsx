"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Skills", href: "/skills" },
    { label: "Publications", href: "/publications" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        {/* Brand */}
        <Link href="/" className="nav-brand" aria-label="Aritra Das">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/aritra_pic.jpeg"
            alt="Aritra Das"
            className="nav-avatar-mini"
          />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Aritra Das</span>
            <span className="nav-brand-title">AI ENGINEER · RESEARCHER</span>
          </div>
        </Link>

        {/* Primary Links */}
        <nav>
          <ul className={`nav-links ${mobileOpen ? "open" : ""}`} id="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? "active" : ""}`}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              </li>
            ))}
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
