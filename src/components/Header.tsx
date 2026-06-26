import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FCFBF9]/95 backdrop-blur-md border-b border-[#0F3A2F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Логотип */}
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-widest text-[#0F3A2F] font-serif">
            VICTORIA
          </span>
          <span className="text-[9px] text-[#0F3A2F]/60 uppercase tracking-[0.2em] -mt-1 font-medium">
            студія краси
          </span>
        </div>

        {/* Навигация ПК */}
        <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider font-bold text-[#0F3A2F]">
          <a
            href="#hero"
            className="hover:text-[#D4AF37] transition-colors duration-300"
          >
            Про нас
          </a>
          <a
            href="#services"
            className="hover:text-[#D4AF37] transition-colors duration-300"
          >
            Прайс
          </a>
          <a
            href="#gallery"
            className="hover:text-[#D4AF37] transition-colors duration-300"
          >
            Портфоліо
          </a>
          <a
            href="#contacts"
            className="hover:text-[#D4AF37] transition-colors duration-300"
          >
            Контакти
          </a>
        </nav>

        {/* Кнопка ПК */}
        <div className="hidden md:block">
          <a
            href="tel:0973968632"
            className="px-7 py-2.5 bg-[#0F3A2F] text-white text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#D4AF37] hover:text-[#0F3A2F] transition-all duration-300 shadow-md"
          >
            Зв'язок
          </a>
        </div>

        {/* КРАСИВЫЙ ТОЛСТЫЙ БУРГЕР ДЛЯ МОБИЛКИ */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#0F3A2F] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* УДОБНОЕ, НЕ НА ВЕСЬ ЭКРАН, ВЫПАДАЮЩЕЕ МЕНЮ */}
      <div
        className={`absolute top-20 left-0 right-0 bg-[#0F3A2F] border-b border-[#D4AF37]/20 shadow-xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isOpen ? "max-h-[340px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col p-6 space-y-4 font-serif text-center">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="text-base uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors py-1"
          >
            Про нас
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-base uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors py-1"
          >
            Прайс
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="text-base uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors py-1"
          >
            Портфоліо
          </a>
          <a
            href="#contacts"
            onClick={() => setIsOpen(false)}
            className="text-base uppercase tracking-widest text-white hover:text-[#D4AF37] transition-colors py-1"
          >
            Контакти
          </a>
          <div className="pt-2">
            <a
              href="tel:0973968632"
              className="inline-block px-8 py-2.5 bg-[#D4AF37] text-[#0F3A2F] text-xs uppercase tracking-widest font-bold rounded-full w-full max-w-[240px]"
            >
              Зателефонувати
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
