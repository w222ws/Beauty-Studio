import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Про нас" },
  { href: "#services", label: "Прайс" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#contacts", label: "Контакти" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-base ease-editorial ${
        scrolled
          ? "bg-[var(--color-bg)]/75 backdrop-blur-xl backdrop-saturate-150 border-b border-[var(--color-line)]/60 shadow-[0_4px_20px_-4px_rgba(15,58,47,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="box-border max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="flex flex-col items-center justify-center leading-none select-none group"
        >
          <span className="font-display text-xl sm:text-2xl tracking-[0.18em] text-emerald-deep uppercase transition-colors group-hover:text-gold">
            Victoria
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] tracking-[0.25em] text-ink-soft uppercase font-medium">
            студія краси
          </span>
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink hover:text-emerald-deep transition-colors"
            >
              {item.label}

              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-base ease-editorial group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram студії Victoria"
            className="p-2 text-emerald-deep hover:text-gold transition-all duration-base ease-editorial hover:scale-110 active:scale-95"
          >
            <svg
              className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="tel:+380973968632"
            aria-label="Зателефонувати в студію"
            className="p-2 text-emerald-deep hover:text-gold transition-all duration-base ease-editorial hover:scale-110 active:scale-95"
          >
            <svg
              className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
