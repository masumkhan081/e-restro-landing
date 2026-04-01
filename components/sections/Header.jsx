"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ModalSheet from "@/components/ui/ModalSheet";
import { landingContent } from "@/content/landing";

function BrandMark() {
  return (
    <Image
      src="/logo/erestro-dark-two-tone.png"
      alt="e-Restro logo"
      width={140}
      height={44}
      className="h-11 w-auto"
      priority
    />
  );
}

function Hamburger({ open, menuA11y }) {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface hover:bg-surface-2">
      <span className="sr-only">{open ? menuA11y.close : menuA11y.open}</span>
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
        <a href={header.brand.href} className="flex items-center">
          <BrandMark />
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
          <Hamburger open={open} menuA11y={header.menuA11y} />
        </button>
      </Container>

      {/* Mobile sheet */}
      <ModalSheet
        open={open}
        onClose={close}
        title={<BrandMark />}
        ariaLabel="Navigation menu"
      >
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
            <a href={header.ctaRight.href} onClick={close} className="block">
              <Button className="w-full">{header.ctaRight.label}</Button>
            </a>
          </div>
        </div>
      </ModalSheet>
    </header>
  );
}
