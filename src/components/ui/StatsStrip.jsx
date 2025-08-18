import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const StatsStrip = ({ items, className = '' }) => {
  return (
    <section className={`w-full bg-[var(--color-brown,#2f221c)] text-white rounded-2xl my-8 ${className}`}>
      <div className="mx-2 md:mx-4">
        <div className="px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {items.map((it, idx) => (
            <div key={idx}>
              <Typography variant="title-sm" className="mb-1 text-[var(--color-accent,#ff84b6)]">{it.value}</Typography>
              <Typography variant="body-sm" color="secondary" className="text-white/85">{it.hint}</Typography>
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
