import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import DynamicHeader from '../../components/DynamicHeader';
import Footer from '../../components/Footer';
import Avatar from '../../components/ui/Avatar';
import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import Search from '../../components/ui/Search';
import TextArea from '../../components/ui/TextArea';
import Typography from '../../components/ui/Typography';
import { useTranslation } from '../../utils/translations/LanguageContext';

export default function MessagesPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const conversations = [
    {
      id: 'oscar',
      user: {
        name: 'Oscar',
        age: 26,
        avatar: 'https://img.qasa.se/unsafe/fit-in/300x300/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/31deac853430bb9715e3fd048718c83ab2ad6aa131e64b7b75f16cd43708dd58.jpg',
        bio: 'Managementkonsult med sambo söker bostad i Stockholm',
        matchPercentage: 43,
        verified: true,
        criteria: {
          people: { requested: '2 personer', matches: false },
          space: { requested: '2 rum, 35 m²', matches: false },
          budget: { requested: 'Max SEK 20,000', matches: true },
          furnished: { requested: 'Flexibel', matches: true },
          dates: { requested: '2025-08-01 → Tillsvidare', matches: false, note: 'Dates are different' }
        }
      },
      property: {
        address: 'Gambrinusgatan, Stockholm',
        type: 'Apartment',
        rooms: '1.5 rooms',
        size: '23 m²',
        image: 'https://img.qasa.se/unsafe/200x200/smart/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/52c822294a926581b1629a5d0d80fce9eee735a109cdc5e628b69a7f357dfcc0.jpg',
        price: 13000,
        deposit: 0
      },
      lastMessage: 'Oscar signed the lease',
      lastMessageTime: '25 Nov',
      messages: [
        {
          id: 1,
          sender: 'tenant',
          text: 'Hi Daniel!\n\nMy name is Oscar Julsgård, and I am looking for a place to rent in Stockholm. In early 2025, I will start an internship as a management consultant at one of the larger firms and will need accommodation from mid-January to the end of March. Would you consider renting out your property during that period?\n\nI am 26 years old, non-smoker, without pets, and have a stable income from both CSN, employment, and my own company.\n\nThank you in advance!\n\nBest regards,\nOscar',
          timestamp: '11 November 20:18'
        },
        {
          id: 2,
          sender: 'landlord',
          text: 'Hey Oscar, sounds good – would you be interested to rent longer or april is the deal? Works for me also but just interested :)',
          timestamp: '12 November 08:43'
        },
        {
          id: 3,
          sender: 'tenant',
          text: 'Thanks for your quick response! My employment will be from Jan 20th to Mars 21th so ideally I\'m looking to rent during this period + a few days before and after :)',
          timestamp: '12 November 09:54'
        },
        {
          id: 4,
          sender: 'landlord',
          text: 'Allright, would it be possible if we do a contract 20/1 and until 31/3? I guess you would be OK with furniture (bed, etc) as thats what would be included in the apartment when renting. And I wish to have the rent/contract via Airbnb are you ok with that? Ie you book in Airbnb and the payment goes through it.\n\nJust this questions for now then we can have a viewing or what you need\n\n you can find my listing in airbnb . com slash daniellauding here is my airbnb check reviews etc',
          timestamp: '12 November 10:31'
        },
        {
          id: 5,
          sender: 'tenant',
          text: 'Yes, those dates would work for me, and the apartment being furnished is perfect. I\'ll be in Stockholm this saturday but not certain I\'ll have time for a physical viewing.\n\nOut of curiosity, can I just why you\'d prefer Airbnb over Blocket/Qasa? I tried to find your airbnb page but couldn\'t.',
          timestamp: '12 November 19:52'
        },
        {
          id: 6,
          sender: 'landlord',
          text: 'My bad, you have to have a airbnb dot com slash h slash daniellauding, they dont let me send the full link here.\n\nWell we can have a voice call this week to talk abit more and you can get a video recording? or check airbnb? im renting it out full november and cant show it before 2/12 as im not in town...\n\nim a superhost on airbnb and wanted to maintain it, but it would work with qasa/blocket also\n\nbtw speaking swedish?',
          timestamp: '12 November 20:25'
        },
        {
          id: 7,
          sender: 'tenant',
          text: 'Thank you, I now found the apartment. Looks great!',
          timestamp: '13 November 11:16'
        },
        {
          id: 8,
          sender: 'tenant',
          text: 'I would love to see a video recording of it, and maybe we can have a call tomorrow? I see you point with the airbnb superhost status, the only concern I had was if going through airbnb would come with extra fees etc..',
          timestamp: '13 November 11:17'
        },
        {
          id: 9,
          sender: 'tenant',
          text: 'And yes, jag pratar svenska! :)',
          timestamp: '13 November 11:17'
        },
        {
          id: 10,
          sender: 'tenant',
          text: 'Is there a laundry machine in the apartment/building?',
          timestamp: '13 November 11:30'
        },
        {
          id: 11,
          sender: 'system',
          type: 'phone-warning',
          text: 'Fredag runt kl 16 blir kanon, mitt nummer är 0738422391',
          timestamp: '13 November 21:00',
          warning: {
            title: 'Suspicious behavior',
            text: 'Be cautious of phone numbers, email adresses and URLs in the chat. We recommend keeping all contact in the chat if possible.'
          }
        },
        {
          id: 12,
          sender: 'system',
          type: 'lease-created',
          title: 'You\'ve created a lease draft',
          text: 'Go through the lease contract draft as soon as you can. If you have any questions, don\'t hesitate to contact us for assistance!',
          timestamp: '22 November 10:06',
          buttons: [
            { text: 'Contact us', variant: 'outline' },
            { text: 'To lease', variant: 'primary', disabled: true }
          ]
        },
        {
          id: 13,
          sender: 'system',
          type: 'lease-signed',
          title: 'You signed the lease',
          text: 'Fantastic! Now it\'s Oscar\'s turn to sign the rental agreement. They have received a link via SMS and email. Congratulations!',
          timestamp: '23 November 17:18',
          buttons: [
            { text: 'View signing status', variant: 'primary', href: '/en/leases/282646/invoices?id=17753669&prevRoute=messages' }
          ]
        },
        {
          id: 14,
          sender: 'system',
          type: 'lease-completed',
          title: 'Oscar signed the lease',
          text: 'Congratulations! Your home has been rented out. Let\'s celebrate by taking a look at your upcoming rent payments.',
          timestamp: '25 November 14:54',
          buttons: [
            { text: 'View rental payments', variant: 'primary', href: '/en/leases/282646/invoices?id=17753669&prevRoute=messages' }
          ]
        }
      ]
    },
    {
      id: 'martina',
      user: {
        name: 'Martina',
        age: 29,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05a?w=150&h=150&fit=crop&crop=face',
        bio: 'Lärare söker familjevänligt boende i Stockholm',
        matchPercentage: 78,
        verified: true,
        criteria: {
          people: { requested: '1 person', matches: true },
          space: { requested: '2 rum, 50 m²', matches: true },
          budget: { requested: 'Max SEK 18,000', matches: false },
          furnished: { requested: 'Omöblerad', matches: true },
          dates: { requested: '2025-06-01 → Tillsvidare', matches: true }
        }
      },
      property: {
        address: 'Sveavägen, Stockholm',
        type: 'Villa',
        rooms: '2 rum',
        size: '200 m²',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop',
        price: 36732
      },
      lastMessage: 'Du: Hi there! I\'m reaching o...',
      lastMessageTime: '16 juni',
      messages: [],
      isClosed: true
    },
    {
      id: 'emma',
      user: {
        name: 'Emma',
        age: 25,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        bio: 'Student på KTH söker bostad nära campus',
        matchPercentage: 92,
        verified: true,
        criteria: {
          people: { requested: '1 person', matches: true },
          space: { requested: '1 rum, 25 m²', matches: true },
          budget: { requested: 'Max SEK 12,000', matches: true },
          furnished: { requested: 'Möblerad', matches: true },
          dates: { requested: '2025-08-15 → 2026-06-15', matches: true }
        }
      },
      property: {
        address: 'Östermalm, Stockholm',
        type: 'Lägenhet',
        rooms: '1 rum',
        size: '28 m²',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=200&fit=crop',
        price: 11500
      },
      lastMessage: 'Hej! Kan jag få veta mer om...',
      lastMessageTime: '2 tim',
      messages: []
    },
    {
      id: 'lars',
      user: {
        name: 'Lars',
        age: 34,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        bio: 'Ingenjör med familj söker större bostad',
        matchPercentage: 65,
        verified: true,
        criteria: {
          people: { requested: '3 personer', matches: false },
          space: { requested: '3 rum, 80 m²', matches: false },
          budget: { requested: 'Max SEK 25,000', matches: true },
          furnished: { requested: 'Omöblerad', matches: true },
          dates: { requested: '2025-09-01 → Tillsvidare', matches: true }
        }
      },
      property: {
        address: 'Södermalm, Stockholm',
        type: 'Lägenhet',
        rooms: '2 rum',
        size: '55 m²',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=200&fit=crop',
        price: 19800
      },
      lastMessage: 'Tack för snabbt svar!',
      lastMessageTime: '1 dag',
      messages: []
    }
  ];

  const [selectedConversation, setSelectedConversation] = useState(conversations[0]?.id || 'oscar');
  const [searchTerm, setSearchTerm] = useState('');
  const [messageText, setMessageText] = useState('');
  const [favoriteConversations, setFavoriteConversations] = useState(new Set(['martina']));
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showConversationDropdown, setShowConversationDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterDropdownRef = useRef(null);
  const conversationDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
      if (conversationDropdownRef.current && !conversationDropdownRef.current.contains(event.target)) {
        setShowConversationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (convId) => {
    const newFavorites = new Set(favoriteConversations);
    if (newFavorites.has(convId)) {
      newFavorites.delete(convId);
    } else {
      newFavorites.add(convId);
    }
    setFavoriteConversations(newFavorites);
  };

  const renderMessage = (message) => {
    if (message.type === 'phone-warning') {
      return (
        <div className="mb-6">
          <div className="flex justify-center mb-2">
            <Typography variant="label-sm" className="text-[var(--color-text-secondary)]">
              {message.timestamp}
            </Typography>
          </div>
          <div className="bg-[var(--color-background-inset)] rounded-lg p-4 max-w-md">
            <Typography variant="body-md" className="text-[var(--color-text-primary)]">
              {message.text}
            </Typography>
          </div>
          <div className="mt-4 bg-[var(--color-background-inset)] border border-[var(--color-border)] rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="AlertTriangle" className="w-5 h-5 text-[var(--color-warning)] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <Typography variant="title-sm" className="font-semibold text-[var(--color-text-primary)] mb-1">
                  {t('messages.suspiciousBehavior')}
                </Typography>
                <Typography variant="body-sm" className="text-[var(--color-text-secondary)] mb-3">
                  {t('messages.suspiciousText')}
                </Typography>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">{t('messages.whyWarning')}</Button>
                  <Button variant="ghost" size="sm" className="text-[var(--color-danger)]">{t('messages.reportPerson', { name: 'Oscar' })}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (message.type === 'lease-created' || message.type === 'lease-signed' || message.type === 'lease-completed') {
      return (
        <div className="mb-6">
          <div className="flex justify-center mb-2">
            <Typography variant="label-sm" className="text-[var(--color-text-secondary)]">
              {message.timestamp}
            </Typography>
          </div>
          <div className="bg-[var(--color-background-inset)] rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <img src="/_next/static/media/qasa-logotype-brown.9d4d7f96.png" alt="Qasa" className="h-6" />
            </div>
            <Typography variant="title-lg" className="font-semibold text-[var(--color-text-primary)] mb-2">
              {message.title}
            </Typography>
            <Typography variant="body-md" className="text-[var(--color-text-secondary)] mb-4">
              {message.text}
            </Typography>
            {message.buttons && (
              <div className="flex gap-2">
                {message.buttons.map((button, idx) => (
                  <Button
                    key={idx}
                    variant={button.variant}
                    size="small"
                    disabled={button.disabled}
                    href={button.href}
                  >
                    {button.text}
                  </Button>
                ))}
                        </div>
        )}
      </div>
      
      <DevExperimentsButton />
    </div>
  );
}

    const isLandlord = message.sender === 'landlord';
    return (
      <div className="mb-6">
        <div className="flex justify-center mb-2">
          <Typography variant="label-sm" className="text-[var(--color-text-secondary)]">
            {message.timestamp}
          </Typography>
        </div>
        <div className={`max-w-md ${isLandlord ? 'ml-auto' : 'mr-auto'}`}>
          <div className={`rounded-lg p-4 ${
            isLandlord 
              ? 'bg-[#DBEAFF] text-[var(--color-text-primary)]' 
              : 'bg-gray-20 text-[var(--color-text-primary)]'
          }`}>
            <Typography variant="body-md" className="whitespace-pre-wrap">
              {message.text}
            </Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <DynamicHeader isFluid={true} />
      
      <div className="flex-1 flex overflow-hidden" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Conversations List */}
        <div className="w-80 border-r border-[var(--color-border)] flex flex-col bg-white">
          <div className="p-4 border-b border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="title-xl" className="text-[var(--color-text-primary)]">{t('messages.inbox')}</Typography>
              <div className="relative" ref={filterDropdownRef}>
                <Button 
                  variant="ghost"
                  className="bg-white"
                  size="sm"
                  iconOnly
                  icon={<Icon name="Settings" className="w-6 h-6 text-[var(--color-text-secondary)]" />}
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                />
                
                {showFilterDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-[var(--color-border)] rounded-lg shadow-lg z-50">
                    <div className="p-2">
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { setActiveFilter('all'); setShowFilterDropdown(false); }}
                        className={`w-full justify-start ${activeFilter === 'all' ? 'bg-[var(--color-background-inset)]' : ''}`}
                      >
                        <Typography variant="body-md" className="text-[var(--color-text-primary)]">{t('messages.allConversations')}</Typography>
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { setActiveFilter('active'); setShowFilterDropdown(false); }}
                        className={`w-full justify-start ${activeFilter === 'active' ? 'bg-[var(--color-background-inset)]' : ''}`}
                      >
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">{t('messages.activeConversations')}</Typography>
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { setActiveFilter('archived'); setShowFilterDropdown(false); }}
                        className={`w-full justify-start ${activeFilter === 'archived' ? 'bg-[var(--color-background-inset)]' : ''}`}
                      >
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">{t('messages.archivedConversations')}</Typography>
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { setActiveFilter('favorited'); setShowFilterDropdown(false); }}
                        className={`w-full justify-start ${activeFilter === 'favorited' ? 'bg-[var(--color-background-inset)]' : ''}`}
                      >
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">Favorited conversations</Typography>
                      </Button>
                      <Button 
                        variant="ghost"
                        size="sm"
                        onClick={() => { setActiveFilter('home'); setShowFilterDropdown(false); }}
                        className={`w-full justify-start ${activeFilter === 'home' ? 'bg-[var(--color-background-inset)]' : ''}`}
                      >
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">{t('messages.filterByHome')}</Typography>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Search
              placeholder={t('messages.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="default"
              className="rounded-lg"
              icon={false}
            />
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <Button
                key={conversation.id}
                variant="ghost"
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full p-4 text-left justify-start h-auto bg-gray-50 hover:bg-[var(--color-background-inset)] ${
                  selectedConversation === conversation.id ? 'bg-gray-20' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar
                      src={conversation.user.avatar}
                      alt={conversation.user.name}
                      size="md"
                    />
                    <Button
                      variant="ghost"
                      size="xs"
                      iconOnly
                      icon={favoriteConversations.has(conversation.id) ? (
                        <Icon name="Heart" className="w-4 h-4 text-[var(--color-primary)] fill-current" />
                      ) : (
                        <Icon name="Heart" className="w-4 h-4 text-[var(--color-text-secondary)]" />
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(conversation.id);
                      }}
                      className="absolute -top-1 -right-1"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)] mb-1">
                      <span>{conversation.property.address}</span>
                      <span>/</span>
                      <span>{conversation.property.rooms}</span>
                      <span>/</span>
                      <span>{conversation.property.size}</span>
                    </div>
                    <Typography variant="title-sm" className="text-[var(--color-text-primary)] mb-1">
                      {conversation.user.name}
                    </Typography>
                    <div className="flex items-center justify-between">
                      <Typography variant="body-sm" className="text-[var(--color-text-secondary)] truncate">
                        {conversation.lastMessage}
                      </Typography>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] ml-2">
                        {conversation.lastMessageTime}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Conversation Details */}
        {selectedConv && (
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col">
              {/* Conversation Header - Sticky */}
              <div className="p-4 border-b border-[var(--color-border)] bg-white">
                <div className="flex items-center justify-between">
                  <Button 
                    variant="ghost"
                    onClick={() => navigate('/tenants/profile?view=public')}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity justify-start h-auto p-0"
                  >
                    <Avatar
                      src={selectedConv.user.avatar}
                      alt={selectedConv.user.name}
                      size="md"
                    />
                    <div>
                      <Typography variant="title-lg" className="text-[var(--color-text-primary)]">
                        {selectedConv.user.name}
                      </Typography>
                      <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                        {selectedConv.property.address}
                      </Typography>
                    </div>
                  </Button>
                  <div className="relative" ref={conversationDropdownRef}>
                    <Button 
                      variant="ghost"
                      size="sm"
                      iconOnly
                      icon={<Icon name="MoreVertical" className="w-6 h-6 text-[var(--color-text-secondary)]" />}
                      onClick={() => setShowConversationDropdown(!showConversationDropdown)}
                    />
                    
                    {showConversationDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[var(--color-border)] rounded-lg shadow-lg z-50">
                        <div className="p-2">
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigate('/tenants/profile?view=public');
                              setShowConversationDropdown(false);
                            }}
                            className="w-full justify-start"
                          >
                            <Typography variant="body-md" className="text-[var(--color-text-primary)]">{t('messages.viewProfile')}</Typography>
                          </Button>
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowConversationDropdown(false)}
                            className="w-full justify-start"
                          >
                            <Typography variant="body-md" className="text-[var(--color-text-primary)]">{t('messages.viewHome')}</Typography>
                          </Button>
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowConversationDropdown(false)}
                            className="w-full justify-start"
                          >
                            <Typography variant="body-md" className="text-[var(--color-text-primary)]">{t('messages.reportUser')}</Typography>
                          </Button>
                          <Button 
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowConversationDropdown(false)}
                            className="w-full justify-start"
                          >
                            <Typography variant="body-md" className="text-[var(--color-text-primary)]">{t('messages.archiveConversation')}</Typography>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area: Property + User Profile + Messages */}
              <div className="flex-1 overflow-y-auto">
                {/* Property Section */}
                <div className="p-4 border-b border-[var(--color-border)] bg-white">
                  <a href="#" className="flex items-center gap-4 p-4 bg-[var(--color-background-inset)] rounded-lg hover:bg-[var(--color-background-inset)] transition-colors">
                    <img
                      src={selectedConv.property.image}
                      alt="Property"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <Typography variant="title-md" className="text-[var(--color-text-primary)] mb-1">
                        {selectedConv.property.address}
                      </Typography>
                      <div className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)]">
                        <span>{selectedConv.property.type}</span>
                        <span>/</span>
                        <span>{selectedConv.property.rooms}</span>
                        <span>/</span>
                        <span>{selectedConv.property.size}</span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* User Profile Section */}
                {selectedConv.user.age && (
                  <div className="p-4 border-b border-[var(--color-border)] bg-white">
                    <Button 
                      variant="ghost"
                      onClick={() => navigate('/tenants/profile?view=public')}
                      className="w-full bg-[var(--color-background-inset)] rounded-lg p-4 hover:bg-[var(--color-background-inset)] transition-colors text-left justify-start h-auto"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative">
                          <Avatar
                            src={selectedConv.user.avatar}
                            alt={selectedConv.user.name}
                            size="lg"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-[var(--color-primary)] text-white text-xs px-2 py-1 rounded-full">
                            {selectedConv.user.matchPercentage}% matching
                          </div>
                        </div>
                        <div className="flex-1">
                          <Typography variant="title-md" className="text-[var(--color-text-primary)] mb-1">
                            {selectedConv.user.name} ({selectedConv.user.age})
                          </Typography>
                          <Typography variant="body-md" className="text-[var(--color-text-secondary)] mb-3">
                            {selectedConv.user.bio}
                          </Typography>
                          <div className="flex gap-4 mb-4">
                            <div className="flex items-center gap-2">
                              <Icon name="IdCard" className="w-4 h-4 text-[var(--color-text-secondary)]" />
                              <Typography variant="label-md" className="font-semibold">{t('messages.idVerified')}</Typography>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Home" className="w-4 h-4 text-[var(--color-text-secondary)]" />
                              <Typography variant="label-md" className="font-semibold">{t('messages.reference')}</Typography>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Match Criteria */}
                      <div className="space-y-3">
                        {Object.entries(selectedConv.user.criteria).map(([key, criterion]) => (
                          <div key={key} className="flex items-center gap-3">
                            <div className="w-5 h-5 flex-shrink-0">
                              {key === 'people' && <Icon name="Users" className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                              {key === 'space' && <Icon name="Home" className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                              {key === 'budget' && <Icon name="DollarSign" className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                              {key === 'furnished' && <Icon name="Building" className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                              {key === 'dates' && <Icon name="Calendar" className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                            </div>
                            <div className="flex-1">
                              <Typography variant="body-md" className="text-[var(--color-text-primary)]">
                                {criterion.requested}
                              </Typography>
                              <div className="flex items-center gap-2 mt-1">
                                {criterion.matches ? (
                                  <Icon name="CheckCircle" className="w-4 h-4 text-[var(--color-success)]" />
                                ) : (
                                  <Icon name="XCircle" className="w-4 h-4 text-[var(--color-danger)]" />
                                )}
                                <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
                                  {criterion.matches ? t('messages.match') : (criterion.note || t('messages.noMatch'))}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Button>
                  </div>
                )}

                {/* Messages */}
                <div className="p-4 space-y-4">
                  {selectedConv.isClosed && (
                    <div className="flex justify-center p-4">
                      <div className="bg-[var(--color-background-inset)] rounded-lg px-4 py-2">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          {t('messages.conversationClosed')}
                        </Typography>
                      </div>
                    </div>
                  )}
                  {selectedConv.messages.map((message) => (
                    <div key={message.id}>
                      {renderMessage(message)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-[var(--color-border)] bg-white">
                <div className="flex items-end gap-2">
                  <div className="flex-1 relative">
                    <TextArea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder={selectedConv.isClosed ? t('messages.conversationClosed') : t('messages.writeMessage')}
                      disabled={selectedConv.isClosed}
                      rows={2}
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={messageText.trim() && !selectedConv.isClosed ? "primary" : "ghost"}
                      size="md"
                      iconOnly
                      icon={<Icon name="Send" className="w-5 h-5" />}
                      disabled={!messageText.trim() || selectedConv.isClosed}
                    />
                    <Button 
                      variant="ghost"
                      size="md"
                      iconOnly
                      icon={<Icon name="Camera" className="w-6 h-6" />}
                      disabled={selectedConv.isClosed}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Property Sidebar */}
            <div className="w-80 border-l border-[var(--color-border)] bg-white p-4">
              <a href="#" className="block mb-6 p-4 bg-[var(--color-background-inset)] rounded-lg hover:bg-[var(--color-background-inset)] transition-colors">
                <img
                  src={selectedConv.property.image}
                  alt="Property"
                  className="w-full h-32 rounded-lg object-cover mb-4"
                />
                <Typography variant="title-md" className="text-[var(--color-text-primary)] mb-2">
                  {selectedConv.property.address}
                </Typography>
                <div className="flex items-center gap-1 text-sm text-[var(--color-text-secondary)]">
                  <span>{selectedConv.property.type}</span>
                  <span>/</span>
                  <span>{selectedConv.property.rooms}</span>
                  <span>/</span>
                  <span>{selectedConv.property.size}</span>
                </div>
              </a>

              <div className="space-y-6">
                <div>
                  <Typography variant="title-lg" className="text-[var(--color-text-primary)] mb-4">{t('messages.signingBenefits')}</Typography>
                  <div className="space-y-3">
                    {[
                      { icon: '🤝', text: t('messages.benefits.easier') },
                      { icon: '⏰', text: t('messages.benefits.onTime') },
                      { icon: '☂️', text: t('messages.benefits.insured') },
                      { icon: '✍️', text: t('messages.benefits.protection') }
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg">{benefit.icon}</span>
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          {benefit.text}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <Typography variant="title-sm" className="text-[var(--color-text-primary)] mb-2">
                      {t('messages.howIsFree')}
                    </Typography>
                    <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
                      {t('messages.serviceFee')}
                    </Typography>
                  </div>
                </div>

                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <Typography variant="title-md" className="text-[var(--color-text-primary)]">{t('messages.monthlyPayout')}</Typography>
                    <Typography variant="title-md" className="font-semibold">SEK {selectedConv.property.price.toLocaleString()}</Typography>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="primary" className="w-full">{t('messages.toContract')}</Button>
                    <Button variant="outline" className="w-full">{t('messages.viewRentalPayments')}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer isFluid={true} />
    </div>
  );
} 