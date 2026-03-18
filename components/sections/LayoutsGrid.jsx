import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import LayoutCard from "@/components/cards/LayoutCard";
import Reveal from "@/components/ui/Reveal";
import { landingContent } from "@/content/landing";

export default function LayoutsGrid() {
  const { layouts } = landingContent;

  return (
    <Section id="layouts" className="border-t border-border">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {layouts.title}
            </h2>
            <p className="mt-3 text-base text-muted">{layouts.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {layouts.items.map((l) => (
            <LayoutCard
              key={l.id}
              id={l.id}
              tag={l.tag}
              title={l.title}
              bullets={l.bullets}
              ctaLabel={l.ctaLabel}
              imageIndex={l.imageIndex}
            />
          ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
