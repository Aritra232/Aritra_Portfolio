import React from "react";

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      className="toast show"
      id="toast"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        padding: "12px 20px",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--card-shadow-hover)",
        border: "1px solid var(--border-color)",
        zIndex: 9999,
        fontFamily: "var(--font-mono)",
        fontSize: "0.85rem",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s ease",
      }}
    >
      <i className="fa-solid fa-circle-check" style={{ color: "var(--accent-emerald)" }}></i>
      <span>{message}</span>
    </div>
  );
};
