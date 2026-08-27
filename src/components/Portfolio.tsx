import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.jpg";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.jpg";
import p7 from "../assets/portfolio/p7.jpg";
import p8 from "../assets/portfolio/p8.jpg";

interface PortfolioImage {
  id: number;
  src: string;
  gender: "female" | "male";
  aspect: "portrait" | "landscape" | "square";
}

const portfolioData: PortfolioImage[] = [
  { id: 1, src: p1, gender: "female", aspect: "portrait" },
  { id: 2, src: p2, gender: "female", aspect: "square" },
  { id: 3, src: p3, gender: "female", aspect: "landscape" },
  { id: 4, src: p4, gender: "female", aspect: "portrait" },

  { id: 5, src: p5, gender: "male", aspect: "square" },
  { id: 6, src: p6, gender: "male", aspect: "portrait" },
  { id: 7, src: p7, gender: "male", aspect: "landscape" },
  { id: 8, src: p8, gender: "male", aspect: "square" },
];

const tabs = [
  { id: "female" as const, label: "Жіночі", count: "04" },
  { id: "male" as const, label: "Чоловічі", count: "04" },
];

const JewelDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <span className="h-px flex-1 bg-[var(--color-stone)]" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[var(--color-gold)]" />
    <span className="h-px flex-1 bg-[var(--color-stone)]" />
  </div>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"female" | "male">("female");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const filteredImages = portfolioData.filter(
    (image) => image.gender === activeTab,
  );

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const switchTab = useCallback((tab: "female" | "male") => {
    setActiveTab(tab);
    setSelectedIndex(null);
  }, []);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") previousImage();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, nextImage, previousImage]);

  // Lock page scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const diffX = touchStartX.current - event.changedTouches[0].clientX;

    const diffY = touchStartY.current - event.changedTouches[0].clientY;

    if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0 && activeTab === "female") {
        switchTab("male");
      }

      if (diffX < 0 && activeTab === "male") {
        switchTab("female");
      }
    }
  };

  const getGridClass = (index: number) => {
    /*
      Mobile:
      editorial asymmetric rhythm.

      Desktop:
      large first image + varied cards.
    */

    if (index === 0) {
      return "col-span-2 row-span-2 aspect-[4/5] sm:aspect-auto";
    }

    if (index === 1) {
      return "col-span-1 aspect-square";
    }

    if (index === 2) {
      return "col-span-1 aspect-[3/4]";
    }

    if (index === 3) {
      return "col-span-2 aspect-[16/10]";
    }

    return "col-span-1 aspect-square";
  };

  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        bg-[var(--color-ivory)]
        py-20
        sm:py-28
        lg:py-36
        scroll-mt-20
      "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[var(--color-gold)]/5
          blur-3xl
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-40
          h-80
          w-80
          rounded-full
          bg-[var(--color-emerald)]/5
          blur-3xl
        "
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--color-gold)] sm:w-12" />

            <span
              className="
                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[var(--color-ink-soft)]
              "
            >
              Portfolio · 2026
            </span>
          </div>

          <div className="max-w-4xl">
            <h2
              className="
                font-display
                text-[clamp(3.2rem,11vw,7rem)]
                font-light
                uppercase
                leading-[0.82]
                tracking-[-0.055em]
                text-[var(--color-emerald-deep)]
              "
            >
              Естетика
            </h2>

            <div className="mt-3 flex items-end gap-4 sm:mt-5">
              <span
                className="
                  font-sans
                  text-[clamp(1.5rem,4vw,2.8rem)]
                  font-normal
                  italic
                  leading-none
                  tracking-[-0.03em]
                  text-[var(--color-gold)]
                "
              >
                результату
              </span>

              <span className="mb-1 hidden h-px w-16 bg-[var(--color-stone)] sm:block lg:w-28" />
            </div>
          </div>

          <p
            className="
              mt-7
              max-w-[420px]
              font-sans
              text-[11px]
              font-normal
              leading-[1.8]
              tracking-[0.02em]
              text-[var(--color-ink-soft)]
              sm:mt-9
              sm:text-xs
            "
          >
            Роботи, в яких краса не потребує зайвих слів.
            <br />
            Форма, текстура та індивідуальність.
          </p>
        </motion.header>

        {/* =====================================================
            CATEGORY NAV
        ====================================================== */}

        <div className="mb-8 sm:mb-12">
          <div className="flex items-end justify-between border-b border-[var(--color-stone)]">
            <div className="flex">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => switchTab(tab.id)}
                    className={`
                      relative
                      flex
                      items-center
                      gap-2
                      px-4
                      pb-4
                      pt-2
                      font-sans
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      transition-colors
                      duration-500
                      sm:px-7
                      sm:pb-5
                      sm:text-[11px]
                      ${
                        isActive
                          ? "text-[var(--color-emerald)]"
                          : "text-[var(--color-ink)]/35 hover:text-[var(--color-ink)]/70"
                      }
                    `}
                  >
                    {tab.label}

                    <span
                      className={`
                        text-[8px]
                        tracking-normal
                        transition-colors
                        ${
                          isActive
                            ? "text-[var(--color-gold)]"
                            : "text-[var(--color-ink)]/25"
                        }
                      `}
                    >
                      {tab.count}
                    </span>

                    {isActive && (
                      <motion.span
                        layoutId="portfolio-active-tab"
                        className="
                          absolute
                          bottom-[-1px]
                          left-0
                          right-0
                          h-[2px]
                          bg-[var(--color-gold)]
                        "
                        transition={{
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <span
              className="
                mb-4
                hidden
                font-utility
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-[var(--color-ink-soft)]/50
                sm:block
                sm:mb-5
              "
            >
              Swipe to explore
            </span>
          </div>
        </div>

        {/* =====================================================
            GALLERY
        ====================================================== */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              grid
              grid-cols-2
              gap-2
              sm:gap-4
              lg:grid-cols-4
              lg:auto-rows-[170px]
            "
          >
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                onClick={() => openImage(index)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  ${getGridClass(index)}
                  group
                  relative
                  overflow-hidden
                  bg-[var(--color-stone)]/20
                  text-left
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[var(--color-gold)]
                  lg:aspect-auto
                `}
              >
                <img
                  src={image.src}
                  alt={`Робота ${image.id}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.045]
                  "
                />

                {/* Soft hover veil */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--color-emerald-deep)]/55
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Editorial number */}
                <div
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    items-center
                    gap-2
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    sm:left-4
                    sm:top-4
                  "
                >
                  <span className="h-px w-5 bg-[var(--color-gold)]" />

                  <span
                    className="
                      font-utility
                      text-[8px]
                      tracking-[0.25em]
                      text-white
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom label */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-3
                    right-3
                    translate-y-2
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    sm:bottom-4
                    sm:left-4
                    sm:right-4
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-sans
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white
                      "
                    >
                      Beauty studio
                    </span>

                    <span
                      className="
                        font-utility
                        text-[8px]
                        tracking-[0.2em]
                        text-[var(--color-gold)]
                      "
                    >
                      2026
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-14 sm:mt-20"
        >
          <JewelDivider />

          <div className="flex flex-col gap-7 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pt-10">
            <div>
              <span
                className="
                  font-sans
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[var(--color-ink-soft)]
                "
              >
                Ваш образ
              </span>

              <p
                className="
                  mt-2
                  max-w-[330px]
                  font-display
                  text-2xl
                  font-light
                  leading-tight
                  tracking-[-0.02em]
                  text-[var(--color-emerald-deep)]
                  sm:text-3xl
                "
              >
                Деталі створюють
                <br />
                <span className="italic text-[var(--color-gold)]">
                  враження.
                </span>
              </p>
            </div>

            <a
              href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-4
                border-b
                border-[var(--color-emerald)]
                pb-2
                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--color-emerald)]
                transition-all
                duration-500
                hover:gap-6
                hover:border-[var(--color-gold)]
                hover:text-[var(--color-gold)]
              "
            >
              Більше робіт
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h13" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[var(--color-emerald-deep)]/95
              p-3
              backdrop-blur-md
              sm:p-6
            "
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Закрити"
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                text-white/60
                transition-colors
                hover:text-[var(--color-gold)]
                sm:right-7
                sm:top-7
              "
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>

            {/* Counter */}
            <div
              className="
                absolute
                left-5
                top-6
                z-20
                flex
                items-center
                gap-3
                sm:left-8
                sm:top-8
              "
            >
              <span className="h-px w-7 bg-[var(--color-gold)]" />

              <span
                className="
                  font-utility
                  text-[9px]
                  tracking-[0.25em]
                  text-white/60
                "
              >
                {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                {String(filteredImages.length).padStart(2, "0")}
              </span>
            </div>

            {/* Previous */}
            <button
              type="button"
              aria-label="Попереднє фото"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="
                absolute
                left-2
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                text-white/50
                transition-all
                hover:text-[var(--color-gold)]
                sm:left-6
              "
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                flex
                max-h-[88vh]
                max-w-[92vw]
                items-center
                justify-center
                sm:max-w-[80vw]
              "
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={`Робота ${selectedImage.id}`}
                className="
                  max-h-[84vh]
                  w-auto
                  max-w-full
                  object-contain
                  shadow-2xl
                "
              />
            </motion.div>

            {/* Next */}
            <button
              type="button"
              aria-label="Наступне фото"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="
                absolute
                right-2
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                text-white/50
                transition-all
                hover:text-[var(--color-gold)]
                sm:right-6
              "
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            {/* Bottom hint */}
            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                font-sans
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Swipe · Navigate
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
