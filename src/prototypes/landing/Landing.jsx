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
import SectionContainer from '../../components/ui/SectionContainer';

const Feature = ({ title, description, icon }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-5">
    <div className="w-10 h-10 bg-[var(--color-button-tertiary-bg)] rounded-full flex items-center justify-center mb-3">
      {icon}
    </div>
    <Typography variant="label-md" className="mb-0">{title}</Typography>
    <Typography variant="body-sm" color="secondary">{description}</Typography>
  </div>
);

export default function Landing() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <DynamicHeader isFluid={true} />

      {/* Hero */}
      <SectionContainer variant="none" padding="none" contentClassName="mx-2 md:mx-1" className="mb-0">
        <HeroSection
          title={t('landing.hero.title')}
          subtitle={t('landing.hero.subtitle')}
          ctaPrimary={t('landing.hero.ctaPrimary')}
          ctaSecondary={t('landing.hero.ctaSecondary')}
          imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwoman-smiling-at-table.c8c03d83.png&w=1920&q=75"
          className="lg:min-h-[672px] bg-[var(--color-brown,#2f221c)]"
          suggestions={['Lund','Lunds kommun','Lunde, Gudmundrå distrikt','Lund, Hammars','Lundsbrunn','Lunds by','Lunden, Göteborgs Stad']}
          onLocationSelect={(loc) => { console.log('[Landing] hero select', loc); }}
        />
      </SectionContainer>

      {/* Cities Carousel */}
      <div className="w-screen relative -ml-2 md:-ml-4 mb-10 bg-white py-0">
        <Carousel continuous autoPlay direction="ltr" speed={0.8} className="">
          <CityCard city="Stockholm" homesCount={t('landing.cities.count',{count:1522})} imageSrc="https://qasa.se/_next/static/media/stockholm.65206cdd.png" onClick={() => navigate('/homes')} />
          <CityCard city="Göteborg" homesCount={t('landing.cities.count',{count:1126})} imageSrc="https://qasa.se/_next/static/media/gothenburg.aa62cda1.png" onClick={() => navigate('/homes')} />
          <CityCard city="Malmö" homesCount={t('landing.cities.count',{count:489})} imageSrc="https://qasa.se/_next/static/media/malmo.47b5f4fd.png" onClick={() => navigate('/homes')} />
          <CityCard city="Uppsala" homesCount={t('landing.cities.count',{count:310})} imageSrc="https://qasa.se/_next/static/media/uppsala.1ae2487e.png" onClick={() => navigate('/homes')} />
          <CityCard city="Linköping" homesCount={t('landing.cities.count',{count:189})} imageSrc="https://qasa.se/_next/static/media/linkoping.fa34c61a.png" onClick={() => navigate('/homes')} />
        </Carousel>
      </div>

      {/* Features */}
      <SectionContainer variant="none" padding="lg" className="mb-16 bg-white">
        <Typography variant="display-md" className="text-center mb-14">{t('landing.featuresTitle')}</Typography>
        <div className="flex gap-4 justify-center">
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=256&q=75"
            title={t('landing.features.noDeposit.title')}
            description={t('landing.features.noDeposit.desc')}
            className="max-w-96 h-[332px]"
          />
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flamp.cc993942.png&w=256&q=75"
            title={t('landing.features.payLater.title')}
            description={t('landing.features.payLater.desc')}
            className="max-w-96 h-[332px]"
          />
          <FeatureCard
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpen.9f05b931.png&w=256&q=75"
            title={t('landing.features.protection.title')}
            description={t('landing.features.protection.desc')}
            className="max-w-96 h-[332px]"
          />
        </div>
      </SectionContainer>


      {/* Rich promo cards */}
      <SectionContainer variant="none" paddingX="md" paddingY="none" className="mb-6 bg-white">
        <div className="grid md:grid-cols-2 gap-4">
          <RichPromoCard
            imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpage-hero-img-premium.e3eaa2cc.png&w=1920&q=75"
            label={t('landing.premium.label')}
            title={t('landing.premium.title')}
            buttonText={t('landing.premium.button')}
            showPremiumBadge={true}
            onButtonClick={() => {}}
          />
          <RichPromoCard
            imageSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding_page_pop_content.593a122e.jpg&w=1920&q=75"
            label={t('landing.firstHand.label')}
            title={t('landing.firstHand.title')}
            subtitle={t('landing.firstHand.subtitle')}
            buttonText={t('landing.firstHand.button')}
            onButtonClick={() => {}}
          />
        </div>
      </SectionContainer>

      {/* Stats */}
      <SectionContainer variant="none" paddingX="md" paddingY="none"  className="mb-6 bg-white">
        <StatsStrip
          items={[
            { value: t('landing.stats.applicants'), hint: t('landing.stats.applicantsHint') },
            { value: t('landing.stats.homes'), hint: t('landing.stats.homesHint') },
            { value: t('landing.stats.rating'), hint: t('landing.stats.ratingHint') },
          ]}
        />
      </SectionContainer>
      

      {/* Testimonials */}
      <SectionContainer variant="none" paddingX="md" paddingY="none" className="mb-6 bg-white">
        <TestimonialCarousel
          items={[
            { quote: t('landing.testimonials.items.0.quote'), author: t('landing.testimonials.items.0.author') },
            { quote: t('landing.testimonials.items.1.quote'), author: t('landing.testimonials.items.1.author') },
          ]}
        />
      </SectionContainer>

      {/* Wide HusFrid block duplicated */}
      <SectionContainer variant="none" paddingX="md" paddingY="none" className="mb-6 bg-white">
        <RichPromoCard
          imageSrc="https://qasa.se/_next/static/media/1920x1080.50a9a32d.jpg"
          label={t('landing.husfrid.label')}
          title={t('landing.husfrid.title')}
          titleSize="title-6xl"
          buttonText={t('landing.husfrid.button')}
          buttonVariant="primary"
          buttonSize="xl"
          onButtonClick={() => {}}
          className="min-h-[520px]"
        />
      </SectionContainer>

      {/* FAQ links */}
      <SectionContainer variant="tertiary" roundedTop padding="md">
        <FAQLinkList
          title={t('landing.faq.title')}
          links={[
            { label: t('landing.faq.links.0'), href: 'https://support.qasa.se/hc/sv/articles/115009721208', external: true },
            { label: t('landing.faq.links.1'), href: 'https://support.qasa.se/hc/sv/articles/115012592167', external: true },
            { label: t('landing.faq.links.2'), href: 'https://support.qasa.se/hc/sv/articles/vacation-homes', external: true },
            { label: t('landing.faq.links.3'), href: 'https://support.qasa.se/hc/sv/articles/tenant-payment', external: true },
            { label: t('landing.faq.links.4'), href: 'https://support.qasa.se/hc/sv/articles/rental-insurance', external: true },
            { label: t('landing.faq.links.5'), href: 'https://support.qasa.se/hc/sv/articles/6168948955409', external: true },
            { label: t('landing.faq.links.6'), href: 'https://support.qasa.se/hc/sv/articles/rental-permits', external: true },
            { label: t('landing.faq.links.7'), href: 'https://support.qasa.se/hc/sv/articles/rental-agreement', external: true },
            { label: t('landing.faq.links.8'), href: 'https://support.qasa.se/hc/sv/articles/115009719628', external: true },
          ]}
        />
      </SectionContainer>

      <Footer isFluid={true} />
      <DevExperimentsButton />
    </div>
  );
}
