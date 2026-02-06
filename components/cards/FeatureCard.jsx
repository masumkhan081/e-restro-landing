import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export default function FeatureCard({ title, description, icon, className }) {
  return (
    <Card className={cn("p-5 sm:p-6", className)}>
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-lg bg-surface-2 text-fg">
          {icon ? <span aria-hidden className="text-lg">{icon}</span> : null}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-fg">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
}