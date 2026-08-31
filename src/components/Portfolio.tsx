import { useCallback, useEffect, useState } from "react";
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
  category: "female" | "male";
  title: string;
}

const portfolioData: PortfolioImage[] = [
  { id: 1, src: p1, category: "female", title: "Складне фарбування" },
  { id: 2, src: p2, category: "female", title: "Вечірній уклад" },
  { id: 3, src: p3, category: "female", title: "Догляд та відновлення" },
  { id: 4, src: p4, category: "female", title: "Авторський макіяж" },
  { id: 5, src: p5, category: "male", title: "Чоловіча стрижка" },
  { id: 6, src: p6, category: "male", title: "Моделювання бороди" },
  { id: 7, src: p7, category: "male", title: "Камуфляж сивини" },
  { id: 8, src: p8, category: "male", title: "Комплексний догляд" },
];

const categories = [
  { id: "female" as const, label: "Жіночі" },
  { id: "male" as const, label: "Чоловічі" },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"female" | "male">("female");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = portfolioData.filter(
    (item) => item.category === activeTab,
  );

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % filteredImages.length : null,
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredImages.length) % filteredImages.length
        : null,
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="portfolio"
      className="relative bg-[var(--color-ivory)] py-16 sm:py-24 lg:py-32 scroll-mt-10"
    >
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        {/* HEADER SECTION (Заголовок слева, капсулы справа) */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          {/* Текст слева */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--color-gold)] sm:w-14" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)] sm:text-[11px]">
                Портфоліо
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[var(--color-emerald-deep)]">
              Естетика
              <span className="mt-1 block font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal italic text-[var(--color-gold)]">
                результату
              </span>
            </h2>
          </div>

          {/* Капсулы-табы справа */}
          <div className="flex sm:justify-end">
            <div className="inline-flex rounded-full bg-[var(--color-stone)]/25 p-1 backdrop-blur-sm">
              {categories.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSelectedIndex(null);
                    }}
                    className={`relative px-5 py-2 text-[11px] font-semibold tracking-wider uppercase transition-colors duration-300 sm:px-6 sm:py-2.5 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 rounded-full bg-[var(--color-emerald-deep)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-stone)]/20"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Light Hover Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white opacity-0 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                  <p className="font-sans text-[11px] font-medium tracking-wide sm:text-xs">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA FOOTER */}
        <div className="mt-12 flex justify-end sm:mt-16">
          <a
            href="https://www.instagram.com/__beauty___studio___viktoria__"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-b border-[var(--color-gold)] pb-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-deep)] transition-all hover:border-[var(--color-emerald-deep)] hover:gap-5"
          >
            Більше робіт в Instagram
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-emerald-deep)]/95 p-4 backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 z-10 p-2 text-white/70 hover:text-white"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 font-mono text-[11px] tracking-widest text-white/60">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredImages.length).padStart(2, "0")}
            </div>

            {/* Image Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg sm:max-w-xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />
              <div className="bg-black/40 p-3 text-center backdrop-blur-sm">
                <p className="font-sans text-xs font-medium tracking-wider text-white">
                  {selectedImage.title}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 text-2xl text-white/60 hover:text-white sm:left-6"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-2xl text-white/60 hover:text-white sm:right-6"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
