import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/ui/Reveal";
import { landingContent } from "@/content/landing";

export default function WhyChoose() {
  const { whyChoose } = landingContent;

  return (
    <Section as="section" className="border-t border-border" id="why-choose">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge>{whyChoose.badge}</Badge>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {whyChoose.title.before}{" "}
              {whyChoose.title.highlight}
            </h2>

            <p className="mt-3 text-base text-muted">{whyChoose.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 mx-auto max-w-3xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-border bg-bg p-4"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand text-sm font-bold">
                    {item.icon}
                  </span>
                  <p className="text-fg font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
