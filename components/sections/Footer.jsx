import Container from "@/components/ui/Container";
import { landingContent } from "@/content/landing";

function BrandMark() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-fg shadow-sm">
      <span className="text-sm font-bold">e</span>
    </span>
  );
}

export default function Footer() {
  const { footer, header } = landingContent;

  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href={header.brand.href} className="flex items-center gap-3">
              <BrandMark />
              <span className="text-base font-semibold text-fg">{header.brand.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {footer.brandText}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold text-fg">{col.title}</div>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-muted hover:text-fg">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <div>
            {footer.copyright
              .replace("{year}", new Date().getFullYear())
              .replace("{brand}", header.brand.name)}
          </div>
          <div className="flex gap-4">
            {footer.bottomNav.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-fg">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}