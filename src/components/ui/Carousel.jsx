import React, { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({
  children,
  autoPlay = true,
  interval = 4000,
  className = '',
  showControls = true,
  continuous = false,
  direction = 'rtl', // 'rtl' or 'ltr'
  speed = 0.6, // px per frame when continuous
}) => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollByItem = useCallback((dir = 1) => {
    const el = containerRef.current;
    if (!el) return;
    const itemWidth = el.firstElementChild?.getBoundingClientRect().width || el.clientWidth;
    el.scrollBy({ left: dir * (itemWidth + 16), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (continuous) return; // handled by rAF below
    if (!autoPlay) return;
    if (!isInView) return;
    const id = setInterval(() => scrollByItem(1), interval);
    return () => clearInterval(id);
  }, [autoPlay, isInView, interval, scrollByItem, continuous]);

  // Continuous loop (right-to-left by default)
  useEffect(() => {
    if (!continuous) return;
    const el = containerRef.current;
    if (!el) return;

    const start = () => {
      // Start in the middle so we can wrap seamlessly
      el.scrollLeft = el.scrollWidth / 2;
      const step = () => {
        if (isInView) {
          const delta = direction === 'rtl' ? -speed : speed;
          el.scrollLeft += delta;
          if (direction === 'rtl' && el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollWidth / 2;
          } else if (direction === 'ltr' && el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        }
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    // Re-init on resize/content change
    start();
    const onResize = () => start();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [continuous, direction, speed, isInView, children]);

  const items = continuous
    ? React.Children.toArray(children).concat(React.Children.toArray(children))
    : React.Children.toArray(children);

  return (
    <div className={`relative ${className}`}>
      {showControls && !continuous && (
        <>
          <button
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            onClick={() => scrollByItem(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </button>
          <button
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            onClick={() => scrollByItem(1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </>
      )}
      <div
        ref={containerRef}
        className={`${continuous ? 'flex gap-7 overflow-x-hidden pb-2' : 'flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2'}`}
        style={{ scrollPaddingLeft: '1rem' }}
      >
        {items.map((child, i) => (
          <div key={i} className={`${continuous ? '' : 'snap-start'} shrink-0`}>{child}</div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlay: PropTypes.bool,
  interval: PropTypes.number,
  className: PropTypes.string,
  showControls: PropTypes.bool,
  continuous: PropTypes.bool,
  direction: PropTypes.oneOf(['rtl', 'ltr']),
  speed: PropTypes.number,
};

export default Carousel;
