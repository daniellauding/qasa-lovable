import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';

const FAQLinkList = ({ title, links, className = '' }) => {
  return (
    <section className={`bg-[var(--color-surface)] rounded-2xl ${className}`}>
      <div className="px-4 md:px-8 py-10">
        {title ? <Typography variant="title-md" className="mb-6">{title}</Typography> : null}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="group flex items-center justify-between px-4 py-5">
              <Typography variant="title-sm">{link.label}</Typography>
              <span className="text-gray-600 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

FAQLinkList.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, href: PropTypes.string, external: PropTypes.bool })).isRequired,
  className: PropTypes.string,
};

export default FAQLinkList;
