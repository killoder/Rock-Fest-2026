import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide05() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden w-full font-['Inter_Tight',sans-serif]">
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
        <div className="mb-8 md:mb-12 relative flex flex-col items-center justify-center w-full text-center">
          <h2 className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2 md:mb-4">
            <span className="bg-[#00F0FF] text-[#0A0A0A] px-1 py-0.5 ml-1">// Your Brand in the Wild</span>
          </h2>
          <h3 className="font-black text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] uppercase tracking-tighter leading-[0.9] text-center mix-blend-difference">
            Don't just be seen.<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>Be part of the experience.</span>
          </h3>
        </div>

        {/* The Mockup Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          
          {/* Gallery Item 1: Reach & Visitors */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square border-2 border-[#FFFFFF] bg-[#0A0A0A] overflow-hidden mb-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              <ImageWithFallback
                src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Slide6.webp"
                alt="Main Stage LED Screen"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              {/* Scanline Effect overlay on image */}
              <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-[#00F0FF] text-[#0A0A0A] font-['JetBrains_Mono',monospace] font-bold text-sm px-2 py-1">01</span>
              <h4 className="font-black text-[#FFFFFF] text-2xl uppercase tracking-wider">Massive Reach</h4>
            </div>
            <p className="font-['JetBrains_Mono',monospace] text-[#FFFFFF]/80 text-sm leading-relaxed border-l-2 border-[#00F0FF]/30 pl-4">
              Direct exposure to <span className="text-[#00F0FF] font-bold">4,000+ hardcore fans</span> and <span className="text-[#FFFFFF] font-bold">6,000+ visitors</span> flooding into Pogradec. Your brand becomes the backdrop to their experience.
            </p>
          </div>

          {/* Gallery Item 2: Heavy Promotions */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square border-2 border-[#FFFFFF] bg-[#0A0A0A] overflow-hidden mb-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fan wearing a festival t-shirt"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-[#00F0FF] text-[#0A0A0A] font-['JetBrains_Mono',monospace] font-bold text-sm px-2 py-1">02</span>
              <h4 className="font-black text-[#FFFFFF] text-2xl uppercase tracking-wider">Heavy Promos</h4>
            </div>
            <p className="font-['JetBrains_Mono',monospace] text-[#FFFFFF]/80 text-sm leading-relaxed border-l-2 border-[#00F0FF]/30 pl-4">
              360° promotion across digital media, institutional partners, and business networks, the festival offers <span className="text-[#00F0FF] font-bold">strong visibility,</span> and wide audience reach.
            </p>
          </div>

          {/* Gallery Item 3: Tangible ROI */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square border-2 border-[#FFFFFF] bg-[#0A0A0A] overflow-hidden mb-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643139863038-7355941e9e89?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Festival Brand Zone Tent"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#00F0FF]/10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="bg-[#00F0FF] text-[#0A0A0A] font-['JetBrains_Mono',monospace] font-bold text-sm px-2 py-1">03</span>
              <h4 className="font-black text-[#FFFFFF] text-2xl uppercase tracking-wider">Maximum ROI</h4>
            </div>
            <p className="font-['JetBrains_Mono',monospace] text-[#FFFFFF]/80 text-sm leading-relaxed border-l-2 border-[#00F0FF]/30 pl-4">
              Generate measurable ROI through targeted on-site activations, <span className="text-[#00F0FF] font-bold">high-value audience engagement,</span> and post-festival analytics that show real impact.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
