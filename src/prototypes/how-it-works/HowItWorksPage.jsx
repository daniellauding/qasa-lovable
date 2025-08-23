import React, { useState } from 'react';
import { useTranslation } from '../../utils/translations/LanguageContext';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import HeroSection from '../../components/ui/HeroSection';
import SectionContainer from '../../components/ui/SectionContainer';
import ContentBlock from '../../components/ui/ContentBlock';
import Tabs from '../../components/ui/Tabs';
import DevExperimentsButton from '../../components/DevExperimentsButton';

const HowItWorksPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('landlord');

  // Mock step images - in production these would be proper images
  const stepImages = {
    landlord: [
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv01.png',
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv02.png',
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv03.png',
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv04.png',
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv05.png',
      'https://qasa.s3.eu-west-1.amazonaws.com/uploads/how-it-works/hiw-ll-sv06.png'
    ],
    tenant: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=980&h=640&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=980&h=640&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=980&h=640&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=980&h=640&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=980&h=640&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=980&h=640&fit=crop'
    ]
  };

  const testimonials = [
    {
      id: 1,
      text: "I have signed 2 contracts with Qasa so far, and I really feel safe with them taking care of when I hire. I wouldn't do it any other way!",
      name: "Julie",
      location: "Sweden",
      initials: "JU",
      color: "#ffdebf"
    },
    {
      id: 2,
      text: "Super simple and easy to set up an account to hire out your apartment and find possible tenants.",
      name: "Lorna",
      location: "Sweden",
      initials: "LO",
      color: "#fddce5"
    },
    {
      id: 3,
      text: "Signing my rental agreement and renting my home through Qasa was such a safe and easy experience. I appreciate the secure digital signing process...",
      name: "Hamideh Hamidi",
      location: "Ireland",
      initials: "HH",
      color: "#fddce5"
    },
    {
      id: 4,
      text: "My experience with Qasa has been exceptional. The search is easy and convenient. The contract signing and followup has been very smooth.",
      name: "Kevin D'Costa",
      location: "Singapore",
      initials: "KD",
      color: "#fffbd6"
    },
    {
      id: 5,
      text: "As a tenant, I would never try something out of Qasa, agreements, payments and termination of lease it's easy!!",
      name: "Marcella GG",
      location: "Sweden",
      initials: "MG",
      color: "#d1f9ea"
    },
    {
      id: 6,
      text: "Qasa has been instrumental in getting my life setup in Sweden, and I don't know how I'd have gotten settled into a first hand without them. Thanks Qasa!",
      name: "Michael Lawson",
      location: "Sweden",
      initials: "ML",
      color: "#d1f9ea"
    }
  ];

  const renderSteps = () => {
    const currentSteps = activeTab === 'landlord' ? 
      Object.keys(t('howItWorks.steps.landlord')).map(key => ({
        key,
        ...t(`howItWorks.steps.landlord.${key}`)
      })) :
      Object.keys(t('howItWorks.steps.tenant')).map(key => ({
        key,
        ...t(`howItWorks.steps.tenant.${key}`)
      }));

    return (
      <div className="space-y-8">
        {currentSteps.map((step, index) => (
          <div key={step.key} className="relative">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64 md:h-80 bg-gray-100">
                <img
                  src={stepImages[activeTab][index]}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[var(--color-brown)] bg-white">
                        <Typography variant="label-md" className="text-[var(--color-brown)]">
                          Steg {index + 1}
                        </Typography>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Typography variant="title-sm" className="text-gray-900">
                        {step.title}
                      </Typography>
                      <Typography variant="body-md" className="text-gray-700">
                        {step.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--color-background-inset)] min-h-[576px] lg:h-[576px] mx-2 md:mx-4 rounded-xl flex flex-col lg:flex-row">
        <div className="lg:flex-3 flex flex-col items-center justify-center px-6 py-20 md:px-12 md:py-28">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center w-max rounded-full border-2 border-[var(--color-brown)]/10 px-3 h-8">
              <Typography variant="label-md" className="text-[var(--color-brown)]">
                {t('howItWorks.hero.badge')}
              </Typography>
            </div>
          </div>
          <Typography 
            variant="title-xl" 
            className="text-center text-[var(--color-brown)] font-bold uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(48px, 7vw, 92px)' }}
          >
            {t('howItWorks.hero.title')}
          </Typography>
          <Typography variant="body-lg" className="max-w-[50ch] text-center text-[var(--color-brown)] md:text-xl">
            {t('howItWorks.hero.description')}
          </Typography>
        </div>
        <div className="lg:flex-2 flex aspect-[3/2] p-2 sm:aspect-[4/3] md:aspect-[2/1] md:p-4 lg:aspect-auto">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              alt={t('howItWorks.hero.imageAlt')}
              className="object-cover object-top lg:h-full w-full h-full"
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <SectionContainer className="py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {Object.entries(t('howItWorks.features')).map(([key, feature]) => (
            <div key={key} className="flex-1 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center">
                  <svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0V13C6 6.5 0.0100002 6.5 0.0100002 0H6Z" fill="var(--color-gray-10)"></path>
                    <path d="M5.99977 26H0.00976562C0.00976562 19.5 6.00977 19.5 6.00977 13V26H5.99977Z" fill="var(--color-gray-10)"></path>
                  </svg>
                  <div className="my-2"></div>
                  <svg width="6" height="26" viewBox="0 0 6 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0V13C6 6.5 0.0100002 6.5 0.0100002 0H6Z" fill="var(--color-gray-10)"></path>
                    <path d="M5.99977 26H0.00976562C0.00976562 19.5 6.00977 19.5 6.00977 13V26H5.99977Z" fill="var(--color-gray-10)"></path>
                  </svg>
                </div>
              </div>
              <Typography variant="title-sm" className="text-gray-900 mb-3">
                {feature.title}
              </Typography>
              <Typography variant="body-md" className="text-gray-700">
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* How It Works Steps */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <Typography variant="title-lg" className="text-gray-900 mb-4">
            {t('howItWorks.title')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('howItWorks.subtitle')}
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('landlord')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'landlord'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('howItWorks.tabs.landlord')}
            </button>
            <button
              onClick={() => setActiveTab('tenant')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'tenant'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t('howItWorks.tabs.tenant')}
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {renderSteps()}
        </div>
      </SectionContainer>

      {/* Safety Features */}
      <SectionContainer className="py-16 bg-[var(--color-background-inset)]">
        <div className="text-center mb-12">
          <Typography variant="title-lg" className="text-gray-900 mb-4">
            {t('howItWorks.safety.title')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('howItWorks.safety.subtitle')}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(t('howItWorks.safety.features')).map(([key, feature]) => (
            <div key={key} className="flex flex-col items-start space-y-3">
              <Icon name="ShieldCheck" size="lg" className="text-gray-600" />
              <div>
                <Typography variant="title-sm" className="text-gray-900 mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body-md" className="text-gray-700">
                  {feature.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Support Section */}
      <SectionContainer className="py-16">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="space-y-6">
                <Typography variant="title-lg" className="text-gray-900">
                  {t('howItWorks.support.title')}
                </Typography>
                <Typography variant="body-lg" className="text-gray-700">
                  {t('howItWorks.support.description')}
                </Typography>
                <Button variant="primary" href="/sv/help">
                  {t('howItWorks.support.cta')}
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="Support team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer className="py-16 bg-[var(--color-background-inset)]">
        <div className="text-center mb-12">
          <Typography variant="title-lg" className="text-gray-900 mb-4">
            {t('howItWorks.testimonials.title')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600 mb-6">
            <span className="font-semibold text-green-600">Utmärkt</span> {t('howItWorks.testimonials.subtitle')}
          </Typography>
          <img
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            alt="Trustpilot rating"
            width="138"
            className="mx-auto"
          />
        </div>

        <div className="overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm"
              >
                <Typography variant="body-md" className="text-gray-800 mb-4 italic">
                  "{testimonial.text}"
                </Typography>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <Typography variant="title-xs" className="text-gray-900">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body-sm" className="text-gray-600">
                      {testimonial.location}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <Typography variant="title-lg" className="text-gray-900 mb-4">
            {t('howItWorks.pricing.title')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('howItWorks.pricing.subtitle')}
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Landlord Pricing */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <Typography variant="title-sm" className="text-gray-900 mb-4">
                {t('howItWorks.pricing.landlord.title')}
              </Typography>
              <Typography variant="title-xs" className="text-gray-900 mb-4">
                {t('howItWorks.pricing.landlord.subtitle')}
              </Typography>
              <div className="space-y-3">
                {t('howItWorks.pricing.landlord.features').map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CircleCheck" size="sm" className="text-green-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" fullWidth href="https://support.qasa.se/hc/articles/22955620204433">
                  {t('howItWorks.pricing.landlord.cta')}
                </Button>
              </div>
            </div>
          </div>

          {/* Tenant Pricing */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <Typography variant="title-sm" className="text-gray-900 mb-4">
                {t('howItWorks.pricing.tenant.title')}
              </Typography>
              <Typography variant="title-xs" className="text-gray-900 mb-4">
                {t('howItWorks.pricing.tenant.subtitle')}
              </Typography>
              <div className="space-y-3">
                {t('howItWorks.pricing.tenant.features').map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CircleCheck" size="sm" className="text-green-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" fullWidth href="https://support.qasa.se/hc/articles/22955620204433">
                  {t('howItWorks.pricing.tenant.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Typography variant="title-sm" className="text-gray-900 mb-2">
            {t('howItWorks.pricing.propertyOwner.title')}
          </Typography>
          <Button variant="ghost" href="https://support.qasa.se/hc/articles/34399400018961">
            {t('howItWorks.pricing.propertyOwner.cta')}
          </Button>
        </div>
      </SectionContainer>

      {/* Get Started Section */}
      <SectionContainer className="py-16 bg-[var(--color-background-inset)]">
        <div className="text-center mb-12">
          <Typography variant="title-lg" className="text-gray-900 mb-4">
            {t('howItWorks.getStarted.title')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('howItWorks.getStarted.subtitle')}
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Landlord CTA */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Typography variant="title-sm" className="text-gray-900 mb-4">
              {t('howItWorks.getStarted.landlord.title')}
            </Typography>
            <Typography variant="body-md" className="text-gray-700 mb-6">
              {t('howItWorks.getStarted.landlord.description')}
            </Typography>
            <Button variant="primary" fullWidth href="/create-listing">
              {t('howItWorks.getStarted.landlord.cta')}
            </Button>
          </div>

          {/* Tenant CTA */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Typography variant="title-sm" className="text-gray-900 mb-4">
              {t('howItWorks.getStarted.tenant.title')}
            </Typography>
            <Typography variant="body-md" className="text-gray-700 mb-6">
              {t('howItWorks.getStarted.tenant.description')}
            </Typography>
            <Button variant="primary" fullWidth href="/create-tenant-listing">
              {t('howItWorks.getStarted.tenant.cta')}
            </Button>
          </div>
        </div>
      </SectionContainer>

      <DevExperimentsButton />
    </div>
  );
};

export default HowItWorksPage;
