import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export default function HeroAppleMinimal() {
  const easeEditorial = [0.16, 1, 0.3, 1] as const;

  const containerVars: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: 0.08,
      },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeEditorial,
      },
    },
  };

  return (
    <section
      className="
        relative isolate
        h-[calc(100svh-0px)]
        min-h-[620px]
        w-full
        overflow-hidden
        bg-[var(--color-bg)]
        text-[var(--color-ink)]
        select-none
      "
    >
      {/* ================================================================
          IMAGE
          Фотография остаётся ОРИГИНАЛОМ.
          Никаких brightness / contrast / blend-mode.
      ================================================================= */}

      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <motion.img
          initial={{ scale: 1.035 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: easeEditorial,
          }}
          src="/studio.avif"
          alt="Victoria Beauty Studio"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            object-[50%_35%]

            lg:object-[58%_center]
          "
        />

        {/* ============================================================
            ART-DIRECTION LAYERS

            Не красим фото.
            Управляем только читаемостью композиции.
        ============================================================ */}

        {/* Общий мягкий veil */}

        <div
          className="
            absolute
            inset-0
            bg-[var(--color-bg)]/[0.025]
          "
        />

        {/* Desktop: глубокий fade только в зоне текста */}

        <div
          className="
            absolute
            inset-0
            hidden

            lg:block
            bg-gradient-to-r
            from-[var(--color-bg)]
            via-[var(--color-bg)]/[0.72]
            via-[30%]
            via-[var(--color-bg)]/[0.12]
            via-[54%]
            to-transparent
          "
        />

        {/* Desktop bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            hidden
            h-[42%]

            lg:block
            bg-gradient-to-t
            from-[var(--color-bg)]/[0.68]
            to-transparent
          "
        />

        {/* Mobile: фотография постепенно становится фоном */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[67%]

            bg-gradient-to-t
            from-[var(--color-bg)]
            via-[var(--color-bg)]/[0.92]
            via-[42%]
            to-transparent

            lg:hidden
          "
        />

        {/* Mobile subtle top fade */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[18%]

            bg-gradient-to-b
            from-black/[0.08]
            to-transparent

            lg:hidden
          "
        />
      </div>

      {/* ================================================================
          EDITORIAL FRAME
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          z-[1]
          hidden

          border
          border-[var(--color-bg)]/[0.28]

          lg:block
        "
      />

      {/* ================================================================
          CONTENT
      ================================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1500px]
          flex-col

          justify-end

          px-5
          pb-7

          sm:px-8
          sm:pb-9

          lg:justify-center
          lg:px-16
          lg:pb-0
        "
      >
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="
            w-full
            lg:max-w-[760px]
          "
        >
          {/* ============================================================
              LOCATION
          ============================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mb-5
              flex
              items-center
              gap-3

              font-sans
              text-[9px]
              font-medium
              uppercase
              tracking-[0.24em]

              text-[var(--color-ink-soft)]
            "
          >
            <MapPin
              className="
                h-3.5
                w-3.5
                text-[var(--color-gold)]
              "
            />

            <span>Дніпро · Ігрень</span>

            <span
              className="
                h-px
                w-8
                bg-[var(--color-line)]
              "
            />

            <span>09—19</span>
          </motion.div>

          {/* ============================================================
              MAIN TYPOGRAPHY
          ============================================================= */}

          <motion.h1
            variants={itemVars}
            className="
              font-display
              font-light
              uppercase

              tracking-[-0.065em]
              leading-[0.79]

              text-[clamp(4.5rem,10vw,9.5rem)]

              text-[var(--color-emerald-deep)]
            "
          >
            Краса
          </motion.h1>

          <motion.div
            variants={itemVars}
            className="
              mt-2
              flex
              flex-wrap
              items-end
              gap-x-4
              gap-y-1

              sm:mt-3
            "
          >
            <span
              className="
                font-display
                font-light
                uppercase

                tracking-[-0.065em]
                leading-[0.79]

                text-[clamp(4rem,8vw,8rem)]

                text-[var(--color-emerald-deep)]
              "
            >
              твого
            </span>

            <span
              className="
                mb-[0.05em]

                font-sans
                font-normal
                italic

                tracking-[-0.055em]
                leading-[0.85]

                text-[clamp(2.1rem,4.3vw,4.2rem)]

                text-[var(--color-gold)]
              "
            >
              ритму
            </span>
          </motion.div>

          {/* ============================================================
              DESCRIPTION
          ============================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mt-6
              flex
              max-w-[510px]
              items-start
              gap-4

              sm:mt-7
            "
          >
            <span
              className="
                mt-[0.65em]
                h-px
                w-10
                shrink-0

                bg-[var(--color-gold)]
              "
            />

            <p
              className="
                max-w-[470px]

                font-sans
                text-[12px]
                leading-[1.55]

                text-[var(--color-ink-soft)]

                sm:text-[13px]
                sm:leading-[1.65]
              "
            >
              Манікюр, фарбування та стиль — авторські техніки в атмосфері, де
              можна нікуди не поспішати.
            </p>
          </motion.div>

          {/* ============================================================
              ACTION
              Реальное действие: телефонный звонок.
          ============================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mt-7

              sm:mt-8
            "
          >
            <a
              href="tel:+380973968632"
              aria-label="Зателефонувати до Victoria Beauty Studio"
              className="
                group
                inline-flex
                items-center
                gap-4

                rounded-full

                bg-[var(--color-emerald-deep)]

                py-2
                pl-6
                pr-2

                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.19em]

                text-[var(--color-bg)]

                shadow-[0_14px_45px_rgba(0,0,0,0.12)]

                transition-all
                duration-500

                hover:gap-5
                hover:bg-[var(--color-emerald-mid)]

                active:scale-[0.97]
              "
            >
              <Phone
                className="
                  h-3.5
                  w-3.5
                  text-[var(--color-gold)]
                "
              />

              <span>Зателефонувати</span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  bg-[var(--color-gold)]

                  text-[var(--color-bg)]

                  transition-transform
                  duration-500

                  group-hover:rotate-45
                "
              >
                <ArrowUpRight
                  className="
                    h-4
                    w-4
                  "
                />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ================================================================
          RIGHT EDITORIAL MARK
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-10
          z-10

          hidden

          lg:flex
          items-center
          gap-4

          font-sans
          text-[8px]
          uppercase
          tracking-[0.3em]

          text-[var(--color-ink-soft)]

          [writing-mode:vertical-rl]
        "
      >
        VICTORIA · BEAUTY STUDIO
      </div>

      {/* ================================================================
          BOTTOM BRAND LINE
      ================================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-10

          hidden
          h-px

          bg-[var(--color-line)]

          lg:block
        "
      />
    </section>
  );
}
