import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  IdentificationIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import DynamicHeader from '../../../components/DynamicHeader';
import Typography from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button';

export default function LandlordProfilePage() {
  const [searchParams] = useSearchParams();
  const isPublicView = searchParams.get('view') === 'public';
  const [favoriteListings, setFavoriteListings] = useState(new Set());

  const landlord = {
    name: 'Mahboubeh',
    age: 54,
    initials: 'M',
    verified: true,
    occupation: 'Not specified',
    listings: [
      {
        id: 1,
        title: 'Näckrosgatan, Bunkeflostrand',
        type: 'Room in house',
        rooms: '1 room',
        size: '23 m²',
        availableFrom: 'Now',
        availableTo: 'Until further notice',
        price: 6821,
        images: [
          'https://img.qasa.se/unsafe/350x350/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/eb64c690a27e8bb0f4486ead3d0af264c2a3ed5bc0a8463639ccc863b1117ca3.jpg',
          'https://img.qasa.se/unsafe/350x350/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/d7e53ee9a274f50e10d71491084ac4b38b99c5cbc543ff49787e0c0a984f2e4e.png',
          'https://img.qasa.se/unsafe/350x350/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/ed29d9afb793c2239b5cf9e6ce2f6155fe150d1e91b7b3e9dee82fef3038705a.jpg',
          'https://img.qasa.se/unsafe/350x350/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/fee093bfebeccb5663158723059b70bcadc9f4803328ebf330c7ba8594d1fe1c.jpg',
          'https://img.qasa.se/unsafe/350x350/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/681c12d8736275ee8fae5890da1dd1c57cdc4a2da537655caa822c8cb733e5a8.jpg'
        ]
      }
    ]
  };

  const toggleFavorite = (listingId) => {
    const newFavorites = new Set(favoriteListings);
    if (newFavorites.has(listingId)) {
      newFavorites.delete(listingId);
    } else {
      newFavorites.add(listingId);
    }
    setFavoriteListings(newFavorites);
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicHeader isFluid={true} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center text-white text-6xl font-bold">
                {landlord.initials}
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <Typography variant="h1" className="text-gray-900 mb-2">
                  {landlord.name} ({landlord.age})
                </Typography>
              </div>
              
              {landlord.verified && (
                <Button variant="outline" size="small" className="mb-4">
                  <IdentificationIcon className="w-4 h-4 mr-2" />
                  Your ID is verified
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
          {/* Occupation Section */}
          <div className="space-y-4">
            <Typography variant="h2" className="text-gray-900">
              Occupation
            </Typography>
            <Typography variant="body" className="text-gray-600">
              {landlord.occupation}
            </Typography>
          </div>

          <hr className="border-gray-200" />

          {/* Published Listings Section */}
          <div className="space-y-6">
            <Typography variant="h2" className="text-gray-900">
              Published listings
            </Typography>
            
            <div className="grid gap-6">
              {landlord.listings.map((listing) => (
                <div key={listing.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative">
                    {/* Image Gallery */}
                    <div className="relative h-64 bg-gray-100">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-4 flex gap-1">
                        {listing.images.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${
                              index === 0 ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(listing.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                    >
                      {favoriteListings.has(listing.id) ? (
                        <HeartIconSolid className="w-5 h-5 text-red-500" />
                      ) : (
                        <HeartIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>

                  {/* Listing Details */}
                  <div className="p-6">
                    <Typography variant="h3" className="text-gray-900 mb-2">
                      {listing.title}
                    </Typography>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      <span>{listing.type}</span>
                      <span>/</span>
                      <span>{listing.rooms}</span>
                      <span>/</span>
                      <span>{listing.size}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <span>{listing.availableFrom}</span>
                      <ArrowRightIcon className="w-4 h-4" />
                      <span>{listing.availableTo}</span>
                    </div>
                    
                    <Typography variant="h3" className="text-gray-900">
                      SEK {listing.price.toLocaleString()}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Report Profile */}
          <div className="flex justify-center">
            <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
              <ExclamationTriangleIcon className="w-4 h-4 mr-2" />
              Report profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 