import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Edit, MapPin, Home, Users, Check, Star, Camera, X, Trash2, Plus, AlertTriangle, ArrowRight, Heart, ArrowLeft } from 'lucide-react';
import DynamicHeader from '../../../components/DynamicHeader';
import Typography from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import TextArea from '../../../components/ui/TextArea';
import Select from '../../../components/ui/Select';
import RadioGroup from '../../../components/ui/RadioGroup';
import Checkbox from '../../../components/ui/Checkbox';
import Modal from '../../../components/ui/Modal';
import DevExperimentsButton from '../../../components/DevExperimentsButton';

export default function TenantProfilePage() {
  const [searchParams] = useSearchParams();
  const isPublicView = searchParams.get('view') === 'public';
  const [isPublished, setIsPublished] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  
  // Profile data state
  const [profile, setProfile] = useState({
    name: 'Daniel',
    bio: 'Hej',
    bioPets: 'Hej',
    verified: false,
    avatar: 'https://img.qasa.se/unsafe/fit-in/320x320/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/9803b02d784000078cedf6b3cb61973c6b171c0c938520cc819dc2298894512f.png',
    searchCriteria: {
      location: 'Lund',
      maxRent: '13',
      rooms: '3',
      size: '90',
      people: '2',
      furnished: 'both',
      propertyTypes: ['other'],
      moveInDate: 'asap',
      moveOutDate: 'indefinite'
    },
    preferences: ['tumbleDryer'],
    requirements: ['petsAllowed'],
    occupation: {
      title: 'dd',
      company: '',
      type: 'full_time',
      startMonth: 'Mars',
      startYear: '2021',
      ongoing: true
    },
    housingSituation: {
      movingReason: 'd',
      previousLocation: 'd',
      currentType: 'other_agreement_type'
    }
  });

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const updateProfile = (section, data) => {
    setProfile(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const renderOverviewModal = () => (
    <Modal
      isOpen={activeModal === 'overview'}
      onClose={closeModal}
      title="Överblick"
      size="large"
    >
      <div className="space-y-6">
        {/* Profile picture section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full p-2 border border-gray-300">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <Button variant="outline" size="small" className="mt-2">
            <Camera className="w-4 h-4 mr-2" />
            Ändra bild
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Förnamn
            </label>
            <Input
              value={profile.name}
              onChange={(e) => updateProfile('basic', { name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Din rubrik
            </label>
            <TextArea
              value={profile.bio}
              onChange={(e) => updateProfile('basic', { bio: e.target.value })}
              placeholder="Exempel: Skötsam student söker liten lägenhet"
              maxLength={60}
              rows={3}
            />
            <div className="text-sm text-gray-500 mt-1">
              Beskriv dig själv med en mening.
            </div>
          </div>

          {/* Verification section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <Typography variant="h3" className="text-gray-900 mb-2">
              Ej verifierad
            </Typography>
            <Typography variant="body" className="text-gray-600 mb-4">
              Verifierat personnummer visar att du är en pålitlig användare.
            </Typography>
            <Button variant="primary" size="small">
              Verifiera
            </Button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderIntroductionModal = () => (
    <Modal
      isOpen={activeModal === 'introduction'}
      onClose={closeModal}
      title="Introduktion"
      size="large"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Din introduktion
          </label>
          <TextArea
            value={profile.bio}
            onChange={(e) => updateProfile('basic', { bio: e.target.value })}
            placeholder="Exempel: Jag bor just nu i Sundsvall och söker boende i Göteborg tillsammans med min pojkvän Adam..."
            maxLength={240}
            rows={4}
          />
          <div className="text-sm text-gray-500 mt-1">
            3 / 240
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vilka husdjur har du, om något? <span className="text-gray-500">(Valfritt)</span>
          </label>
          <Input
            value={profile.bioPets}
            onChange={(e) => updateProfile('basic', { bioPets: e.target.value })}
            placeholder="Exempel: Jag har en söt gammal katt :)"
            maxLength={90}
          />
          <div className="text-sm text-gray-500 mt-1">
            Vilken sorts husdjur har du - en tax, en innekatt, en vandrande pinne?
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderLookingForModal = () => (
    <Modal
      isOpen={activeModal === 'lookingFor'}
      onClose={closeModal}
      title="Letar efter"
      size="large"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sökområde
          </label>
          <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg">
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">
              Lund
              <button className="ml-1">
                <X className="w-3 h-3" />
              </button>
            </span>
            <Input
              placeholder="Ange en stad eller ett område"
              className="border-0 p-0 focus:ring-0"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hyra (max)
          </label>
          <div className="relative">
            <Input
              value={profile.searchCriteria.maxRent}
              onChange={(e) => updateProfile('searchCriteria', { maxRent: e.target.value })}
              placeholder="Ange den högsta hyran du kan tänka dig att betala"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              kr/månad
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Typography variant="subtitle2" className="text-gray-900 mb-3">Inflytt</Typography>
            <RadioGroup
              value="asap"
              options={[
                { value: 'asap', label: 'Snarast möjligt' },
                { value: 'specific', label: 'Välj datum' }
              ]}
            />
          </div>

          <div>
            <Typography variant="subtitle2" className="text-gray-900 mb-3">Utflytt</Typography>
            <RadioGroup
              value="indefinite"
              options={[
                { value: 'indefinite', label: 'Tillsvidare' },
                { value: 'specific', label: 'Välj datum' }
              ]}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Antal hyresgäster
          </label>
          <Select>
            <option>Ange hur många ni är som söker bostad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderPreferencesModal = () => (
    <Modal
      isOpen={activeModal === 'preferences'}
      onClose={closeModal}
      title="Preferenser"
      size="large"
    >
      <div className="space-y-4">
        <div>
          <Typography variant="subtitle2" className="text-gray-900 mb-3">Preferenser</Typography>
          <div className="space-y-2">
            {[
              { value: 'balcony', label: 'Balkong' },
              { value: 'storage', label: 'Förråd' },
              { value: 'dishwasher', label: 'Diskmaskin' },
              { value: 'washingMachine', label: 'Tvättmaskin' },
              { value: 'tumbleDryer', label: 'Torktumlare' },
              { value: 'bathtub', label: 'Badkar' },
              { value: 'bikeRoom', label: 'Cykelrum' },
              { value: 'parking', label: 'Parkering' },
              { value: 'recycling', label: 'Återvinningsrum' },
              { value: 'sauna', label: 'Egen bastu' }
            ].map((pref) => (
              <label key={pref.value} className="flex items-center space-x-3">
                <Checkbox
                  checked={profile.preferences.includes(pref.value)}
                  onChange={(checked) => {
                    if (checked) {
                      updateProfile('preferences', [...profile.preferences, pref.value]);
                    } else {
                      updateProfile('preferences', profile.preferences.filter(p => p !== pref.value));
                    }
                  }}
                />
                <span>{pref.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderRequirementsModal = () => (
    <Modal
      isOpen={activeModal === 'requirements'}
      onClose={closeModal}
      title="Krav"
      size="large"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          {[
            { value: 'wheelchairAccessible', label: 'Tillgänglig med rullstol' },
            { value: 'petsAllowed', label: 'Husdjur tillåtet' },
            { value: 'smokingAllowed', label: 'Rökning tillåten' }
          ].map((req) => (
            <label key={req.value} className="flex items-center space-x-3">
              <Checkbox
                checked={profile.requirements.includes(req.value)}
                onChange={(checked) => {
                  if (checked) {
                    updateProfile('requirements', [...profile.requirements, req.value]);
                  } else {
                    updateProfile('requirements', profile.requirements.filter(r => r !== req.value));
                  }
                }}
              />
              <span>{req.label}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderEmploymentModal = () => (
    <Modal
      isOpen={activeModal === 'employment'}
      onClose={closeModal}
      title="Sysselsättning"
      size="large"
    >
      <div className="space-y-6">
        {/* Existing employment */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <Typography variant="h3" className="text-gray-900 mb-1">
                {profile.occupation.title}
              </Typography>
              <Typography variant="body" className="text-gray-600 mb-1">
                {profile.occupation.company}
              </Typography>
              <Typography variant="body" className="text-gray-600 mb-2">
                Heltid
              </Typography>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Mars 2021</span>
                <ArrowRight className="w-4 h-4" />
                <span>Pågående</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <Button variant="outline" onClick={() => {}}>
          <Plus className="w-4 h-4 mr-2" />
          Lägg till sysselsättning
        </Button>

        <div className="flex justify-end">
          <Button variant="primary" onClick={closeModal}>
            Spara
          </Button>
        </div>
      </div>
    </Modal>
  );

  const renderHousingSituationModal = () => (
    <Modal
      isOpen={activeModal === 'housingSituation'}
      onClose={closeModal}
      title="Hur bor du idag?"
      size="large"
    >
      <div className="space-y-6">
        <div>
          <Typography variant="subtitle2" className="text-gray-900 mb-3">
            Hur bor du idag?
          </Typography>
          <RadioGroup
            value={profile.housingSituation.currentType}
            onChange={(value) => updateProfile('housingSituation', { currentType: value })}
            options={[
              { value: 'first_hand_renting', label: 'Första hand' },
              { value: 'second_hand_renting', label: 'Andra hand' },
              { value: 'living_with_family', label: 'Bor hos familj' },
              { value: 'own_condominium', label: 'Bostadsrätt' },
              { value: 'own_house', label: 'Eget hus' },
              { value: 'student_housing', label: 'Studentboende' },
              { value: 'co_living', label: 'Inneboende' },
              { value: 'other_agreement_type', label: 'Annan boendeform' }
            ]}
          />
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={closeModal}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Nästa
          </Button>
        </div>
      </div>
    </Modal>
  );

  return (
    <div className="min-h-screen bg-white">
      <DynamicHeader isFluid={true} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Header */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-pink-200"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-pink-500 rounded-full p-1">
                    <StarSolid className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <Typography variant="h1" className="text-gray-900 mb-2">
                        {profile.name}
                      </Typography>
                      <Typography variant="h2" className="text-gray-700 mb-4">
                        {profile.bio}
                      </Typography>
                    </div>
                    {!isPublicView && (
                      <button
                        onClick={() => openModal('overview')}
                        className="p-2 text-gray-600 hover:text-gray-900"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                  
                  {!profile.verified && (
                    <Button variant="outline" size="small" className="opacity-70">
                      <IdentificationIcon className="w-4 h-4 mr-2" />
                      Ej verifierad
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-8">
              {/* Introduction Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="body" className="text-gray-800">
                      {profile.bio}
                    </Typography>
                  </div>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('introduction')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <Typography variant="body" className="text-gray-700">
                    {profile.bioPets}
                  </Typography>
                </div>
              </div>

              {/* Looking For Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="h2" className="text-gray-900">
                    Letar efter
                  </Typography>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('lookingFor')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <Typography variant="body" className="text-gray-700">
                      {profile.searchCriteria.location}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-gray-600" />
                    <Typography variant="body" className="text-gray-700">
                      {profile.searchCriteria.rooms} rum, {profile.searchCriteria.size} m²
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <Typography variant="body" className="text-gray-700">
                      Boende för {profile.searchCriteria.people} personer
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <CurrencyDollarIcon className="w-5 h-5 text-gray-600" />
                    <Typography variant="body" className="text-gray-700">
                      Max {profile.searchCriteria.maxRent} kr
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="h2" className="text-gray-900">
                    Preferenser
                  </Typography>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('preferences')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-2">
                  {profile.preferences.map((pref) => (
                    <div key={pref} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-600" />
                      <Typography variant="body" className="text-gray-700">
                        {pref === 'tumbleDryer' ? 'Torktumlare' : pref}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="h2" className="text-gray-900">
                    Krav
                  </Typography>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('requirements')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-2">
                  {profile.requirements.map((req) => (
                    <div key={req} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-600" />
                      <Typography variant="body" className="text-gray-700">
                        {req === 'petsAllowed' ? 'Husdjur tillåtet' : req}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employment Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="h2" className="text-gray-900">
                    Sysselsättning
                  </Typography>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('employment')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <Typography variant="h3" className="text-gray-900 mb-2">
                    {profile.occupation.title}
                  </Typography>
                  <Typography variant="body" className="text-gray-600 mb-1">
                    {profile.occupation.company}
                  </Typography>
                  <Typography variant="body" className="text-gray-600 mb-2">
                    Heltid
                  </Typography>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Mars 2021</span>
                    <ArrowRight className="w-4 h-4" />
                    <span>Pågående</span>
                  </div>
                </div>
              </div>

              {/* Housing Situation Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Typography variant="h2" className="text-gray-900">
                    Boendesituation
                  </Typography>
                  {!isPublicView && (
                    <button
                      onClick={() => openModal('housingSituation')}
                      className="p-2 text-gray-600 hover:text-gray-900"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Typography variant="subtitle2" className="text-gray-900 mb-1">
                      Anledning till flytt
                    </Typography>
                    <Typography variant="body" className="text-gray-700">
                      {profile.housingSituation.movingReason}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="text-gray-900 mb-1">
                      Tidigare boende
                    </Typography>
                    <Typography variant="body" className="text-gray-700">
                      {profile.housingSituation.previousLocation}
                    </Typography>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Contact History */}
              <div>
                <Typography variant="h2" className="text-gray-900 mb-4">
                  Tidigare kontaktförfrågningar
                </Typography>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <p><strong>Bostäderna ligger i:</strong> Stockholm, Håcksvik, Solna</p>
                  <p><strong>Priserna har legat mellan:</strong> 8000 och 35000</p>
                  <p><strong>Antal rum:</strong> 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Status & Actions */}
          {!isPublicView && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-4">
                  <div>
                    <Typography variant="h2" className="text-gray-900 mb-2">
                      Publicerad
                    </Typography>
                    <Typography variant="body" className="text-gray-600">
                      Hyresvärdar kan hitta din profil och kontakta dig.
                    </Typography>
                  </div>
                  
                  <hr className="border-gray-200" />
                  
                  <Button 
                    variant="outline" 
                    fullWidth
                    onClick={() => setIsPublished(!isPublished)}
                  >
                    {isPublished ? 'Avpublicera' : 'Publicera'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {renderOverviewModal()}
      {renderIntroductionModal()}
      {renderLookingForModal()}
      {renderPreferencesModal()}
      {renderRequirementsModal()}
      {renderEmploymentModal()}
      {renderHousingSituationModal()}
      
      <DevExperimentsButton />
    </div>
  );
} 