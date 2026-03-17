import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide10() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif] px-4 py-20">
      
      {/* Background Static Noise / Lightning */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        {/* Extreme Noise Overlay */}
        <div 
          className="absolute inset-0 mix-blend-screen opacity-30" 
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"6\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')"
          }} 
        />
        {/* Flashing radial gradient to simulate strobe/lightning */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#CCFF00]/10 via-[#0A0A0A]/90 to-[#0A0A0A] opacity-80 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl h-[80vh] flex items-center justify-center">
        
        {/* Chaos Collage Images */}
        
        {/* Image 1: Motion Blur Crowd (Background Left) */}
        <div className="absolute left-[-10%] sm:left-[5%] top-[10%] w-[60%] sm:w-[45%] aspect-video rotate-[-12deg] z-10 shadow-[20px_20px_0px_rgba(0,0,0,0.9)] mix-blend-luminosity opacity-80 group hover:z-50 hover:opacity-100 hover:rotate-0 hover:scale-105 transition-all duration-300">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730320221074-b7199cbd25b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBibHVyJTIwbGl2ZSUyMG11c2ljJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc3MzQzNDc3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Motion Blur Crowd"
            className="w-full h-full object-cover grayscale contrast-200"
          />
          <div className="absolute -top-6 left-12 w-32 h-10 bg-[#E0E0E0] rotate-[8deg] mix-blend-difference" />
        </div>

        {/* Image 2: Red Light Silhouette (Foreground Center) */}
        <div className="absolute top-[20%] right-[10%] sm:right-[20%] w-[55%] sm:w-[40%] aspect-square rotate-[7deg] z-30 shadow-[15px_-15px_0px_rgba(204,255,0,0.5)] group hover:z-50 hover:rotate-0 hover:scale-105 transition-all duration-300">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772251784323-5e317816a8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwcmVkJTIwbGlnaHQlMjBzaWxob3VldHRlJTIwc2luZ2VyfGVufDF8fHx8MTc3MzQzNDc3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Red Light Silhouette"
            className="w-full h-full object-cover contrast-[1.5] saturate-200 hue-rotate-90" 
            /* Note: hue-rotate shifts the red to more of an acid green/orange mix depending on base, giving it a chaotic vibe */
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-8 bg-[#FF4500] rotate-[-15deg] mix-blend-screen" />
        </div>

        {/* Image 3: Mosh Pit Aggressive (Bottom Left Overlapping) */}
        <div className="absolute bottom-[5%] left-[5%] sm:left-[15%] w-[70%] sm:w-[50%] aspect-[4/3] rotate-[-4deg] z-20 shadow-[-20px_20px_0px_rgba(255,69,0,0.6)] group hover:z-50 hover:rotate-0 hover:scale-105 transition-all duration-300">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1564796818117-ccb3d6524760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3NoJTIwcGl0JTIwY29uY2VydCUyMGFnZ3Jlc3NpdmV8ZW58MXx8fHwxNzczNDM0Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Aggressive Mosh Pit"
            className="w-full h-full object-cover contrast-[1.8] brightness-90 grayscale"
          />
          {/* Halftone over just this image */}
          <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
          <div className="absolute -top-4 left-1/2 w-40 h-10 bg-[#E0E0E0] rotate-[3deg] -translate-x-1/2 mix-blend-difference" />
        </div>

        {/* Floating Headers / Text scattered in the chaos */}
        <div className="absolute top-[5%] right-[5%] sm:right-[10%] z-40 animate-shake">
          <h2 className="font-['Black_Ops_One',system-ui] text-6xl md:text-8xl text-transparent rotate-[12deg] stroke-text mix-blend-difference" style={{ WebkitTextStroke: '2px #CCFF00' }}>
            THE PIT
          </h2>
        </div>
        
        <div className="absolute bottom-[10%] right-[0%] sm:right-[5%] z-40 bg-[#E0E0E0] p-4 sm:p-8 transform rotate-[-8deg] border-8 border-[#0A0A0A] shadow-[15px_15px_0px_#FF4500]">
          <h3 className="font-['Black_Ops_One',system-ui] text-4xl sm:text-6xl text-[#0A0A0A] uppercase leading-none tracking-tighter animate-glitch">
            FEEL <br/> THE NOISE
          </h3>
          <p className="font-['JetBrains_Mono',monospace] text-[#0A0A0A] font-bold mt-2 bg-[#CCFF00] inline-block px-2">
            // No Borders. Just Energy.
          </p>
        </div>

      </div>
    </div>
  );
}
