import { ImageWithFallback } from './figma/ImageWithFallback';

export function SlideBudget() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col justify-center overflow-hidden w-full font-['Inter_Tight',sans-serif] px-6 sm:px-12 md:px-24 py-16">
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center h-full">
        {/* Left Side: Copy & Header */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <div className="mb-10 border-b-[8px] border-[#00F0FF] pb-6 inline-block w-fit relative group">
            <div className="absolute -top-4 -left-6 w-16 h-6 bg-[#00F0FF]/80 rotate-[-5deg] mix-blend-screen opacity-90 hidden md:block" />
            <h2 className="font-['JetBrains_Mono',monospace] text-[#00F0FF] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 relative z-10">
              // The Numbers
            </h2>
            <h3 className="font-black text-6xl md:text-7xl lg:text-8xl text-[#FFFFFF] uppercase tracking-tighter leading-[0.9] mix-blend-difference relative z-10">
              Event <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #FFFFFF' }}>Budget.</span>
            </h3>
          </div>

          <p className="text-[#FFFFFF]/80 text-base md:text-lg leading-relaxed max-w-md border-l-4 border-[#00F0FF] pl-6 py-2">
            Every lek is allocated to maximize the raw energy and safety of the event. Total transparency for our partners, showing exactly where the investment goes to ensure a massive impact.
          </p>
        </div>

        {/* Right Side: Data Breakdown */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center gap-4 font-['JetBrains_Mono',monospace]">
          
          <div className="w-full border-2 border-[#FFFFFF]/20 p-6 md:p-8 bg-[#0A0A0A]/50 backdrop-blur-sm flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Line Item 1 */}
              <div className="group border-b border-[#FFFFFF]/10 pb-4 hover:border-[#00F0FF] transition-colors duration-300">
                <div className="text-[#FFFFFF]/60 text-xs font-bold tracking-widest uppercase mb-1">Production & Stage</div>
                <div className="text-[#FFFFFF] group-hover:text-[#00F0FF] text-2xl md:text-3xl font-bold transition-colors duration-300">
                  2,500,000 <span className="text-sm md:text-base text-[#FFFFFF]/50">ALL</span>
                </div>
              </div>

              {/* Line Item 2 */}
              <div className="group border-b border-[#FFFFFF]/10 pb-4 hover:border-[#00F0FF] transition-colors duration-300">
                <div className="text-[#FFFFFF]/60 text-xs font-bold tracking-widest uppercase mb-1">Talent & Artists</div>
                <div className="text-[#FFFFFF] group-hover:text-[#00F0FF] text-2xl md:text-3xl font-bold transition-colors duration-300">
                  1,800,000 <span className="text-sm md:text-base text-[#FFFFFF]/50">ALL</span>
                </div>
              </div>

              {/* Line Item 3 */}
              <div className="group border-b border-[#FFFFFF]/10 pb-4 hover:border-[#00F0FF] transition-colors duration-300">
                <div className="text-[#FFFFFF]/60 text-xs font-bold tracking-widest uppercase mb-1">Marketing & PR</div>
                <div className="text-[#FFFFFF] group-hover:text-[#00F0FF] text-2xl md:text-3xl font-bold transition-colors duration-300">
                  800,000 <span className="text-sm md:text-base text-[#FFFFFF]/50">ALL</span>
                </div>
              </div>

              {/* Line Item 4 */}
              <div className="group border-b border-[#FFFFFF]/10 pb-4 hover:border-[#00F0FF] transition-colors duration-300">
                <div className="text-[#FFFFFF]/60 text-xs font-bold tracking-widest uppercase mb-1">Security & Logistics</div>
                <div className="text-[#FFFFFF] group-hover:text-[#00F0FF] text-2xl md:text-3xl font-bold transition-colors duration-300">
                  500,000 <span className="text-sm md:text-base text-[#FFFFFF]/50">ALL</span>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="mt-4 pt-6 border-t-4 border-[#00F0FF] flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#00F0FF]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              <div>
                <div className="text-[#00F0FF] text-sm font-bold tracking-[0.2em] uppercase mb-2">// Total Projected</div>
                <div className="text-[#FFFFFF] text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
                  5,600,000 <span className="text-xl md:text-2xl text-[#FFFFFF]/50 font-normal">ALL</span>
                </div>
              </div>
              <div className="text-[#FFFFFF]/40 text-xs text-right max-w-[200px]">
                *Estimates subject to final permit approvals and scale requirements.
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
