import React from 'react';
import { motion } from 'motion/react';
import { GrainOverlay } from './Slide1';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide3() {
  const stats = [
    { 
      value: "4,000+", 
      label: "Attendees", 
      desc: "Active youth and music enthusiasts" 
    },
    { 
      value: "20+", 
      label: "Acts", 
      desc: "The best emerging and established local talent" 
    },
    { 
      value: "4", 
      label: "Countries", 
      desc: "Reaching tourists from Albania, Korça, Ohrid, and Struga" 
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center font-['Inter_Tight'] text-[#FFFFFF] overflow-hidden py-24 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760092189903-dce3e898dacf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwYXVkaWVuY2UlMjByb2NrJTIwZmVzdGl2YWwlMjBjcm93ZHxlbnwxfHx8fDE3NzM1MDQ5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rock Festival Crowd"
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]/80 z-10" />
      </div>

      <GrainOverlay halftoneColor="#00F0FF" />
      
      {/* Glitchy Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center mb-24"
      >
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mix-blend-difference" style={{ color: '#00F0FF', textShadow: '4px 4px 0px #FFFFFF' }}>
          THE AUDIENCE MATRIX
        </h2>
        <div className="absolute top-1/2 left-[-10vw] right-[-10vw] h-[1px] bg-[#FFFFFF] opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-[-10vw] right-[-10vw] h-[1px] bg-[#00F0FF] opacity-50 translate-y-2 pointer-events-none" />
      </motion.div>

      {/* The Stats Matrix */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-6xl mx-auto">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6, type: 'spring' }}
            className="flex flex-col items-center text-center group"
          >
            {/* The Neon Blue Circle */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-[8px] border-[#00F0FF] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_80px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 rounded-full border-2 border-[#FFFFFF] opacity-20 scale-[1.1]" />
              <div className="absolute inset-0 rounded-full bg-[#00F0FF] opacity-10 blur-xl" />
              
              <span className="font-black text-5xl md:text-6xl tracking-tighter text-[#00F0FF] drop-shadow-[0_0_10px_#00F0FF]">
                {stat.value}
              </span>
            </div>

            {/* Labels */}
            <div className="font-['JetBrains_Mono']">
              <h3 className="text-2xl font-bold uppercase mb-4 text-[#FFFFFF]">
                {stat.label}
              </h3>
              <p className="text-sm md:text-base text-[#FFFFFF]/70 max-w-xs mx-auto">
                {stat.desc}
              </p>
            </div>
            
            {/* Decorative crosshair */}
            <div className="mt-8 opacity-50 text-[#00F0FF]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V22M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer minimal info */}
      <div className="absolute bottom-6 left-6 font-['JetBrains_Mono'] text-[#FFFFFF]/50 text-xs tracking-widest z-20 uppercase">
        ROCK_FEST_26 // DATA_STREAM
      </div>
    </div>
  )
}
