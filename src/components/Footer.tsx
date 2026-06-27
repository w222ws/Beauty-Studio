import React from "react";

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FCFBF9] px-4 sm:px-6 lg:px-8 pb-10 pt-4 tracking-wider">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-[#0F3A2F]/5 rounded-[2rem] p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,58,47,0.01)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase font-medium">
          <div className="text-[#0F3A2F]/50 select-none">© 2026 Victoria</div>

          <div className="flex items-center space-x-6">
            <div className="text-[#0F3A2F]/50">
              Розробка:{" "}
              <a
                href="https://t.me/off044"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3A2F] hover:text-[#D4AF37] transition-colors duration-300 font-bold ml-1"
              >
                Tarasov Kyrylo
              </a>
            </div>

            <span className="text-[#0F3A2F]/10 hidden sm:inline">•</span>

            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center space-x-1.5 text-[#0F3A2F]/60 hover:text-[#D4AF37] transition-colors duration-300 group font-bold"
            >
              <span>Наверх</span>
              <svg
                className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300 text-[#0F3A2F] group-hover:text-[#D4AF37]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
// підвал
