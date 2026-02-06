import { cn } from "@/lib/cn";

export default function Card({ className, as: Comp = "div", ...props }) {
  return (
    <Comp
      className={cn(
        "rounded-lg border border-border bg-surface shadow-sm",
        className
      )}
      {...props}
    />
  );
}