import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import HeaderCreationFlow from '../../../components/Header/HeaderCreationFlow';
import DevExperimentsButton from '../../../components/DevExperimentsButton';

const Dashboard = () => {
  const navigate = useNavigate();
  const [showPublishModal, setShowPublishModal] = useState(false);

  const handleBackToListings = () => {
    navigate('/experiments');
  };

  const handleEditListing = () => {
    navigate('/landlords/edit-listing');
  };

  const handlePublishListing = () => {
    setShowPublishModal(true);
  };

  const handleClosePublishModal = () => {
    setShowPublishModal(false);
  };

  const handlePublishConfirm = () => {
    setShowPublishModal(false);
    // Here you could add success notification
    alert('Annons publicerad!');
  };

  const handleEditRent = () => {
    navigate('/landlords/edit-rent');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <button 
              onClick={handleBackToListings}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Tillbaka"
            >
              <ArrowLeft className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex gap-4">
            <img 
              src="https://img.qasa.se/unsafe/372x372/smart/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/aef7313bcd790570c012f51a99cf49c2a8899796ce22d1387e3bc0901ebebc8c.png"
              alt="Property"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <Typography variant="h1" className="mb-2">Åsdammsvägen</Typography>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Snarast möjligt</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
                <span>Tillsvidare</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="primary" onClick={handleEditListing}>
              Redigera och publicera
            </Button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <EllipsisVerticalIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Status Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Status</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">Utkast</Typography>
            <Typography variant="body-sm" className="text-gray-500">Nästan klar</Typography>
          </div>

          {/* Contact Requests Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Kontaktförfrågningar</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">–</Typography>
            <Typography variant="body-sm" className="text-gray-500"></Typography>
          </div>

          {/* Matching Tenants Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Matchande hyresgäster</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">–</Typography>
            <Typography variant="body-sm" className="text-gray-500"></Typography>
          </div>

          {/* Visits Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Besök</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">–</Typography>
            <Typography variant="body-sm" className="text-gray-500"></Typography>
          </div>

          {/* Favorites Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Favoritmarkeringar</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">–</Typography>
            <Typography variant="body-sm" className="text-gray-500"></Typography>
          </div>

          {/* Unread Messages Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Olästa meddelanden</Typography>
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Typography variant="h3" className="mb-1">–</Typography>
            <Typography variant="body-sm" className="text-gray-500"></Typography>
          </div>

          {/* Edit Listing Overview Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow" onClick={handleEditListing}>
            <div className="flex items-center justify-between mb-4">
              <Typography variant="body-sm" className="text-gray-600">Redigera annons</Typography>
              <Edit className="h-4 w-4 text-gray-500" />
            </div>
            <Typography variant="h3" className="mb-1">Översikt</Typography>
            <Typography variant="body-sm" className="text-gray-500">Hoppa till olika delar</Typography>
          </div>
        </div>

        {/* Rent Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Typography variant="body-sm" className="text-gray-600 mb-1">Hyra</Typography>
              <Typography variant="h2" className="text-gray-900">1 000 kr</Typography>
            </div>
            <button 
              onClick={handleEditRent}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Redigera hyra"
            >
              <Edit className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <Typography variant="body-sm" className="text-gray-600">Publicera annons</Typography>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <Typography variant="body-sm" className="text-gray-600">Hitta hyresgäst</Typography>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <Typography variant="body-sm" className="text-gray-600">Signera hyresavtal</Typography>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <Typography variant="body-sm" className="text-gray-600">Årlig hyresutbetalning av Qasa: 12 000 kr</Typography>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
              <Typography variant="body-sm" className="text-gray-600">Hyr ut igen</Typography>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <Button variant="outline" size="lg" onClick={handleEditListing}>
            Redigera annons
          </Button>
          <Button variant="primary" size="lg" onClick={handlePublishListing}>
            Publicera gratis
          </Button>
        </div>
      </div>

      {/* Publish Modal */}
      {showPublishModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Publicera bostad
                </Typography>
                <button
                  onClick={handleClosePublishModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
              </div>
              
              <Typography variant="body-md" className="text-gray-600 mb-6">
                Så fort din annons publiceras kommer vi meddela intresserade bostadssökande!
              </Typography>

              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex gap-3">
                  <div className="w-5 h-5 text-red-500 mt-0.5">⚠️</div>
                  <div>
                    <Typography variant="body-sm" className="font-medium text-red-900 mb-1">
                      Du har inte angett någon beskrivning
                    </Typography>
                    <Typography variant="body-sm" className="text-red-700">
                      Beskriv bostaden för att skapa intresse hos din blivande hyresgäster
                    </Typography>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <Edit className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* ID Verification */}
              <div className="bg-[var(--color-background-inset)] border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 text-gray-500">🆔</div>
                  <Typography variant="body-sm" className="font-medium text-gray-900">
                    ID-verifiering krävs
                  </Typography>
                </div>
                <Typography variant="body-sm" className="text-gray-600 mb-4">
                  Er trygghet är viktig för oss, därför behöver du verifiera din identitet innan du publicerar.
                </Typography>
                <Button variant="primary" size="md">
                  Verifiera ID
                </Button>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleClosePublishModal}
                  className="flex-1"
                >
                  Redigera annons
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handlePublishConfirm}
                  className="flex-1"
                  disabled
                >
                  Publicera gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <DevExperimentsButton />
    </div>
  );
};

export default Dashboard; 