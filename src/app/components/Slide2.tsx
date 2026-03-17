import React from 'react';
import { motion } from 'motion/react';
import { GrainOverlay } from './Slide1';

export function Slide2() {
  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col md:flex-row overflow-hidden font-['Inter_Tight'] text-[#FFFFFF]">
      <GrainOverlay halftoneColor="#FFFFFF" />
      
      {/* LEFT: 60% */}
      <div className="relative w-full md:w-[60%] h-[50vh] md:h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale contrast-125 brightness-75"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1759338449452-c69d98ea7177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwdWJ8ZW58MXx8fHwxNzczMzYxMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` }}
        />
        {/* Overlay / glitch element on the image to keep the brutalist feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-[#0A0A0A]/50 md:to-[#0A0A0A] z-10" />
        
        {/* Badge */}
        <div className="absolute top-8 left-8 z-20 bg-[#00F0FF] text-[#0A0A0A] font-['JetBrains_Mono'] font-bold uppercase px-4 py-2 rotate-[-5deg] shadow-[4px_4px_0_#FFFFFF]">
          The Sonic Snapshot
        </div>
      </div>
      
      {/* RIGHT: 40% */}
      <div className="relative w-full md:w-[40%] min-h-[50vh] md:min-h-screen bg-[#0A0A0A] z-20 flex flex-col justify-center p-8 md:p-12 border-l-0 md:border-l-[15px] border-t-[15px] md:border-t-0 border-[#FFFFFF]">
        
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-12 tracking-tighter"
        >
          Project <br/><span className="text-[#00F0FF]">DNA</span>
        </motion.h2>

        <div className="space-y-8 flex flex-col">
          {[
            { title: "The Mission", desc: "Reviving the urban pulse of Pogradec through authentic rock culture." },
            { title: "The Scale", desc: "2 High-octane days of live music and creative arts." },
            { title: "The Network", desc: "A curated ecosystem of artists, tourists, and local legends." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="border-[15px] border-[#0A0A0A] bg-[#FFFFFF] p-6 text-[#0A0A0A] shadow-[8px_8px_0_#00F0FF] group hover:-translate-y-1 hover:-translate-x-1 transition-transform relative overflow-hidden"
            >
              {/* Subtle grid pattern inside boxes */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A0A0A 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
              
              <h3 className="relative z-10 font-['JetBrains_Mono'] text-xl font-bold uppercase mb-2 group-hover:text-[#00F0FF] transition-colors">
                {item.title}
              </h3>
              <p className="relative z-10 font-['Inter_Tight'] text-lg leading-tight font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
