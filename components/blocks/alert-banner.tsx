"use client";

import { X } from "lucide-react";
import { useState } from "react";

interface AlertBannerProps {
  message: string;
  variant?: "info" | "warning" | "success" | "error";
  dismissible?: boolean;
}

export default function AlertBanner({ message, variant = "info", dismissible = true }: AlertBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const variants = {
    info: "bg-accent text-white",
    warning: "bg-warning text-white",
    success: "bg-success text-white",
    error: "bg-danger text-white",
  };

  return (
    <div className={`${variants[variant]} py-3 px-4`}>
      <div className="flex items-center justify-between">
        <span className="text-sm">{message}</span>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
