import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide08() {
  return (
    <div className="relative min-h-screen md:h-full md:min-h-0 bg-[#0A0A0A] flex flex-col justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif] px-6 sm:px-10 md:px-12 lg:px-16 py-6 md:py-6">
      {/* Background with Faint Halftone & Film Grain */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div 
          className="absolute inset-0 z-0 mix-blend-multiply opacity-80" 
          style={{
            backgroundImage: 'radial-gradient(circle, #333333 2px, transparent 2px)',
            backgroundSize: '12px 12px'
          }} 
        />
        <div 
          className="absolute inset-0 mix-blend-overlay z-0 opacity-20" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-14 items-center md:items-stretch h-full">
        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:min-h-0">
          <div className="mb-8 md:mb-7 lg:mb-8 border-b-[8px] border-[#00F0FF] pb-4 md:pb-5 inline-block w-fit">
            <h2 className="font-black text-5xl sm:text-6xl md:text-[clamp(3rem,4.8vw,4.7rem)] lg:text-[clamp(3.5rem,5vw,5.4rem)] text-[#FFFFFF] uppercase tracking-tighter leading-[0.9] mix-blend-difference">
              We Know <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>The Stage.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-5 lg:gap-7 font-['JetBrains_Mono',monospace]">
            {/* Box 1 */}
            <div className="group relative pl-6 border-l-4 border-[#FFFFFF] hover:border-[#00F0FF] transition-colors duration-300">
              <div className="absolute top-2 -left-[5px] w-2 h-2 bg-[#0A0A0A] border-2 border-[#FFFFFF] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] transition-all" />
              <h3 className="text-xl md:text-[1.35rem] lg:text-2xl font-bold text-[#00F0FF] mb-2 md:mb-2.5 tracking-widest uppercase">
                // Proven Experience
              </h3>
              <p className="text-[#FFFFFF] text-sm md:text-[15px] lg:text-base opacity-90 leading-relaxed">
                We've been running live events and supporting the local music scene since 2022. We don't guess, we execute.
              </p>
            </div>

            {/* Box 2 */}
            <div className="group relative pl-6 border-l-4 border-[#FFFFFF] hover:border-[#00F0FF] transition-colors duration-300">
              <div className="absolute top-2 -left-[5px] w-2 h-2 bg-[#0A0A0A] border-2 border-[#FFFFFF] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] transition-all" />
              <h3 className="text-xl md:text-[1.35rem] lg:text-2xl font-bold text-[#00F0FF] mb-2 md:mb-2.5 tracking-widest uppercase">
                // Solid Logistics
              </h3>
              <p className="text-[#FFFFFF] text-sm md:text-[15px] lg:text-base opacity-90 leading-relaxed">
                From professional stage and audio setups to security and crowd management, we have it covered end-to-end.
              </p>
            </div>

            {/* Box 3 */}
            <div className="group relative pl-6 border-l-4 border-[#FFFFFF] hover:border-[#00F0FF] transition-colors duration-300">
              <div className="absolute top-2 -left-[5px] w-2 h-2 bg-[#0A0A0A] border-2 border-[#FFFFFF] group-hover:border-[#00F0FF] group-hover:bg-[#00F0FF] transition-all" />
              <h3 className="text-xl md:text-[1.35rem] lg:text-2xl font-bold text-[#00F0FF] mb-2 md:mb-2.5 tracking-widest uppercase">
                // The Right Partners
              </h3>
              <p className="text-[#FFFFFF] text-sm md:text-[15px] lg:text-base opacity-90 leading-relaxed">
                We are fully supported by local authorities and tourism organizations to ensure everything runs smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: The Partner Wall Grid */}
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-4 lg:gap-6 md:min-h-0">
          {/* Main Sponsor */}
          <div className="w-full bg-[#0A0A0A] border-[10px] border-[#00F0FF] flex flex-col items-center justify-center p-6 md:p-5 lg:p-6 text-center group hover:border-[#FFFFFF] transition-colors duration-500 relative overflow-hidden shadow-[12px_12px_0px_rgba(0,240,255,0.4)]">
            <div className="absolute inset-0 bg-[#00F0FF] group-hover:bg-[#FFFFFF] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 z-0" />
            
            <div className="relative z-10 flex flex-col items-center w-full">
              <span className="font-['JetBrains_Mono',monospace] text-[#00F0FF] group-hover:text-[#0A0A0A] text-xs md:text-[11px] lg:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-3 lg:mb-4 transition-colors duration-500">
                // Main Sponsor & Partner
              </span>
              
              <div className="w-full max-w-[200px] md:max-w-[180px] lg:max-w-[220px] aspect-square relative">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/Sherlock.jpg"
                  alt="Sherlock Irish Pub Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Other Partners */}
          <div className="grid grid-cols-3 gap-3 md:gap-3 lg:gap-4 w-full">
            {/* Partner 1 */}
            <div className="aspect-square bg-[#0A0A0A] border-[6px] border-[#FFFFFF] flex items-center justify-center p-1 md:p-1.5 text-center group hover:border-[#00F0FF] transition-colors duration-300 relative overflow-hidden">
              <div className="relative z-10 w-full h-full">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/Bashkia.PNG"
                  alt="Bashkia Pogradec Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Partner 2 */}
            <div className="aspect-square bg-[#0A0A0A] border-[6px] border-[#FFFFFF] flex items-center justify-center p-1 md:p-1.5 text-center group hover:border-[#00F0FF] transition-colors duration-300 relative overflow-hidden">
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/Policia.PNG"
                  alt="Policia e Shtetit Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Partner 3 */}
            <div className="aspect-square bg-[#0A0A0A] border-[6px] border-[#FFFFFF] flex items-center justify-center p-1 md:p-1.5 text-center group hover:border-[#00F0FF] transition-colors duration-300 relative overflow-hidden">
              <div className="relative z-10 w-full h-full">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/Kennedy.jpg"
                  alt="Fondacioni Kennedy Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Partner 4 */}
            <div className="aspect-square bg-[#0A0A0A] border-[6px] border-[#FFFFFF] flex items-center justify-center p-1 md:p-1.5 text-center group hover:border-[#00F0FF] transition-colors duration-300 relative overflow-hidden">
              <div className="relative z-10 w-full h-full">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/MotoClub.jpeg"
                  alt="Moto Club Pogradeci Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Partner 5 */}
            <div className="aspect-square bg-[#0A0A0A] border-[6px] border-[#FFFFFF] flex items-center justify-center p-1 md:p-1.5 text-center group hover:border-[#00F0FF] transition-colors duration-300 relative overflow-hidden">
              <div className="relative z-10 w-full h-full">
                <ImageWithFallback
                  src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/visitpg.jpg"
                  alt="Visit Pogradec Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
