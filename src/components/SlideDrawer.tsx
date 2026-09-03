import React from 'react';
import { SLIDES_METADATA } from '../data/slidesData';
import { X, CheckCircle2 } from 'lucide-react';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="slide-drawer-overlay" onClick={onClose}>
      <div className="slide-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <h3>Presentation Navigator</h3>
            <p>Select any slide to jump directly</p>
          </div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close slide navigator">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-grid">
          {SLIDES_METADATA.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                className={`drawer-slide-card ${isCurrent ? 'active' : ''} theme-${slide.theme}`}
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
              >
                <div className="card-top">
                  <span className="card-num">{slide.slideNumberStr}</span>
                  <span className="card-category">{slide.category}</span>
                  {isCurrent && <CheckCircle2 size={16} className="current-icon" />}
                </div>
                <div className="card-title">{slide.title}</div>
                {slide.subtitle && <div className="card-subtitle">{slide.subtitle}</div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
