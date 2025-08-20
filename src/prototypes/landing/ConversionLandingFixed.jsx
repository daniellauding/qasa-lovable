import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicHeader from '../../components/DynamicHeader';
import Footer from '../../components/Footer';
import Typography from '../../components/ui/Typography';
import Button from '../../components/ui/Button';
import Map from '../../components/ui/Map';
import Card from '../../components/ui/Card';
import Carousel from '../../components/ui/Carousel';
import StatsStrip from '../../components/ui/StatsStrip';
import Tabs from '../../components/ui/Tabs';
import Icon from '../../components/ui/Icon';
import { ArrowRight, MapPin, Users, Home, Star, Clock, Shield, CheckCircle } from 'lucide-react';

// Sample data for demonstration
const sampleProperties = [
  {
    id: 1,
    location: 'Södermalm, Stockholm',
    type: 'Apartment',
    details: '2 rooms',
    price: '18,000 SEK/month',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
    lat: 59.3157,
    lng: 18.0717,
    dateRange: 'Available now'
  },
  {
    id: 2,
    location: 'Östermalm, Stockholm',
    type: 'Studio',
    details: '1 room',
    price: '15,000 SEK/month',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    lat: 59.3378,
    lng: 18.0754,
    dateRange: 'Available from March'
  },
  {
    id: 3,
    location: 'Vasastan, Stockholm',
    type: 'Apartment',
    details: '3 rooms',
    price: '22,000 SEK/month',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    lat: 59.3426,
    lng: 18.0568,
    dateRange: 'Available April 1st'
  }
];

const sampleTenants = [
  {
    name: 'Emma Andersson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    description: 'Digital Marketing Manager',
    people: '1',
    rooms: '1-2 rooms',
    maxRent: '18,000 SEK',
    furnished: 'Furnished',
    moveDate: 'Move in: April 2024'
  },
  {
    name: 'Johan & Lisa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    description: 'Software Engineer & Teacher',
    people: '2',
    rooms: '2-3 rooms',
    maxRent: '25,000 SEK',
    furnished: 'Unfurnished',
    moveDate: 'Move in: May 2024'
  },
  {
    name: 'Marcus Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    description: 'Business Consultant',
    people: '1',
    rooms: '2 rooms',
    maxRent: '20,000 SEK',
    furnished: 'Either',
    moveDate: 'Move in: March 2024'
  }
];

