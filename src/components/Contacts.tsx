import { useState } from "react";
import { Phone, MapPin, Clock, Copy, Check, ArrowUpRight } from "lucide-react";

/* ============================================================
   CONTACT
============================================================ */
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const address = "вулиця Північнодонецька, 1а, Дніпро";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contacts"
      className="
        bg-[var(--color-ivory)]
        py-16 sm:py-24
        px-4 sm:px-6 lg:px-8
        scroll-mt-20
      "
    >
      <div className="max-w-[1100px] mx-auto">
        {/* ========== HEADER ========== */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-10 sm:w-14 bg-[var(--color-gold)]" />
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)]">
              Контакти
            </span>
          </div>
          <h2 className="font-display font-light uppercase tracking-[-0.04em] leading-[0.9] text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--color-emerald-deep)]">
            Чекаємо
            <span className="block mt-1 font-sans font-normal italic text-[clamp(1.5rem,3.5vw,2.5rem)] text-[var(--color-gold)]">
              на вас
            </span>
          </h2>
        </div>

        {/* ========== CONTENT ========== */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Перша картка — телефон */}
          <a
            href="tel:+380973968632"
            className="
              group
              flex items-center justify-between
              bg-[var(--color-emerald)]
              text-[var(--color-ivory)]
              px-5 sm:px-8 py-5 sm:py-7
              transition-all duration-500
              hover:bg-[var(--color-emerald-mid)]
            "
          >
            <div className="flex items-center gap-3.5 sm:gap-5">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-gold)]" />
              <div>
                <p className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[var(--color-ivory)]/50 mb-1">
                  Телефон
                </p>
                <p className="font-display font-light text-lg sm:text-2xl leading-tight">
                  097 396 86 32
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="
              h-4 w-4 sm:h-5 sm:w-5
              text-[var(--color-gold)]
              transition-transform duration-500
              group-hover:rotate-45
            "
            />
          </a>

          {/* Друга картка — адреса + копіювання */}
          <div
            className="
            flex items-center justify-between
            border border-[var(--color-stone)]
            px-5 sm:px-8 py-5 sm:py-7
            transition-all duration-500
            hover:border-[var(--color-gold)]/50
          "
          >
            <div className="flex items-center gap-3.5 sm:gap-5">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-gold)] shrink-0" />
              <div>
                <p className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[var(--color-ink)]/50 mb-1">
                  Адреса
                </p>
                <p className="font-sans text-[12px] sm:text-sm leading-snug text-[var(--color-ink)]">
                  {address}
                </p>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="
                flex items-center gap-2
                shrink-0
                ml-3
                px-3 sm:px-4 py-2
                border border-[var(--color-stone)]
                transition-all duration-300
                hover:border-[var(--color-gold)]
                hover:text-[var(--color-emerald)]
                active:scale-[0.95]
              "
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-gold)]" />
              ) : (
                <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              )}
              <span className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.2em]">
                {copied ? "Готово" : "Копіювати"}
              </span>
            </button>
          </div>

          {/* Третя картка — години */}
          <div
            className="
            flex items-center justify-between
            border border-[var(--color-stone)]
            px-5 sm:px-8 py-5 sm:py-7
          "
          >
            <div className="flex items-center gap-3.5 sm:gap-5">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-gold)]" />
              <div>
                <p className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[var(--color-ink)]/50 mb-1">
                  Графік
                </p>
                <p className="font-sans text-[12px] sm:text-sm text-[var(--color-ink)]">
                  Щодня · 09:00 — 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Четверта — карти + інста */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <a
              href="https://maps.app.goo.gl/RR79EbY4Pcz5a1cW8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-between
                border border-[var(--color-stone)]
                px-4 sm:px-6 py-4 sm:py-5
                transition-all duration-500
                hover:border-[var(--color-gold)]/50
                hover:bg-white
              "
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-gold)]" />
                <span className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink)]/70">
                  Мапа
                </span>
              </div>
              <ArrowUpRight
                className="
                h-3.5 w-3.5 sm:h-4 sm:w-4
                text-[var(--color-emerald)]
                transition-transform duration-500
                group-hover:rotate-45
              "
              />
            </a>

            <a
              href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex items-center justify-between
                border border-[var(--color-stone)]
                px-4 sm:px-6 py-4 sm:py-5
                transition-all duration-500
                hover:border-[var(--color-gold)]/50
                hover:bg-white
              "
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg
                  className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[var(--color-gold)]"
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
                <span className="font-utility text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink)]/70">
                  Instagram
                </span>
              </div>
              <ArrowUpRight
                className="
                h-3.5 w-3.5 sm:h-4 sm:w-4
                text-[var(--color-emerald)]
                transition-transform duration-500
                group-hover:rotate-45
              "
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
