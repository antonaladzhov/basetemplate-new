"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({ type = "single", collapsible = false, className, children }: AccordionProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
}

Accordion.Item = function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <div className="border border-border rounded-lg">
      {children}
    </div>
  );
};

Accordion.Trigger = function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:surface-muted [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
};

Accordion.Content = function AccordionContent({ children, className }: AccordionContentProps) {
  return (
    <div className={cn("px-4 pb-4 text-on-bg", className)}>
      {children}
    </div>
  );
};
