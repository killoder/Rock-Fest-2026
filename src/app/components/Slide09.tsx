export function Slide09() {
  return (
    <div className="relative min-h-screen md:h-full md:min-h-0 bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif] px-5 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-10 md:py-8 border-[clamp(12px,2vw,26px)] border-[#00F0FF]">
      {/* Background with Faint Halftone & Film Grain */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0 mix-blend-multiply opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '8px 8px'
          }}
        />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-10 lg:gap-16 h-full items-center p-1 md:p-2">
        {/* Left Side: Headline & Next Step */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <div className="border-l-[6px] md:border-l-8 border-[#00F0FF] pl-5 sm:pl-6 md:pl-8">
            <h2 className="font-black text-[11vw] sm:text-[9vw] md:text-[clamp(4rem,8vw,5.8rem)] lg:text-[clamp(4.8rem,8vw,6.8rem)] text-[#FFFFFF] uppercase tracking-tighter leading-[0.85] mix-blend-difference mb-6 md:mb-7">
              Ready To<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '3px #FFFFFF' }}>Partner</span><br />
              Up?
            </h2>
            <div className="bg-[#00F0FF] text-[#0A0A0A] inline-block px-5 py-2.5 md:px-6 md:py-3 font-['JetBrains_Mono',monospace] font-bold text-xs md:text-sm uppercase tracking-widest transform -rotate-2 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
              // Let's Make Some Noise
            </div>
          </div>

        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center bg-[#00F0FF] p-6 md:p-8 lg:p-10 shadow-[12px_12px_0px_#FFFFFF] transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="border-b-4 border-[#0A0A0A] pb-5 mb-6 md:mb-7">
            <h3 className="font-black text-3xl md:text-4xl lg:text-5xl text-[#0A0A0A] uppercase tracking-tighter leading-none">
              Get In Touch
            </h3>
          </div>

          <div className="flex flex-col gap-6 md:gap-7 font-['JetBrains_Mono',monospace]">
            {/* Contact Person */}
            <div className="group">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Coordinator</span>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A] uppercase tracking-wider">
                Dritan Hoxha
              </p>
            </div>

            {/* Phone */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Phone</span>
              <a href="tel:+355694409129" className="text-lg md:text-xl lg:text-2xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider">
                +355 69 440 9129
              </a>
            </div>

            {/* Email */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Email</span>
              <a href="mailto:dritanhoxha@protonmail.com" className="text-base md:text-lg lg:text-xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider break-all">
                dritanhoxha@protonmail.com
              </a>
            </div>

            {/* Web */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Web</span>
              <a href="https://www.sherlockirishpub.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg lg:text-xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider break-all">
                www.sherlockirishpub.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
