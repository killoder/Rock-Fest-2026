import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide02() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col md:flex-row overflow-hidden w-full">
      {/* 50% Left Section - Action Shot */}
      <div className="relative w-full md:w-[50%] h-[50vh] md:h-screen bg-[#0A0A0A] group overflow-hidden">
        {/* Background Image (Grayscale + High Contrast) */}
        <ImageWithFallback
          src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Slide22.webp"
          alt="Massive crowd at a rock music festival"
          className="w-full h-full object-cover object-top transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
        />

        {/* Halftone Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 mix-blend-multiply opacity-70 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '6px 6px'
          }} 
        />
        {/* 15% opacity film grain overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay z-0 opacity-15 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
        
        {/* Decorative Badge */}
        <div className="absolute top-8 left-8 border-2 border-[#00F0FF] p-4 bg-[#0A0A0A]/80 backdrop-blur-sm shadow-[4px_4px_0px_#00F0FF] z-10 font-['JetBrains_Mono',monospace] text-[#00F0FF] font-bold tracking-widest uppercase text-sm pointer-events-none">
          // SHERLOCK IRISH PUB <br/>
          // Rock Fest 2026
        </div>
      </div>

      {/* 50% Right Section - Technical List */}
      <div className="w-full md:w-[50%] flex flex-col justify-center bg-[#0A0A0A] p-6 sm:p-12 md:p-16 z-10 relative">
        <h2 className="font-['Inter_Tight',sans-serif] font-black text-5xl md:text-6xl text-[#FFFFFF] mb-12 uppercase leading-none tracking-tighter mix-blend-difference">
          The <span className="text-transparent" style={{ WebkitTextStroke: '2px #00F0FF' }}>Sonic</span> Snapshot
        </h2>

        <div className="flex flex-col gap-8 w-full font-['JetBrains_Mono',monospace]">
          
          {/* Box 1 */}
          <div className="border-[15px] border-[#FFFFFF] bg-[#0A0A0A] p-6 sm:p-8 transform transition-transform hover:-translate-y-2 hover:border-[#00F0FF] duration-300 relative group">
            <div className="absolute -top-4 -left-4 bg-[#00F0FF] text-[#0A0A0A] font-bold px-3 py-1 text-sm tracking-widest">01</div>
            <h3 className="text-[#00F0FF] font-bold text-xl mb-3 tracking-widest uppercase">The Mission</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base leading-relaxed">Bringing rock, culture, and new energy to the heart of Pogradec.</p>
          </div>

          {/* Box 2 */}
          <div className="border-[15px] border-[#FFFFFF] bg-[#0A0A0A] p-6 sm:p-8 transform transition-transform hover:-translate-y-2 hover:border-[#00F0FF] duration-300 relative group">
            <div className="absolute -top-4 -left-4 bg-[#00F0FF] text-[#0A0A0A] font-bold px-3 py-1 text-sm tracking-widest">02</div>
            <h3 className="text-[#00F0FF] font-bold text-xl mb-3 tracking-widest uppercase">The Scale</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base leading-relaxed">2 High-energy days of live music and creative arts.</p>
          </div>

          {/* Box 3 */}
          <div className="border-[15px] border-[#FFFFFF] bg-[#0A0A0A] p-6 sm:p-8 transform transition-transform hover:-translate-y-2 hover:border-[#00F0FF] duration-300 relative group">
            <div className="absolute -top-4 -left-4 bg-[#00F0FF] text-[#0A0A0A] font-bold px-3 py-1 text-sm tracking-widest">03</div>
            <h3 className="text-[#00F0FF] font-bold text-xl mb-3 tracking-widest uppercase">The Network</h3>
            <p className="text-[#FFFFFF] text-sm md:text-base leading-relaxed">Connecting artists, audiences, tourists, and the local community.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
