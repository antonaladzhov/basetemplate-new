import { CheckCircle } from "lucide-react";

interface StepperProps {
  items: Array<{ step: string; description: string }>;
  className?: string;
}

export default function Stepper({ items, className = "" }: StepperProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full surface-primary text-on-primary flex items-center justify-center text-sm font-medium">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium text-on-bg">{item.step}</h3>
            <p className="mt-1 text-sm text-on-bg">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
