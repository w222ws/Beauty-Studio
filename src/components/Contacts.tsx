import { useState } from "react";
import { Copy, Check, ArrowUpRight, MapPin, Phone, Clock } from "lucide-react";

/* Кастомная SVG-иконка Instagram в общем стиле Lucide */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const address = "вулиця Північнодонецька, 1а, Дніпро";
  const mapsUrl = "https://maps.app.goo.gl/RR79EbY4Pcz5a1cW8";

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
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
      className="bg-[var(--color-ivory)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 select-none"
    >
      <div className="max-w-[960px] mx-auto">
        {/* HEADER (Слева, без дублирования названия) */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[var(--color-gold)]" />
            <span className="font-utility text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--color-ink-soft)]">
              Контакти & Графік
            </span>
          </div>
          <h2 className="font-display font-light uppercase tracking-tight leading-[0.95] text-[clamp(2.4rem,5.5vw,4rem)] text-[var(--color-emerald-deep)]">
            Заплануйте <br />
            <span className="font-sans italic font-normal text-[var(--color-gold)]">
              ваш візит
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[var(--color-ink-soft)] mt-4 max-w-md leading-relaxed">
            Завітайте до нас за преміальним доглядом та гарним настроєм. Чекаємо
            на вас щодня.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* PHONE (Большая карточка слева) */}
          <a
            href="tel:+380973968632"
            className="group md:col-span-8 bg-white/80 border border-[var(--color-stone)] p-6 sm:p-7 rounded-3xl flex items-center justify-between transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-white hover:shadow-sm active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-ivory)] border border-[var(--color-stone)] text-[var(--color-gold)]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-utility text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-1 font-semibold">
                  Швидкий зв'язок
                </span>
                <span className="font-display font-light text-2xl sm:text-3xl text-[var(--color-emerald-deep)]">
                  097 396 86 32
                </span>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[var(--color-ink-soft)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-gold)]" />
          </a>

          {/* INSTAGRAM (Маленькая иконка-кнопка справа) */}
          <a
            href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group md:col-span-4 bg-white/80 border border-[var(--color-stone)] p-6 rounded-3xl flex items-center justify-between transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-white hover:shadow-sm active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-ivory)] border border-[var(--color-stone)] text-[var(--color-gold)]">
                <InstagramIcon className="h-5.5 w-5.5" />
              </div>
              <span className="font-utility text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-emerald-deep)]">
                Instagram
              </span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[var(--color-ink-soft)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-gold)]" />
          </a>

          {/* ADDRESS + MAP LINK */}
          <div
            onClick={() => window.open(mapsUrl, "_blank")}
            className="group cursor-pointer md:col-span-8 bg-white/80 border border-[var(--color-stone)] p-6 sm:p-7 rounded-3xl flex flex-col justify-between gap-4 transition-all duration-300 hover:border-[var(--color-gold)] hover:bg-white hover:shadow-sm active:scale-[0.99]"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-gold)] shrink-0" />
                <span className="font-utility text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] font-semibold">
                  Локація
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--color-stone)] bg-[var(--color-ivory)] font-utility text-[9px] uppercase tracking-wider text-[var(--color-emerald-deep)] transition-colors hover:border-[var(--color-gold)] active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span>Скопійовано</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-[var(--color-ink-soft)]" />
                    <span>Копіювати</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-end justify-between gap-4">
              <p className="font-sans text-sm sm:text-base font-medium text-[var(--color-emerald-deep)] leading-snug">
                {address}
              </p>
              <div className="flex items-center gap-1 shrink-0 font-utility text-[9px] uppercase tracking-wider text-[var(--color-gold)] font-medium">
                <span>Мапа</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* HOURS */}
          <div className="md:col-span-4 bg-white/40 border border-[var(--color-stone)] p-6 rounded-3xl flex flex-col justify-between gap-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--color-gold)] shrink-0" />
              <span className="font-utility text-[9px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] font-semibold">
                Режим роботи
              </span>
            </div>
            <p className="font-sans text-sm font-medium text-[var(--color-emerald-deep)] leading-tight">
              Щодня <br />
              <span className="text-xs text-[var(--color-ink-soft)] font-normal">
                09:00 — 17:00
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
