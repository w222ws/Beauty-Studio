import { useState } from "react";

interface PriceItem {
  name: string;
  price: string;
}

interface Category {
  id: "hair" | "nails" | "brows";
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items?: PriceItem[];
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "hair",
      title: "HAIR",
      subtitle: "Стрижки та фарбування",
      icon: (
        <svg
          className="w-6 h-6 text-[#D4AF37]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="8.5" y1="7.5" x2="19" y2="18" />
          <line x1="8.5" y1="16.5" x2="19" y2="6" />
        </svg>
      ),
      items: [
        // Жіночі стрижки
        { name: "Стрижка жіноча (коротка)", price: "400-450 ₴" },
        { name: "Стрижка жіноча (каре)", price: "450-600 ₴" },
        { name: "Стрижка жіноча (каскад)", price: "450-750 ₴" },
        { name: "Підрівнювання кінчиків", price: "400-500 ₴" },
        { name: "Укладка волосся з препаратом", price: "500-700 ₴" },
        { name: "Накрутити волосся", price: "800-1200 ₴" },
        // Фарбування
        { name: "Фарбування (зі своєю фарбою)", price: "500-700 ₴" },
        { name: "Фарбування в 1 тон", price: "1200-2500 ₴" },
        { name: "Мелірування волосся", price: "1500-3000 ₴" },
        { name: "Подвійне фарбування", price: "2000-4000 ₴" },
        { name: "Складні техніки (Airtouch / Balayage)", price: "3000-6000 ₴" },
        { name: "Вихід з темного кольору", price: "500-7000 ₴" },
        // Чоловічі
        { name: "Стрижка чоловіча (під 1 насадку)", price: "300 ₴" },
        { name: "Стрижка чоловіча (під насадки)", price: "350 ₴" },
        { name: "Стрижка чоловіча (машинка + ножиці)", price: "400 ₴" },
        { name: "Оформлення бороди", price: "300-500 ₴" },
      ],
    },
    {
      id: "nails",
      title: "NAILS",
      subtitle: "Нігтьовий сервіс",
      icon: (
        <svg
          className="w-6 h-6 text-[#D4AF37]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c0-1.5-1-3-2.5-3S7 9.5 7 11v6c0 2 1.5 3 3.5 3s3.5-1 3.5-3v-4.5c0-1-.5-2-1.5-2s-1.5 1-1.5 2V15"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 12c0-1-.5-2-1.5-2s-1.5 1-1.5 2v4M21 13c0-1-.5-2-1.5-2s-1.5 1-1.5 2v2"
          />
        </svg>
      ),
    },
    {
      id: "brows",
      title: "BROWS",
      subtitle: "Догляд за бровами",
      icon: (
        <svg
          className="w-6 h-6 text-[#D4AF37]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 14c2.5-4 6.5-6.5 11-6.5 2.5 0 5 1 7 2.5"
          />
        </svg>
      ),
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

  return (
    <section
      id="services"
      className="bg-[#FCFBF9] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center space-x-2 justify-center">
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0F3A2F]">
            Послуги
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
        </div>
        <h2 className="text-3xl font-serif text-[#0F3A2F]">Напрямки краси</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="group bg-white border border-[#0F3A2F]/5 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col items-center text-center justify-between"
          >
            <div className="flex flex-col items-center space-y-4 py-2">
              <div className="w-12 h-12 bg-[#0F3A2F]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#0F3A2F] transition-all duration-300">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif tracking-widest text-[#0F3A2F] font-bold">
                  {category.title}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                  {category.subtitle}
                </p>
              </div>
            </div>

            <div className="w-full pt-4">
              <button
                onClick={() => setActiveCategory(category)}
                className="w-full text-center bg-[#0F3A2F] text-white py-2.5 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-[#D4AF37] hover:text-[#0F3A2F] transition-all duration-300 shadow-sm"
              >
                Дізнатись прайс
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn">
          <div className="bg-[#FCFBF9] w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0F3A2F]/10 relative max-h-[85vh] flex flex-col">
            <button
              onClick={() => setActiveCategory(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#0F3A2F] p-2 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-6 pb-4 border-b border-gray-100 shrink-0">
              <h3 className="text-2xl font-serif tracking-widest text-[#0F3A2F] font-bold">
                {activeCategory.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mt-1">
                {activeCategory.subtitle}
              </p>
            </div>

            <div className="overflow-y-auto flex-1 pr-1 space-y-4 scrollbar-thin">
              {activeCategory.id === "nails" ? (
                <div className="text-center py-6 px-2 space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Вартість послуг нігтьового сервісу може змінюватися в
                    залежності від складності дизайну, стану нігтів та обраних
                    матеріалів.
                  </p>
                  <p className="text-xs font-semibold text-[#0F3A2F] bg-[#0F3A2F]/5 p-3 rounded-xl border border-[#0F3A2F]/5">
                    Щоб дізнатися актуальну ціну або отримати консультацію
                    майстра, будь ласка, зв'яжіться з нами по телефону.
                  </p>
                </div>
              ) : (
                activeCategory.items?.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex justify-between items-end space-x-2"
                  >
                    <span className="text-xs sm:text-sm text-gray-700 font-medium pb-0.5 leading-tight">
                      {item.name}
                    </span>
                    <div className="flex-1 border-b border-dotted border-gray-300 mb-1"></div>
                    <span className="text-xs sm:text-sm font-bold text-[#0F3A2F] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="pt-6 mt-4 border-t border-gray-100 shrink-0">
              <a
                href="tel:0973968632"
                className="block text-center bg-[#0F3A2F] text-white py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#0F3A2F] transition-all duration-300"
              >
                Зателефонувати та записатись
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
// прайс
