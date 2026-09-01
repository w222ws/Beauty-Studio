"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Clock, MapPin } from "lucide-react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroVictoria() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-emerald-pale)] selection:text-[var(--color-emerald-deep)] lg:min-h-[calc(100vh-80px)] lg:justify-center">
      <div className="absolute inset-x-0 top-0 z-0 h-[62vh] w-full sm:h-[68vh] lg:bottom-4 lg:left-auto lg:right-6 lg:top-0 lg:h-[calc(100%-1rem)] lg:w-[48%] lg:overflow-hidden lg:rounded-b-3xl lg:shadow-2xl lg:shadow-black/5">
        <img
          src="/studio.avif"
          alt="Студія краси Victoria"
          className="h-full w-full object-cover object-[center_20%] lg:object-[center_20%] lg:[mask-image:none] lg:[webkit-mask-image:none]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 65%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/20 via-transparent to-transparent lg:hidden" />

        <div className="absolute inset-0 hidden bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent lg:block" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-10 pt-28 sm:px-10 lg:flex-row lg:items-center lg:justify-start lg:px-16 lg:pb-0 lg:pt-0">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/98 to-transparent lg:hidden" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-[620px] flex-col lg:w-[52%] lg:pr-8"
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-[var(--color-ink)]/70 uppercase sm:mb-5 sm:text-xs"
          >
            <span className="flex items-center gap-1.5 text-[var(--color-emerald-deep)]">
              <MapPin
                className="h-3.5 w-3.5 text-[var(--color-gold)]"
                strokeWidth={2.5}
              />
              Дніпро, Ігрень
            </span>

            <span
              className="h-3 w-px bg-[var(--color-ink)]/20"
              aria-hidden="true"
            />

            <span className="flex items-center gap-1.5">
              <Clock
                className="h-3.5 w-3.5 text-[var(--color-gold)]"
                strokeWidth={2.5}
              />
              09:00 — 17:00
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-[4.75rem]">
              Простір вашої <br />
              <span className="font-light italic text-[var(--color-gold)] drop-shadow-sm">
                природної
              </span>{" "}
              краси
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[440px] font-sans text-sm font-light leading-relaxed text-[var(--color-ink)]/80 sm:mt-6 sm:text-lg"
          >
            Стильні стрижки, ідеальне оформлення брів та бездоганний манікюр.
            Підкреслюємо вашу унікальність у затишній атмосфері щодня.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4 lg:mt-10"
          >
            <a
              href="#services"
              className="group relative inline-flex w-full items-center justify-center gap-3 transform-gpu rounded-full bg-[var(--color-emerald-deep)] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#F5F2EB] shadow-md shadow-[var(--color-emerald-deep)]/15 transition-all duration-300 will-change-transform active:scale-[0.98] sm:w-auto sm:py-4 sm:shadow-lg sm:hover:-translate-y-0.5 sm:hover:shadow-xl"
            >
              <span className="text-[#F5F2EB]">Прайс та послуги</span>
              <ArrowDown className="h-4 w-4 text-[#F5F2EB] transition-transform duration-300 group-hover:translate-y-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 transform-gpu rounded-full border border-[var(--color-ink)]/20 bg-transparent px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)] transition-all duration-300 will-change-transform active:scale-[0.98] sm:w-auto sm:py-4 sm:hover:border-[var(--color-ink)]/40 sm:hover:bg-[var(--color-ink)]/5"
            >
              <span>Дивитися портфоліо</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
