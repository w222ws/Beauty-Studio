import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PanInfo, Variants } from "framer-motion";

import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.jpg";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.jpg";
import p7 from "../assets/portfolio/p7.jpg";
import p8 from "../assets/portfolio/p8.jpg";

import m1 from "../assets/portfolio/m1.jpg";
import m2 from "../assets/portfolio/m2.jpg";
import m3 from "../assets/portfolio/m3.jpg";
import m4 from "../assets/portfolio/m4.jpg";
import m5 from "../assets/portfolio/m5.jpg";
import m6 from "../assets/portfolio/m6.jpg";
import m7 from "../assets/portfolio/m7.jpg";
import m8 from "../assets/portfolio/m8.jpg";

// РОЗДІЛЕНІ ФОТОГРАФІЇ
const femalePhotos = [
  { id: 1, src: p1, title: "Жіноча робота 1" },
  { id: 2, src: p2, title: "Жіноча робота 2" },
  { id: 3, src: p3, title: "Жіноча робота 3" },
  { id: 4, src: p4, title: "Жіноча робота 4" },
  { id: 5, src: p5, title: "Жіноча робота 5" },
  { id: 6, src: p6, title: "Жіноча робота 6" },
  { id: 7, src: p7, title: "Жіноча робота 7" },
  { id: 8, src: p8, title: "Жіноча робота 8" },
];

const malePhotos = [
  { id: 9, src: m1, title: "Чоловіча робота 9" },
  { id: 10, src: m2, title: "Чоловіча робота 10" },
  { id: 11, src: m3, title: "Чоловіча робота 11" },
  { id: 12, src: m4, title: "Чоловіча робота 12" },
  { id: 13, src: m5, title: "Чоловіча робота 13" },
  { id: 14, src: m6, title: "Чоловіча робота 14" },
  { id: 15, src: m7, title: "Чоловіча робота 15" },
  { id: 16, src: m8, title: "Чоловіча робота 16" },
];

const portfolioData = {
  female: femalePhotos,
  male: malePhotos,
};

const categories = [
  { id: "female" as const, label: "Жіночі" },
  { id: "male" as const, label: "Чоловічі" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"female" | "male">("female");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImages = portfolioData[activeTab];
  const selectedImage =
    selectedIndex !== null ? currentImages[selectedIndex] : null;

  const nextImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % currentImages.length : null,
    );
  }, [currentImages.length]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null
        ? (prev - 1 + currentImages.length) % currentImages.length
        : null,
    );
  }, [currentImages.length]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevImage();
    } else if (info.offset.x < -swipeThreshold) {
      nextImage();
    }
  };

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
        <div className="mb-10 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
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
                    className={`relative px-6 py-2.5 text-[11px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
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
                          bounce: 0.2,
                          duration: 0.5,
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"
          >
            {currentImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl bg-[var(--color-stone)]/20 transform-gpu"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading={index < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-end sm:mt-16">
          <a
            href="https://www.instagram.com/__beauty___studio___viktoria__"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-b border-[var(--color-gold)] pb-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-emerald-deep)] transition-all hover:border-[var(--color-emerald-deep)] hover:gap-5"
          >
            Більше робіт в Instagram
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 transform-gpu"
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

      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-emerald-deep)]/95 p-4 backdrop-blur-md touch-none"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 p-3 sm:top-6 sm:right-6 text-white/70 hover:text-white"
            >
              <svg
                className="h-7 w-7 sm:h-8 sm:w-8"
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

            <div className="absolute top-6 left-6 font-mono text-[11px] tracking-widest text-white/60">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(currentImages.length).padStart(2, "0")}
            </div>

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={handleDragEnd}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-lg sm:max-w-xl cursor-grab active:cursor-grabbing transform-gpu"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="pointer-events-none max-h-[78vh] w-full object-contain"
              />
            </motion.div>

            <div className="hidden sm:block">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-4 text-4xl font-light text-white/50 transition-colors hover:text-white"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-4 text-4xl font-light text-white/50 transition-colors hover:text-white"
              >
                ›
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
