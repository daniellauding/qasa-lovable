import React from 'react';
import DynamicHeader from '../../components/DynamicHeader';
import Footer from '../../components/Footer';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import { Copy, Check } from 'lucide-react';

// Import all UI components
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';
import Select from '../../components/ui/Select';
import Checkbox from '../../components/ui/Checkbox';
import RadioGroup from '../../components/ui/RadioGroup';
import Switch from '../../components/ui/Switch';
import DatePicker from '../../components/ui/DatePicker';
import RangeSlider from '../../components/ui/RangeSlider';
import FilterButton from '../../components/ui/FilterButton';
import Dropdown from '../../components/ui/Dropdown';
import Toast, { ToastProvider, ToastViewport } from '../../components/ui/Toast';
import HintBox from '../../components/ui/HintBox';
import LoadingDots from '../../components/ui/LoadingDots';
import FeatureBadge from '../../components/ui/FeatureBadge';
import TrustIndicator from '../../components/ui/TrustIndicator';
import Avatar from '../../components/ui/Avatar';
import Chip from '../../components/ui/Chip';
import Icon from '../../components/ui/Icon';
import Modal from '../../components/ui/Modal';
import Search from '../../components/ui/Search';
import Map from '../../components/ui/Map';
import Carousel from '../../components/ui/Carousel';
import Tabs from '../../components/ui/Tabs';
import Accordion from '../../components/ui/Accordion';
import Skeleton from '../../components/ui/Skeleton';
import ThemeSwitcher from '../../components/ui/ThemeSwitcher';
import ContentBlock from '../../components/ui/ContentBlock';
import HeroSection from '../../components/ui/HeroSection';
import StatsStrip from '../../components/ui/StatsStrip';
import TestimonialCarousel from '../../components/ui/TestimonialCarousel';
import FAQLinkList from '../../components/ui/FAQLinkList';
import CityCard from '../../components/ui/CityCard';
import FeatureCard from '../../components/ui/FeatureCard';
import RichPromoCard from '../../components/ui/RichPromoCard';
import PremiumBadge from '../../components/ui/PremiumBadge';
import LocationSearch from '../../components/ui/LocationSearch';
import VariantCard from '../../components/ui/VariantCard';
import VariantSelector from '../../components/ui/VariantSelector';
import SectionHeader from '../../components/ui/SectionHeader';
import SectionFooter from '../../components/ui/SectionFooter';
import Pagination from '../../components/ui/Pagination';

// Import specialized cards
import { PropertyCard, TenantCard, LandlordCard } from '../../components/ui/Card';

// Import header components
import HeaderLoggedIn from '../../components/Header/HeaderLoggedIn';
import HeaderLoggedOut from '../../components/Header/HeaderLoggedOut';
import HeaderCreationFlow from '../../components/Header/HeaderCreationFlow';
import HeaderDiscover from '../../components/Header/HeaderDiscover';

// Import icons
import { 
  Home, User, Heart, ChevronRight, Plus, Search as SearchIcon, Mail, Phone, 
  MapPin, Star, Eye, Edit, Trash, X, ArrowRight, ArrowLeft,
  ChevronLeft, Calendar, Settings, Bell, Bookmark, Camera,
  Wifi, Car, Droplets, Zap, ArrowUp, Clock,
  Megaphone, Lightbulb, Send, Users, MessageCircle,
  Type, Palette, MousePointer, CreditCard, FileText, Database, Navigation, Grid, Layers, MousePointerClick, Wrench, List, Square, Maximize2
} from 'lucide-react';

