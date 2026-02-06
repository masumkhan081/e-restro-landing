import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { landingContent } from "@/content/landing";

export default function FinalCTA() {
  const { finalCta } = landingContent;

  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <Card className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {finalCta.title}
              </h2>
              <p className="mt-2 text-base text-muted">{finalCta.subtitle}</p>
            </div>

            <a href={finalCta.cta.href}>
              <Button size="lg">{finalCta.cta.label}</Button>
            </a>
          </div>
        </Card>
      </Container>
    </Section>
  );
}