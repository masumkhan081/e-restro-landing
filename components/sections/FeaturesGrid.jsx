import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import FeatureCard from "@/components/cards/FeatureCard";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { landingContent } from "@/content/landing";

export default function FeaturesGrid() {
  const { features } = landingContent;

  return (
    <Section as="section" className="border-t border-border" id="features">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="bg-surface">
              {features.badge}
            </Badge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {features.title.before}{" "}
              {features.title.highlight}
            </h2>

            <p className="mt-3 text-base text-muted">{features.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.items.map((f) => (
            <FeatureCard
              key={f.title}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}