const DesignSystem = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('default');
  const [copiedText, setCopiedText] = React.useState('');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState('');

  // Compute classes for sidebar nav buttons with active highlight
  const getNavButtonClasses = (sectionId) => {
    const base = `w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${
      isSidebarOpen ? 'hover:bg-[var(--color-gray-10)]' : 'hover:bg-[var(--color-gray-10)] justify-center'
    }`;
    const active = activeSection === sectionId ? ' bg-[var(--color-gray-10)] ring-1 ring-[var(--color-border)]' : '';
    return `${base}${active}`;
  };

  // Observe sections and highlight current item while scrolling
  React.useEffect(() => {
    const ids = [
      'typography',
      'colors',
      'buttons',
      'cards',
      'forms',
      'feedback',
      'data-display',
      'navigation',
      'layout',
      'headers',
      'sections',
      'interactive',
      'utilities',
      'lists-tables',
      'box-cards',
      'modal-variants',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const current = visible[0].target.id;
          setActiveSection(current);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  // Handle initial hash on page load
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  // Handle mobile navigation toggle
  React.useEffect(() => {
    const handleResize = () => {
      const nav = document.querySelector('.quick-nav-grid');
      if (nav && window.innerWidth >= 1024) {
        nav.classList.remove('hidden');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToastProvider>
      <div className="min-h-screen flex">
        {/* Sidebar Navigation */}
        <div className={`bg-white border-r shadow-sm transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} flex-shrink-0 flex flex-col fixed top-0 left-0 h-screen`}>
          <div className="p-4 border-b flex-shrink-0 sticky top-0 bg-white z-10">
            <div className="flex items-center justify-between">
              {isSidebarOpen && (
                <Typography variant="title-sm" className="font-medium">Navigation</Typography>
              )}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-[var(--color-gray-10)] rounded-lg transition-colors"
              >
                <Icon name={isSidebarOpen ? "ChevronLeft" : "ChevronRight"} size="sm" />
              </button>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection('typography')}
                className={getNavButtonClasses('typography')}
              >
                <Icon name="Type" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Typography</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Text styles & variants</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('colors')}
                className={getNavButtonClasses('colors')}
              >
                <Icon name="Palette" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Colors</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Brand & system colors</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('buttons')}
                className={getNavButtonClasses('buttons')}
              >
                <Icon name="MousePointer" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Buttons</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">All button variants</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('cards')}
                className={getNavButtonClasses('cards')}
              >
                <Icon name="CreditCard" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Cards</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Content containers</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('forms')}
                className={getNavButtonClasses('forms')}
              >
                <Icon name="FileText" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Forms</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Input components</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('feedback')}
                className={getNavButtonClasses('feedback')}
              >
                <Icon name="MessageCircle" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Feedback</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Toasts & loading</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('data-display')}
                className={getNavButtonClasses('data-display')}
              >
                <Icon name="Database" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Data Display</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Avatars & badges</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('navigation')}
                className={getNavButtonClasses('navigation')}
              >
                <Icon name="Navigation" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Navigation</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Search & tabs</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('layout')}
                className={getNavButtonClasses('layout')}
              >
                <Icon name="Grid" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Layout</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Grid systems</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('headers')}
                className={getNavButtonClasses('headers')}
              >
                <Icon name="Bookmark" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Headers</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Page headers</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('sections')}
                className={getNavButtonClasses('sections')}
              >
                <Icon name="Layers" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Sections</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Headers & footers</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('interactive')}
                className={getNavButtonClasses('interactive')}
              >
                <Icon name="MousePointerClick" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Interactive</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Modals & maps</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('utilities')}
                className={getNavButtonClasses('utilities')}
              >
                <Icon name="Wrench" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Utilities</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Icons & skeletons</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('lists-tables')}
                className={getNavButtonClasses('lists-tables')}
              >
                <Icon name="List" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Lists & Tables</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">ul/ol lists & tables</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('box-cards')}
                className={getNavButtonClasses('box-cards')}
              >
                <Icon name="Square" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Box Cards</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Promotional & info cards</Typography>
                  </div>
                )}
              </button>
              
              <button
                onClick={() => scrollToSection('modal-variants')}
                className={getNavButtonClasses('modal-variants')}
              >
                <Icon name="Maximize2" size="sm" className="text-gray-600 flex-shrink-0" />
                {isSidebarOpen && (
                  <div>
                    <Typography variant="body-sm" className="font-medium">Modal Variants</Typography>
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">Different modal types</Typography>
                  </div>
                )}
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
          <DynamicHeader isFluid={true} />
          <main className="flex-grow bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center mb-12">
                <Typography variant="display-lg" className="mb-4">
                  Qasa Design System
                </Typography>
                <Typography variant="body-lg" className="text-gray-600">
                  Complete component library with all variants and examples
                </Typography>
              </div>

            {/* Typography */}
            <section id="typography" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Typography Component</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Use Typography component with variant='title-lg' for headings" or "Add Typography variant='body-md' for paragraph text"
                </Typography>
                <button
                  onClick={() => copyToClipboard('Use Typography component with variant=\'title-lg\' for headings')}
                  className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:opacity-80 text-sm"
                >
                  {copiedText === 'Use Typography component with variant=\'title-lg\' for headings' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Copy prompt
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="display-lg"</Typography>
                  <Typography variant="display-lg">Display Large</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="display-md"</Typography>
                  <Typography variant="display-md">Display Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="display-sm"</Typography>
                  <Typography variant="display-sm">Display Small</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="title-xl"</Typography>
                  <Typography variant="title-xl">Title Extra Large</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="title-lg"</Typography>
                  <Typography variant="title-lg">Title Large</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="title-md"</Typography>
                  <Typography variant="title-md">Title Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="title-sm"</Typography>
                  <Typography variant="title-sm">Title Small</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="title-xs"</Typography>
                  <Typography variant="title-xs">Title Extra Small</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="body-lg"</Typography>
                  <Typography variant="body-lg">Body Large</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="body-md"</Typography>
                  <Typography variant="body-md">Body Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="body-sm"</Typography>
                  <Typography variant="body-sm">Body Small</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="label-md"</Typography>
                  <Typography variant="label-md">Label Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="label-md"</Typography>
                  <Typography variant="label-md">Label Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="label-sm"</Typography>
                  <Typography variant="label-sm">Label Small</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="mono-md"</Typography>
                  <Typography variant="mono-md">Mono Medium</Typography>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Typography variant="mono-sm"</Typography>
                  <Typography variant="mono-sm">Mono Small</Typography>
                </div>
              </div>
            </section>

            {/* Colors */}
            <section id="colors" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Color System</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Use text-[var(--color-primary)] for brand colors" or "Add bg-[var(--color-gray-10)] for light backgrounds" or "Include text-[var(--color-text-secondary)] for secondary text"
                </Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Brand Colors</Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard('var(--color-primary)')}
                        className="flex items-center gap-3 hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                      >
                        <div className="w-8 h-8 bg-[var(--color-primary)] rounded"></div>
                        <Typography variant="body-sm">Primary (Qasa Pink)</Typography>
                        {copiedText === 'var(--color-primary)' && <Check className="w-4 h-4 text-green-600" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard('var(--color-brown)')}
                        className="flex items-center gap-3 hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                      >
                        <div className="w-8 h-8 bg-[var(--color-brown)] rounded"></div>
                        <Typography variant="body-sm">Brown (Text & Accents)</Typography>
                        {copiedText === 'var(--color-brown)' && <Check className="w-4 h-4 text-green-600" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard('yellow-500')}
                        className="flex items-center gap-3 hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                      >
                        <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                        <Typography variant="body-sm">Premium Yellow</Typography>
                        {copiedText === 'yellow-500' && <Check className="w-4 h-4 text-green-600" />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Text Colors</Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--color-text-primary)] rounded"></div>
                      <Typography variant="body-sm">Primary Text</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--color-text-secondary)] rounded"></div>
                      <Typography variant="body-sm">Secondary Text</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-[var(--color-border)] rounded"></div>
                      <Typography variant="body-sm">White Text</Typography>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Background Colors</Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-[var(--color-border)] rounded"></div>
                      <Typography variant="body-sm">White Background</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--color-gray-10)] rounded"></div>
                      <Typography variant="body-sm">Gray-10 Background</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--color-softPink)] rounded"></div>
                      <Typography variant="body-sm">Soft Pink Background</Typography>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Border Colors</Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border-2 border-[var(--color-border)] rounded"></div>
                      <Typography variant="body-sm">Default Border</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border-2 border-gray-100 rounded"></div>
                      <Typography variant="body-sm">Light Border</Typography>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Status Colors</Typography>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded"></div>
                      <Typography variant="body-sm">Success Green</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-500 rounded"></div>
                      <Typography variant="body-sm">Error Red</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[var(--color-gray-10)] rounded"></div>
                      <Typography variant="body-sm">Info Blue</Typography>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">CSS Variables Usage</Typography>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-100 rounded text-xs font-mono">
                      text-[var(--color-primary)]
                    </div>
                    <div className="p-3 bg-gray-100 rounded text-xs font-mono">
                      bg-[var(--color-gray-10)]
                    </div>
                    <div className="p-3 bg-gray-100 rounded text-xs font-mono">
                      border-[var(--color-border)]
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Layout & Grid Systems */}
            <section id="layout" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Layout & Grid Systems</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Use grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for responsive grids" or "Add flex flex-col md:flex-row for responsive layouts" or "Include container mx-auto for centered content"
                </Typography>
                <button
                  onClick={() => copyToClipboard('Use grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for responsive grids')}
                  className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:opacity-80 text-sm"
                >
                  {copiedText === 'Use grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for responsive grids' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Copy prompt
                </button>
              </div>
              
              <div className="space-y-8">
                {/* Responsive Grid */}
                <div>
                  <Typography variant="title-md" className="mb-4">Responsive Grid Layout</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create responsive grid with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" or "Add property cards in responsive grid layout"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create responsive grid with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create responsive grid with grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Property Card 1</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols</Typography>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Property Card 2</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Responsive grid automatically adjusts</Typography>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Property Card 3</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Perfect for property listings</Typography>
                    </div>
                  </div>
                </div>

                {/* Sidebar Layout */}
                <div>
                  <Typography variant="title-md" className="mb-4">Sidebar + Main Content</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create sidebar layout with flex flex-col lg:flex-row gap-6" or "Add sidebar with filters and main content area"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create sidebar layout with flex flex-col lg:flex-row gap-6')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create sidebar layout with flex flex-col lg:flex-row gap-6' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4">
                      <div className="bg-white border rounded-lg p-4">
                        <Typography variant="title-sm" className="mb-3">Filters</Typography>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-200 rounded"></div>
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-3/4">
                      <div className="bg-white border rounded-lg p-4">
                        <Typography variant="title-sm" className="mb-3">Main Content</Typography>
                        <Typography variant="body-sm" className="text-gray-600">Mobile: Stacked, Desktop: Side-by-side</Typography>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bento Grid */}
                <div>
                  <Typography variant="title-md" className="mb-4">Bento Grid Layout</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create bento grid with grid grid-cols-2 md:grid-cols-4 gap-4" or "Add feature cards in bento grid layout"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create bento grid with grid grid-cols-2 md:grid-cols-4 gap-4')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create bento grid with grid grid-cols-2 md:grid-cols-4 gap-4' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white border rounded-lg p-4 md:col-span-2 md:row-span-2">
                      <Typography variant="title-sm">Featured Property</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Large card spanning 2x2</Typography>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Quick Stats</Typography>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Recent Activity</Typography>
                    </div>
                    <div className="bg-white border rounded-lg p-4 md:col-span-2">
                      <Typography variant="title-sm">Search Results</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Wide card spanning 2 columns</Typography>
                    </div>
                  </div>
                </div>

                {/* Centered Container */}
                <div>
                  <Typography variant="title-md" className="mb-4">Centered Container</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Use container mx-auto px-4 for centered content" or "Add max-width container with responsive padding"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Use container mx-auto px-4 for centered content')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Use container mx-auto px-4 for centered content' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="container mx-auto px-4 bg-white border rounded-lg p-6">
                    <Typography variant="title-sm" className="mb-3">Centered Content</Typography>
                    <Typography variant="body-sm" className="text-gray-600">This content is centered with max-width and responsive padding</Typography>
                  </div>
                </div>

                {/* Flexbox Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">Flexbox Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Use flex items-center justify-between for header layout" or "Add flex flex-wrap gap-4 for flexible item layout"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Use flex items-center justify-between for header layout')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Use flex items-center justify-between for header layout' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white border rounded-lg p-4">
                      <Typography variant="title-sm">Header Layout</Typography>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <div className="bg-white border rounded-lg p-4 flex-1 min-w-[200px]">
                        <Typography variant="title-sm">Flexible Item 1</Typography>
                      </div>
                      <div className="bg-white border rounded-lg p-4 flex-1 min-w-[200px]">
                        <Typography variant="title-sm">Flexible Item 2</Typography>
                      </div>
                      <div className="bg-white border rounded-lg p-4 flex-1 min-w-[200px]">
                        <Typography variant="title-sm">Flexible Item 3</Typography>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">Website Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create landing page layout with hero section and features grid" or "Add blog layout with sidebar and main content"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create landing page layout with hero section and features grid')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create landing page layout with hero section and features grid' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-6">
                    {/* Landing Page Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Landing Page Layout</Typography>
                      <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-[var(--color-gray-10)] p-8">
                          <Typography variant="title-lg" className="mb-2">Hero Section</Typography>
                          <Typography variant="body-sm" className="text-gray-600">Full-width hero with clean background</Typography>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="w-12 h-12 bg-[var(--color-gray-10)] rounded-lg mx-auto mb-3"></div>
                              <Typography variant="title-sm">Feature 1</Typography>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-[var(--color-gray-10)] rounded-lg mx-auto mb-3"></div>
                              <Typography variant="title-sm">Feature 2</Typography>
                            </div>
                            <div className="text-center">
                              <div className="w-12 h-12 bg-[var(--color-gray-10)] rounded-lg mx-auto mb-3"></div>
                              <Typography variant="title-sm">Feature 3</Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blog Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Blog Layout</Typography>
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-2/3">
                          <div className="bg-white border rounded-lg p-6">
                            <Typography variant="title-md" className="mb-4">Main Content</Typography>
                            <div className="space-y-4">
                              <div className="h-4 bg-gray-200 rounded w-full"></div>
                              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-1/3">
                          <div className="bg-white border rounded-lg p-6">
                            <Typography variant="title-sm" className="mb-4">Sidebar</Typography>
                            <div className="space-y-3">
                              <div className="h-3 bg-gray-200 rounded"></div>
                              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                              <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">App Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create mobile app layout with bottom navigation" or "Add dashboard layout with sidebar navigation"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create mobile app layout with bottom navigation')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create mobile app layout with bottom navigation' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-6">
                    {/* Mobile App Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Mobile App Layout</Typography>
                      <div className="bg-white border rounded-lg max-w-sm mx-auto">
                        <div className="p-4 border-b">
                          <Typography variant="title-sm">Header</Typography>
                        </div>
                        <div className="p-4 min-h-[200px]">
                          <Typography variant="body-sm" className="text-gray-600">Main Content Area</Typography>
                        </div>
                        <div className="flex justify-around p-4 border-t bg-[var(--color-gray-10)]">
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                            <Typography variant="label-xs">Home</Typography>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                            <Typography variant="label-xs">Search</Typography>
                          </div>
                          <div className="text-center">
                            <div className="w-6 h-6 bg-gray-300 rounded mx-auto mb-1"></div>
                            <Typography variant="label-xs">Profile</Typography>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dashboard Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Dashboard Layout</Typography>
                      <div className="flex">
                        <div className="w-64 bg-white border-[var(--color-border)] text-white p-4">
                          <Typography variant="title-sm" className="mb-4">Sidebar</Typography>
                          <div className="space-y-2">
                            <div className="h-8 bg-gray-700 rounded"></div>
                            <div className="h-8 bg-gray-700 rounded"></div>
                            <div className="h-8 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                        <div className="flex-1 bg-white border rounded-r-lg p-6">
                          <Typography variant="title-md" className="mb-4">Dashboard Content</Typography>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-[var(--color-gray-10)] p-4 rounded-lg">
                              <Typography variant="title-sm">Metric 1</Typography>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                              <Typography variant="title-sm">Metric 2</Typography>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                              <Typography variant="title-sm">Metric 3</Typography>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                              <Typography variant="title-sm">Metric 4</Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Panel Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">Admin Panel Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create admin panel with top navigation and sidebar" or "Add data table layout with filters and pagination"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create admin panel with top navigation and sidebar')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create admin panel with top navigation and sidebar' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-6">
                    {/* Admin Panel */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Admin Panel</Typography>
                      <div className="bg-white border rounded-lg">
                        <div className="bg-white border-b border-[var(--color-border)] p-4 flex justify-between items-center">
                          <Typography variant="title-sm">Admin Panel</Typography>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 bg-gray-600 rounded"></div>
                            <div className="w-8 h-8 bg-gray-600 rounded"></div>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-48 bg-gray-100 p-4">
                            <div className="space-y-2">
                              <div className="h-8 bg-white rounded border"></div>
                              <div className="h-8 bg-white rounded border"></div>
                              <div className="h-8 bg-white rounded border"></div>
                            </div>
                          </div>
                          <div className="flex-1 p-6">
                            <Typography variant="title-md" className="mb-4">Content Area</Typography>
                            <div className="bg-[var(--color-gray-10)] p-4 rounded">
                              <Typography variant="body-sm">Data table or form content</Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Table Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Data Table Layout</Typography>
                      <div className="bg-white border rounded-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                          <Typography variant="title-sm">Users</Typography>
                          <div className="flex gap-2">
                            <div className="h-8 bg-gray-200 rounded w-24"></div>
                            <div className="h-8 bg-gray-200 rounded w-20"></div>
                          </div>
                        </div>
                        <div className="border rounded">
                          <div className="bg-[var(--color-gray-10)] p-3 border-b">
                            <div className="grid grid-cols-4 gap-4">
                              <Typography variant="label-sm">Name</Typography>
                              <Typography variant="label-sm">Email</Typography>
                              <Typography variant="label-sm">Role</Typography>
                              <Typography variant="label-sm">Actions</Typography>
                            </div>
                          </div>
                          <div className="p-3 border-b">
                            <div className="grid grid-cols-4 gap-4">
                              <div className="h-4 bg-gray-200 rounded"></div>
                              <div className="h-4 bg-gray-200 rounded"></div>
                              <div className="h-4 bg-gray-200 rounded"></div>
                              <div className="h-4 bg-gray-200 rounded w-16"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal & Overlay Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">Modal & Overlay Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create modal overlay with centered content" or "Add slide-out panel from right side"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create modal overlay with centered content')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create modal overlay with centered content' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-6">
                    {/* Modal Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Modal Layout</Typography>
                      <div className="relative bg-black/50 bg-opacity-50 rounded-lg p-8 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full">
                          <div className="flex justify-between items-center mb-4">
                            <Typography variant="title-sm">Modal Title</Typography>
                            <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          </div>
                          <Typography variant="body-sm" className="mb-4">Modal content goes here</Typography>
                          <div className="flex gap-2 justify-end">
                            <div className="h-8 bg-gray-200 rounded w-16"></div>
                            <div className="h-8 bg-[var(--color-gray-10)]0 rounded w-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide-out Panel */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Slide-out Panel</Typography>
                      <div className="relative bg-gray-100 rounded-lg p-4 h-64">
                        <div className="absolute right-0 top-0 h-full w-80 bg-white border-l rounded-r-lg p-6">
                          <div className="flex justify-between items-center mb-4">
                            <Typography variant="title-sm">Panel Title</Typography>
                            <div className="w-6 h-6 bg-gray-200 rounded"></div>
                          </div>
                          <div className="space-y-3">
                            <div className="h-4 bg-gray-200 rounded"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Settings Page Layouts */}
                <div>
                  <Typography variant="title-md" className="mb-4">Settings Page Layouts</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create settings page with sidebar navigation" or "Add form layout with grouped settings"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create settings page with sidebar navigation')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create settings page with sidebar navigation' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-6">
                    {/* Settings Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Settings Page</Typography>
                      <div className="flex">
                        <div className="w-64 bg-[var(--color-gray-10)] p-4 border-r">
                          <Typography variant="title-sm" className="mb-4">Settings</Typography>
                          <div className="space-y-2">
                            <div className="p-2 bg-white rounded border">Profile</div>
                            <div className="p-2 rounded">Security</div>
                            <div className="p-2 rounded">Notifications</div>
                            <div className="p-2 rounded">Privacy</div>
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <Typography variant="title-md" className="mb-4">Profile Settings</Typography>
                          <div className="space-y-4">
                            <div>
                              <Typography variant="label-sm" className="mb-2">Name</Typography>
                              <div className="h-10 bg-gray-100 rounded border"></div>
                            </div>
                            <div>
                              <Typography variant="label-sm" className="mb-2">Email</Typography>
                              <div className="h-10 bg-gray-100 rounded border"></div>
                            </div>
                            <div className="flex gap-2">
                              <div className="h-8 bg-gray-200 rounded w-16"></div>
                              <div className="h-8 bg-[var(--color-gray-10)]0 rounded w-20"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Form Layout */}
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Form Layout</Typography>
                      <div className="bg-white border rounded-lg p-6">
                        <Typography variant="title-md" className="mb-6">Contact Information</Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Typography variant="label-sm" className="mb-2">First Name</Typography>
                            <div className="h-10 bg-gray-100 rounded border"></div>
                          </div>
                          <div>
                            <Typography variant="label-sm" className="mb-2">Last Name</Typography>
                            <div className="h-10 bg-gray-100 rounded border"></div>
                          </div>
                          <div className="md:col-span-2">
                            <Typography variant="label-sm" className="mb-2">Email Address</Typography>
                            <div className="h-10 bg-gray-100 rounded border"></div>
                          </div>
                          <div className="md:col-span-2">
                            <Typography variant="label-sm" className="mb-2">Message</Typography>
                            <div className="h-24 bg-gray-100 rounded border"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Buttons */}
            <section id="buttons" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Button Component</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Button variant='primary' for main actions" or "Use Button with leftIcon for icon buttons" or "Create Button size='lg' for prominent CTAs"
                </Typography>
              </div>
              <div className="space-y-6">
                <div>
                  <Typography variant="title-md" className="mb-3">Button Variants</Typography>
                  <div className="flex flex-wrap gap-3">
                    <div className="text-center">
                      <Button variant="primary">Primary</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="primary"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="secondary">Secondary</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="secondary"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="tertiary">Tertiary</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="tertiary"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="outline">Outline</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="outline"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="ghost">Ghost</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="ghost"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="transparent">Transparent</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="transparent"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="bordered">Bordered</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="bordered"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="premium">Premium</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">variant="premium"</Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="title-md" className="mb-3">Button Sizes</Typography>
                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="text-center">
                      <Button variant="primary" size="xs">Extra Small</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">size="xs"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="primary" size="sm">Small</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">size="sm"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="primary" size="md">Medium</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">size="md"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="primary" size="lg">Large</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">size="lg"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="primary" size="xl">Extra Large</Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">size="xl"</Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="title-md" className="mb-3">Button with Icons</Typography>
                  <div className="flex flex-wrap gap-3">
                    <div className="text-center">
                      <Button variant="primary" icon={<Plus className="w-4 h-4" />} iconPosition="left">
                        Add Item
                      </Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">icon with iconPosition="left"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="secondary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                        Continue
                      </Button>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">icon with iconPosition="right"</Typography>
                    </div>
                    <div className="text-center">
                      <Button variant="tertiary" iconOnly icon={<Settings className="w-4 h-4" />} />
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mt-1">iconOnly</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cards */}
            <section id="cards" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Card Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Use Card component for content containers" or "Add PropertyCard for property listings" or "Include TenantCard for tenant profiles"
                </Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Card Component</Typography>
                  <Card className="p-6 w-fit">
                    <Typography variant="title-lg" className="mb-2">Basic Card</Typography>
                    <Typography variant="body-md" className="text-gray-600">
                      Simple card with content
                    </Typography>
                  </Card>
                </div>

                {/* Promotional card variant */}
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Card Variant - Promotional</Typography>
                  <Card className="p-6 max-w-xl">
                    <div className="space-y-4">
                      <Typography variant="title-lg">Rent better and safer with Qasa</Typography>
                      <Typography variant="body-md" className="text-gray-600">
                        This home has a verified landlord, a safe lease and dedicated support 7 days a week. All payments are managed through us.
                      </Typography>
                      <Button variant="outline" size="sm">Read more</Button>
                    </div>
                  </Card>
                </div>

                {/* First-hand contract card variant */}
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Card Variant - First hand contract</Typography>
                  <Card className="p-6 max-w-xl">
                    <div className="space-y-4">
                      <Typography variant="title-lg">First hand contract</Typography>
                      <Typography variant="body-md" className="text-gray-600">
                        This lease is for an ongoing first hand lease with a professional landlord. They have extensive experience and offer stability and well-managed rentals.
                      </Typography>
                      <Button variant="outline" size="sm">Read more</Button>
                    </div>
                  </Card>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">PropertyCard Component</Typography>
                  <div className="space-y-4">
                    <PropertyCard 
                      property={{
                        id: 1,
                        location: 'Östermalm, Stockholm',
                        type: 'Lägenhet',
                        details: '2 rum / 65 m²',
                        price: 'SEK 18,500',
                        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
                        lat: 59.3358,
                        lng: 18.0871
                      }}
                      statusChip="apply-earlier"
                    />
                    <PropertyCard 
                      property={{
                        id: 2,
                        location: 'Södermalm, Stockholm',
                        type: 'Lägenhet',
                        details: '3 rum / 85 m²',
                        price: 'SEK 22,000',
                        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
                        lat: 59.3158,
                        lng: 18.0671
                      }}
                      statusChip="first-hand"
                    />
                    <PropertyCard 
                      property={{
                        id: 3,
                        location: 'Vasastan, Stockholm',
                        type: 'Lägenhet',
                        details: '1 rum / 45 m²',
                        price: 'SEK 15,500',
                        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
                        lat: 59.3458,
                        lng: 18.0471
                      }}
                      statusChip="premium"
                    />
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">TenantCard Component</Typography>
                  <TenantCard 
                    user={{
                      name: 'Anna Andersson',
                      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
                      description: 'Software engineer, non-smoker',
                      people: '1',
                      rooms: '1-2 rooms',
                      maxRent: '25,000 SEK',
                      furnished: 'Furnished',
                      moveDate: 'Available now'
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Form Components */}
            <section id="forms" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Form Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Input component for text fields" or "Use Select for dropdowns" or "Include Checkbox for agreements" or "Add DatePicker for date selection"
                </Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Input Component</Typography>
                    <Input label="Email" placeholder="anna@example.com" type="email" />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">TextArea Component</Typography>
                    <TextArea label="Message" placeholder="Write your message here..." />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Select Component</Typography>
                    <Select
                      label="Number of Rooms"
                      options={[
                        { value: '1', label: '1 room' },
                        { value: '2', label: '2 rooms' },
                        { value: '3', label: '3 rooms' }
                      ]}
                      onChange={() => {}}
                    />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Checkbox Component</Typography>
                    <Checkbox label="I agree to the terms" id="terms-checkbox" />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">RadioGroup Component</Typography>
                    <RadioGroup
                      label="Property Type"
                      options={[
                        { value: 'apartment', label: 'Apartment' },
                        { value: 'house', label: 'House' }
                      ]}
                    />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Switch Component</Typography>
                    <Switch label="Notifications" id="notifications-switch" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">DatePicker Component</Typography>
                    <DatePicker label="Move-in Date" onChange={() => {}} />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">RangeSlider Component</Typography>
                    <RangeSlider 
                      label="Price Range" 
                      min={5000} 
                      max={50000} 
                      step={1000}
                      value={[15000, 25000]}
                      onChange={() => {}}
                    />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">FilterButton Component</Typography>
                    <FilterButton count={3} onClick={() => {}} />
                  </div>
                  <div>
                    <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-1">Dropdown Component</Typography>
                    <Dropdown
                      trigger={<Button variant="outline">Actions</Button>}
                      items={[
                        { label: 'Edit', onClick: () => {} },
                        { label: 'Delete', onClick: () => {} }
                      ]}
                    >
                      <div>Dropdown content</div>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </section>

            {/* Feedback Components */}
            <section id="feedback" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Feedback Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Toast for success messages" or "Use HintBox for helpful tips" or "Include LoadingDots for loading states"
                </Typography>
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Toast Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Toast for success messages" or "Use Toast variant='black' for premium features" or "Include Toast variant='negative' for error messages"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add Toast for success messages')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add Toast for success messages' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Button 
                        variant="primary" 
                        onClick={() => {
                          const toast = document.querySelector('[data-toast-id="demo-black"]');
                          if (toast) {
                            toast.style.display = 'flex';
                            toast.style.opacity = '1';
                            toast.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        Show Black Toast
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          const toast = document.querySelector('[data-toast-id="demo-negative"]');
                          if (toast) {
                            toast.style.display = 'flex';
                            toast.style.opacity = '1';
                            toast.style.transform = 'translateY(0)';
                          }
                        }}
                      >
                        Show Red Toast
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <Toast 
                        title="Premium Feature"
                        description="You've unlocked exclusive premium features."
                        variant="black"
                        data-toast-id="demo-black"
                        style={{ 
                          display: 'none', 
                          opacity: '0', 
                          transform: 'translateY(20px)',
                          transition: 'all 0.3s ease-in-out',
                          position: 'fixed',
                          bottom: '20px',
                          right: '20px',
                          zIndex: '9999'
                        }}
                      />
                      <Toast 
                        title="Action Required"
                        description="Please complete your profile to continue."
                        variant="negative"
                        data-toast-id="demo-negative"
                        style={{ 
                          display: 'none', 
                          opacity: '0', 
                          transform: 'translateY(20px)',
                          transition: 'all 0.3s ease-in-out',
                          position: 'fixed',
                          bottom: '20px',
                          right: '20px',
                          zIndex: '9999'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HintBox Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add HintBox for helpful tips" or "Use HintBox type='info' for information" or "Include HintBox for user guidance"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add HintBox for helpful tips')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add HintBox for helpful tips' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <HintBox 
                    title="Helpful Tip"
                    description="This is a helpful hint for users"
                    type="info"
                  />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">LoadingDots Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add LoadingDots for loading states" or "Use LoadingDots size='sm' for small loading indicators" or "Include LoadingDots for async operations"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add LoadingDots for loading states')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add LoadingDots for loading states' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <LoadingDots size="sm" />
                      <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">Small loading dots</Typography>
                    </div>
                    <div className="flex items-center gap-4">
                      <LoadingDots size="md" />
                      <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">Medium loading dots</Typography>
                    </div>
                    <div className="flex items-center gap-4">
                      <LoadingDots size="lg" />
                      <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">Large loading dots</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Display */}
            <section id="data-display" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Data Display Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Avatar for user profiles" or "Use Chip for status indicators" or "Include FeatureBadge for property features" or "Add TrustIndicator for verification"
                </Typography>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Avatar Component</Typography>
                  <Avatar 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
                    alt="User"
                    size="lg"
                  />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Chip Component</Typography>
                  <Chip>Verified</Chip>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">FeatureBadge Component</Typography>
                  <FeatureBadge text="Balcony" />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">TrustIndicator Component</Typography>
                  <TrustIndicator text="ID Verified" type="verified" />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">PremiumBadge Component</Typography>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <PremiumBadge text="Premium" variant="default" />
                      <PremiumBadge text="Premium" variant="premium" />
                      <PremiumBadge text="Premium" variant="premium-outline" />
                      <PremiumBadge text="Premium" variant="premium-subtle" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <PremiumBadge premiumFeature="super-apply" variant="premium" />
                      <PremiumBadge premiumFeature="exclusive-insights" variant="premium" />
                      <PremiumBadge premiumFeature="highlighted-profile" variant="premium" />
                      <PremiumBadge premiumFeature="apply-earlier" variant="premium" />
                      <PremiumBadge premiumFeature="more-applications" variant="premium" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <section id="navigation" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Navigation Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Search component for property search" or "Use Tabs for switching between views" or "Include Accordion for FAQ sections" or "Add Pagination for list navigation"
                </Typography>
              </div>
              <div className="space-y-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Search Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Search component for property search" or "Use Search with placeholder text" or "Include Search for location-based filtering"
                    </Typography>
                  </div>
                  <Search placeholder="Search properties..." />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Tabs Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Tabs for switching between views" or "Use Tabs for content organization" or "Include Tabs with multiple sections"
                    </Typography>
                  </div>
                  <Tabs
                    tabs={[
                      { id: 'default', label: 'Default', value: 'default' },
                      { id: 'simple', label: 'Simple', value: 'simple' }
                    ]}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                  />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Pagination Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Pagination for list navigation" or "Use Pagination with showPageNumbers={false} for navigation only" or "Include Pagination for large datasets with ellipsis"
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Default Pagination</Typography>
                      <Pagination
                        currentPage={1}
                        totalPages={10}
                        onPageChange={() => {}}
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Many Pages with Ellipsis</Typography>
                      <Pagination
                        currentPage={5}
                        totalPages={50}
                        onPageChange={() => {}}
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Navigation Only</Typography>
                      <Pagination
                        currentPage={3}
                        totalPages={10}
                        onPageChange={() => {}}
                        showPageNumbers={false}
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Large Page Count</Typography>
                      <Pagination
                        currentPage={729}
                        totalPages={729}
                        onPageChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Accordion Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Accordion for FAQ sections" or "Use Accordion for collapsible content" or "Include Accordion with multiple items for help sections"
                    </Typography>
                  </div>
                  <Accordion
                    items={[
                      {
                        title: 'How does Qasa work?',
                        content: 'Qasa connects landlords and tenants through a safe and secure platform.'
                      },
                      {
                        title: 'Is it free to use?',
                        content: 'Basic features are free, premium features require a subscription.'
                      }
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Layout Components */}
            <section className="mb-16">
              <Typography variant="title-xl" className="mb-6">Layout Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add HeroSection for page headers" or "Use StatsStrip for statistics" or "Include ContentBlock for feature sections" or "Add TestimonialCarousel for reviews"
                </Typography>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-green-800">
                  <strong>ContentBlock Variants:</strong> "Create ContentBlock with imagePosition='left' and background='softPink'" or "Add ContentBlock with stepper={['Step 1', 'Step 2', 'Step 3']}" or "Use ContentBlock imagePosition='center' for hero sections"
                </Typography>
              </div>
              <div className="space-y-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HeroSection Component</Typography>
                  <HeroSection
                    title="Find Your Dream Home"
                    subtitle="Browse thousands of verified rental properties"
                    backgroundImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">StatsStrip Component</Typography>
                  <StatsStrip
                    items={[
                      { value: '600,000+', hint: 'published homes' },
                      { value: '50,000+', hint: 'happy tenants' },
                      { value: '99%', hint: 'verified landlords' }
                    ]}
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - Image Left</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add ContentBlock with imagePosition='left' and background='softPink'" or "Use ContentBlock for feature sections with left image"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add ContentBlock with imagePosition=\'left\' and background=\'softPink\'')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add ContentBlock with imagePosition=\'left\' and background=\'softPink\'' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <ContentBlock
                    title="Why Choose Qasa?"
                    description="Safe, secure, and simple rental process"
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
                    imagePosition="left"
                    background="softPink"
                    ctaText="Learn More"
                    ctaVariant="primary"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - Image Right</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add ContentBlock with imagePosition='right' and background='white'" or "Use ContentBlock for hero sections with right image"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add ContentBlock with imagePosition=\'right\' and background=\'white\'')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add ContentBlock with imagePosition=\'right\' and background=\'white\'' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <ContentBlock
                    title="Find Your Dream Home"
                    description="Browse thousands of verified rental properties"
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
                    imagePosition="right"
                    background="white"
                    ctaText="Browse Homes"
                    ctaVariant="secondary"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - Centered</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add ContentBlock with imagePosition='center' and background='inset'" or "Use ContentBlock for centered hero sections"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add ContentBlock with imagePosition=\'center\' and background=\'inset\'')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add ContentBlock with imagePosition=\'center\' and background=\'inset\'' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <ContentBlock
                    title="No Deposit Required"
                    description="Keep your money in your pocket"
                    image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
                    imagePosition="center"
                    background="inset"
                    ctaText="Learn More"
                    ctaVariant="outline"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - With Stepper</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add ContentBlock with stepper={['Step 1', 'Step 2', 'Step 3']}" or "Use ContentBlock for process explanations with steps"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add ContentBlock with stepper={[\'Step 1\', \'Step 2\', \'Step 3\']}')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add ContentBlock with stepper={[\'Step 1\', \'Step 2\', \'Step 3\']}' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <ContentBlock
                    title="How It Works"
                    description="Simple steps to find your perfect home"
                    background="softPink"
                    stepper={["Search", "Apply", "Move In"]}
                    ctaText="Get Started"
                    ctaVariant="primary"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - No Image</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add ContentBlock without image for text-only sections" or "Use ContentBlock for trust and safety messaging"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add ContentBlock without image for text-only sections')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add ContentBlock without image for text-only sections' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <ContentBlock
                    title="Trust & Safety"
                    description="All landlords are verified and all properties are inspected"
                    background="white"
                    ctaText="Learn About Safety"
                    ctaVariant="tertiary"
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ContentBlock Component - Premium</Typography>
                  <div className="bg-[var(--color-gray-10)] rounded-xl p-6 md:p-24">
                    <div className="max-w-[580px] mx-auto text-center">
                      <div className="mb-6">
                        <Typography variant="display-lg" className="mb-4">
                          Find your next homes 2.5x easier with{' '}
                          <span className="bg-yellow-500 text-[var(--color-brown)] px-2 py-1 rounded">
                            Qasa Premium
                          </span>
                        </Typography>
                        <Typography variant="body-lg" className="text-[var(--color-text-secondary)]">
                          2.5x your chances to sign a lease. Make your applications and profile stand out, and learn more about the homes you're interested in.
                        </Typography>
                      </div>
                      <Button variant="premium" size="lg">
                        Get Qasa Premium
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">TestimonialCarousel Component</Typography>
                  <TestimonialCarousel
                    items={[
                      {
                        quote: "Qasa made finding my apartment so easy!",
                        author: "Anna, Stockholm"
                      },
                      {
                        quote: "Great platform for landlords and tenants.",
                        author: "Erik, Göteborg"
                      }
                    ]}
                  />
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">FAQLinkList Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add FAQLinkList for help sections" or "Use FAQLinkList with external links for documentation" or "Include FAQLinkList for common questions"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add FAQLinkList for help sections')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add FAQLinkList for help sections' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <FAQLinkList
                    title="Common Questions"
                    links={[
                      { label: "How it works for landlords", href: "/help/landlords", external: true },
                      { label: "How it works for tenants", href: "/help/tenants", external: true }
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Headers */}
            <section id="headers" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Headers</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add HeaderLoggedOut for landing pages" or "Use HeaderLoggedIn for authenticated pages" or "Include HeaderCreationFlow for multi-step forms" or "Add HeaderDiscover for discovery pages"
                </Typography>
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HeaderLoggedOut Component</Typography>
                  <div className="border rounded-lg overflow-hidden">
                    <HeaderLoggedOut />
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HeaderLoggedIn Component</Typography>
                  <div className="border rounded-lg overflow-hidden">
                    <HeaderLoggedIn 
                      user={{
                        name: 'Anna Andersson',
                        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HeaderCreationFlow Component</Typography>
                  <div className="border rounded-lg overflow-hidden">
                    <HeaderCreationFlow step={2} totalSteps={5} />
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">HeaderDiscover Component</Typography>
                  <div className="border rounded-lg overflow-hidden">
                    <HeaderDiscover />
                  </div>
                </div>
              </div>
            </section>

            {/* Section Components */}
            <section id="sections" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Section Components</Typography>
              <div className="space-y-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">SectionHeader Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add SectionHeader for page sections" or "Use SectionHeader with description for content sections" or "Include SectionHeader title='Welcome' for onboarding"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add SectionHeader for page sections')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add SectionHeader for page sections' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <SectionHeader
                    title="Welcome to Qasa"
                    description="Find your perfect home with our safe and secure platform."
                  />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">SectionFooter Component</Typography>
                  <div className="space-y-4">
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Default Variant</Typography>
                      <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          <strong>Prompt usage:</strong> "Use SectionFooter for multi-step forms" or "Add SectionFooter with next/prev buttons" or "Include SectionFooter for form navigation"
                        </Typography>
                        <button
                          onClick={() => copyToClipboard('Use SectionFooter for multi-step forms')}
                          className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                        >
                          {copiedText === 'Use SectionFooter for multi-step forms' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy prompt
                        </button>
                      </div>
                      <SectionFooter
                        onNext={() => alert('Next clicked')}
                        onPrev={() => alert('Previous clicked')}
                        nextText="Continue"
                        prevText="Back"
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Left Tertiary, Right Primary</Typography>
                      <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          <strong>Prompt usage:</strong> "Use SectionFooter variant='left-tertiary-right-primary' for skip/continue flows" or "Add SectionFooter with tertiary left and primary right buttons"
                        </Typography>
                        <button
                          onClick={() => copyToClipboard('Use SectionFooter variant=\'left-tertiary-right-primary\' for skip/continue flows')}
                          className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                        >
                          {copiedText === 'Use SectionFooter variant=\'left-tertiary-right-primary\' for skip/continue flows' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy prompt
                        </button>
                      </div>
                      <SectionFooter
                        onNext={() => alert('Next clicked')}
                        onPrev={() => alert('Previous clicked')}
                        nextText="Continue"
                        prevText="No, thanks"
                        variant="left-tertiary-right-primary"
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Centered Primary Only</Typography>
                      <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          <strong>Prompt usage:</strong> "Use SectionFooter variant='centered' for single action flows" or "Add SectionFooter with centered primary button only"
                        </Typography>
                        <button
                          onClick={() => copyToClipboard('Use SectionFooter variant=\'centered\' for single action flows')}
                          className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                        >
                          {copiedText === 'Use SectionFooter variant=\'centered\' for single action flows' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy prompt
                        </button>
                      </div>
                      <SectionFooter
                        onNext={() => alert('Next clicked')}
                        nextText="Continue"
                        showPrev={false}
                        variant="centered"
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Centered Wide Primary</Typography>
                      <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          <strong>Prompt usage:</strong> "Use SectionFooter variant='centered-wide' for prominent CTAs" or "Add SectionFooter with wide centered primary button"
                        </Typography>
                        <button
                          onClick={() => copyToClipboard('Use SectionFooter variant=\'centered-wide\' for prominent CTAs')}
                          className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                        >
                          {copiedText === 'Use SectionFooter variant=\'centered-wide\' for prominent CTAs' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy prompt
                        </button>
                      </div>
                      <SectionFooter
                        onNext={() => alert('Next clicked')}
                        nextText="Continue"
                        showPrev={false}
                        variant="centered-wide"
                      />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Centered Tertiary and Primary</Typography>
                      <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                        <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                          <strong>Prompt usage:</strong> "Use SectionFooter variant='centered-tertiary-and-primary' for cancel/confirm flows" or "Add SectionFooter with centered cancel and confirm buttons"
                        </Typography>
                        <button
                          onClick={() => copyToClipboard('Use SectionFooter variant=\'centered-tertiary-and-primary\' for cancel/confirm flows')}
                          className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                        >
                          {copiedText === 'Use SectionFooter variant=\'centered-tertiary-and-primary\' for cancel/confirm flows' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          Copy prompt
                        </button>
                      </div>
                      <SectionFooter
                        onNext={() => alert('Next clicked')}
                        onPrev={() => alert('Previous clicked')}
                        nextText="Continue"
                        prevText="Cancel"
                        variant="centered-tertiary-and-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive Components */}
            <section className="mb-16">
              <Typography variant="title-xl" className="mb-6">Interactive Components</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add Modal for dialogs" or "Use Map for property locations" or "Include Carousel for image galleries"
                </Typography>
              </div>
              <div className="space-y-6">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Modal Component</Typography>
                  <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                    Open Modal
                  </Button>
                  <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Example Modal"
                    description="This is an example modal with content."
                  >
                    <Typography variant="body-md">
                      This is an example modal with content.
                    </Typography>
                  </Modal>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Map Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Map for property locations" or "Use Map with properties array for listings" or "Include Map for location-based search"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add Map for property locations')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add Map for property locations' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <div className="h-64 border rounded-lg">
                    <Map
                      properties={[
                        {
                          id: 1,
                          location: 'Östermalm, Stockholm',
                          price: 'SEK 18,500',
                          lat: 59.3358,
                          lng: 18.0871
                        }
                      ]}
                      center={[59.3293, 18.0686]}
                      zoom={11}
                    />
                  </div>
                </div>
                
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Carousel Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Carousel for image galleries" or "Use Carousel for testimonials" or "Include Carousel for featured content"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Add Carousel for image galleries')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Add Carousel for image galleries' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <Carousel>
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Typography variant="body-md">Carousel Item 1</Typography>
                    </div>
                    <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Typography variant="body-md">Carousel Item 2</Typography>
                    </div>
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Utilities */}
            <section className="mb-16">
              <Typography variant="title-xl" className="mb-6">Utilities</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add ThemeSwitcher for theme toggle" or "Use Skeleton for loading states" or "Include Icon component for system icons"
                </Typography>
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">ThemeSwitcher Component</Typography>
                  <ThemeSwitcher />
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Skeleton Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Skeleton for loading states" or "Use Skeleton className='h-20 w-full' for content placeholders" or "Include Skeleton for property cards while loading"
                    </Typography>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Default Skeleton</Typography>
                      <Skeleton className="h-20 w-full" />
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Card Skeleton</Typography>
                      <div className="border rounded-lg p-4 space-y-3">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                    <div>
                      <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Avatar Skeleton</Typography>
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Typography variant="label-sm" className="text-[var(--color-text-secondary)] mb-2">Icon Component</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Add Icon name='Home' for navigation" or "Use Icon name='Search' for search functionality" or "Include Icon name='Heart' for favorites" or "Add Icon with size='lg' for larger icons"
                    </Typography>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Home" size="lg" />
                    <Icon name="User" size="lg" />
                    <Icon name="Heart" size="lg" />
                    <Icon name="Search" size="lg" />
                  </div>
                </div>
              </div>
            </section>

            {/* Icons */}
            <section className="mb-16">
              <Typography variant="title-xl" className="mb-6">Available Icons</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Use Icon name='Home' for navigation" or "Add Icon name='Search' for search functionality" or "Include Icon name='Heart' for favorites"
                </Typography>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <button
                    onClick={() => copyToClipboard('Home')}
                    className="flex flex-col items-center hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                  >
                    <Icon name="Home" size="lg" />
                    <Typography variant="label-sm" className="mt-2 text-center">Home</Typography>
                    {copiedText === 'Home' && <Check className="w-4 h-4 text-green-600 mt-1" />}
                  </button>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <button
                    onClick={() => copyToClipboard('User')}
                    className="flex flex-col items-center hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                  >
                    <Icon name="User" size="lg" />
                    <Typography variant="label-sm" className="mt-2 text-center">User</Typography>
                    {copiedText === 'User' && <Check className="w-4 h-4 text-green-600 mt-1" />}
                  </button>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <button
                    onClick={() => copyToClipboard('Heart')}
                    className="flex flex-col items-center hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                  >
                    <Icon name="Heart" size="lg" />
                    <Typography variant="label-sm" className="mt-2 text-center">Heart</Typography>
                    {copiedText === 'Heart' && <Check className="w-4 h-4 text-green-600 mt-1" />}
                  </button>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <button
                    onClick={() => copyToClipboard('Search')}
                    className="flex flex-col items-center hover:bg-[var(--color-gray-10)] rounded p-2 transition-colors"
                  >
                    <Icon name="Search" size="lg" />
                    <Typography variant="label-sm" className="mt-2 text-center">Search</Typography>
                    {copiedText === 'Search' && <Check className="w-4 h-4 text-green-600 mt-1" />}
                  </button>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Calendar" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Calendar</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Settings" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Settings</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Bell" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Bell</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Bookmark" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Bookmark</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Camera" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Camera</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="CheckCircle" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">CheckCircle</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="AlertCircle" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">AlertCircle</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Info" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Info</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Globe" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Globe</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="HelpCircle" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">HelpCircle</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="History" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">History</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Image" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Image</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="List" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">List</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="ListFilter" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">ListFilter</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="LogOut" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">LogOut</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Map" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Map</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="MapPin" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">MapPin</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Menu" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Menu</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="MessageCircle" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">MessageCircle</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="MoreHorizontal" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">MoreHorizontal</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="MoreVertical" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">MoreVertical</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Pen" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Pen</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Share" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Share</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="Sliders" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">Sliders</Typography>
                </div>
                <div className="flex flex-col items-center p-3 border rounded-lg">
                  <Icon name="XCircle" size="lg" />
                  <Typography variant="label-sm" className="mt-2 text-center">XCircle</Typography>
                </div>
              </div>
            </section>

            {/* Lists, Tables & Box Cards */}
            <section id="lists-tables" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Lists, Tables & Box Cards</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add ul li for amenities lists" or "Use ol li for numbered steps" or "Include basic tables for data display" or "Add box cards for promotional content"
                </Typography>
                <button
                  onClick={() => copyToClipboard('Add ul li for amenities lists')}
                  className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                >
                  {copiedText === 'Add ul li for amenities lists' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Copy prompt
                </button>
              </div>

              <div className="space-y-8">
                {/* Unordered Lists */}
                <div>
                  <Typography variant="title-md" className="mb-4">Unordered Lists (ul li)</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create ul li list for amenities" or "Add unordered list with icons for features"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create ul li list for amenities')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create ul li list for amenities' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border rounded-lg p-6">
                      <Typography variant="title-sm" className="mb-4">Amenities</Typography>
                      <ul className="grid grid-cols-2 gap-3">
                        <li className="flex items-center gap-3">
                          <Icon name="Home" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Patio</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Settings" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Dish washer</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="ArrowUp" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Elevator</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Wifi" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Internet</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Car" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Parking available</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Droplets" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Laundry room</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Droplets" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Shower</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Zap" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Tumble dryer</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Settings" size="sm" className="text-gray-600" />
                          <Typography variant="body-sm">Washing machine</Typography>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border rounded-lg p-6">
                      <Typography variant="title-sm" className="mb-4">House Rules & Accessibility</Typography>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <Icon name="Check" size="sm" className="text-green-600" />
                          <Typography variant="body-sm">Pets welcome</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="X" size="sm" className="text-red-600" />
                          <Typography variant="body-sm">Not wheelchair accessible</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="X" size="sm" className="text-red-600" />
                          <Typography variant="body-sm">No smoking</Typography>
                        </li>
                        <li className="flex items-center gap-3">
                          <Icon name="Check" size="sm" className="text-green-600" />
                          <Typography variant="body-sm">Up to 2 tenants</Typography>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Ordered Lists */}
                <div>
                  <Typography variant="title-md" className="mb-4">Ordered Lists (ol li)</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create ol li list for steps" or "Add numbered list for process"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create ol li list for steps')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create ol li list for steps' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <Typography variant="title-sm" className="mb-4">How It Works</Typography>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                          <Typography variant="label-sm">1</Typography>
                        </div>
                        <div>
                          <Typography variant="body-md" className="font-medium">Publish your home listing</Typography>
                          <Typography variant="body-sm" className="text-gray-600">Create a detailed listing with photos and information</Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                          <Typography variant="label-sm">2</Typography>
                        </div>
                        <div>
                          <Typography variant="body-md" className="font-medium">Connect with tenants today</Typography>
                          <Typography variant="body-sm" className="text-gray-600">Receive applications and start conversations</Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                          <Typography variant="label-sm">3</Typography>
                        </div>
                        <div>
                          <Typography variant="body-md" className="font-medium">We handle the rental agreement</Typography>
                          <Typography variant="body-sm" className="text-gray-600">Professional contracts and legal protection</Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center">
                          <Typography variant="label-sm">4</Typography>
                        </div>
                        <div>
                          <Typography variant="body-md" className="font-medium">We handle deposit and payments</Typography>
                          <Typography variant="body-sm" className="text-gray-600">Secure payment processing and deposit management</Typography>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Basic Tables */}
                <div>
                  <Typography variant="title-md" className="mb-4">Basic Tables</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create table for rental costs" or "Add table for data comparison"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create table for rental costs')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create table for rental costs' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <Typography variant="title-sm" className="mb-4">Rent Breakdown</Typography>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b">
                        <Typography variant="body-md" className="font-medium">Monthly cost</Typography>
                        <Typography variant="body-md" className="font-medium">SEK 12,625</Typography>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <Typography variant="body-md" className="font-medium">Rent</Typography>
                            <Typography variant="body-sm" className="text-gray-600">The monthly rent for the home</Typography>
                          </div>
                          <Typography variant="body-md">SEK 10,000</Typography>
                        </div>
                        
                        <div className="flex justify-between items-start">
                          <div>
                            <Typography variant="body-md" className="font-medium">Service fee</Typography>
                            <Typography variant="body-sm" className="text-gray-600">Rent safely at Qasa</Typography>
                          </div>
                          <Typography variant="body-md">SEK 495</Typography>
                        </div>
                        
                        <div className="flex justify-between items-start">
                          <div>
                            <Typography variant="body-md" className="font-medium">Deposit</Typography>
                            <Typography variant="body-sm" className="text-gray-600">Credit check required</Typography>
                          </div>
                          <div className="text-right">
                            <Typography variant="body-md" className="line-through text-gray-400">SEK 10,000</Typography>
                            <Typography variant="body-md" className="text-green-600">SEK 0</Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Costs Table */}
                <div>
                  <Typography variant="title-md" className="mb-4">Additional Costs Table</Typography>
                  <div className="bg-white border rounded-lg p-6">
                    <Typography variant="title-sm" className="mb-4">Additional costs</Typography>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Warm water</Typography>
                        <Typography variant="body-sm" className="text-green-600">Included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Heating</Typography>
                        <Typography variant="body-sm" className="text-green-600">Included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Electricity</Typography>
                        <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Internet</Typography>
                        <Typography variant="body-sm" className="text-green-600">Included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Cable TV</Typography>
                        <Typography variant="body-sm" className="text-green-600">Included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Parking included</Typography>
                        <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
                      </div>
                      <div className="flex justify-between items-center">
                        <Typography variant="body-sm">Garage</Typography>
                        <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Box Cards */}
            <section id="box-cards" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Box Cards</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add box card for promotional content" or "Use box card for information display" or "Include box card for insights"
                </Typography>
                <button
                  onClick={() => copyToClipboard('Add box card for promotional content')}
                  className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                >
                  {copiedText === 'Add box card for promotional content' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Copy prompt
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Promotional Box Card */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <Typography variant="title-lg" className="mb-3">Rent better and safer with Qasa</Typography>
                  <Typography variant="body-md" className="text-gray-600 mb-4">
                    This home has a verified landlord, a safe lease and dedicated support 7 days a week. All payments are managed through us.
                  </Typography>
                  <Button variant="outline" size="sm">Read more</Button>
                </div>

                {/* Insights Box Card */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <Typography variant="title-sm" className="mb-4">Insights</Typography>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Home" size="sm" className="text-gray-600" />
                      <div>
                        <Typography variant="body-sm">Published 0 days ago</Typography>
                        <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">0 views</Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size="sm" className="text-gray-600" />
                      <Typography variant="body-sm">Rent for similar homes not available</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size="sm" className="text-gray-600" />
                      <div>
                        <Typography variant="body-sm">0 applicants</Typography>
                        <Typography variant="body-xs" className="text-[var(--color-text-secondary)]">0 open conversations</Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="MessageCircle" size="sm" className="text-gray-600" />
                      <Typography variant="body-sm">Typically responds within 24h</Typography>
                    </div>
                  </div>
                </div>

                {/* Premium Box Card */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Star" size="lg" className="text-yellow-600" />
                    <Typography variant="title-lg">Premium Feature</Typography>
                  </div>
                  <Typography variant="body-md" className="text-gray-700 mb-4">
                    Get exclusive access to premium features and increase your chances of finding the perfect home.
                  </Typography>
                  <Button variant="premium" size="sm">Get Premium</Button>
                </div>

                {/* Info Box Card */}
                <div className="bg-[var(--color-gray-10)] border border-blue-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Info" size="lg" className="text-[var(--color-brown)]" />
                    <Typography variant="title-lg">Important Information</Typography>
                  </div>
                  <Typography variant="body-md" className="text-gray-700 mb-4">
                    This property requires a credit check and proof of income. All applications are processed securely.
                  </Typography>
                  <Button variant="tertiary" size="sm">Learn More</Button>
                </div>

                {/* Stats Box Card */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm">
                  <Typography variant="title-lg" className="mb-4">Property Statistics</Typography>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Typography variant="body-sm">Days on market</Typography>
                      <Typography variant="body-sm" className="font-medium">7</Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography variant="body-sm">Views this week</Typography>
                      <Typography variant="body-sm" className="font-medium">156</Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography variant="body-sm">Applications</Typography>
                      <Typography variant="body-sm" className="font-medium">12</Typography>
                    </div>
                  </div>
                </div>

                {/* Contact Box Card */}
                <div className="bg-[var(--color-gray-10)] border border-[var(--color-border)] rounded-lg p-6 shadow-sm">
                  <Typography variant="title-lg" className="mb-3">Contact Information</Typography>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="User" size="sm" className="text-gray-600" />
                      <Typography variant="body-sm">Karin Andersson</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size="sm" className="text-gray-600" />
                      <Typography variant="body-sm">+46 70 123 45 67</Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="Mail" size="sm" className="text-gray-600" />
                      <Typography variant="body-sm">karin@example.com</Typography>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="mt-4 w-full">Contact Landlord</Button>
                </div>
              </div>
            </section>

            {/* Modal Variants */}
            <section id="modal-variants" className="mb-16">
              <Typography variant="title-xl" className="mb-6">Modal Variants</Typography>
              <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                  <strong>Prompt usage:</strong> "Add modal variant for contact forms" or "Use modal for premium upsell" or "Include modal for rent breakdown"
                </Typography>
                <button
                  onClick={() => copyToClipboard('Add modal variant for contact forms')}
                  className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                >
                  {copiedText === 'Add modal variant for contact forms' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  Copy prompt
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Modal */}
                <div>
                  <Typography variant="title-md" className="mb-4">Contact Modal</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create contact modal with property details" or "Add modal for tenant-landlord communication"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create contact modal with property details')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create contact modal with property details' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <Button variant="primary" onClick={() => {
                    setIsModalOpen(true);
                    setModalType('contact');
                  }}>
                    Open Contact Modal
                  </Button>
                </div>

                {/* Premium Upsell Modal */}
                <div>
                  <Typography variant="title-md" className="mb-4">Premium Upsell Modal</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create premium upsell modal" or "Add modal for feature promotion"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create premium upsell modal')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create premium upsell modal' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <Button variant="secondary" onClick={() => {
                    setIsModalOpen(true);
                    setModalType('premium');
                  }}>
                    Open Premium Modal
                  </Button>
                </div>

                {/* Rent Breakdown Modal */}
                <div>
                  <Typography variant="title-md" className="mb-4">Rent Breakdown Modal</Typography>
                  <div className="bg-[var(--color-gray-10)] p-4 rounded-lg mb-4">
                    <Typography variant="body-md" className="text-[var(--color-text-secondary)]">
                      <strong>Prompt usage:</strong> "Create rent breakdown modal" or "Add modal for cost details"
                    </Typography>
                    <button
                      onClick={() => copyToClipboard('Create rent breakdown modal')}
                      className="mt-2 flex items-center gap-2 text-[var(--color-brown)] hover:text-[var(--color-text-secondary)] text-sm"
                    >
                      {copiedText === 'Create rent breakdown modal' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy prompt
                    </button>
                  </div>
                  <Button variant="outline" onClick={() => {
                    setIsModalOpen(true);
                    setModalType('rent');
                  }}>
                    Open Rent Modal
                  </Button>
                </div>
              </div>

              {/* Modal Instances */}
              {/* Contact Modal */}
              <Modal
                isOpen={isModalOpen && modalType === 'contact'}
                onClose={() => {
                  setIsModalOpen(false);
                  setModalType('');
                }}
                title="Contact Karin"
                size="lg"
              >
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div>
                      <Typography variant="title-sm">Sörby Gård, Klockrike</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Apartment / 3 rooms / 85 m²</Typography>
                      <Typography variant="body-sm" className="text-gray-600">Now → Until further notice</Typography>
                      <Typography variant="title-sm">SEK 10,495</Typography>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <Typography variant="title-sm" className="mb-3">Want a hand writing your message?</Typography>
                    <Typography variant="body-sm" className="text-gray-600 mb-4">
                      We'll suggest a message based on details like the home and your profile. You can review and edit it before sending — it's just a starting point.
                    </Typography>
                    <Button variant="outline" size="sm">Login to suggest a message</Button>
                  </div>
                  
                  <div>
                    <Typography variant="label-sm" className="mb-2">Message</Typography>
                    <TextArea 
                      placeholder="Hello Karin! I'm interested in renting your property. Is it still available?"
                      rows={4}
                    />
                    <Typography variant="body-xs" className="text-[var(--color-text-secondary)] mt-2">1924 characters remaining</Typography>
                  </div>
                  
                  <Button variant="primary" className="w-full">Send application</Button>
                </div>
              </Modal>

              {/* Premium Modal */}
              <Modal
                isOpen={isModalOpen && modalType === 'premium'}
                onClose={() => {
                  setIsModalOpen(false);
                  setModalType('');
                }}
                title="Find your next home 2.5x easier with Qasa Premium"
                size="lg"
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <Typography variant="body-sm" className="text-gray-600">From SEK 139 per month</Typography>
                  </div>
                  
                  <div>
                    <Typography variant="title-sm" className="mb-4">What's included</Typography>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <Icon name="Megaphone" size="lg" className="text-yellow-600 mt-1" />
                        <div>
                          <Typography variant="body-md" className="font-medium">Super apply</Typography>
                          <Typography variant="body-sm" className="text-gray-600">
                            Give your application an extra boost. Stay at the top of the landlord's inbox by sending a Super application.
                          </Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Icon name="Lightbulb" size="lg" className="text-yellow-600 mt-1" />
                        <div>
                          <Typography variant="body-md" className="font-medium">Exclusive insights</Typography>
                          <Typography variant="body-sm" className="text-gray-600">
                            See how the rent compares to similar homes, number of applicants, ongoing chats, and your queue position for firsthand homes.
                          </Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Icon name="Search" size="lg" className="text-yellow-600 mt-1" />
                        <div>
                          <Typography variant="body-md" className="font-medium">Highlighted profile</Typography>
                          <Typography variant="body-sm" className="text-gray-600">
                            Get a premium badge on your profile, increasing your visibility in the landlord's inbox and in our tenant search.
                          </Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Icon name="Clock" size="lg" className="text-yellow-600 mt-1" />
                        <div>
                          <Typography variant="body-md" className="font-medium">Apply earlier</Typography>
                          <Typography variant="body-sm" className="text-gray-600">
                            Apply before everyone else, with priority access to selected first-hand homes.
                          </Typography>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Icon name="Send" size="lg" className="text-yellow-600 mt-1" />
                        <div>
                          <Typography variant="body-md" className="font-medium">More applications</Typography>
                          <Typography variant="body-sm" className="text-gray-600">
                            Apply to 10 first-hand homes simultaneously, and as always – unlimited applications to all other homes.
                          </Typography>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">Maybe later</Button>
                    <Button variant="premium" className="flex-1">Get Premium</Button>
                  </div>
                </div>
              </Modal>

              {/* Rent Modal */}
              <Modal
                isOpen={isModalOpen && modalType === 'rent'}
                onClose={() => {
                  setIsModalOpen(false);
                  setModalType('');
                }}
                title="Rent"
                size="md"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <Typography variant="title-sm">Monthly cost</Typography>
                    <Typography variant="title-sm">SEK 10,495</Typography>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <Typography variant="body-md" className="font-medium">Rent</Typography>
                        <Typography variant="body-sm" className="text-gray-600">
                          The monthly rent for the home (does not include digital lease, deposit security and support)
                        </Typography>
                      </div>
                      <Typography variant="body-md">SEK 10,000</Typography>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <Typography variant="body-md" className="font-medium">Service fee</Typography>
                        <Typography variant="body-sm" className="text-gray-600">
                          Rent safely at Qasa. We handle deposit, payments and rental agreement and you are protected from fraud. 
                          <button className="text-[var(--color-brown)] hover:underline ml-1">Read more</button>
                        </Typography>
                      </div>
                      <Typography variant="body-md">SEK 495</Typography>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <Typography variant="body-md" className="font-medium">Deposit</Typography>
                        <Typography variant="body-sm" className="text-gray-600">
                          An approved credit check and other requirements apply to be eligible for renting deposit free. 
                          <button className="text-[var(--color-brown)] hover:underline ml-1">Learn more</button>
                        </Typography>
                      </div>
                      <div className="text-right">
                        <Typography variant="body-md" className="line-through text-gray-400">SEK 10,000</Typography>
                        <Typography variant="body-md" className="text-green-600">SEK 0</Typography>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">Close</Button>
                </div>
              </Modal>
            </section>
          </div>
        </main>
        <Footer isFluid={true} />
        <DevExperimentsButton />
        <ToastViewport />
      </div>
    </div>
    </ToastProvider>
  );
};

export default DesignSystem;
