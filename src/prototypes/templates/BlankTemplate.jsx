import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Typography from '../../components/ui/Typography';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Sparkles, Copy, Save, RefreshCw } from 'lucide-react';

const BlankTemplate = () => {
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState(null);
  const [showInstructions, setShowInstructions] = useState(true);

  // Get parameters from URL
  const headerType = searchParams.get('header') || 'logged-out';
  const footerEnabled = searchParams.get('footer') !== 'false';
  const language = searchParams.get('lang') || 'sv';
  const theme = searchParams.get('theme') || 'qasa';

  // Load saved content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('qasa-template-content');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
      setShowInstructions(false);
    }
  }, []);

  // Sample content for demonstration
  const sampleContent = {
    title: language === 'sv' ? 'Din nya sida' : 'Your new page',
    description: language === 'sv' 
      ? 'Börja bygga din Qasa-prototyp här' 
      : 'Start building your Qasa prototype here',
  };

  // Copy current URL to clipboard
  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('URL copied! Share this with your team or use in Lovable.');
  };

  // Save current state to localStorage
  const saveTemplate = () => {
    const templateData = {
      content: content || sampleContent,
      settings: {
        headerType,
        footerEnabled,
        language,
        theme
      },
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('qasa-template-content', JSON.stringify(templateData));
    alert('Template saved locally!');
  };

  // Clear template
  const clearTemplate = () => {
    if (confirm('Clear this template and start over?')) {
      localStorage.removeItem('qasa-template-content');
      setContent(null);
      setShowInstructions(true);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-inset)] flex flex-col">
      {/* Dynamic Header based on URL param */}
      <Header variant={headerType} />

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {showInstructions ? (
          <Card className="max-w-4xl mx-auto p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <Typography variant="display-sm" className="mb-4">
                {language === 'sv' ? 'Blank Mall - Redo för AI' : 'Blank Template - Ready for AI'}
              </Typography>
              <Typography variant="body-lg" className="text-gray-600 mb-6">
                {language === 'sv' 
                  ? 'Denna sida är en tom mall som du kan använda med Lovable eller andra AI-verktyg för att skapa Qasa-prototyper.'
                  : 'This page is a blank template you can use with Lovable or other AI tools to create Qasa prototypes.'}
              </Typography>
            </div>

            <div className="bg-[var(--color-background-inset)] rounded-lg p-6 mb-6">
              <Typography variant="title-md" className="mb-4">
                {language === 'sv' ? '🎯 Hur man använder denna mall:' : '🎯 How to use this template:'}
              </Typography>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-medium">1.</span>
                  <span>
                    {language === 'sv' 
                      ? 'Kopiera denna URL och klistra in i Lovable'
                      : 'Copy this URL and paste into Lovable'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium">2.</span>
                  <span>
                    {language === 'sv' 
                      ? 'Beskriv vad du vill bygga (t.ex. "Skapa en sökresultatsida med 6 lägenheter")'
                      : 'Describe what you want to build (e.g., "Create a search results page with 6 apartments")'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-medium">3.</span>
                  <span>
                    {language === 'sv' 
                      ? 'AI kommer använda Qasa-komponenter och design tokens automatiskt'
                      : 'AI will use Qasa components and design tokens automatically'}
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-6">
              <Typography variant="title-sm" className="mb-3 text-pink-900">
                {language === 'sv' ? '💡 Exempel på promptar:' : '💡 Example prompts:'}
              </Typography>
              <ul className="space-y-2 text-pink-800">
                <li>• "Create a property listing grid with filters"</li>
                <li>• "Add a tenant profile card with application button"</li>
                <li>• "Show a dashboard with saved properties"</li>
                <li>• "Design a landing page for Qasa Premium"</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <Typography variant="title-sm" className="mb-3 text-blue-900">
                {language === 'sv' ? '🎨 Tillgängliga komponenter:' : '🎨 Available components:'}
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-blue-800">
                <div>• Button</div>
                <div>• Card</div>
                <div>• Input</div>
                <div>• Typography</div>
                <div>• Avatar</div>
                <div>• Modal</div>
                <div>• PropertyCard</div>
                <div>• TenantCard</div>
                <div>• FilterModal</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                variant="secondary" 
                onClick={copyUrl}
                leftIcon={<Copy className="w-4 h-4" />}
              >
                {language === 'sv' ? 'Kopiera URL' : 'Copy URL'}
              </Button>
              <Button 
                variant="primary"
                onClick={() => setShowInstructions(false)}
                leftIcon={<Sparkles className="w-4 h-4" />}
              >
                {language === 'sv' ? 'Starta prototyp' : 'Start prototyping'}
              </Button>
            </div>
          </Card>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Typography variant="label-lg" className="text-gray-600">
                  {language === 'sv' ? 'Mall-läge' : 'Template mode'}
                </Typography>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Header: {headerType}</span>
                  <span>•</span>
                  <span>Footer: {footerEnabled ? 'on' : 'off'}</span>
                  <span>•</span>
                  <span>Language: {language.toUpperCase()}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={saveTemplate}
                  leftIcon={<Save className="w-4 h-4" />}
                >
                  {language === 'sv' ? 'Spara' : 'Save'}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={copyUrl}
                  leftIcon={<Copy className="w-4 h-4" />}
                >
                  {language === 'sv' ? 'Dela' : 'Share'}
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={clearTemplate}
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                >
                  {language === 'sv' ? 'Rensa' : 'Clear'}
                </Button>
              </div>
            </div>

            {/* Content Area - This is where AI/Lovable will inject components */}
            <div className="min-h-[400px] bg-white rounded-lg shadow-sm p-8">
              <div className="text-center py-16">
                <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <Typography variant="title-lg" className="mb-2">
                  {content?.title || sampleContent.title}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {content?.description || sampleContent.description}
                </Typography>
                
                <div className="mt-8 p-6 bg-[var(--color-background-inset)] rounded-lg inline-block">
                  <Typography variant="label-md" className="text-gray-500 mb-2">
                    {language === 'sv' ? 'AI Prompt-område:' : 'AI Prompt area:'}
                  </Typography>
                  <Typography variant="body-sm" className="text-gray-600">
                    {language === 'sv' 
                      ? 'Här kommer AI att injicera komponenter baserat på dina beskrivningar'
                      : 'This is where AI will inject components based on your descriptions'}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Help text */}
            <div className="mt-6 text-center">
              <Typography variant="body-sm" className="text-gray-500">
                {language === 'sv' 
                  ? 'Tips: Använd Lovable för att lägga till komponenter här. Alla QDS-komponenter är tillgängliga.'
                  : 'Tip: Use Lovable to add components here. All QDS components are available.'}
              </Typography>
            </div>
          </div>
        )}
      </main>

      {/* Dynamic Footer based on URL param */}
      {footerEnabled && <Footer />}
    </div>
  );
};

export default BlankTemplate;