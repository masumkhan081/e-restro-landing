import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export default function ModalSheet({
  open,
  onClose,
  side = "right", // right | left
  title,
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
        aria-label={title || "Menu"}
        className="absolute right-0 top-0 z-10 h-full w-full bg-white shadow-xl md:w-[320px] md:max-w-[85vw]"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <div className="text-sm font-semibold text-fg">{title}</div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium text-fg hover:bg-surface-2"
          >
            Close
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}