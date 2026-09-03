import { useState, useEffect, useCallback, useRef } from 'react';
import { SLIDES_METADATA } from './data/slidesData';
import { SlideView } from './components/SlideView';
import { TopNavbar } from './components/TopNavbar';
import { SectionDivider } from './components/SectionDivider';
import { ArrowUp, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const isAutoScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Touch Swipe tracking refs
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchStartTimeRef = useRef<number>(0);

  // Smooth scroll directly to the selected section
  const scrollToSection = useCallback((sectionId: number) => {
    const clampedId = Math.max(1, Math.min(SLIDES_METADATA.length, sectionId));
    const el = document.getElementById(`section-${clampedId}`);
    if (el) {
      isAutoScrollingRef.current = true;
      setActiveSection(clampedId);

      // Standard scrollIntoView with scroll-margin-top offset
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      // Re-enable IntersectionObserver after smooth scroll finishes
      scrollTimeoutRef.current = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 750);
    }
  }, []);

  // Track document scroll progress & Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(totalScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to dynamically highlight active section in top navbar while scrolling
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px', // Trigger when section passes upper-middle viewport
      threshold: 0.05
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isAutoScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idAttr = entry.target.getAttribute('id');
          if (idAttr && idAttr.startsWith('section-')) {
            const sectionNum = parseInt(idAttr.replace('section-', ''), 10);
            if (!isNaN(sectionNum)) {
              setActiveSection(sectionNum);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SLIDES_METADATA.forEach((slide) => {
      const el = document.getElementById(`section-${slide.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation support:
  // ArrowRight/ArrowDown/PageDown/Space -> Next Slide
  // ArrowLeft/ArrowUp/PageUp -> Prev Slide
  // Home -> Slide 1, End -> Slide 12
  // 'f' / 'F' -> Toggle Fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(SLIDES_METADATA.length);
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, scrollToSection]);

  // Touch Swipe Gesture Detection for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
      touchStartTimeRef.current = Date.now();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;
      const elapsed = Date.now() - touchStartTimeRef.current;

      // Detect horizontal swipe if deltaX > 60px, elapsed < 450ms, and mostly horizontal
      if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4 && elapsed < 450) {
        if (deltaX < 0) {
          // Swiped Left -> Go to Next Slide
          scrollToSection(activeSection + 1);
        } else {
          // Swiped Right -> Go to Previous Slide
          scrollToSection(activeSection - 1);
        }
      }
    }
  };

  return (
    <div
      className="continuous-presentation-page"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Sticky Navigation Bar */}
      <TopNavbar
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onSelectSection={scrollToSection}
      />

      {/* Main Continuous Flowing Document */}
      <main className="presentation-stream" id="main-presentation-content">
        {SLIDES_METADATA.map((slide) => {
          return (
            <div key={slide.id} className="section-stream-item">
              <section
                id={`section-${slide.id}`}
                className={`content-section section-theme-${slide.theme} ${activeSection === slide.id ? 'is-active-view' : ''}`}
                aria-label={`Slide ${slide.slideNumberStr}: ${slide.title}`}
              >
                <div className="section-inner-container">
                  <SlideView slideId={slide.id} />
                </div>
              </section>

              {/* Seamless Divider between Hero (Slide 1) and Intro (Slide 2) */}
              {slide.id === 1 && (
                <SectionDivider type="wave-down" bgColor="#05665E" fillColor="#FFFDF5" />
              )}

              {/* Seamless Divider between Insights (Slide 11) and Conclusion (Slide 12) */}
              {slide.id === 11 && (
                <SectionDivider type="wave-up" bgColor="#FFFDF5" fillColor="#087F73" />
              )}
            </div>
          );
        })}
      </main>

      {/* Mobile-Friendly Floating Bottom Quick Dock */}
      <nav className="mobile-floating-nav-dock" aria-label="Mobile slide navigation">
        <button
          type="button"
          className="dock-nav-btn"
          onClick={() => scrollToSection(activeSection - 1)}
          disabled={activeSection <= 1}
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
          <span>Prev</span>
        </button>

        <div className="dock-slide-counter">
          <span className="dock-num">{activeSection.toString().padStart(2, '0')}</span>
          <span className="dock-sep">/</span>
          <span className="dock-total">{SLIDES_METADATA.length.toString().padStart(2, '0')}</span>
        </div>

        <button
          type="button"
          className="dock-nav-btn"
          onClick={() => scrollToSection(activeSection + 1)}
          disabled={activeSection >= SLIDES_METADATA.length}
          aria-label="Next slide"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </nav>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`floating-scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={() => scrollToSection(1)}
        title="Back to Top (Slide 01)"
        aria-label="Back to Top"
      >
        <ArrowUp size={20} />
      </button>

      {/* Desktop Keyboard Shortcuts Hint Banner */}
      <div className="desktop-nav-hint" aria-hidden="true">
        <Compass size={14} />
        <span>Use <strong>← / →</strong> or Swipe to navigate slides</span>
      </div>

      {/* Minimal Academic Footer */}
      <footer className="presentation-academic-footer" role="contentinfo">
        <div className="footer-inner">
          <p>
            <strong>MINDCHECK</strong>: A Multimodal Agentic AI Approach for Adaptive Mental Wellness Assessment
          </p>
          <p className="footer-sub">
            Presented by Suhani Thakare &amp; Onkar Chand • Academic Case Study Presentation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
