export function Slide03() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-6 md:p-16 overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      {/* Background with Faint Halftone & Film Grain */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="absolute inset-0 z-0 mix-blend-screen" 
          style={{
            backgroundImage: 'radial-gradient(circle, #333333 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }} 
        />
        <div 
          className="absolute inset-0 mix-blend-overlay z-0 opacity-15" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="mb-16 md:mb-24 relative flex justify-center w-full">
          <h2 className="font-black text-[12vw] sm:text-[8vw] md:text-7xl lg:text-8xl text-[#FFFFFF] uppercase tracking-tighter leading-none text-center mix-blend-difference relative">
            THE AUDIENCE <br className="hidden sm:block md:hidden"/> MATRIX
          </h2>
          {/* Subtle Glitch Accent */}
          <div className="absolute -inset-4 bg-[#00F0FF]/10 blur-xl z-[-1]" />
        </div>

        {/* Data Matrix Elements */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-16 lg:gap-24 font-['JetBrains_Mono',monospace]">
          
          {/* Matrix Item 1 */}
          <div className="flex flex-col items-center max-w-[300px] text-center group">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[10px] border-[#00F0FF] bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-500 mb-8 z-10">
              {/* Scanline inside circle */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                 <div className="w-full h-[2px] bg-[#00F0FF]/50 animate-[scanlineFast_3s_linear_infinite]" />
              </div>
              <span className="font-bold text-4xl md:text-5xl text-[#FFFFFF] relative z-10 tracking-tighter">4,000+</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest">// Attendees</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed">
              Active youth and music enthusiasts.
            </p>
          </div>

          {/* Matrix Item 2 */}
          <div className="flex flex-col items-center max-w-[300px] text-center group md:mt-16">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[10px] border-[#00F0FF] bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-500 mb-8 z-10">
              {/* Scanline inside circle */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                 <div className="w-full h-[2px] bg-[#00F0FF]/50 animate-[scanlineFast_2s_linear_infinite]" />
              </div>
              <span className="font-bold text-4xl md:text-5xl text-[#FFFFFF] relative z-10 tracking-tighter">20+</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest">// Artists</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed">
              The best emerging and established local talent.
            </p>
          </div>

          {/* Matrix Item 3 */}
          <div className="flex flex-col items-center max-w-[300px] text-center group">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[10px] border-[#00F0FF] bg-[#0A0A0A] flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-500 mb-8 z-10">
              {/* Scanline inside circle */}
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                 <div className="w-full h-[2px] bg-[#00F0FF]/50 animate-[scanlineFast_4s_linear_infinite]" />
              </div>
              <span className="font-bold text-4xl md:text-5xl text-[#FFFFFF] relative z-10 tracking-tighter">4</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest">// Countries</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed">
              Tourists from Albania, Korça, Ohrid, and Struga.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
