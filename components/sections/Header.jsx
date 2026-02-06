"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ModalSheet from "@/components/ui/ModalSheet";
import { landingContent } from "@/content/landing";

function BrandMark() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-brand-fg shadow-sm">
      <span className="text-lg font-bold">e</span>
    </span>
  );
}

function Hamburger({ open }) {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-2">
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span
        aria-hidden
        className="absolute h-0.5 w-5 bg-fg transition-transform"
        style={{ transform: open ? "rotate(45deg)" : "translateY(-6px)" }}
      />
      <span
        aria-hidden
        className="absolute h-0.5 w-5 bg-fg transition-opacity"
        style={{ opacity: open ? 0 : 1 }}
      />
      <span
        aria-hidden
        className="absolute h-0.5 w-5 bg-fg transition-transform"
        style={{ transform: open ? "rotate(-45deg)" : "translateY(6px)" }}
      />
    </span>
  );
}

export default function Header() {
  const { header, nav } = landingContent;
  const [open, setOpen] = useState(false);

  // Auto-close when viewport becomes desktop (prevents stuck open)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // md
    const handler = () => {
      if (mq.matches) setOpen(false);
    };
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href={header.brand.href} className="flex items-center gap-3">
          <BrandMark />
          <span className="text-lg font-bold text-fg">{header.brand.name}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Hamburger open={open} />
        </button>
      </Container>

      {/* Mobile sheet */}
      <ModalSheet open={open} onClose={close} title="Menu">
        <div id="mobile-nav" className="space-y-2">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={close}
              className="block rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-fg hover:bg-surface-2"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3">
            <a href={header.signIn.href} onClick={close} className="block">
              <Button variant="outline" className="w-full">
                {header.signIn.label}
              </Button>
            </a>
          </div>

          <div className="pt-2">
            <a href={header.ctaRight.href} onClick={close} className="block">
              <Button className="w-full">{header.ctaRight.label}</Button>
            </a>
          </div>
        </div>
      </ModalSheet>
    </header>
  );
}