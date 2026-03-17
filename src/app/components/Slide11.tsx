import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide11() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1704253807308-ce150821a03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3JlYW1pbmclMjBzaW5nZXIlMjBsaXZlJTIwbXVzaWN8ZW58MXx8fHwxNzczNDM1MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Screaming Singer",
      caption: "VOCAL CHORDS: SHREDDED",
      rotation: "rotate-[-3deg]",
      shadow: "shadow-[8px_8px_0px_#CCFF00]"
    },
    {
      src: "https://images.unsplash.com/photo-1679567042167-bd5c3a0558ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW5rJTIwcm9jayUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NzM0MzUxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Punk Rock Crowd",
      caption: "MOSH PIT SECURED",
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
      src: "https://images.unsplash.com/photo-1619973226698-b77a5b5dd14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGRpdmUlMjBjcm93ZCUyMHN1cmZpbmd8ZW58MXx8fHwxNzczNDM1MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Stage Dive",
      caption: "FLIGHT PATH",
      rotation: "rotate-[-5deg]",
      shadow: "shadow-[-12px_12px_0px_#FF4500]"
    },
    {
      src: "https://images.unsplash.com/photo-1513478059831-e4ee54cc130d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWl0YXJpc3QlMjBzaHJlZGRpbmclMjBsaXZlJTIwY29uY2VydHxlbnwxfHx8fDE3NzM0MzUxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Guitarist Shredding",
      caption: "FEEDBACK LOOP",
      rotation: "rotate-[5deg]",
      shadow: "shadow-[12px_-8px_0px_#CCFF00]"
    },
    {
      src: "https://images.unsplash.com/photo-1665703156138-8400f67c47e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMG1ldGFsJTIwY29uY2VydHxlbnwxfHx8fDE3NzM0MzUxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Heavy Metal Concert",
      caption: "THE SURGE",
      rotation: "rotate-[-4deg]",
      shadow: "shadow-[-8px_-10px_0px_#FF4500]"
    },
    {
      src: "https://images.unsplash.com/photo-1701460356788-2d3cff05c537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBzdGFnZSUyMHNtb2tlJTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3NzM0MzUxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Stage Smoke Silhouette",
      caption: "LIGHTS OUT",
      rotation: "rotate-[3deg]",
      shadow: "shadow-[8px_12px_0px_#CCFF00]"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center py-20 px-4 sm:px-12 md:px-24 overflow-hidden w-full font-['Inter_Tight',sans-serif]">
      
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

      <div className="relative z-10 w-full max-w-[1600px] flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-start transform -rotate-2 animate-shake z-40 mb-8 w-fit">
          <h3 className="font-['Black_Ops_One',system-ui] text-6xl md:text-8xl text-[#CCFF00] uppercase tracking-tighter leading-[0.9] mix-blend-difference drop-shadow-[4px_4px_0px_#FF4500]">
            FESTIVAL <span className="animate-glitch text-[#E0E0E0]">REWIND</span>
          </h3>
          {/* Duct Tape */}
          <div className="absolute -top-6 -right-12 w-32 h-10 bg-[#E0E0E0]/80 rotate-[15deg] z-30 mix-blend-difference" />
        </div>

        {/* The Evidence Wall (Scattered Masonry) */}
        <div className="w-full relative z-20">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3, 1600: 4 }}>
            <Masonry gutter="48px">
              {photos.map((photo, i) => (
                <div 
                  key={i} 
                  className={`relative group bg-[#E0E0E0] p-3 pb-12 sm:p-4 sm:pb-16 border-4 border-[#0A0A0A] ${photo.shadow} ${photo.rotation} hover:rotate-0 hover:scale-105 hover:z-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]`}
                >
                  {/* Tape strips */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0A0A0A]/20 backdrop-blur-sm rotate-[-4deg] z-10" />
                  
                  <div className="w-full overflow-hidden border-2 border-[#0A0A0A] bg-[#0A0A0A] aspect-[4/5]">
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover grayscale contrast-[1.5] brightness-75 group-hover:grayscale-0 group-hover:contrast-125 group-hover:brightness-110 transition-all duration-500"
                    />
                  </div>
                  
                  {/* Dymo Label Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                    <span className="font-['JetBrains_Mono',monospace] text-[#E0E0E0] bg-[#0A0A0A] px-3 py-1 font-bold tracking-[0.1em] text-xs sm:text-sm uppercase transform rotate-[-1deg] shadow-[2px_2px_0px_#FF4500]">
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
