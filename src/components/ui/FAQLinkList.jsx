import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Icon from './Icon';
import SectionFooter from './SectionFooter';
import { useTranslation } from '../../utils/translations/LanguageContext';
import { ArrowRight } from 'lucide-react';

const FAQLinkList = ({ title, links, className = '' }) => {
  const { t } = useTranslation();
  
  return (
    <section className={className}>
      <div className="px-4 md:px-8 py-10">
        {title ? <Typography variant="text-lg" className="mb-6">{title}</Typography> : null}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="group flex items-center justify-between px-4 py-6 border-b border-[var(--color-border)]">
              <Typography variant="text-3xl" className="group-hover:underline transition-transform font-light">{link.label}</Typography>
              <Icon name="ArrowRight" size="lg" />
            </a>
          ))}
        </div>
        
        <div className="mt-8">
          <SectionFooter
            showPrev={false}
            nextText={t('common.helpCenter')}
            onNext={() => window.open('https://support.qasa.se/?_gl=1*1nkfoka*_gcl_au*MTI1MDQzMTcwMy4xNzU1MTU4MzY0LjE3ODk1MTUwNjcuMTc1NTU5MDE4OC4xNzU1NTkwMTg3', '_blank')}
            variant="default"
            nextVariant="secondary"
            nextSize="xl"
            background="transparent"
          />
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
