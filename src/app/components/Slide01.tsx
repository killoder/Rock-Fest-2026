import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide01() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col justify-center items-center overflow-hidden font-['Inter_Tight',sans-serif]">
      {/* Background Image (Grayscale + High Contrast) */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Slide1.webp"
          alt="Rock Concert Crowd Silhouette"
          className="w-full h-full object-cover grayscale contrast-150 brightness-50"
        />
        {/* Halftone Pattern Overlay */}
        <div 
          className="absolute inset-0 z-0 mix-blend-multiply opacity-80" 
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 2px, transparent 2px)',
            backgroundSize: '6px 6px'
          }} 
        />
        {/* 15% opacity film grain overlay */}
        <div 
          className="absolute inset-0 mix-blend-overlay z-0 opacity-15" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
        {/* Vignette/Darkening Gradient to ensure text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_100%)] z-0 opacity-80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-between min-h-screen py-16 px-4">
        
        {/* Hooks - Top Block */}
        <div className="flex flex-col items-center gap-3 w-full max-w-4xl text-center font-['JetBrains_Mono',monospace] text-[#FFFFFF] text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] uppercase">
           <div className="px-6 py-2 border border-[#00F0FF]/40 bg-[#0A0A0A]/60 backdrop-blur-sm shadow-[4px_4px_0px_#00F0FF]">
             <span className="text-[#00F0FF]">_ </span> The lake is about to get a lot louder.
           </div>
        </div>

        {/* Huge Brutalist Title - Centered & Visible */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-visible my-auto">
           <h1 className="font-['Inter_Tight',sans-serif] font-black text-[15vw] leading-[0.8] tracking-[-0.02em] text-[#FFFFFF] uppercase text-center w-full select-none mix-blend-difference">
             ROCK FEST<br/>
             <span className="relative inline-block text-[#FFFFFF]">
               2026
               {/* Glitch / Scanline Container */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                 <div 
                   className="w-[120%] -left-[10%] h-[3px] bg-[#00F0FF] mix-blend-screen shadow-[0_0_15px_#00F0FF,0_0_30px_#00F0FF] absolute"
                   style={{
                     animation: 'scanlineFast 2.5s cubic-bezier(0.1, 0.9, 0.2, 1) infinite'
                   }} 
                 />
                 <div 
                   className="w-[120%] -left-[10%] h-[2vw] bg-[#00F0FF]/20 mix-blend-screen shadow-[0_0_20px_#00F0FF] absolute backdrop-blur-sm"
                   style={{
                     animation: 'scanlineSlow 4s linear infinite alternate'
                   }} 
                 />
               </div>
             </span>
           </h1>
        </div>

        {/* Data/Location - Bottom Block */}
        <div className="flex flex-col items-center justify-center p-6 md:p-8 border-4 border-[#00F0FF] bg-[#0A0A0A]/80 backdrop-blur-md text-[#FFFFFF] font-['JetBrains_Mono',monospace] w-full max-w-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-[-8px_8px_0px_#00F0FF]">
           <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center text-xl md:text-3xl font-bold uppercase tracking-wider">
             <div className="flex flex-col items-center">
               <span className="text-xs md:text-sm font-normal text-[#00F0FF] mb-2 tracking-[0.25em]">// LOCATION //</span>
               <span>POGRADEC</span>
             </div>
             <div className="hidden sm:block w-[2px] h-16 bg-[#00F0FF]/30" />
             <div className="flex flex-col items-center">
               <span className="text-xs md:text-sm font-normal text-[#00F0FF] mb-2 tracking-[0.25em]">// DATE //</span>
               <span>14–15 AUGUST</span>
             </div>
           </div>
        </div>
      </div>

      {/* Global Glitch & Scanline Styles */}
      <style>{`
        @keyframes scanlineSlow {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        @keyframes scanlineFast {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          40% { top: 110%; opacity: 1; }
          41% { opacity: 0; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
