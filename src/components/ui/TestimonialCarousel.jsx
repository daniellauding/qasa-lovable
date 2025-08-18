import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TestimonialCarousel = ({ items, interval = 5000, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section className={`rounded-2xl bg-[#FFF7C7] relative overflow-hidden ${className}`}>
      <div className="px-4 md:px-8 py-16 md:py-24 text-center min-h-[280px] flex items-center justify-center">
        {items.map((item, i) => (
          <blockquote
            key={i}
            className={`absolute px-4 md:px-16 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-2xl md:text-4xl leading-tight text-[var(--color-brown,#2f221c)]">“{item.quote}”<br/>— {item.author}</p>
          </blockquote>
        ))}
      </div>
      <button aria-label="Previous testimonial" onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-brown,#2f221c)]">←</button>
      <button aria-label="Next testimonial" onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--color-brown,#2f221c)]">→</button>
    </section>
  );
};

TestimonialCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ quote: PropTypes.string, author: PropTypes.string })).isRequired,
  interval: PropTypes.number,
  className: PropTypes.string,
};

export default TestimonialCarousel;
