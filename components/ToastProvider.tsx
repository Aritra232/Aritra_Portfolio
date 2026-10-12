"use client";

import React, { createContext, useContext, useState } from "react";
import { Toast } from "./Toast";

interface ToastContextType {
  showToast: (msg: string) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toastMessage} />
    </ToastContext.Provider>
  );
};
