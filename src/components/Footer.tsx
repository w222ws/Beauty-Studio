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
    <footer
      className="
      bg-[var(--color-emerald)]
      text-[var(--color-ivory)]
      px-4 sm:px-6 lg:px-8
      py-6 sm:py-8
    "
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Копірайт + лого */}
          <span
            className="
            font-utility text-[7px] sm:text-[9px]
            uppercase tracking-[0.2em] sm:tracking-[0.25em]
            text-[var(--color-ivory)]/40
            select-none
            whitespace-nowrap
          "
          >
            © 2026{" "}
            <span className="text-[var(--color-gold)] font-medium">
              Victoria
            </span>
          </span>

          {/* Розробник */}
          <div
            className="
            font-utility text-[7px] sm:text-[9px]
            uppercase tracking-[0.2em] sm:tracking-[0.25em]
            text-[var(--color-ivory)]/40
            whitespace-nowrap
          "
          >
            <span className="hidden sm:inline">Розробка: </span>
            <a
              href="https://t.me/off044"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[var(--color-gold)]
                hover:text-[var(--color-ivory)]
                transition-colors duration-300
                font-medium
              "
            >
              Tarasov Kyrylo
            </a>
          </div>

          {/* Наверх */}
          <button
            onClick={handleScrollToTop}
            className="
              group
              inline-flex items-center gap-1.5 sm:gap-2
              font-utility text-[7px] sm:text-[9px]
              uppercase tracking-[0.2em] sm:tracking-[0.25em]
              text-[var(--color-ivory)]/50
              hover:text-[var(--color-gold)]
              transition-colors duration-300
              whitespace-nowrap
            "
          >
            <span className="hidden sm:inline">Наверх</span>
            <ArrowUp
              className="
              h-3 w-3 sm:h-3.5 sm:w-3.5
              transition-transform duration-300
              group-hover:-translate-y-0.5
            "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