const ConversionLandingFixed = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('homes');

  const tabs = [
    {
      value: 'homes',
      label: 'Available Homes',
      content: () => (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleProperties.map((property) => (
              <Card.PropertyCard
                key={property.id}
                property={property}
                onCardClick={() => navigate('/homes')}
                className="hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/homes')}
              icon={<ArrowRight />}
              iconPosition="right"
            >
              View All Properties
            </Button>
          </div>
        </div>
      )
    },
    {
      value: 'tenants',
      label: 'Quality Tenants',
      content: () => (
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleTenants.map((tenant, index) => (
              <Card.TenantCard
                key={index}
                user={tenant}
                verified={true}
                onCardClick={() => navigate('/landlords/find-tenant')}
                className="hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/landlords/find-tenant')}
              icon={<ArrowRight />}
              iconPosition="right"
            >
              View All Tenants
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <DynamicHeader isFluid={true} />
      
      {/* Hero Section with Split CTA */}
      <section className="relative overflow-hidden bg-[var(--color-gray-10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Typography variant="display-lg" className="mb-6">
                Connect<br />
                <span className="text-[var(--color-primary)]">landlords</span> with<br />
                <span className="text-[var(--color-primary)]">quality tenants</span>
              </Typography>
              <Typography variant="body-lg" color="secondary" className="mb-8 max-w-lg mx-auto lg:mx-0">
                Sweden's most trusted rental platform. Find your perfect home or tenant with verified profiles and no hidden fees.
              </Typography>
              
              {/* Dual CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="primary" 
                  size="xl"
                  onClick={() => navigate('/homes')}
                  icon={<Home />}
                  iconPosition="left"
                >
                  Find a Home
                </Button>
                <Button 
                  variant="secondary" 
                  size="xl"
                  onClick={() => navigate('/landlords/create-listing')}
                  icon={<Users />}
                  iconPosition="left"
                >
                  List Your Property
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size="sm" className="text-[var(--color-text-primary)]" />
                  <Typography variant="body-sm" color="secondary">ID Verified</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size="sm" className="text-[var(--color-text-primary)]" />
                  <Typography variant="body-sm" color="secondary">4.8/5 Rating</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size="sm" className="text-[var(--color-text-primary)]" />
                  <Typography variant="body-sm" color="secondary">Fast Matching</Typography>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Map 
                properties={sampleProperties}
                center={[59.3293, 18.0686]}
                zoom={12}
                onPropertyClick={(property) => console.log('Property clicked:', property)}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="py-16 bg-[var(--color-gray-10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Typography variant="display-sm" className="mb-4">
              Discover What's Available
            </Typography>
            <Typography variant="body-lg" color="secondary" className="max-w-2xl mx-auto mb-8">
              Browse verified properties or connect with quality tenants. Switch between views to see what interests you most.
            </Typography>
            
            {/* QDS Tabs Component */}
            <Tabs
              tabs={tabs}
              value={activeView}
              onChange={setActiveView}
              variant="default"
              size="lg"
              className="inline-block"
            />
          </div>

          {/* Content Based on Toggle */}
          <div className="transition-all duration-300">
            {tabs.find(tab => tab.value === activeView)?.content()}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <StatsStrip
          items={[
            { value: '50,000+', hint: 'Active users looking for homes' },
            { value: '10,000+', hint: 'Properties listed this month' },
            { value: '4.8/5', hint: 'Average user rating' },
          ]}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        />
      </section>

      {/* Landlord CTA Section */}
      <section className="py-16 bg-[var(--color-brown)] text-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="display-md" color="white" className="mb-6 leading-tight">
                Start earning from your property today
              </Typography>
              <Typography variant="body-lg" color="white" className="mb-8 opacity-85">
                Join thousands of landlords who find quality tenants faster with our verification system and smart matching.
              </Typography>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size="sm" className="text-[var(--color-warmYellow)]" />
                  <Typography variant="body-md" color="white">ID verified tenants only</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size="sm" className="text-[var(--color-warmYellow)]" />
                  <Typography variant="body-md" color="white">No listing fees - pay only when you find a tenant</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size="sm" className="text-[var(--color-warmYellow)]" />
                  <Typography variant="body-md" color="white">Full support throughout the rental process</Typography>
                </div>
              </div>

              <Button 
                variant="tertiary" 
                size="xl"
                onClick={() => navigate('/landlords/create-listing')}
                icon={<ArrowRight />}
                iconPosition="right"
              >
                List Your Property
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-[var(--color-uiPink)]/10 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm p-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Typography variant="title-lg" color="white">48h</Typography>
                    <Typography variant="body-sm" color="white" className="opacity-85">Avg. match time</Typography>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Typography variant="title-lg" color="white">95%</Typography>
                    <Typography variant="body-sm" color="white" className="opacity-85">Success rate</Typography>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Typography variant="title-lg" color="white">0kr</Typography>
                    <Typography variant="body-sm" color="white" className="opacity-85">Listing fee</Typography>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Typography variant="title-lg" color="white">24/7</Typography>
                    <Typography variant="body-sm" color="white" className="opacity-85">Support</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[var(--color-gray-10)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Typography variant="display-md" className="mb-6">
            Ready to get started?
          </Typography>
          <Typography variant="body-lg" color="secondary" className="mb-8">
            Join Sweden's largest rental community and find your perfect match today.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="xl"
              onClick={() => navigate('/homes')}
              icon={<MapPin />}
              iconPosition="left"
            >
              Browse Available Homes
            </Button>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => navigate('/landlords/find-tenant')}
              icon={<Users />}
              iconPosition="left"
            >
              Find Quality Tenants
            </Button>
          </div>
        </div>
      </section>

      <Footer isFluid={true} />
    </div>
  );
};

export default ConversionLandingFixed;
