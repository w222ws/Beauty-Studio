import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--color-ivory)] border-t border-[var(--color-stone)] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[960px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="font-utility text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--color-emerald-deep)] font-semibold">
              Victoria Studio
            </span>
          </div>

          <div className="font-utility text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
            <span>Розробка: </span>
            <a
              href="https://t.me/off044"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-emerald-deep)] hover:text-[var(--color-gold)] font-semibold underline underline-offset-4 decoration-[var(--color-gold)] transition-colors duration-300"
            >
              Tarasov Kyrylo
            </a>
          </div>

          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Вгору"
            className="group flex items-center gap-2 font-utility text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] hover:text-[var(--color-gold)] transition-colors duration-300 active:scale-95"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <span>Вгору</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-stone)] bg-white/80 transition-all duration-300 group-hover:border-[var(--color-gold)] group-hover:bg-white">
              <ArrowUp className="h-3.5 w-3.5 text-[var(--color-gold)] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
