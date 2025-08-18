import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicHeader from '../../components/DynamicHeader';
import Footer from '../../components/Footer';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import { useTranslation } from '../../utils/translations/LanguageContext';
import HeroSection from '../../components/ui/HeroSection';
import Carousel from '../../components/ui/Carousel';
import CityCard from '../../components/ui/CityCard';
import FeatureCard from '../../components/ui/FeatureCard';
import RichPromoCard from '../../components/ui/RichPromoCard';
import StatsStrip from '../../components/ui/StatsStrip';
import TestimonialCarousel from '../../components/ui/TestimonialCarousel';
import FAQLinkList from '../../components/ui/FAQLinkList';

const Feature = ({ title, description, icon }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-5">
    <div className="w-10 h-10 bg-[var(--color-button-tertiary-bg)] rounded-full flex items-center justify-center mb-3">
      {icon}
    </div>
    <Typography variant="label-md" className="mb-1">{title}</Typography>
    <Typography variant="body-sm" color="secondary">{description}</Typography>
  </div>
);

export default function Landing() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DynamicHeader isFluid={true} />

      {/* Hero */}
      <div className="mx-2 md:mx-4">
        <HeroSection
          title={t('landing.hero.title')}
          subtitle={t('landing.hero.subtitle')}
          ctaPrimary={t('landing.hero.ctaPrimary')}
          ctaSecondary={t('landing.hero.ctaSecondary')}
          imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoman-smiling-at-table.c8c03d83.png&w=1920&q=75"
          className="lg:min-h-[672px] bg-[var(--color-brown,#2f221c)]"
        />
      </div>

      {/* Cities Carousel */}
      <div className="px-0 md:px-0 py-4">
        <Carousel continuous autoPlay direction="rtl" speed={0.8} className="">
          <CityCard city="Stockholm" homesCount={t('landing.cities.count',{count:1522})} imageSrc="https://qasa.se/_next/static/media/stockholm.65206cdd.png" onClick={() => navigate('/homes')} />
          <CityCard city="Göteborg" homesCount={t('landing.cities.count',{count:1126})} imageSrc="https://qasa.se/_next/static/media/gothenburg.aa62cda1.png" onClick={() => navigate('/homes')} />
          <CityCard city="Malmö" homesCount={t('landing.cities.count',{count:489})} imageSrc="https://qasa.se/_next/static/media/malmo.47b5f4fd.png" onClick={() => navigate('/homes')} />
          <CityCard city="Uppsala" homesCount={t('landing.cities.count',{count:310})} imageSrc="https://qasa.se/_next/static/media/uppsala.1ae2487e.png" onClick={() => navigate('/homes')} />
          <CityCard city="Linköping" homesCount={t('landing.cities.count',{count:189})} imageSrc="https://qasa.se/_next/static/media/linkoping.fa34c61a.png" onClick={() => navigate('/homes')} />
        </Carousel>
      </div>

      {/* Features */}
      <section className="px-2 md:px-4 py-12">
        <Typography variant="display-sm" className="text-center mb-10">{t('landing.featuresTitle')}</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=256&q=75"
            title={t('landing.features.noDeposit.title')}
            description={t('landing.features.noDeposit.desc')}
          />
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flamp.cc993942.png&w=256&q=75"
            title={t('landing.features.payLater.title')}
            description={t('landing.features.payLater.desc')}
          />
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpen.9f05b931.png&w=256&q=75"
            title={t('landing.features.protection.title')}
            description={t('landing.features.protection.desc')}
          />
        </div>
      </section>

      {/* Stats */}
      <StatsStrip
        items={[
          { value: t('landing.stats.applicants'), hint: t('landing.stats.applicantsHint') },
          { value: t('landing.stats.homes'), hint: t('landing.stats.homesHint') },
          { value: t('landing.stats.rating'), hint: t('landing.stats.ratingHint') },
        ]}
        className="mx-2 md:mx-4"
      />

      {/* Rich promo cards */}
      <div className="px-2 md:px-4 grid md:grid-cols-2 gap-4">
        <RichPromoCard
          imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpage-hero-img-premium.e3eaa2cc.png&w=1920&q=75"
          label={t('landing.premium.label')}
          title={t('landing.premium.title')}
          buttonText={t('landing.premium.button')}
          onButtonClick={() => {}}
        />
        <RichPromoCard
          imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding_page_pop_content.593a122e.jpg&w=1920&q=75"
          label={t('landing.husfrid.label')}
          title={t('landing.husfrid.title')}
          buttonText={t('landing.husfrid.button')}
          onButtonClick={() => {}}
        />
      </div>

      {/* Testimonials */}
      <div className="px-2 md:px-4 py-10">
        <TestimonialCarousel
          items={[
            { quote: t('landing.testimonials.items.0.quote'), author: t('landing.testimonials.items.0.author') },
            { quote: t('landing.testimonials.items.1.quote'), author: t('landing.testimonials.items.1.author') },
          ]}
        />
      </div>

      {/* Wide HusFrid block duplicated */}
      <div className="px-2 md:px-4 pb-10">
        <RichPromoCard
          imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding_page_pop_content.593a122e.jpg&w=1920&q=75"
          label={t('landing.husfrid.label')}
          title={t('landing.husfrid.title')}
          buttonText={t('landing.husfrid.button')}
          onButtonClick={() => {}}
          className="min-h-[520px]"
        />
      </div>

      {/* FAQ links */}
      <div className="px-2 md:px-4 py-10">
        <FAQLinkList
          title={t('landing.faq.title')}
          links={[
            { label: t('landing.faq.links.0'), href: 'https://support.qasa.se/hc/sv/articles/115009721208', external: true },
            { label: t('landing.faq.links.1'), href: 'https://support.qasa.se/hc/sv/articles/115012592167', external: true },
            { label: t('landing.faq.links.2'), href: 'https://support.qasa.se/hc/sv/articles/6168948955409', external: true },
            { label: t('landing.faq.links.3'), href: 'https://support.qasa.se/hc/sv/articles/115009719628', external: true },
          ]}
        />
      </div>

      <Footer isFluid={true} />
      <DevExperimentsButton />
    </div>
  );
}
