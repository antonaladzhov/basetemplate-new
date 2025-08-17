import { cn } from "@/lib/utils";

interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ 
  type = "text", 
  placeholder, 
  className,
  name,
  value,
  onChange 
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={cn(
        "flex h-10 w-full rounded-md border border-input surface-bg px-3 py-2 text-sm text-on-bg placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  );
}
