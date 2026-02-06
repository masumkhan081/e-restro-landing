import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { cn } from "@/lib/cn";

export default function LayoutCard({
  id,
  tag,
  title,
  bullets = [],
  imageIndex = 1, // 1-6 for the image files
  className,
}) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-200 p-0 h-full flex flex-col",
        "hover:-translate-y-0.5 hover:shadow-md hover:border-brand/40",
        className
      )}
    >
      {/* Image preview */}
      <div className="relative h-28 w-full overflow-hidden bg-surface-2">
        <Image
          src={`/images/layoutcard-images/${imageIndex}.png`}
          alt={title}
          fill
          className="object-cover"
        />
        
        {/* hover sheen effect */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-white/20 translate-x-0 group-hover:translate-x-[220%] transition-transform duration-500 ease-out" />
        </div>

        {/* Badge positioned top-right */}
        {tag ? (
          <div className="absolute right-2 top-2">
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm shadow-sm">
              {tag}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-5 sm:p-6">

        <h3 className="text-base font-semibold text-fg">{title}</h3>

        {bullets?.length ? (
          <ul className="mt-3 flex-grow space-y-2 text-sm text-muted">
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
            className="w-full cursor-pointer"
          >
            Preview Layout
          </Button>
        </div>
      </div>
    </Card>
  );
}
