import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Прайс" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#contacts", label: "Контакти" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 16;

        setScrolled((current) =>
          current === nextScrolled ? current : nextScrolled,
        );

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 w-full",
        "transition-all duration-base ease-editorial",
        scrolled
          ? [
              "bg-[color:color-mix(in_srgb,var(--color-bg)_70%,transparent)]",
              "backdrop-blur-2xl",
              "backdrop-saturate-[1.8]",
              "border-b border-[var(--color-line)]/40",
              "shadow-[0_12px_40px_-12px_rgb(15_43_33_/_0.15)]",
              "py-2",
            ].join(" ")
          : "bg-transparent border-b border-transparent py-5",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          aria-label="Victoria — студія краси"
          className="flex shrink-0 items-center text-emerald-deep transition-transform duration-base ease-editorial hover:scale-[1.02] focus-visible:scale-[1.02]"
        >
          <img
            src="/logo2.svg"
            alt="Victoria — студія краси"
            width="150"
            height="48"
            className="h-6 w-auto object-contain sm:h-7"
          />
        </a>

        <nav
          aria-label="Основна навігація"
          className="hidden items-center gap-8 md:flex lg:gap-10"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group relative py-2
                font-mono text-[10px]
                uppercase tracking-[0.2em]
                text-ink
                transition-colors duration-fast ease-editorial
                hover:text-emerald-deep
                focus-visible:text-emerald-deep
              "
            >
              {item.label}

              <span
                aria-hidden="true"
                className="
                  absolute inset-x-0 bottom-0
                  h-[1px] origin-center
                  scale-x-0
                  bg-gold
                  transition-transform
                  duration-base
                  ease-editorial
                  group-hover:scale-x-100
                  group-focus-visible:scale-x-100
                "
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <a
            href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram студії Victoria"
            className="
              rounded-full p-2.5
              text-emerald-deep
              transition-colors duration-fast ease-editorial
              hover:bg-emerald-deep/5 hover:text-gold
              focus-visible:text-gold
            "
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="tel:+380973968632"
            aria-label="Зателефонувати в студію"
            className="
              rounded-full p-2.5
              text-emerald-deep
              transition-colors duration-fast ease-editorial
              hover:bg-emerald-deep/5 hover:text-gold
              focus-visible:text-gold
            "
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
