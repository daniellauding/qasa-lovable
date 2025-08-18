import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const StatsStrip = ({ items, className = '' }) => {
  return (
    <section className={`w-full bg-[var(--color-brown,#2f221c)] text-white rounded-2xl ${className}`}>
      <div className="mx-2 md:mx-4">
        <div className="px-6 md:px-10 py-24 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {items.map((it, idx) => (
            <div className="flex gap-4 flex-col items-center" key={idx}>
              <Typography variant="title-lg" className="mb-1 text-[var(--color-accent,#ff84b6)]">{it.value}</Typography>
              <Typography variant="body-md" color="secondary" className="text-[var(--color-accent,#ff84b6)]">{it.hint}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

StatsStrip.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, hint: PropTypes.string })).isRequired,
  className: PropTypes.string,
};

export default StatsStrip;
