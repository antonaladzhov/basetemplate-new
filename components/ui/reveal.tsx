"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  /** ms */
  delay?: number;
  /** animation variant */
  variant?: "fade-up" | "fade-in" | "fade-right" | "fade-left";
  /** only animate the first time it enters viewport */
  once?: boolean;
};

export default function Reveal({
  children,
  as = "div",
  className = "",
  delay = 0,
  variant = "fade-up",
  once = true,
}: RevealProps) {
  const Tag = as as any;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current as Element;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  const baseHidden =
    variant === "fade-up"
      ? "opacity-0 translate-y-4"
      : variant === "fade-right"
      ? "opacity-0 -translate-x-4"
      : variant === "fade-left"
      ? "opacity-0 translate-x-4"
      : "opacity-0";

  const baseVisible = "opacity-100 translate-y-0 translate-x-0";

  return (
    <Tag
      ref={ref as any}
      className={`will-change-transform transition-all duration-700 ease-out ${
        inView ? baseVisible : baseHidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}


