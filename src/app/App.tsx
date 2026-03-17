import { useState, useEffect, useCallback } from 'react';
import { Slide01 } from './components/Slide01';
import { Slide02 } from './components/Slide02';
import { Slide03 } from './components/Slide03';
import { Slide04 } from './components/Slide04';
import { Slide05 } from './components/Slide05';
import { SlideTicket } from './components/SlideTicket';
import { Slide06 } from './components/Slide06';
import { Slide07 } from './components/Slide07';
import { Slide08 } from './components/Slide08';
import { SlideBudget } from './components/SlideBudget';
import { Slide09 } from './components/Slide09';
import { Slide10 } from './components/Slide10';
import { Slide11 } from './components/Slide11';
import { SlideWrapper } from './components/SlideWrapper';

const slides = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  SlideTicket,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  SlideBudget,
  Slide09,
  Slide10,
  Slide11
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const CurrentSlide = slides[currentSlideIndex];

  return (
    <main className="w-full h-screen bg-[#0A0A0A] selection:bg-[#CCFF00] selection:text-[#0A0A0A] overflow-hidden">
      {/* We use key={currentSlideIndex} to force a remount and trigger SlideWrapper animations */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden relative">
        <SlideWrapper key={currentSlideIndex}>
          <CurrentSlide />
        </SlideWrapper>
      </div>

      {/* Minimal Navigation Indicators */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex gap-2 p-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E0E0E0]/20 rounded-none mix-blend-difference">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`w-4 h-1.5 transition-all duration-300 ${
              idx === currentSlideIndex 
                ? 'bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]' 
                : 'bg-[#E0E0E0]/30 hover:bg-[#E0E0E0]/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
