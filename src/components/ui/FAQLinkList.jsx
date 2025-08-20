import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Icon from './Icon';
import { ArrowRight } from 'lucide-react';

const FAQLinkList = ({ title, links, className = '' }) => {
  return (
    <section className={`bg-white rounded-2xl ${className}`}>
      <div className="px-4 md:px-8 py-10">
        {title ? <Typography variant="title-xs" className="mb-6">{title}</Typography> : null}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="group flex items-center justify-between px-4 py-5 border-b border-gray-100 last:border-b-0">
              <Typography variant="title-sm">{link.label}</Typography>
              <Icon name="ArrowRight" size="lg" className="text-[var(--color-text-secondary)] group-hover:translate-x-1 transition-transform" />
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
