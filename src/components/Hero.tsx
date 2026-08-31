"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Clock, MapPin } from "lucide-react";

// Плавная анимация
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroVictoria() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-pale)] selection:text-[var(--color-emerald-deep)] lg:min-h-[calc(100vh-80px)] lg:justify-center">
      {/* ================= ФОТОГРАФИЯ ================= */}
      {/* Картинка приподнята и на мобилке (h-[75vh]), и на десктопе (top-0 h-full) */}
      <div className="absolute inset-x-0 top-0 z-0 h-[75vh] w-full lg:top-0 lg:bottom-4 lg:right-6 lg:left-auto lg:h-[calc(100%-1rem)] lg:w-[48%] lg:overflow-hidden lg:rounded-b-3xl lg:shadow-xl">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src="/studio.avif"
          alt="Студія краси Victoria"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
          className="h-full w-full object-cover object-[center_35%] transition-transform duration-[2000ms] hover:scale-105 lg:object-center lg:[mask-image:none] lg:[webkit-mask-image:none]"
        />

        {/* Мягкий десктопный оверлей */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[var(--color-bg)]/30 via-transparent to-transparent lg:block" />

        {/* Минималистичная плашка */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 left-6 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 backdrop-blur-md lg:block"
        >
          <p className="text-xs font-medium tracking-wider text-white uppercase">
            Атмосфера та затишок
          </p>
          <p className="mt-0.5 text-[11px] font-light text-white/70">
            Преміальний догляд у Дніпрі
          </p>
        </motion.div>
      </div>

      {/* ================= КОНТЕНТ ================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-8 pt-32 sm:px-10 lg:flex-row lg:items-center lg:justify-start lg:px-16 lg:pb-0 lg:pt-0">
        {/* Градиентная подложка для читаемости на мобилке */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/90 to-transparent lg:hidden" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-[620px] flex-col lg:w-[52%] lg:pr-8"
        >
          {/* Инфо-строка */}
          <motion.div
            variants={fadeUp}
            className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[var(--color-ink)]/70 uppercase sm:mb-6 sm:text-xs"
          >
            <span className="flex items-center gap-2 text-[var(--color-emerald-deep)]">
              <MapPin
                className="h-4 w-4 text-[var(--color-gold)]"
                strokeWidth={2}
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
                strokeWidth={2}
              />
              09:00 — 17:00
            </span>
          </motion.div>

          {/* Заголовок */}
          <motion.div variants={fadeUp}>
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              Простір вашої <br />
              <span className="font-light italic text-[var(--color-gold)]">
                природної
              </span>{" "}
              краси
            </h1>
          </motion.div>

          {/* Описание */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[440px] font-sans text-base font-light leading-relaxed text-[var(--color-ink)]/80 sm:text-lg"
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
              className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-emerald-deep)] px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#F5F2EB] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              <span className="text-[#F5F2EB]">Прайс та послуги</span>
              <ArrowDown className="h-4 w-4 text-[#F5F2EB] transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-ink)]/20 bg-transparent px-8 py-4 font-sans text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-ink)]/50 hover:bg-[var(--color-ink)]/5 sm:w-auto"
            >
              <span>Дивитися портфоліо</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
