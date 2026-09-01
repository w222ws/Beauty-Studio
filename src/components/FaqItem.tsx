import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    id: "sterility",
    question: "Як у вас забезпечується стерильність інструментів?",
    answer:
      "Безпека — наш головний пріоритет. Усі металеві інструменти проходять 3-етапну обробку: дезінфекція у спеціальному розчині, ультразвукова очистка та сухожарова стерилізація. Крафт-пакет розкривається виключно в присутності клієнта. Для кожного манікюру використовуємо одноразові пилочки та бафи.",
  },
  {
    id: "same-day",
    question: "Чи можна записатися «день у день»?",
    answer:
      "Так, якщо у майстрів є вільні вікна. Зазвичай щільний запис формується за 2–4 дні, але ми завжди намагаємося підібрати зручний час. Найкращий спосіб дізнатися про вільні місця на сьогодні — зателефонувати нам або написати в Direct.",
  },
  {
    id: "materials",
    question: "Якими матеріалами та косметикою ви працюєте?",
    answer:
      "Ми використовуємо сертифіковані преміум-матеріали та професійну косметику для волосся й брів. Вони безпечні для здоров'я, гіпоалергенні та забезпечують стійкий результат без пошкодження структури нігтів чи волосся.",
  },
  {
    id: "hair-prep",
    question: "Як підготуватися до складного фарбування чи стрижки?",
    answer:
      "Особливої підготовки не потрібно. Головне — на консультації детально розповісти майстру історію ваших фарбувань за останній рік (особливо якщо використовувалася хна, тонік або побутовий фарбник). Це допоможе точно розрахувати час та обрати безпечну техніку.",
  },
  {
    id: "payment",
    question: "Які способи оплати доступні у студії?",
    answer:
      "Ви можете розрахуватися готівкою або здійснити швидкий переказ на картку через банківський застосунок (IBAN / Monobank / Приват24).",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[var(--color-bg)] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 scroll-mt-20 select-none"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 p-6 sm:p-10 lg:p-12 border border-[var(--color-line)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--color-gold)]/10 blur-3xl transform-gpu" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-[var(--color-emerald-deep)]/5 blur-3xl transform-gpu" />

          <div className="relative z-10 mb-8 sm:mb-12">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--color-gold)] sm:w-14" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-ink-soft)] sm:text-[11px]">
                FAQ
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.3rem,5vw,4rem)] font-light uppercase leading-[0.9] tracking-[-0.04em] text-[var(--color-emerald-deep)]">
              Часті
              <span className="mt-1 block font-sans text-[clamp(1.4rem,3vw,2.2rem)] font-normal italic text-[var(--color-gold)]">
                запитання клієнтів
              </span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col gap-3">
            {faqList.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4.5 text-left outline-none sm:px-6 sm:py-5"
                    style={{ WebkitTapHighlightColor: "transparent" }}
                  >
                    <span className="font-sans text-sm font-medium leading-snug sm:text-base text-[var(--color-emerald-deep)]">
                      {item.question}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] transform-gpu ${
                        isOpen
                          ? "bg-[var(--color-emerald-deep)] text-[var(--color-gold)] border-transparent"
                          : "text-[var(--color-ink-soft)]"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.25,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden transform-gpu"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="border-t border-[var(--color-line)]/60 pt-3.5">
                            <p className="font-sans text-xs sm:text-sm leading-[1.7] text-[var(--color-emerald-deep)]/80 font-normal">
                              {item.answer}
                            </p>
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
      </div>
    </section>
  );
}
