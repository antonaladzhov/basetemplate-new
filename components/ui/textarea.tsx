import { cn } from "@/lib/utils";

interface TextareaProps {
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ 
  placeholder, 
  className,
  name,
  value,
  onChange 
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input surface-bg px-3 py-2 text-sm text-on-bg placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  );
}
