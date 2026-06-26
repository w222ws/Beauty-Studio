import studioImg from "../assets/studio.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-80px)] bg-[#FCFBF9] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-24 md:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-6 md:py-12">
        {/* КАРТИНКА: На мобилках сверху, пропорции железно зафиксированы */}
        <div className="relative aspect-[4/3] lg:h-[550px] lg:aspect-auto w-full rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
          <img
            src={studioImg}
            alt="Студія Victoria Дніпро"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <span className="text-[9px] sm:text-[10px] bg-[#0F3A2F]/85 text-[#D4AF37] uppercase tracking-widest border border-[#D4AF37]/30 px-4 py-1.5 rounded-full font-semibold shadow-md backdrop-blur-sm">
              Premium Space
            </span>
          </div>
        </div>

        {/* ТЕКСТОВАЯ ЧАСТЬ: Чистый заголовок и твой список */}
        <div className="space-y-5 lg:space-y-6 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#0F3A2F] leading-[1.15] font-normal">
            Студія <br />
            <span className="italic text-[#0F3A2F] font-normal">
              преміального
            </span>{" "}
            догляду
          </h1>

          {/* СТИЛЬНЫЙ УДОБНЫЙ СПИСОК С ДАННЫМИ */}
          <div className="max-w-md mx-auto lg:mx-0 text-left text-xs sm:text-sm text-gray-600 bg-[#0F3A2F]/5 p-4 rounded-2xl border border-[#0F3A2F]/5 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong>Графік:</strong> Понеділок–неділя: 9:00 - 17:00 (Без
                вихідних)
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong>Район:</strong> ж/м Ігрень, вул. Північнодонецька, 1а
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
              <p>
                <strong>Телефон:</strong>{" "}
                <a
                  href="tel:0973968632"
                  className="hover:text-[#D4AF37] transition-colors underline decoration-[#D4AF37]"
                >
                  097-396-86-32
                </a>
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#services"
              className="inline-block w-full sm:w-auto text-center bg-[#0F3A2F] text-white px-8 py-4 uppercase tracking-widest text-xs font-bold rounded-full hover:bg-[#D4AF37] hover:text-[#0F3A2F] hover:scale-[1.02] transition-all duration-300 shadow-md shadow-emerald-900/10"
            >
              Дізнатись вартість
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
