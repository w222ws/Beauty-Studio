"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone } from "lucide-react";

interface PriceItem {
  name: string;
  price: string;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items?: PriceItem[];
}

const categories: Category[] = [
  {
    id: "hair",
    title: "Hair",
    subtitle: "Стрижки та фарбування",
    items: [
      { name: "Стрижка жіноча (коротка)", price: "400–450 ₴" },
      { name: "Стрижка жіноча (каре)", price: "450–600 ₴" },
      { name: "Стрижка жіноча (каскад)", price: "450–750 ₴" },
      { name: "Підрівнювання кінчиків", price: "400–500 ₴" },
      { name: "Укладка волосся з препаратом", price: "500–700 ₴" },
      { name: "Накрутити волосся", price: "800–1200 ₴" },
      { name: "Фарбування (зі своєю фарбою)", price: "500–700 ₴" },
      { name: "Фарбування в 1 тон", price: "1200–2500 ₴" },
      { name: "Мелірування волосся", price: "1500–3000 ₴" },
      { name: "Подвійне фарбування", price: "2000–4000 ₴" },
      { name: "Складні техніки (Airtouch / Balayage)", price: "3000–6000 ₴" },
      { name: "Вихід з темного кольору", price: "500–7000 ₴" },
      { name: "Стрижка чоловіча (під 1 насадку)", price: "300 ₴" },
      { name: "Стрижка чоловіча (під насадки)", price: "350 ₴" },
      { name: "Стрижка чоловіча (машинка + ножиці)", price: "400 ₴" },
      { name: "Оформлення бороди", price: "300–500 ₴" },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    subtitle: "Нігтьовий сервіс",
    note: "Вартість послуг нігтьового сервісу залежить від складності дизайну, стану нігтів та обраних матеріалів. Зателефонуйте для консультації майстра.",
  },
  {
    id: "brows",
    title: "Brows",
    subtitle: "Догляд за бровами",
    items: [
      { name: "Корекція без фарбування", price: "300 ₴" },
      { name: "Корекція та фарбування", price: "450 ₴" },
      { name: "Ламінування з корекцією", price: "500 ₴" },
      { name: "Ламінування брів з корекцією та фарбуванням", price: "650 ₴" },
      { name: "Ботокс (відновлення та живлення)", price: "100 ₴" },
      { name: "Видалення пушку над губою", price: "150 ₴" },
      { name: "Видалення волосків з носу", price: "150 ₴" },
    ],
  },
];

export default function Services() {
  // По умолчанию все закрыто (null)
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      id="services"
      className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 scroll-mt-20 select-none"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* HEADER */}
        <div className="mb-10 sm:mb-16">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--color-gold)] sm:w-14" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)] sm:text-[11px]">
              Прайс-лист
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[var(--color-emerald-deep)]">
            Наші
            <span className="mt-1 block font-sans text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal italic text-[var(--color-gold)]">
              послуги та ціни
            </span>
          </h2>
        </div>

        {/* CATEGORIES */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {categories.map((category) => {
            const isOpen = openId === category.id;

            return (
              <div
                key={category.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl ${
                  isOpen
                    ? "border-[var(--color-gold)]/40 bg-white shadow-[0_8px_40px_rgba(15,58,47,0.06)]"
                    : "border-[var(--color-line)] bg-transparent hover:border-[var(--color-gold)]/30"
                }`}
              >
                {/* CATEGORY BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left outline-none sm:px-7 sm:py-6"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div className="flex flex-wrap items-baseline gap-3 sm:gap-5">
                    <span className="font-display text-[clamp(1.4rem,4vw,2rem)] font-light uppercase leading-none tracking-[-0.03em] text-[var(--color-emerald-deep)]">
                      {category.title}
                    </span>

                    <span className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--color-ink-soft)] sm:text-[10px]">
                      {category.subtitle}
                    </span>
                  </div>

                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? "bg-[var(--color-emerald-deep)]"
                        : "border border-[var(--color-line)]"
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 sm:h-[18px] sm:w-[18px] ${
                        isOpen
                          ? "rotate-45 text-[var(--color-gold)]"
                          : "rotate-0 text-[var(--color-ink-soft)]"
                      }`}
                    />
                  </span>
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden will-change-[height]"
                    >
                      <div className="px-5 pb-6 sm:px-7 sm:pb-8">
                        <div className="border-t border-[var(--color-line)]/60 pt-5 sm:pt-6">
                          {category.id === "nails" ? (
                            <div className="max-w-[560px]">
                              <p className="font-sans text-[13px] leading-[1.7] text-[var(--color-ink-soft)] sm:text-sm">
                                {category.note}
                              </p>
                            </div>
                          ) : (
                            <div className="sm:columns-2 sm:gap-x-10 lg:gap-x-14">
                              {category.items?.map((item, index) => (
                                <div
                                  key={`${category.id}-${index}`}
                                  className="flex items-baseline gap-3 break-inside-avoid py-1.5"
                                >
                                  <span className="font-sans text-[12px] leading-snug text-[var(--color-ink)] sm:text-[13px]">
                                    {item.name}
                                  </span>

                                  <span className="mb-1 flex-1 border-b border-dotted border-[var(--color-line)]" />

                                  <span className="whitespace-nowrap font-sans text-[12px] font-semibold text-[var(--color-emerald-deep)] sm:text-[13px]">
                                    {item.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <a
                            href="tel:+380973968632"
                            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--color-emerald-deep)] py-2 pl-6 pr-2 transition-all duration-300 hover:bg-[var(--color-emerald-deep)]/90 active:scale-[0.98] sm:mt-8"
                            style={{ WebkitTapHighlightColor: "transparent" }}
                          >
                            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                              Записатись
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-emerald-deep)]">
                              <Phone className="h-4 w-4" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
