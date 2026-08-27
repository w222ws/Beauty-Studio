import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export default function HeroAppleMinimal() {
  const easeEditorial = [0.16, 1, 0.3, 1] as const;

  const containerVars: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.12,
      },
    },
  };

  const itemVars: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
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
        relative
        isolate
        w-full
        overflow-hidden
        bg-[var(--color-bg)]
        text-[var(--color-ink)]

        /* HEADER + HERO = ровно один viewport */
        h-[calc(100svh-128px)]
        min-h-[560px]

        sm:h-[calc(100svh-110px)]

        lg:h-[calc(100svh-96px)]
        lg:min-h-[600px]
        lg:max-h-[900px]
      "
    >
      {/* ============================================================
          PHOTO
      ============================================================ */}

      <motion.img
        src="/studio.avif"
        alt="Victoria Beauty Studio"
        initial={{
          scale: 1.06,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          scale: {
            duration: 1.6,
            ease: easeEditorial,
          },
        }}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover

          object-[center_42%]

          sm:object-[center_42%]

          lg:object-[center_center]
        "
      />

      {/* ============================================================
          ART DIRECTION
          Фото НЕ красим. Только управляем читаемостью.
      ============================================================ */}

      {/* Overall soft veil */}
      <div
        className="
          absolute
          inset-0
          bg-[var(--color-bg)]/[0.04]
        "
      />

      {/* ============================================================
          DESKTOP GRADIENT
          Слева почти чистый ivory,
          справа фотография остаётся живой.
      ============================================================ */}

      <div
        className="
          absolute
          inset-0
          hidden
          lg:block
          bg-gradient-to-r
          from-[var(--color-bg)]
          from-0%
          via-[var(--color-bg)]/[0.94]
          via-[28%]
          via-[var(--color-bg)]/[0.62]
          via-[46%]
          via-[var(--color-bg)]/[0.12]
          via-[67%]
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
          h-[32%]
          lg:block
          bg-gradient-to-t
          from-[var(--color-bg)]/[0.45]
          to-transparent
        "
      />

      {/* ============================================================
          MOBILE GRADIENT

          Фото сверху.
          Внизу — плотная зона под контент.
      ============================================================ */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[72%]

          bg-gradient-to-t
          from-[var(--color-bg)]
          from-0%
          via-[var(--color-bg)]/[0.96]
          via-[34%]
          via-[var(--color-bg)]/[0.62]
          via-[63%]
          to-transparent

          lg:hidden
        "
      />

      {/* Mobile top protection */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[22%]

          bg-gradient-to-b
          from-black/[0.16]
          to-transparent

          lg:hidden
        "
      />

      {/* ============================================================
          EDITORIAL FRAME
      ============================================================ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-3
          border
          border-white/[0.18]

          sm:inset-4

          lg:inset-5
          lg:border-[var(--color-ink)]/[0.12]
        "
      />

      {/* ============================================================
          CONTENT
      ============================================================ */}

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
          pb-5
          pt-5

          sm:px-8
          sm:pb-7

          lg:justify-center
          lg:px-14
          lg:pb-0

          xl:px-20
        "
      >
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="
            w-full

            lg:max-w-[720px]
          "
        >
          {/* ======================================================
              META
          ======================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mb-4
              flex
              items-center
              gap-2.5

              font-sans
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.27em]
              text-[var(--color-ink-soft)]

              sm:mb-5

              lg:mb-7
              lg:text-[9px]
            "
          >
            <MapPin
              className="
                h-3
                w-3
                shrink-0
                text-[var(--color-gold)]
              "
            />

            <span>Дніпро · Ігрень</span>

            <span
              className="
                h-px
                w-5
                bg-[var(--color-line)]
              "
            />

            <span>09—17</span>
          </motion.div>

          {/* ======================================================
              HEADLINE

              ВАЖНО:
              На mobile он намеренно компактнее.
              На desktop — большой editorial.
          ======================================================= */}

          <motion.h1
            variants={itemVars}
            className="
              font-display
              font-light
              uppercase
              leading-[0.78]
              tracking-[-0.065em]
              text-[var(--color-emerald-deep)]

              text-[clamp(4.2rem,17vw,6.5rem)]

              sm:text-[clamp(5rem,13vw,7.5rem)]

              lg:text-[clamp(5.5rem,8.5vw,9rem)]
            "
          >
            Краса
          </motion.h1>

          <motion.div
            variants={itemVars}
            className="
              mt-1
              flex
              items-end
              gap-2

              sm:gap-3

              lg:mt-2
              lg:gap-4
            "
          >
            <span
              className="
                font-display
                font-light
                uppercase
                leading-[0.78]
                tracking-[-0.065em]
                text-[var(--color-emerald-deep)]

                text-[clamp(3.6rem,14vw,5.8rem)]

                sm:text-[clamp(4.3rem,11vw,6.7rem)]

                lg:text-[clamp(5rem,7.5vw,7.9rem)]
              "
            >
              твого
            </span>

            <span
              className="
                mb-[0.04em]
                font-sans
                font-normal
                italic
                leading-none
                tracking-[-0.055em]
                text-[var(--color-gold)]

                text-[clamp(1.65rem,5vw,2.8rem)]

                sm:text-[clamp(2rem,4.5vw,3.2rem)]

                lg:text-[clamp(2.4rem,3.3vw,3.8rem)]
              "
            >
              РИТМУ
            </span>
          </motion.div>

          {/* ======================================================
              DESCRIPTION
          ======================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mt-4
              flex
              max-w-[520px]
              items-start
              gap-3

              sm:mt-5

              lg:mt-7
              lg:gap-4
            "
          >
            <span
              className="
                mt-[0.65em]
                h-px
                w-7
                shrink-0
                bg-[var(--color-gold)]

                sm:w-9

                lg:w-12
              "
            />

            <p
              className="
                max-w-[460px]
                font-sans
                text-[10px]
                leading-[1.55]
                text-[var(--color-ink-soft)]

                sm:text-[11px]

                lg:text-[12px]
                lg:leading-[1.65]
              "
            >
              Манікюр, фарбування та стиль — авторські техніки в атмосфері, де
              можна нікуди не поспішати.
            </p>
          </motion.div>

          {/* ======================================================
              CTA

              НИКАКОГО FLOATING BUTTON.
              Он находится непосредственно под текстом.
          ======================================================= */}

          <motion.div
            variants={itemVars}
            className="
              mt-5

              sm:mt-6

              lg:mt-8
            "
          >
            <a
              href="tel:+380973968632"
              aria-label="Зателефонувати до Victoria Beauty Studio"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full

                bg-[var(--color-emerald-deep)]

                py-1.5
                pl-5
                pr-1.5

                font-sans
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.19em]
                text-[var(--color-bg)]

                shadow-[0_14px_40px_rgba(0,0,0,0.14)]

                transition-all
                duration-500

                hover:bg-[var(--color-emerald-mid)]
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]

                active:scale-[0.97]

                sm:gap-4
                sm:pl-6
                sm:pr-2
              "
            >
              <Phone
                className="
                  h-3
                  w-3
                  text-[var(--color-gold)]

                  sm:h-3.5
                  sm:w-3.5
                "
              />

              <span>Зателефонувати</span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--color-gold)]
                  text-[var(--color-bg)]

                  transition-transform
                  duration-500

                  group-hover:rotate-45

                  sm:h-10
                  sm:w-10
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ============================================================
          DESKTOP SIDE MARK
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-8
          right-8
          z-10
          hidden

          items-center
          gap-3

          font-sans
          text-[7px]
          uppercase
          tracking-[0.3em]
          text-[var(--color-ink-soft)]/70

          lg:flex
        "
      >
        <span>VICTORIA</span>

        <span
          className="
            h-px
            w-8
            bg-[var(--color-line)]
          "
        />

        <span>BEAUTY STUDIO</span>
      </div>

      {/* ============================================================
          MOBILE BRAND MARK
      ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          right-5
          top-5
          z-10

          font-sans
          text-[7px]
          font-semibold
          uppercase
          tracking-[0.3em]
          text-white/75

          lg:hidden
        "
      >
        VICTORIA
      </div>
    </section>
  );
}
