import p1 from "../assets/portfolio/p1.jpg";
import p2 from "../assets/portfolio/p2.jpg";
import p3 from "../assets/portfolio/p3.jpg";
import p4 from "../assets/portfolio/p4.jpg";
import p5 from "../assets/portfolio/p5.jpg";
import p6 from "../assets/portfolio/p6.jpg";
import p7 from "../assets/portfolio/p7.jpg";
import p8 from "../assets/portfolio/p8.jpg";

export default function Portfolio() {
  const images = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <section
      id="portfolio"
      className="bg-[#FCFBF9] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10"
    >
      {/* Фирменный заголовок */}
      <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center space-x-2 justify-center">
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0F3A2F]">
            Портфоліо
          </span>
          <span className="h-[1px] w-6 bg-[#D4AF37]"></span>
        </div>
        <h2 className="text-3xl font-serif text-[#0F3A2F]">
          Естетика результату
        </h2>
      </div>

      {/* Современная сетка с благородным эффектом поднятия */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-[#0F3A2F]/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-md hover:border-[#D4AF37]/30 cursor-pointer"
          >
            <img
              src={img}
              alt={`Студія Вікторія робота ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Стильная кнопка перехода в Инсту */}
      <div className="pt-12 text-center">
        <a
          href="https://www.instagram.com/__beauty___studio___viktoria__?igsh=MW4yb2FjMnVub25j"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#D4AF37] text-[#0F3A2F] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#0F3A2F] hover:text-white transition-all duration-300 shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.069-1.646-.069-4.849 0-3.204.013-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Більше робіт в Instagram</span>
        </a>
      </div>
    </section>
  );
}
