import React from 'react';
import { motion } from 'motion/react';

export function GrainOverlay({ halftoneColor = '#0A0A0A' }: { halftoneColor?: string }) {
  return (
    <>
      <div 
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-15 z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 opacity-20 z-[9] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(${halftoneColor} 2px, transparent 2px)`,
          backgroundSize: '8px 8px'
        }}
      />
    </>
  )
}

export function Slide1() {
  return (
    <div className="relative w-full h-full min-h-screen bg-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center font-['Inter_Tight'] text-[#FFFFFF]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
        style={{ backgroundImage: `url('https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock%20Rock%20Fest/WEBP/Slide1.webp')` }}
      />
      
      <GrainOverlay />
      
      {/* Overlay to darken background further if needed */}
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-20 z-[8]"></div>

      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Date / Location */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 px-6 py-2 border-2 border-[#00F0FF] text-[#00F0FF] font-['JetBrains_Mono'] text-sm md:text-xl font-bold uppercase tracking-widest bg-[#0A0A0A]/50 backdrop-blur-sm"
        >
          Pogradec | 14–15 August
        </motion.div>

        {/* Title */}
        <div className="relative w-full flex justify-center -mx-4 overflow-hidden py-10">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[14vw] md:text-[16vw] leading-none font-black uppercase whitespace-nowrap tracking-tighter"
            style={{ WebkitTextStroke: '2px #FFFFFF', color: '#0A0A0A' }}
          >
            ROCK FEST 2026
          </motion.h1>
          
          {/* Glitch / Scanline effect */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 right-0 h-[4px] md:h-[6px] bg-[#00F0FF] shadow-[0_0_20px_#00F0FF] transform -translate-y-1/2 origin-left mix-blend-screen"
          />
        </div>

        {/* The Hooks */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row gap-4 md:gap-12 items-center text-center px-4"
        >
          <p className="font-['JetBrains_Mono'] text-[#FFFFFF] text-sm md:text-lg max-w-sm">
            &quot;THE NORTH STAR OF SOUND.&quot;
          </p>
          <div className="hidden md:block w-2 h-2 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></div>
          <p className="font-['JetBrains_Mono'] text-[#FFFFFF] text-sm md:text-lg max-w-sm">
            &quot;WHERE TRADITION MEETS THE TURNOUT.&quot;
          </p>
        </motion.div>
      </div>
    </div>
  )
}
