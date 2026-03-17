export function Slide09() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif] px-6 sm:px-12 md:px-24 py-24 border-[20px] md:border-[30px] border-[#00F0FF]">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 h-full items-center p-2">
        {/* Left Side: Headline & Next Step */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <div className="border-l-8 border-[#00F0FF] pl-8">
            <h2 className="font-black text-[12vw] sm:text-[10vw] md:text-8xl lg:text-9xl text-[#FFFFFF] uppercase tracking-tighter leading-[0.85] mix-blend-difference mb-8">
              Ready To<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '3px #FFFFFF' }}>Partner</span><br />
              Up?
            </h2>
            <div className="bg-[#00F0FF] text-[#0A0A0A] inline-block px-6 py-3 font-['JetBrains_Mono',monospace] font-bold text-sm md:text-base uppercase tracking-widest transform -rotate-2 shadow-[8px_8px_0px_rgba(255,255,255,0.2)]">
              // Let's Make Some Noise
            </div>
          </div>

        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center bg-[#00F0FF] p-8 md:p-12 shadow-[16px_16px_0px_#FFFFFF] transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="border-b-4 border-[#0A0A0A] pb-6 mb-8">
            <h3 className="font-black text-4xl md:text-5xl text-[#0A0A0A] uppercase tracking-tighter leading-none">
              Get In Touch
            </h3>
          </div>

          <div className="flex flex-col gap-8 font-['JetBrains_Mono',monospace]">
            {/* Contact Person */}
            <div className="group">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Coordinator</span>
              <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A] uppercase tracking-wider">
                Dritan Hoxha
              </p>
            </div>

            {/* Phone */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Phone</span>
              <a href="tel:+355694409129" className="text-xl md:text-2xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider">
                +355 69 440 9129
              </a>
            </div>

            {/* Email */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Email</span>
              <a href="mailto:dritanhoxha@protonmail.com" className="text-lg md:text-xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider break-all">
                dritanhoxha@protonmail.com
              </a>
            </div>

            {/* Web */}
            <div className="group border-l-4 border-[#0A0A0A] pl-4 hover:pl-6 transition-all duration-300">
              <span className="text-[#0A0A0A] opacity-70 text-xs font-bold tracking-[0.2em] uppercase block mb-1">Web</span>
              <a href="https://www.sherlockirishpub.com" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-bold text-[#0A0A0A] hover:underline decoration-4 underline-offset-4 tracking-wider break-all">
                www.sherlockirishpub.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
