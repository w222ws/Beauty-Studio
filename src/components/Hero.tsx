"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Clock, MapPin } from "lucide-react";

// Плавна та оптимізована анімація
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroVictoria() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-pale)] selection:text-[var(--color-emerald-deep)] lg:min-h-[calc(100vh-80px)] lg:justify-center">
      {/* ================= ФОТОГРАФІЯ ================= */}
      <div className="absolute inset-x-0 top-0 z-0 h-[75vh] w-full lg:bottom-4 lg:left-auto lg:right-6 lg:top-0 lg:h-[calc(100%-1rem)] lg:w-[48%] lg:overflow-hidden lg:rounded-b-3xl lg:shadow-2xl lg:shadow-black/5">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          src="/studio.avif"
          alt="Студія краси Victoria"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
          /* 
            object-[center_15%] (або object-top) піднімає фокус кадру вгору, 
            відрізаючи нижню частину (столи тощо) як на мобільному, так і на десктопі.
            transform-gpu та will-change-transform гарантують нуль лагів при ховері.
          */
          className="h-full w-full transform-gpu object-cover object-[center_15%] transition-transform duration-[2000ms] will-change-transform hover:scale-105 lg:object-[center_20%] lg:[mask-image:none] lg:[webkit-mask-image:none]"
        />

        {/* М'який десктопний оверлей для більшої глибини */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent lg:block" />

        {/* Преміальна плашка (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 left-8 hidden transform-gpu rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-xl backdrop-blur-md lg:block"
        >
          <p className="text-xs font-semibold tracking-[0.15em] text-white uppercase">
            Атмосфера та затишок
          </p>
          <p className="mt-1 text-[11px] font-light tracking-wide text-white/80">
            Преміальний догляд у Дніпрі
          </p>
        </motion.div>
      </div>

      {/* ================= КОНТЕНТ ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-32 sm:px-10 lg:flex-row lg:items-center lg:justify-start lg:px-16 lg:pb-0 lg:pt-0">
        {/* Градієнтна підкладка для мобільного */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[80%] bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/95 to-transparent lg:hidden" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-[620px] flex-col lg:w-[52%] lg:pr-8"
        >
          {/* Інфо-рядок */}
          <motion.div
            variants={fadeUp}
            className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[var(--color-ink)]/60 uppercase sm:mb-6 sm:text-xs"
          >
            <span className="flex items-center gap-2 text-[var(--color-emerald-deep)]">
              <MapPin
                className="h-4 w-4 text-[var(--color-gold)]"
                strokeWidth={2.5}
              />
              Дніпро, Ігрень
            </span>
            <span
              className="h-3 w-px bg-[var(--color-ink)]/20"
              aria-hidden="true"
            />
            <span className="flex items-center gap-2">
              <Clock
                className="h-4 w-4 text-[var(--color-gold)]"
                strokeWidth={2.5}
              />
              09:00 — 17:00
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.div variants={fadeUp}>
            <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              Простір вашої <br />
              <span className="font-light italic text-[var(--color-gold)] drop-shadow-sm">
                природної
              </span>{" "}
              краси
            </h1>
          </motion.div>

          {/* Опис */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[440px] font-sans text-base font-light leading-relaxed text-[var(--color-ink)]/75 sm:text-lg"
          >
            Стильні стрижки, ідеальне оформлення брів та бездоганний манікюр.
            Підкреслюємо вашу унікальність у затишній атмосфері щодня.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
          >
            <a
              href="#services"
              className="group relative inline-flex w-full items-center justify-center gap-3 transform-gpu rounded-full bg-[var(--color-emerald-deep)] px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#F5F2EB] shadow-lg shadow-[var(--color-emerald-deep)]/20 transition-all duration-300 will-change-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--color-emerald-deep)]/30 sm:w-auto"
            >
              <span className="text-[#F5F2EB]">Прайс та послуги</span>
              <ArrowDown className="h-4 w-4 text-[#F5F2EB] transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 transform-gpu rounded-full border border-[var(--color-ink)]/20 bg-transparent px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)] transition-all duration-300 will-change-transform hover:border-[var(--color-ink)]/40 hover:bg-[var(--color-ink)]/5 sm:w-auto"
            >
              <span>Дивитися портфоліо</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
