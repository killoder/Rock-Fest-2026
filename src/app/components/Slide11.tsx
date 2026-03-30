import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide11() {
  const photos = [
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind3.webp",
      alt: "Screaming Singer",
      caption: "VOCAL CHORDS: SHREDDED",
      rotation: "rotate-[-3deg]",
      shadow: "shadow-[8px_8px_0px_#CCFF00]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind1.webp",
      alt: "Punk Rock Crowd",
      caption: "THE MOMENT",
      rotation: "rotate-[4deg]",
      shadow: "shadow-[-8px_10px_0px_#FF4500]"
    },
    {
      src: "https://images.unsplash.com/photo-1768935434906-e4b1890feb70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVtbWVyJTIwbGl2ZSUyMHBlcmZvcm1hbmNlJTIwYmx1cnxlbnwxfHx8fDE3NzM0MzUxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Drummer Blur",
      caption: "180 BPM",
      rotation: "rotate-[2deg]",
      shadow: "shadow-[10px_10px_0px_#CCFF00]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind2.webp",
      alt: "Stage Dive",
      caption: "AUDIENCE",
      rotation: "rotate-[-5deg]",
      shadow: "shadow-[-12px_12px_0px_#FF4500]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind6.webp",
      alt: "Guitarist Shredding",
      caption: "FEEDBACK LOOP",
      rotation: "rotate-[5deg]",
      shadow: "shadow-[12px_-8px_0px_#CCFF00]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/rewind9.webp",
      alt: "Heavy Metal Concert",
      caption: "THE SURGE",
      rotation: "rotate-[-4deg]",
      shadow: "shadow-[-8px_-10px_0px_#FF4500]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind7.webp",
      alt: "Stage Smoke Silhouette",
      caption: "LIGHTS OUT",
      rotation: "rotate-[3deg]",
      shadow: "shadow-[8px_12px_0px_#CCFF00]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewind8.webp",
      alt: "Festival Vibes",
      caption: "ROck ENERGY",
      rotation: "rotate-[-2deg]",
      shadow: "shadow-[-10px_-8px_0px_#FF4500]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Rewin12.webp",
      alt: "Band Performing Live",
      caption: "FULL VOLUME",
      rotation: "rotate-[4deg]",
      shadow: "shadow-[8px_10px_0px_#CCFF00]"
    },
    {
      src: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Music%20(5).JPG",
      alt: "Guitar Performance",
      caption: "PURE CHAOS",
      rotation: "rotate-[-3deg]",
      shadow: "shadow-[-8px_8px_0px_#FF4500]"
    }
  ];

  return (
    <div className="relative h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      
      {/* Background Halftone & Grain */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div 
          className="absolute inset-0 mix-blend-multiply opacity-70" 
          style={{
            backgroundImage: 'radial-gradient(circle, #E0E0E0 2px, transparent 2.5px)',
            backgroundSize: '16px 16px'
          }} 
        />
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-50" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-6 md:gap-8 h-full justify-center px-2 sm:px-4 mb-6 md:mt-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-start transform -rotate-2 animate-shake z-40 w-fit shrink-0 mt-8">
          <h3 className="font-['Black_Ops_One',system-ui] text-5xl md:text-7xl text-[#CCFF00] uppercase tracking-tighter leading-[0.9] mix-blend-difference drop-shadow-[4px_4px_0px_#FF4500]">
            FESTIVAL <span className="animate-glitch text-[#E0E0E0]">REWIND</span>
          </h3>
          {/* Duct Tape */}
          <div className="absolute -top-6 -right-12 w-32 h-10 bg-[#E0E0E0]/80 rotate-[15deg] z-30 mix-blend-difference" />
        </div>

        {/* The Evidence Wall (Scattered Masonry) */}
        <div className="w-full relative z-20 overflow-y-auto md:overflow-visible">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 5 }}>
            <Masonry gutter="24px">
              {photos.map((photo, i) => (
                <div 
                  key={i} 
                  className={`relative group bg-[#E0E0E0] m-6 p-2 pb-10 sm:p-3 sm:pb-12 border-2 sm:border-4 border-[#0A0A0A] ${photo.shadow} ${photo.rotation} hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]`}
                >
                  {/* Tape strips */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0A0A0A]/20 backdrop-blur-sm rotate-[-4deg] z-10" />
                  
                  <div className="w-full overflow-hidden border-2 border-[#0A0A0A] bg-[#0A0A0A] aspect-square">
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover contrast-[1.5] brightness-75 group-hover:contrast-125 group-hover:brightness-110 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Dymo Label Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                    <span className="font-['JetBrains_Mono',monospace] text-[#E0E0E0] bg-[#0A0A0A] px-2 sm:px-3 py-1 font-bold tracking-[0.1em] text-[10px] sm:text-xs uppercase transform rotate-[-1deg] shadow-[2px_2px_0px_#FF4500]">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>

      </div>
    </div>
  );
}
