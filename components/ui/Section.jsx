import { cn } from "@/lib/cn";

export default function Section({
  className,
  variant = "default", // default | soft
  as: Comp = "section",
  ...props
}) {
  const variants = {
    default: "bg-bg",
    soft: "bg-surface-2",
  };

  return (
    <Comp className={cn("py-14 sm:py-16", variants[variant], className)} {...props} />
  );
}
