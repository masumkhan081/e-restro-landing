import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import PricingCard from "@/components/cards/PricingCard";
import Reveal from "@/components/ui/Reveal";
import { landingContent } from "@/content/landing";

export default function Pricing() {
  const { pricing } = landingContent;

  return (
    <Section id="pricing" className="border-t border-border" variant="soft">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center"> 
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {pricing.title}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {pricing.packages.map((p) => (
            <PricingCard
              key={p.name}
              name={p.name}
              popularLabel={p.popularLabel}
              price={p.price}
              hint={p.hint}
              features={p.features}
              ctaLabel={p.cta.label}
              ctaHref={p.cta.href}
              className={
                p.popularLabel
                  ? "border-brand shadow-md"
                  : ""
              }
            />
          ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}