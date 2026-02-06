import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

function CheckItem({ children }) {
  return (
    <div className="flex gap-2 text-sm text-fg">
      <span aria-hidden className="mt-0.5 select-none text-accent">✓</span>
      <span className="leading-relaxed text-muted">{children}</span>
    </div>
  );
}

export default function PricingCard({
  name,
  popularLabel,
  price,
  hint,
  features = [],
  ctaLabel,
  ctaHref,
  className,
}) {
  return (
    <Card className={cn("p-6 sm:p-8", className)}>
      {popularLabel ? (
        <div className="mb-4">
          <Badge variant="brand">{popularLabel}</Badge>
        </div>
      ) : null}

      {name ? (
        <h3 className="text-xl font-bold text-fg">{name}</h3>
      ) : null}

      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <div className="text-4xl font-bold text-fg sm:text-5xl">{price}</div>
        </div>
        {hint ? <p className="mt-2 text-sm text-muted">{hint}</p> : null}
      </div>

      <div className="mt-6">
        <div className="space-y-3">
          {features.map((feature) => (
            <CheckItem key={feature}>{feature}</CheckItem>
          ))}
        </div>
      </div>

      <div className="mt-7">
        <a href={ctaHref} className="block">
          <Button className="w-full">{ctaLabel}</Button>
        </a>
      </div>
    </Card>
  );
}