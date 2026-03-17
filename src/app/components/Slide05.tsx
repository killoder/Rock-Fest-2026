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
            // <span className="bg-[#00F0FF] text-[#0A0A0A] px-1 py-0.5 ml-1">Your Brand in the Wild</span>
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
                src="https://images.unsplash.com/photo-1761618291331-535983ae4296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxlZCUyMHNjcmVlbiUyMGNvbmNlcnR8ZW58MXx8fHwxNzczNDMzODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Direct exposure to <span className="text-[#00F0FF] font-bold">4,000+ hardcore fans</span> and <span className="text-[#FFFFFF] font-bold">10,000+ weekend visitors</span> flooding into Pogradec. Your brand becomes the backdrop to their experience.
            </p>
          </div>

          {/* Gallery Item 2: Heavy Promotions */}
          <div className="flex flex-col group cursor-default md:translate-y-8">
            <div className="relative w-full aspect-square border-2 border-[#FFFFFF] bg-[#0A0A0A] overflow-hidden mb-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1570143276410-961207eea21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwZmFuJTIwd2VhcmluZyUyMHQtc2hpcnQlMjBiYWNrfGVufDF8fHx8MTc3MzQzMzgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Aggressive 360-degree promotions across national radio, digital blasts, and official merch. We turn the crowd into <span className="text-[#00F0FF] font-bold">walking billboards</span> for your brand.
            </p>
          </div>

          {/* Gallery Item 3: Tangible ROI */}
          <div className="flex flex-col group cursor-default">
            <div className="relative w-full aspect-square border-2 border-[#FFFFFF] bg-[#0A0A0A] overflow-hidden mb-4 group-hover:border-[#00F0FF] transition-colors duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760822398802-09a6b6c4c15c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMG91dGRvb3IlMjB0ZW50JTIwaGFuZ291dHxlbnwxfHx8fDE3NzM0MzM4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Real metrics, real impact. Drive your <span className="text-[#00F0FF] font-bold">Return on Investment</span> through targeted on-site activations, VIP engagement, and measurable post-festival analytics.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
