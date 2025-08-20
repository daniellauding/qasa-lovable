import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '../../components/ui/Typography';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import RadioGroup from '../../components/ui/RadioGroup';
import Select from '../../components/ui/Select';
import Switch from '../../components/ui/Switch';
import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Checkbox from '../../components/ui/Checkbox';
import { Sparkles, ArrowRight, Copy, Wand2, Layout, Globe, Type } from 'lucide-react';

const TemplateBuilder = () => {
  const navigate = useNavigate();
  
  // Template configuration state
  const [config, setConfig] = useState({
    name: '',
    description: '',
    headerType: 'logged-out',
    footerEnabled: true,
    language: 'sv',
    theme: 'qasa',
    components: [],
    initialPrompt: ''
  });

  // Available QDS components from Storybook to choose from
  const availableComponents = [
    // UI Primitives
    { id: 'button', name: 'Button', icon: '🎯', category: 'Primitives' },
    { id: 'input', name: 'Input', icon: '📝', category: 'Primitives' },
    { id: 'textarea', name: 'TextArea', icon: '📄', category: 'Primitives' },
    { id: 'select', name: 'Select', icon: '📋', category: 'Primitives' },
    { id: 'checkbox', name: 'Checkbox', icon: '☑️', category: 'Primitives' },
    { id: 'radiogroup', name: 'Radio Group', icon: '🔘', category: 'Primitives' },
    { id: 'switch', name: 'Switch', icon: '🔄', category: 'Primitives' },
    { id: 'datepicker', name: 'Date Picker', icon: '📅', category: 'Primitives' },
    { id: 'rangeslider', name: 'Range Slider', icon: '🎚️', category: 'Primitives' },
    
    // Layout Components
    { id: 'card', name: 'Card', icon: '🃏', category: 'Layout' },
    { id: 'modal', name: 'Modal', icon: '🪟', category: 'Layout' },
    { id: 'box', name: 'Box', icon: '📦', category: 'Layout' },
    
    // Content Components
    { id: 'typography', name: 'Typography', icon: '🔤', category: 'Content' },
    { id: 'avatar', name: 'Avatar', icon: '👤', category: 'Content' },
    { id: 'icon', name: 'Icon', icon: '⭐', category: 'Content' },
    { id: 'chip', name: 'Chip', icon: '🏷️', category: 'Content' },
    
    // Interactive Components
    { id: 'search', name: 'Search Bar', icon: '🔍', category: 'Interactive' },
    { id: 'filterbutton', name: 'Filter Button', icon: '🎛️', category: 'Interactive' },
    { id: 'filtermodal', name: 'Filter Modal', icon: '🎚️', category: 'Interactive' },
    { id: 'dropdown', name: 'Dropdown', icon: '⬇️', category: 'Interactive' },
    
    // Feedback Components
    { id: 'toast', name: 'Toast', icon: '🍞', category: 'Feedback' },
    { id: 'hintbox', name: 'Hint Box', icon: '💡', category: 'Feedback' },
    { id: 'skeleton', name: 'Skeleton', icon: '💀', category: 'Feedback' },
    { id: 'loadingdots', name: 'Loading Dots', icon: '⏳', category: 'Feedback' },
    
    // Patterns
    { id: 'propertyGrid', name: 'Property Grid', icon: '🏠', category: 'Patterns' },
    { id: 'tenantCard', name: 'Tenant Cards', icon: '👥', category: 'Patterns' },
    { id: 'dashboard', name: 'Dashboard Layout', icon: '📊', category: 'Patterns' },
    { id: 'hero', name: 'Hero Section', icon: '🎯', category: 'Patterns' }
  ];

  // Generate URL with parameters
  const generateTemplateUrl = () => {
    const params = new URLSearchParams({
      header: config.headerType,
      footer: config.footerEnabled.toString(),
      lang: config.language,
      theme: config.theme,
      components: config.components.join(','),
      prompt: encodeURIComponent(config.initialPrompt)
    });
    
    return `/templates/blank?${params.toString()}`;
  };

  // Navigate to generated template
  const createTemplate = () => {
    const url = generateTemplateUrl();
    navigate(url);
  };

  // Copy URL to clipboard
  const copyTemplateUrl = () => {
    const fullUrl = window.location.origin + generateTemplateUrl();
    navigator.clipboard.writeText(fullUrl);
    alert('Template URL copied! You can now share this with Lovable or your team.');
  };

  // Save template to localStorage
  const saveTemplate = () => {
    const templates = JSON.parse(localStorage.getItem('qasa-saved-templates') || '[]');
    const newTemplate = {
      ...config,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    templates.push(newTemplate);
    localStorage.setItem('qasa-saved-templates', JSON.stringify(templates));
    alert('Template saved! You can access it from your saved templates.');
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-inset)] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
            <Wand2 className="w-8 h-8 text-pink-500" />
          </div>
          <Typography variant="display-sm" className="mb-4">
            Template Builder
          </Typography>
          <Typography variant="body-lg" className="text-gray-600 max-w-2xl mx-auto">
            Configure your perfect starting template for Qasa prototypes. Choose components, set language, and prepare for AI-assisted design.
          </Typography>
        </div>

        {/* Builder Form */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Configuration */}
          <div className="space-y-6">
            {/* Basic Info */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Type className="w-5 h-5 text-gray-600" />
                <Typography variant="title-md">Basic Information</Typography>
              </div>
              
              <div className="space-y-4">
                <Input
                  label="Template Name"
                  placeholder="e.g., Property Search Page"
                  value={config.name}
                  onChange={(e) => setConfig({...config, name: e.target.value})}
                />
                
                <TextArea
                  label="Description"
                  placeholder="Describe what this template is for..."
                  rows={3}
                  value={config.description}
                  onChange={(e) => setConfig({...config, description: e.target.value})}
                />
              </div>
            </Card>

            {/* Layout Configuration */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layout className="w-5 h-5 text-gray-600" />
                <Typography variant="title-md">Layout Configuration</Typography>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Typography variant="label-md" className="mb-2">Header Type</Typography>
                  <RadioGroup
                    value={config.headerType}
                    onChange={(value) => setConfig({...config, headerType: value})}
                    options={[
                      { value: 'logged-out', label: 'Logged Out (Public)' },
                      { value: 'logged-in', label: 'Logged In (User)' },
                      { value: 'creation-flow', label: 'Creation Flow (Steps)' },
                      { value: 'none', label: 'No Header' }
                    ]}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Typography variant="label-md">Include Footer</Typography>
                  <Switch
                    checked={config.footerEnabled}
                    onChange={(checked) => setConfig({...config, footerEnabled: checked})}
                  />
                </div>
              </div>
            </Card>

            {/* Language & Theme */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-gray-600" />
                <Typography variant="title-md">Language & Theme</Typography>
              </div>
              
              <div className="space-y-4">
                <Select
                  label="Language"
                  value={config.language}
                  onChange={(value) => setConfig({...config, language: value})}
                  options={[
                    { value: 'sv', label: '🇸🇪 Svenska' },
                    { value: 'en', label: '🇬🇧 English' },
                    { value: 'fi', label: '🇫🇮 Suomi' }
                  ]}
                />

                <div>
                  <Typography variant="label-md" className="mb-2">Theme</Typography>
                  <RadioGroup
                    value={config.theme}
                    onChange={(value) => setConfig({...config, theme: value})}
                    options={[
                      { value: 'qasa', label: 'Qasa (Pink)' },
                      { value: 'blocket', label: 'Blocket (Red)' }
                    ]}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Components & Prompt */}
          <div className="space-y-6">
            {/* Component Selection */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-gray-600" />
                <Typography variant="title-md">Suggested Components</Typography>
              </div>
              
              <Typography variant="body-sm" className="text-gray-600 mb-4">
                Select components you want to include in your template:
              </Typography>
              
              <div className="grid grid-cols-1 gap-3">
                {availableComponents.map(component => {
                  const isSelected = config.components.includes(component.id);
                  return (
                    <div
                      key={component.id}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg border transition-all duration-200
                        ${isSelected 
                          ? 'border-pink-300 bg-pink-50' 
                          : 'border-gray-200 hover:border-gray-300'
                        }
                      `}
                    >
                      <Checkbox
                        id={`component-${component.id}`}
                        checked={isSelected}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setConfig({...config, components: [...config.components, component.id]});
                          } else {
                            setConfig({...config, components: config.components.filter(c => c !== component.id)});
                          }
                        }}
                        size="md"
                      />
                      
                      <span className="text-lg">{component.icon}</span>
                      <div className="flex-1">
                        <Typography variant="label-md" className={isSelected ? 'text-pink-700' : 'text-gray-700'}>
                          {component.name}
                        </Typography>
                        <Typography variant="body-sm" className="text-gray-500">
                          {component.category}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Initial Prompt */}
            <Card className="p-6">
              <Typography variant="title-md" className="mb-4">AI Starting Prompt</Typography>
              
              <Typography variant="body-sm" className="text-gray-600 mb-4">
                Provide an initial prompt that describes what should be built with this template:
              </Typography>
              
              <TextArea
                placeholder={`Example: "Create a property search page with filters on the left, a grid of 6 property cards in the center, and a map view on the right. Include Swedish text and use Qasa's pink color for CTAs."`}
                rows={6}
                value={config.initialPrompt}
                onChange={(e) => setConfig({...config, initialPrompt: e.target.value})}
              />
            </Card>

            {/* Actions */}
            <Card className="p-6 bg-pink-50 border-pink-200">
              <Typography variant="title-sm" className="mb-4">Ready to create?</Typography>
              
              <div className="space-y-3">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={createTemplate}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Create & Open Template
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="secondary" 
                    className="flex-1"
                    onClick={copyTemplateUrl}
                    leftIcon={<Copy className="w-4 h-4" />}
                  >
                    Copy URL
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    className="flex-1"
                    onClick={saveTemplate}
                  >
                    Save for Later
                  </Button>
                </div>
              </div>
            </Card>

            {/* Help Text */}
            <div className="text-center p-4">
              <Typography variant="body-sm" className="text-gray-500">
                💡 Tip: After creating, share the URL with Lovable or any AI tool to start building your prototype with QDS components.
              </Typography>
            </div>
          </div>
        </div>

        {/* Saved Templates Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Typography variant="title-lg" className="mb-4">Saved Templates</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JSON.parse(localStorage.getItem('qasa-saved-templates') || '[]').slice(-3).map(template => (
              <Card 
                key={template.id} 
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => {
                  setConfig(template);
                  window.scrollTo(0, 0);
                }}
              >
                <Typography variant="title-sm" className="mb-1">
                  {template.name || 'Untitled Template'}
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mb-2">
                  {template.description || 'No description'}
                </Typography>
                <Typography variant="label-sm" className="text-gray-500">
                  {new Date(template.createdAt).toLocaleDateString()}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateBuilder;