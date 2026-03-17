import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide07() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col justify-end overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      {/* Background Image (Panorama Split) */}
      <div className="absolute inset-0 z-0 h-[60vh] md:h-[100vh]">
        <ImageWithFallback
          src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Pogradec.webp"
          alt="Pogradec Lakefront at Dusk"
          className="w-full h-full object-cover grayscale contrast-125 brightness-50"
        />
        {/* Halftone Pattern Overlay */}
        <div 
          className="absolute inset-0 z-10 mix-blend-multiply opacity-60" 
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '6px 6px'
          }} 
        />
        {/* 15% opacity film grain overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay z-10 opacity-20" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
        {/* Dark Gradient Overlay to merge with content */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 pt-[40vh] pb-16 md:py-24 flex flex-col justify-end min-h-screen">
        <h2 className="font-black text-6xl md:text-8xl lg:text-[9vw] text-[#FFFFFF] uppercase tracking-tighter leading-none mb-12 mix-blend-difference">
          Why <br className="hidden md:block"/>
          <span className="text-[#0A0A0A] bg-[#CCFF00] px-4 py-2 inline-block transform -rotate-2">POGRADEC?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 border-t-4 border-[#00F0FF] pt-8 font-['JetBrains_Mono',monospace]">
          
          {/* Section 1: The Destination */}
          <div className="flex flex-col group">
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest bg-[#0A0A0A] inline-block pr-4">
              // The Destination
            </h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed border-l-2 border-[#FFFFFF]/30 pl-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              We're turning this beautiful lakeside city into a destination for thousands of tourists and music fans.
            </p>
          </div>

          {/* Section 2: The Vibe */}
          <div className="flex flex-col group">
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest bg-[#0A0A0A] inline-block pr-4">
              // The Vibe
            </h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed border-l-2 border-[#FFFFFF]/30 pl-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              It's the perfect mix of a natural escape and an energetic urban festival. High contrast, raw energy.
            </p>
          </div>

          {/* Section 3: The Impact */}
          <div className="flex flex-col group">
            <h3 className="text-xl md:text-2xl font-bold text-[#00F0FF] mb-4 uppercase tracking-widest bg-[#0A0A0A] inline-block pr-4">
              // The Impact
            </h3>
            <p className="text-[#FFFFFF] text-sm md:text-base opacity-90 leading-relaxed border-l-2 border-[#FFFFFF]/30 pl-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              This event puts Pogradec on the map as a center for culture and creativity, boosting local economy and brand awareness.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
