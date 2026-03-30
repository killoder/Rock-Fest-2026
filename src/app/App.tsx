import { useState, useEffect, useCallback, useRef } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check immediately on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isMobile) return; // Disable keyboard slide nav on mobile
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    handleFullscreenChange();
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 24 || wheelLockRef.current) return;

      wheelLockRef.current = true;
      setCurrentSlideIndex((prev) => {
        if (e.deltaY > 0) {
          return Math.min(prev + 1, slides.length - 1);
        }

        return Math.max(prev - 1, 0);
      });

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 450);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  const toggleFullscreen = useCallback(async () => {
    if (typeof document === 'undefined') return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  }, []);

  const CurrentSlide = slides[currentSlideIndex];

  if (isMobile) {
    return (
      <main className="w-full min-h-screen bg-[#0A0A0A] selection:bg-[#CCFF00] selection:text-[#0A0A0A] overflow-x-hidden">
        <div className="flex flex-col w-full gap-16 pb-16">
          {slides.map((SlideComponent, idx) => (
            <div key={idx} className="w-full min-h-screen relative border-b border-[#E0E0E0]/10 last:border-0 flex flex-col justify-center">
              <SlideWrapper>
                <SlideComponent />
              </SlideWrapper>
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="w-full h-screen bg-[#0A0A0A] selection:bg-[#CCFF00] selection:text-[#0A0A0A] overflow-hidden">
      {/* We use key={currentSlideIndex} to force a remount and trigger SlideWrapper animations */}
      <div className="w-full h-full overflow-hidden relative">
        <SlideWrapper key={currentSlideIndex}>
          <CurrentSlide />
        </SlideWrapper>
      </div>

      {currentSlideIndex < 2 && (
        <div className="fixed bottom-6 left-6 z-[200] pointer-events-none">
          <div className="border border-[#E0E0E0]/20 bg-[#0A0A0A]/80 px-4 py-2 backdrop-blur-md rounded-none shadow-[0_0_24px_rgba(10,10,10,0.35)]">
            <p className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.24em] text-[#E0E0E0]/80 whitespace-nowrap">
              ← Arrow keys or mouse wheel →
            </p>
          </div>
        </div>
      )}

      {currentSlideIndex === 0 && (
        <div className="fixed top-6 right-6 z-[200]">
          <button
            type="button"
            onClick={() => void toggleFullscreen()}
            className="border border-[#CCFF00]/60 bg-[#0A0A0A]/80 px-4 py-2 text-[#CCFF00] backdrop-blur-md rounded-none mix-blend-difference transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_18px_rgba(204,255,0,0.25)]"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            <span className="font-['JetBrains_Mono',monospace] text-[10px] uppercase tracking-[0.24em] whitespace-nowrap">
              {isFullscreen ? '[ Exit Fullscreen ]' : '[ Fullscreen ]'}
            </span>
          </button>
        </div>
      )}

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]">
        {/* Minimal Navigation Indicators */}
        <div className="flex gap-2 p-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E0E0E0]/20 rounded-none mix-blend-difference">
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
      </div>
    </main>
  );
}
