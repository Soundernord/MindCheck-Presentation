import React, { useRef, useEffect, useState } from 'react';
import { SLIDES_METADATA } from '../data/slidesData';
import { Brain, ArrowUp, Maximize2, Minimize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface TopNavbarProps {
  activeSection: number;
  scrollProgress: number;
  onSelectSection: (sectionId: number) => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  activeSection,
  scrollProgress,
  onSelectSection,
}) => {
  const currentMeta = SLIDES_METADATA.find((s) => s.id === activeSection) || SLIDES_METADATA[0];
  const pillsNavRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Auto-scroll the horizontal pills container so the active pill stays visible
  useEffect(() => {
    if (pillsNavRef.current) {
      const activePill = pillsNavRef.current.querySelector<HTMLButtonElement>('.section-pill-btn.active');
      if (activePill) {
        activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeSection]);

  const handlePillClick = (sectionId: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onSelectSection(sectionId);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (activeSection > 1) {
      onSelectSection(activeSection - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (activeSection < SLIDES_METADATA.length) {
      onSelectSection(activeSection + 1);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request failed', err);
    }
  };

  return (
    <header className="top-navbar-container" role="banner" aria-label="Presentation Navigation">
      <div className="top-navbar-inner">
        {/* Left: Brand Identity */}
        <button
          type="button"
          className="nav-brand-btn"
          onClick={(e) => handlePillClick(1, e)}
          title="Scroll to Title / Overview"
          aria-label="MindCheck Presentation Home"
        >
          <div className="brand-icon-box">
            <Brain size={20} className="brand-brain" />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">MINDCHECK</span>
            <span className="brand-badge">CASE STUDY</span>
          </div>
        </button>

        {/* Center: Slide / Section Numbers 01 to 12 */}
        <nav className="nav-sections-pills" ref={pillsNavRef} aria-label="Presentation Slides">
          {SLIDES_METADATA.map((slide) => {
            const isActive = slide.id === activeSection;
            return (
              <button
                key={slide.id}
                type="button"
                className={`section-pill-btn ${isActive ? 'active' : ''}`}
                onClick={(e) => handlePillClick(slide.id, e)}
                title={`${slide.slideNumberStr} — ${slide.title}`}
                aria-label={`Go to slide ${slide.slideNumberStr}: ${slide.title}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="pill-number">{slide.slideNumberStr}</span>
                <span className="pill-label">{slide.slug.split('-')[0]}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Controls (Steppers, Chip, Fullscreen, Top) */}
        <div className="nav-status-group">
          {/* Quick Prev / Next Stepper buttons */}
          <div className="nav-stepper-group" aria-label="Slide Navigation Controls">
            <button
              type="button"
              className="nav-step-btn"
              onClick={handlePrev}
              disabled={activeSection <= 1}
              title="Previous Slide (Arrow Left)"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="nav-step-counter" aria-live="polite">
              {currentMeta.slideNumberStr} / {SLIDES_METADATA.length.toString().padStart(2, '0')}
            </span>
            <button
              type="button"
              className="nav-step-btn"
              onClick={handleNext}
              disabled={activeSection >= SLIDES_METADATA.length}
              title="Next Slide (Arrow Right)"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="active-section-chip" title={currentMeta.title}>
            <span className="chip-dot" />
            <span className="chip-num">{currentMeta.slideNumberStr}</span>
            <span className="chip-name">{currentMeta.category}</span>
          </div>

          {/* Fullscreen Toggle (Desktop/Laptop) */}
          <button
            type="button"
            className="nav-icon-btn fullscreen-btn"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter 16:9 Presentation Fullscreen'}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>

          {/* Jump to top */}
          <button
            type="button"
            className="nav-icon-btn quick-top-btn"
            onClick={(e) => handlePillClick(1, e)}
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Integrated Scroll Progress Indicator */}
      <div className="top-scroll-progress-track" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="top-scroll-progress-bar"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>
    </header>
  );
};
