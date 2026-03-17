import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide04() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      {/* Background: Overexposed Guitarist mid-jump */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726412937629-b2ea65564c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXJpc3QlMjBtaWQlMjBqdW1wJTIwbGl2ZSUyMGNvbmNlcnQlMjBvdmVyZXhwb3NlZHxlbnwxfHx8fDE3NzM0Mzg0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Overexposed Guitarist"
          className="w-full h-full object-cover contrast-[1.8] brightness-125 saturate-50 mix-blend-screen"
        />
        {/* Heavy Halftone & Grain */}
        <div className="absolute inset-0 mix-blend-multiply opacity-80 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 3px, transparent 3px)',
          backgroundSize: '10px 10px'
        }} />
        <div className="absolute inset-0 mix-blend-overlay opacity-40 pointer-events-none" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center px-8">
        
        {/* Headline */}
        <div className="relative mb-12 sm:mb-16 transform -rotate-3 z-30 group">
          {/* Duct Tape */}
          <div className="absolute -top-4 -left-8 w-24 h-8 bg-[#E0E0E0]/90 rotate-[-12deg] mix-blend-screen opacity-80" />
          <div className="absolute -bottom-4 -right-8 w-32 h-8 bg-[#E0E0E0]/90 rotate-[8deg] mix-blend-screen opacity-80" />
          
          <h2 className="font-['Inter_Tight',sans-serif] font-black text-[12vw] sm:text-7xl md:text-8xl lg:text-9xl text-[#CCFF00] uppercase tracking-tighter leading-[0.8] text-center drop-shadow-[0_0_20px_rgba(204,255,0,0.5)]">
            2-DAYS OF <br/>
            <span className="text-[#E0E0E0] relative inline-block">ROCK MUSIC</span>
          </h2>
        </div>

        {/* The Collision Layout for Bands */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-8 h-auto">
          
          {/* Day 1 Container */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center sm:items-end justify-center sm:pr-4 rotate-[-7deg] hover:rotate-[0deg] transition-transform duration-300">
            <div className="bg-[#FF4500] p-6 sm:p-8 shadow-[10px_10px_0px_#0A0A0A] border-4 border-[#0A0A0A] relative w-full max-w-md text-left">
              {/* Torn Paper effect using CSS borders */}
              <div className="absolute top-0 left-0 w-full h-2 bg-[#E0E0E0] mix-blend-overlay opacity-30 transform -translate-y-full" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
              
              <h3 className="font-['JetBrains_Mono',monospace] text-[#0A0A0A] text-xl font-bold tracking-widest uppercase mb-4 bg-[#CCFF00] inline-block px-2">
                Day 1 | 14 August
              </h3>
              
              <div className="flex flex-col gap-3 items-start w-full">
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left">
                    Grupi Lynx
                  </h4>
                </div>
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left">
                    Ritfolk
                  </h4>
                </div>
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left">
                    Aleksander Gjoka & Band
                  </h4>
                </div>
              </div>
            </div>
            
            {/* Duct Tape */}
            <div className="absolute -top-4 right-10 w-20 h-6 bg-[#E0E0E0]/80 rotate-[15deg] z-30" />
          </div>

          {/* Day 2 Container */}
          <div className="relative z-20 w-full md:w-1/2 flex flex-col items-center sm:items-start justify-center sm:pl-4 rotate-[15deg] sm:-mt-8 hover:rotate-[0deg] transition-transform duration-300">
            <div className="bg-[#CCFF00] p-6 sm:p-8 shadow-[-10px_10px_0px_#0A0A0A] border-4 border-[#0A0A0A] relative z-20 w-full max-w-md text-left">
              <h3 className="font-['JetBrains_Mono',monospace] text-[#E0E0E0] text-xl font-bold tracking-widest uppercase mb-4 bg-[#FF4500] inline-block px-2">
                Day 2 | 15 August
              </h3>
              
              <div className="flex flex-col gap-3 items-start w-full">
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left">
                    Urban Band
                  </h4>
                </div>
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left opacity-90">
                    Renis Gjoka
                  </h4>
                </div>
                <div className="flex items-start">
                  <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-[#0A0A0A] mr-3 mt-1 leading-none shrink-0">-</span>
                  <h4 className="font-['Inter_Tight',sans-serif] font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase leading-[1.1] tracking-tight text-left opacity-90">
                    Eugent Bushpepa
                  </h4>
                </div>
              </div>
            </div>
            
            {/* Duct Tape */}
            <div className="absolute bottom-55 -right-6 sm:right-10 w-24 h-8 bg-[#E0E0E0]/80 rotate-[25deg] z-30 mix-blend-difference" />
          </div>

        </div>

        {/* Support Acts */}
        <div className="relative w-full flex justify-center mt-12 sm:mt-16 z-30">
          <div className="bg-[#0A0A0A] border-2 border-[#00F0FF] p-4 sm:p-6 transform rotate-[-2deg] shadow-[6px_6px_0px_#00F0FF] hover:rotate-[0deg] transition-transform duration-300">
            <h5 className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-sm tracking-widest uppercase text-center mb-3">
              // Support //
            </h5>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
              <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                DJ. KL4US
              </span>
              <span className="font-['Inter_Tight',sans-serif] font-black text-xl text-[#00F0FF] opacity-50 hidden sm:inline-block">
                X
              </span>
              <span className="font-['Inter_Tight',sans-serif] font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                VJ. ERJON XHAFERAJ
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Glitch Overlay to frame the whole slide momentarily */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] mix-blend-screen" />
    </div>
  );
}
