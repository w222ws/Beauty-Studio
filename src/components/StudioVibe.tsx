export default function StudioServicesMarquee() {
  const primaryItems = [
    "Стильні стрижки",
    "Ідеальні брови",
    "Бездоганний манікюр",
    "Експертний догляд",
    "Атмосфера затишку",
  ];

  const secondaryItems = [
    "Дніпро, Ігрень",
    "100% стерильність",
    "Преміум матеріали",
    "Індивідуальний підхід",
  ];

  return (
    <div
      id="about"
      className="relative w-full overflow-hidden bg-[var(--color-emerald-deep)] py-7 text-[#F5F2EB] shadow-2xl sm:py-9 select-none"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[var(--color-emerald-deep)] to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[var(--color-emerald-deep)] to-transparent sm:w-36" />

      <div className="flex flex-col gap-3.5 sm:gap-4">
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee-left items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {[...primaryItems, ...primaryItems].map((text, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-12">
                <span className="font-display text-lg font-light tracking-wide text-[#F5F2EB] sm:text-2xl">
                  {text}
                </span>
                <span className="text-xs text-[var(--color-gold)] opacity-70">
                  •
                </span>
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee-left items-center gap-8 sm:gap-12 pr-8 sm:pr-12"
          >
            {[...primaryItems, ...primaryItems].map((text, i) => (
              <div
                key={`dup1-${i}`}
                className="flex items-center gap-8 sm:gap-12"
              >
                <span className="font-display text-lg font-light tracking-wide text-[#F5F2EB] sm:text-2xl">
                  {text}
                </span>
                <span className="text-xs text-[var(--color-gold)] opacity-70">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="flex shrink-0 animate-marquee-right items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {[...secondaryItems, ...secondaryItems, ...secondaryItems].map(
              (text, i) => (
                <div key={i} className="flex items-center gap-8 sm:gap-12">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--color-gold)]/90 sm:text-xs">
                    {text}
                  </span>
                  <span className="text-[10px] text-[var(--color-gold)]/70">
                    ✦
                  </span>
                </div>
              ),
            )}
          </div>

          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee-right items-center gap-8 sm:gap-12 pr-8 sm:pr-12"
          >
            {[...secondaryItems, ...secondaryItems, ...secondaryItems].map(
              (text, i) => (
                <div
                  key={`dup2-${i}`}
                  className="flex items-center gap-8 sm:gap-12"
                >
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--color-gold)]/90 sm:text-xs">
                    {text}
                  </span>
                  <span className="text-[10px] text-[var(--color-gold)]/70">
                    ✦
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
