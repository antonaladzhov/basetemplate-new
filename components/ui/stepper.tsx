import { cn } from "@/lib/utils";

interface StepperProps {
  steps: Array<{ step: string; description: string }>;
  className?: string;
}

export default function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {steps.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primaryFg text-sm font-medium">
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{item.step}</h3>
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
