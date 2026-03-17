export function Slide06() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 sm:p-12 md:p-24 overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      {/* Background with Halftone Pattern & Film Grain */}
      <div className="absolute inset-0 z-0 opacity-80">
        <div
          className="absolute inset-0 z-0 mix-blend-multiply opacity-80"
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '6px 6px'
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay z-0 opacity-15"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center h-full my-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20 w-full text-left">
          <h2 className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            // Partnership Levels
          </h2>
          <h3 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#FFFFFF] uppercase tracking-tighter leading-[0.9] mix-blend-difference whitespace-nowrap">
            Let's <span className="text-[#0A0A0A] bg-[#CCFF00] px-4 py-2 inline-block transform -rotate-2">ROCK</span> together.
          </h3>
        </div>

        {/* Tiered Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 font-['JetBrains_Mono',monospace] max-w-5xl mx-auto">

          {/* Card 1: The Opening Act (Standard) */}
          <div className="flex flex-col relative border-[12px] border-[#FFFFFF] bg-[#0A0A0A] p-8 lg:p-10 group transform transition-transform duration-300 hover:-translate-y-2 hover:border-[#00F0FF] shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-[16px_16px_0px_rgba(0,240,255,0.4)]">
            <div className="mb-8 border-b-2 border-[#FFFFFF]/30 group-hover:border-[#00F0FF]/30 pb-6 transition-colors duration-300">
              <div className="flex flex-col xl:flex-row xl:items-end justify-between">
                <h4 className="font-['Inter_Tight',sans-serif] font-black text-[#FFFFFF] group-hover:text-[#00F0FF] transition-colors duration-300 text-4xl lg:text-5xl uppercase tracking-tighter leading-none">
                  Supporting Partner
                </h4>
              </div>
              <div className="pt-4 text-[#FFFFFF]  text-xl lg:text-2xl font-bold tracking-widest transition-colors duration-300">
                50,000 ALL
              </div>
            </div>

            <ul className="text-[#FFFFFF] text-sm md:text-base leading-relaxed mb-10 flex-grow space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#FFFFFF] group-hover:text-[#00F0FF] font-bold mt-0.5 transition-colors duration-300">↳</span>
                Logo on Website
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFFFFF] group-hover:text-[#00F0FF] font-bold mt-0.5 transition-colors duration-300">↳</span>
                Logo on LED Wall
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFFFFF] group-hover:text-[#00F0FF] font-bold mt-0.5 transition-colors duration-300">↳</span>
                Mentioning on Social Media
              </li>
            </ul>
          </div>

          {/* Card 2: The Headliner (Premium) */}
          <div className="flex flex-col relative border-[12px] border-[#00F0FF] bg-[#0A0A0A] p-8 lg:p-10 group transform transition-transform duration-300 hover:-translate-y-2 shadow-[8px_8px_0px_rgba(0,240,255,0.4)] hover:shadow-[16px_16px_0px_rgba(0,240,255,0.8)]">
            <div className="absolute -top-6 -right-6 bg-[#00F0FF] w-12 h-12 flex items-center justify-center font-black text-xl text-[#0A0A0A]">
              ★
            </div>
            <div className="mb-8 border-b-2 border-[#00F0FF]/30 pb-6">
              <div className="flex flex-col xl:flex-row xl:items-end justify-between">
                <h4 className="font-['Inter_Tight',sans-serif] font-black text-[#00F0FF] text-4xl lg:text-5xl uppercase tracking-tighter leading-none">
                  Main Partner
                </h4>
              </div>
              <div className="pt-4 text-[#FFFFFF] text-xl lg:text-2xl font-bold tracking-widest">
                1,500,000 ALL
              </div>
            </div>

            <ul className="text-[#FFFFFF] text-sm md:text-base leading-relaxed mb-10 flex-grow space-y-4">
              <li className="flex items-start gap-3 text-[#00F0FF] font-bold">
                <span className="mt-0.5">★</span>
                Everything in Standard +
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00F0FF] font-bold mt-0.5">↳</span>
                Booth 3x5m
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00F0FF] font-bold mt-0.5">↳</span>
                Creative Professional Content
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00F0FF] font-bold mt-0.5">↳</span>
                Event Naming Rights
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
