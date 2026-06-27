import studioImg from "../assets/studio.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#FCFBF9] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-0 pb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full py-2 md:py-4">
        <div className="relative aspect-[4/3] lg:h-[530px] lg:aspect-auto w-full rounded-[2rem] overflow-hidden shadow-xl border border-[#0F3A2F]/5 order-1 lg:order-2">
          <img
            src={studioImg}
            alt="Студія Victoria Дніпро"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <span className="text-[9px] sm:text-[10px] bg-[#0F3A2F]/90 text-[#D4AF37] uppercase tracking-widest border border-[#D4AF37]/20 px-4 py-1.5 rounded-full font-bold shadow-md backdrop-blur-sm">
              Premium Space
            </span>
          </div>
        </div>

        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
          <div className="space-y-2">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
              Welcome to beauty space
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif text-[#0F3A2F] leading-[1.15] font-normal tracking-tight">
              Студія <br />
              <span className="italic font-light text-[#0F3A2F]">
                Твоєї краси
              </span>{" "}
            </h1>
          </div>

          <div className="max-w-md mx-auto lg:mx-0 text-left text-xs sm:text-sm text-gray-600 bg-[#0F3A2F]/5 p-5 rounded-2xl border border-[#0F3A2F]/5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong className="text-[#0F3A2F]">Графік:</strong>{" "}
                Понеділок–неділя: 9:00 - 17:00 (Без вихідних)
              </p>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong className="text-[#0F3A2F]">Район:</strong> ж/м Ігрень,
                вул. Північнодонецька, 1а
              </p>
            </div>
            <div className="flex items-center space-x-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong className="text-[#0F3A2F]">Телефон:</strong>{" "}
                <a
                  href="tel:0973968632"
                  className="hover:text-[#D4AF37] text-[#0F3A2F] font-medium transition-colors underline decoration-[#D4AF37]"
                >
                  097-396-86-32
                </a>
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#services"
              className="inline-block w-full sm:w-auto text-center bg-[#0F3A2F] text-white px-10 py-4 uppercase tracking-widest text-xs font-bold rounded-full hover:bg-[#D4AF37] hover:text-[#0F3A2F] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#0F3A2F]/10"
            >
              Дізнатись вартість
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
// херо
