import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const address = "вулиця Північнодонецька, 1а, Дніпро";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contacts"
      className="bg-[#FCFBF9] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <div className="inline-flex items-center space-x-2 justify-center">
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0F3A2F]">
            Контакти
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
        </div>
        <h2 className="text-3xl font-serif text-[#0F3A2F]">Чекаємо на вас</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
        <div className="lg:col-span-5 bg-[#0F3A2F] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-[#D4AF37]/20 relative overflow-hidden text-center">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>

          <div className="space-y-8 relative z-10">
            <div className="space-y-1">
              <h3 className="font-serif text-3xl text-[#D4AF37] tracking-wider uppercase">
                Victoria
              </h3>
              <p className="text-[9px] text-gray-300 uppercase tracking-[0.3em] font-light">
                Студія краси
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="space-y-1">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">
                  Графік роботи
                </p>
                <p className="font-medium text-gray-200">Понеділок — Неділя</p>
                <p className="text-[#D4AF37] font-semibold text-base">
                  9:00 — 17:00{" "}
                  <span className="text-xs font-light text-gray-400">
                    (без вихідних)
                  </span>
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest">
                  Локація
                </p>
                <p className="font-medium text-gray-200 px-4">{address}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <button
              onClick={handleCopy}
              className={`w-full py-3 rounded-xl text-xs uppercase tracking-widest font-bold border transition-all duration-300 flex items-center justify-center space-x-2 ${copied ? "bg-[#D4AF37] text-[#0F3A2F] border-[#D4AF37]" : "border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"}`}
            >
              {copied ? (
                <span>Адресу скопійовано!</span>
              ) : (
                <span>Скопіювати адресу</span>
              )}
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <a
            href="tel:0973968632"
            className="flex-1 flex items-center justify-between p-8 bg-white border border-[#0F3A2F]/5 rounded-3xl shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-[#0F3A2F]/5 rounded-2xl group-hover:bg-[#0F3A2F] group-hover:text-white transition-colors duration-300 text-[#0F3A2F]">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  Запис за телефоном
                </p>
                <p className="text-xl font-bold text-[#0F3A2F] tracking-wider">
                  097-396-86-32
                </p>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  Натисніть для дзвінка з мобільного
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#0F3A2F] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
              →
            </div>
          </a>

          <a
            href="https://maps.app.goo.gl/RR79EbY4Pcz5a1cW8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-between p-8 bg-white border border-[#0F3A2F]/5 rounded-3xl shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-5">
              <div className="p-4 bg-[#D4AF37]/10 text-[#0F3A2F] rounded-2xl group-hover:bg-[#D4AF37] transition-colors duration-300">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                  Маршрут
                </p>
                <p className="text-lg font-bold text-[#0F3A2F]">
                  Відкрити в Google Maps
                </p>
                <p className="text-xs text-gray-400 mt-1 font-light">
                  Подивитись розташування на мапі
                </p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0F3A2F] group-hover:bg-[#D4AF37] transition-all duration-300 transform group-hover:translate-x-1">
              →
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
// контакти
