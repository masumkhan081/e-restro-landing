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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">{finalCta.subtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {finalCta.buttons.map((btn) => (
              <a key={btn.label} href={btn.href}>
                <Button size="lg">{btn.label}</Button>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-muted">
            <a href={`tel:${finalCta.contact.phone}`} className="hover:text-fg">
              {finalCta.contact.phone}
            </a>
            <a href={`mailto:${finalCta.contact.email}`} className="hover:text-fg">
              {finalCta.contact.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}