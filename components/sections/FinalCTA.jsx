"use client";

import { useState } from "react";
import Script from "next/script";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { landingContent } from "@/content/landing";

export default function FinalCTA() {
  const { finalCta } = landingContent;
  const primaryPhone = finalCta.contact.phones[0];
  const [primaryButton] = finalCta.buttons;
  /* --- Custom form state and handlers (temporarily commented out for Tally integration) ---
  const initialValues = finalCta.demoForm.fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
  const [formValues, setFormValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Demo request from ${formValues.personName} - ${formValues.companyName}`
    );
    const body = encodeURIComponent(
      [
        `Person's Name: ${formValues.personName}`,
        `Company Name: ${formValues.companyName}`,
        `Email: ${formValues.email}`,
        `Phone Number: ${formValues.phone}`,
      ].join("\n")
    );

    window.location.href = `mailto:${finalCta.contact.email}?subject=${subject}&body=${body}`;
  }
  --- */

  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <div>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">{finalCta.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 text-center shadow-sm sm:p-8 lg:justify-center lg:text-left">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a href={primaryButton.href}>
                  <Button size="lg">{primaryButton.label}</Button>
                </a>
                <a
                  href={`tel:${primaryPhone}`}
                  className="text-base font-semibold text-fg hover:text-muted"
                >
                  {primaryPhone}
                </a>
              </div>

              {finalCta.contactPrompt ? (
                <p className="mt-6 text-base text-muted">{finalCta.contactPrompt}</p>
              ) : null}

              <div className="mt-5 flex flex-col items-center justify-center gap-3 text-sm text-muted lg:items-start lg:justify-start">
                {finalCta.contact.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="font-semibold hover:text-fg">
                    {phone}
                  </a>
                ))}
                <a
                  href={`mailto:${finalCta.contact.email}`}
                  className="font-semibold hover:text-fg"
                >
                  {finalCta.contact.email}
                </a>
              </div>
            </div>

            <div
              id="demo-form"
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-fg">
                  {finalCta.demoForm.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {finalCta.demoForm.subtitle}
                </p>
              </div>

              {/* --- Custom Form React Code (temporarily commented out for Tally integration) ---
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {finalCta.demoForm.fields.map((field) => (
                    <label key={field.id} htmlFor={field.id} className="block text-left">
                      <span className="mb-2 block text-sm font-medium text-fg">
                        {field.label}
                      </span>
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        value={formValues[field.name]}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-lg border border-border bg-bg px-4 text-base text-fg outline-none transition-colors placeholder:text-muted focus:border-fg"
                      />
                    </label>
                  ))}
                </div>

                <div className="mt-5">
                  <Button type="submit" size="lg" className="w-full">
                    {finalCta.demoForm.submitLabel}
                  </Button>
                </div>
              </form>
              */}

              {/* Tally Embedded Form */}
              <iframe 
                data-tally-src="https://tally.so/embed/BzDGKN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="295"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Get a Demo"
                className="mt-6"
              ></iframe>
              <Script id="tally-js" src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
