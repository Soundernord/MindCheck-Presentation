import React from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, Maximize, Minimize, BookOpen, MonitorPlay } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onOpenDrawer: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isScrollMode: boolean;
  onToggleScrollMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onOpenDrawer,
  isFullscreen,
  onToggleFullscreen,
  isScrollMode,
  onToggleScrollMode,
}) => {
  const progressPercent = ((currentSlide) / totalSlides) * 100;
  const currentFormatted = String(currentSlide).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');

  return (
    <nav className="presentation-nav-wrapper" aria-label="Presentation Navigation Controls">
      {/* Bottom Progress Bar */}
      <div className="presentation-progress-track">
        <div
          className="presentation-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating Control Bar */}
      <div className="presentation-dock">
        <div className="dock-left">
          <button
            className="dock-action-btn"
            onClick={onOpenDrawer}
            title="Open Slide Grid (G)"
            aria-label="Open Slide Grid"
          >
            <LayoutGrid size={18} />
            <span className="dock-btn-text">Slides</span>
          </button>

          <button
            className="dock-action-btn"
            onClick={onToggleScrollMode}
            title={isScrollMode ? "Switch to Presentation View (P)" : "Switch to Reading View"}
            aria-label="Toggle Presentation View"
          >
            {isScrollMode ? <MonitorPlay size={18} /> : <BookOpen size={18} />}
            <span className="dock-btn-text">{isScrollMode ? "Slide Mode" : "Read Mode"}</span>
          </button>
        </div>

        {/* Center: Slide Counter & Prev/Next */}
        <div className="dock-center">
          <button
            className="dock-nav-arrow"
            onClick={onPrev}
            disabled={currentSlide <= 1}
            title="Previous Slide (Left Arrow)"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="dock-counter" onClick={onOpenDrawer} title="Click to view all slides">
            <span className="counter-current">{currentFormatted}</span>
            <span className="counter-divider">/</span>
            <span className="counter-total">{totalFormatted}</span>
          </div>

          <button
            className="dock-nav-arrow"
            onClick={onNext}
            disabled={currentSlide >= totalSlides}
            title="Next Slide (Right Arrow or Space)"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right: Fullscreen & Keyboard Hint */}
        <div className="dock-right">
          <span className="keyboard-pill">
            <span className="key-kbd">←</span> <span className="key-kbd">→</span> Keys
          </span>

          <button
            className="dock-action-btn icon-only"
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
