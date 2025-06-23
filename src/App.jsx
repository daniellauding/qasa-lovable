import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/outline';
import TenantApplyHome from './prototypes/tenants/apply-home/TenantApplyHome';
import BetIncreaseQuality from './prototypes/tenants/bet-increase-quality/BetIncreaseQuality';
import FindTenant from './prototypes/landlords/find-tenant/FindTenant';
import DevExperimentsButton from './components/DevExperimentsButton';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './utils/translations/LanguageContext';

const prototypes = [
  {
    id: 'tenant-apply-home',
    category: 'tenants',
    name: 'Apply Home',
    description: 'Tenant application flow for a property',
    thumbnail: '/thumbnails/tenant-apply-home.png',
    path: '/tenants/apply-home',
    component: TenantApplyHome,
  },
  {
    id: 'bet-increase-quality',
    category: 'tenants',
    name: 'BET: Increase Application Quality',
    description: 'Experiment to increase the quality of rental applications through real-time feedback and gamification',
    thumbnail: '/thumbnails/bet-increase-quality.png',
    path: '/tenants/bet-increase-quality',
    component: BetIncreaseQuality,
    tags: ['experiment', 'gamification'],
  },
  {
    id: 'find-tenant',
    category: 'landlords',
    name: 'Find Tenant',
    description: 'Browse verified tenant profiles and connect with quality renters. Multi-language support included.',
    thumbnail: '/thumbnails/find-tenant.png',
    path: '/landlords/find-tenant',
    component: FindTenant,
    tags: ['multilingual', 'matching'],
  },
];

function PrototypeGrid() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Qasa Experiments</h1>
          <p className="text-lg text-gray-600">Explore and test new features for the Qasa platform</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prototypes.map((prototype) => (
            <Link
              key={prototype.id}
              to={prototype.path}
              className="block group transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  {prototype.thumbnail ? (
                    <img
                      src={prototype.thumbnail}
                      alt={prototype.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
                      <BeakerIcon className="w-16 h-16 text-indigo-300" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                      {prototype.category}
                    </div>
                    {prototype.tags?.map(tag => (
                      <span 
                        key={tag} 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {prototype.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {prototype.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router basename="/">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <PrototypeGrid />
              </main>
              <Footer />
              <DevExperimentsButton />
            </div>
          } />
          <Route path="/landlords/find-tenant" element={
            <div className="min-h-screen flex flex-col">
              <Header 
                variant="logged-in" 
                user={{
                  name: 'Daniel Mattias',
                  avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
                }}
                messageCount={3}
                notificationCount={1}
                isFluid={true}
              />
              <main className="flex-grow">
                <FindTenant isFluid={true} />
              </main>
              <Footer isFluid={true} />
              <DevExperimentsButton />
            </div>
          } />
          {prototypes.filter(p => p.id !== 'find-tenant').map((prototype) => (
            <Route
              key={prototype.id}
              path={prototype.path}
              element={
                <div className="min-h-screen flex flex-col">
                  <Header />
                  <main className="flex-grow">
                    <prototype.component />
                  </main>
                  <Footer />
                  <DevExperimentsButton />
                </div>
              }
            />
          ))}
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App; 