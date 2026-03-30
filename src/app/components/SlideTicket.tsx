import { ImageWithFallback } from './figma/ImageWithFallback';

export function SlideTicket() {
  return (
    <div className="relative min-h-screen md:h-full md:min-h-0 bg-[#0A0A0A] flex flex-col items-center justify-center p-6 sm:p-10 md:px-12 md:py-8 lg:px-16 lg:py-10 overflow-hidden w-full h-full font-['Inter_Tight',sans-serif]">
      {/* Dark Concrete Grunge Background */}
      <div className="absolute inset-0 z-0 opacity-60 h-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690983320828-c01b88baacb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncnVuZ2UlMjB0ZXh0dXJlJTIwZGFyayUyMGNvbmNyZXRlJTIwd2FsbHxlbnwxfHx8fDE3NzM1MDUyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Grunge Concrete Wall"
          className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/70 z-10" />
      </div>

      {/* Additional Faint Halftone & Film Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 h-full">
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

      <div className="relative z-10 w-full max-w-5xl md:h-full flex flex-col items-center justify-center md:justify-center gap-10 md:gap-12 lg:gap-14 p-2 md:py-4">
        {/* Header */}
        <div className="text-center relative group">
          <div className="absolute top-10 -left-12 w-32 h-8 bg-[#00F0FF]/80 rotate-[-8deg] mix-blend-screen opacity-90" />
          <h2 className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 relative z-10">
            // Tickets On Sale
          </h2>
          <h3 className="font-black text-5xl md:text-6xl lg:text-7xl text-[#FFFFFF] uppercase tracking-tighter leading-none relative z-10">
            Access <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>Granted</span>
          </h3>
        </div>

        {/* Tickets Container */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-14 items-center justify-center relative px-2 mb-10">
          
          {/* Ticket 1: 1-Day Pass */}
          <div className="w-full md:w-1/2 relative bg-[#E0E0E0] p-1 shadow-[12px_12px_0px_#00F0FF] transform transition-transform duration-300 hover:scale-105 hover:-rotate-2 group">
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A0A0A] rounded-full border-r border-[#E0E0E0]" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A0A0A] rounded-full border-l border-[#E0E0E0]" />
            
            <div className="bg-[#0A0A0A] border-4 border-[#00F0FF] border-dashed p-8 md:p-9 lg:p-10 flex flex-col items-center text-center h-full">
              <span className="text-[#E0E0E0] opacity-80 text-sm font-bold tracking-[0.3em] uppercase block mb-6 font-['JetBrains_Mono',monospace]">
                [ Single Day ]
              </span>
              <h4 className="font-black text-[#00F0FF] text-4xl lg:text-5xl uppercase tracking-tighter leading-none mb-10">
                1-Day Pass
              </h4>
              <div className="mt-auto pt-8 border-t-2 border-[#E0E0E0]/20 w-full">
                <div className="font-['JetBrains_Mono',monospace] text-[#E0E0E0] text-3xl lg:text-4xl font-bold tracking-widest group-hover:text-[#00F0FF] transition-colors duration-300">
                  1,000 <span className="text-xl">ALL</span>
                </div>
              </div>
              {/* Fake Barcode */}
              <div className="w-full h-12 mt-10 opacity-60" style={{
                backgroundImage: 'repeating-linear-gradient(to right, #00F0FF 0, #00F0FF 2px, transparent 2px, transparent 6px, #00F0FF 6px, #00F0FF 10px, transparent 10px, transparent 12px, #00F0FF 12px, #00F0FF 14px, transparent 14px, transparent 20px)'
              }} />
            </div>
          </div>

          {/* Ticket 2: 2-Day Pass */}
          <div className="w-full md:w-1/2 relative bg-[#E0E0E0] p-1 shadow-[12px_12px_0px_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0px_#00F0FF] transform transition-transform duration-300 hover:scale-105 hover:rotate-2 group z-10">
            {/* Duct tape overlay */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#E0E0E0]/90 rotate-[-5deg] mix-blend-screen opacity-90 z-20" />
            
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A0A0A] rounded-full border-r border-[#E0E0E0]" />
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0A0A0A] rounded-full border-l border-[#E0E0E0]" />
            
            <div className="bg-[#0A0A0A] border-4 border-[#E0E0E0] group-hover:border-[#00F0FF] p-8 md:p-9 lg:p-10 flex flex-col items-center text-center h-full transition-colors duration-300">
              <span className="text-[#00F0FF] opacity-90 text-sm font-bold tracking-[0.3em] uppercase block mb-6 font-['JetBrains_Mono',monospace]">
                [ Full Weekend ]
              </span>
              <h4 className="font-black text-[#E0E0E0] group-hover:text-[#00F0FF] transition-colors duration-300 text-4xl lg:text-5xl uppercase tracking-tighter leading-none mb-10">
                2-Day Pass
              </h4>
              <div className="mt-auto pt-8 border-t-2 border-[#00F0FF]/30 w-full">
                <div className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-4xl lg:text-5xl font-bold tracking-widest animate-glitch">
                  1,500 <span className="text-2xl">ALL</span>
                </div>
              </div>
              {/* Fake Barcode */}
              <div className="w-full h-12 mt-10 opacity-80" style={{
                backgroundImage: 'repeating-linear-gradient(to right, #E0E0E0 0, #E0E0E0 4px, transparent 4px, transparent 8px, #E0E0E0 8px, #E0E0E0 10px, transparent 10px, transparent 16px, #E0E0E0 16px, #E0E0E0 20px, transparent 20px, transparent 24px)'
              }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
