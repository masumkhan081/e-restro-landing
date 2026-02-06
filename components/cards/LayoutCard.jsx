import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

const previewBg = {
  a: "bg-layout-a",
  b: "bg-layout-b",
  c: "bg-layout-c",
  d: "bg-layout-d",
  e: "bg-layout-e",
  f: "bg-layout-f",
};

export default function LayoutCard({
  id,
  tag,
  title,
  bullets = [],
  previewTone = "a", // a..f (theme token)
  className,
}) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-md hover:border-brand/40",
        className
      )}
    >
      {/* Colorful preview */}
      <div className={cn("relative h-28 w-full", previewBg[previewTone] || "bg-layout-a")}>
        {/* subtle overlay pattern (no gradient) */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white" />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-black" />
        </div>

        {/* hover sheen effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/20 translate-x-0 group-hover:translate-x-[220%] transition-transform duration-500 ease-out" />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {tag ? <Badge variant="outline" className="bg-surface">{tag}</Badge> : null}

        <h3 className="mt-3 text-base font-semibold text-fg">{title}</h3>

        {bullets?.length ? (
          <ul className="mt-3 confirm space-y-2 text-sm text-muted">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-border" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5">
          <Button
            variant="outline"
            type="button"
            className="w-full"
          >
            Preview Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}
