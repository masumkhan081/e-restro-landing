import { cn } from "@/lib/cn";

export default function Badge({ className, variant = "muted", ...props }) {
  const variants = {
    muted: "bg-surface-2 text-fg border-border",
    brand: "bg-brand text-brand-fg border-transparent",
    outline: "bg-transparent text-fg border-border",
    accent: "bg-surface-2 text-accent border-border",
    accent2: "bg-surface-2 text-accent-2 border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}