import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { landingContent } from "@/content/landing";

function HeroTitle({ t }) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl">
      {t.before}{" "}
      <span className="text-accent">{t.highlight1}</span>{" "}
      {t.middle}{" "}
      <span className="text-accent-2">{t.highlight2}</span>{" "}
      {t.after}
    </h1>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
      {children}
    </span>
  );
}

export default function Hero() {
  const { hero } = landingContent;

  return (
    <Section className="pt-10 sm:pt-12">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Badge variant="outline" className="bg-surface">
            {hero.trustBadge}
          </Badge>

          <div className="mt-5">
            <HeroTitle t={hero.title} />
          </div>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {hero.chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={hero.ctas.primary.href}>
              <Button size="lg">{hero.ctas.primary.label}</Button>
            </a>
            <a href={hero.ctas.secondary.href}>
              <Button variant="outline" size="lg">
                {hero.ctas.secondary.label}
              </Button>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <Card className="relative overflow-hidden p-3 sm:p-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-surface-2">
              {/* Replace src with your real screenshot/mock */}
              <Image
                src={hero.mockupImage.src}
                alt={hero.mockupImage.alt}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Card>

          {/* floating pills */}
          <div className="pointer-events-none absolute -left-2 top-6 hidden sm:block">
            <div className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg shadow-sm">
              Real-time Sync
            </div>
          </div>

          <div className="pointer-events-none absolute -right-2 bottom-6 hidden sm:block">
            <div className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg shadow-sm">
              Quick Orders
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}