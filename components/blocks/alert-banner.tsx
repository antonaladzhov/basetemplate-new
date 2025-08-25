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
    info: "bg-[var(--accent)] text-[var(--accent-foreground)]",
warning: "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
success: "bg-[var(--accent)] text-[var(--accent-foreground)]",
error: "bg-[var(--destructive)] text-[var(--destructive-foreground)]",
  };

  return (
    <div className={`${variants[variant]} py-3 px-4`}>
      <div className="flex items-center justify-between">
        <span className="text-sm">{message}</span>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-[var(--background)]/20 rounded"
            aria-label="Dismiss alert"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
