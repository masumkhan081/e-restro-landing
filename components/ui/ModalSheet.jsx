import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export default function ModalSheet({
  open,
  onClose,
  side = "right", // right | left
  title,
  ariaLabel,
  children,
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const modal = (
    <div className="fixed inset-0 z-[9999] bg-black/90">
      {/* backdrop - transparent button for closing */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0"
      />

      {/* panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel || "Menu"}
        className="absolute right-0 top-0 z-10 h-full w-full bg-white shadow-xl md:w-[320px] md:max-w-[85vw]"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <div className="flex items-center">{title}</div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-fg hover:bg-surface-2"
          >
            <span aria-hidden className="relative block h-4 w-4">
              <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
