import React from 'react';
import { Home, MapPin, Building, CheckCircle } from 'lucide-react';

const PropertyInfo = ({ data }) => {
  const amenities = [
    { icon: HomeIcon, label: data.type },
    { icon: Squares2X2Icon, label: data.size },
    { icon: UserGroupIcon, label: data.rooms },
    { icon: BuildingOfficeIcon, label: data.floor },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <div className="text-right">
            <p className="text-2xl font-bold">{data.price}</p>
            <p className="text-sm text-gray-500">per månad</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              <amenity.icon className="h-5 w-5 text-gray-500" />
              <span className="text-sm">{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Om bostaden</h2>
          <p className="text-gray-700 whitespace-pre-line">{data.description}</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Bekvämligheter</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Möblerad</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Parkering</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Balkong</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Egen ingång</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Plats</h2>
          <div className="flex items-start space-x-2">
            <MapPin className="h-5 w-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium">Hässelby</p>
              <p className="text-sm text-gray-500">2 min till buss</p>
              <p className="text-sm text-gray-500">10 min till Barkarby station</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo; 