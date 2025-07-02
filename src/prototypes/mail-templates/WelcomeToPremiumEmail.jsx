import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import DynamicHeader from '../../components/DynamicHeader';

export default function WelcomeToPremiumEmail() {
  const { theme, currentTheme } = useTheme();
  
  const isBlocket = currentTheme === 'blocket';
  
  return (
    <div className="min-h-screen bg-gray-100">
      <DynamicHeader isFluid />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-800 text-white p-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-pink-300">
                  {isBlocket ? 'Välkommen till Blocket Bostad Premium' : 'Välkommen till Qasa Premium'}
                </span>
                <span className="text-pink-300">juli 1, 2025</span>
              </div>
            </div>

            {/* Email Content */}
            <div className="bg-white">
              {/* Logo Section */}
              <div className="text-center py-6">
                <div className="flex justify-center mb-6">
                  {theme?.logo || (
                    <svg viewBox="0 0 100 32" className="h-8">
                      <text x="10" y="20" className="text-2xl font-bold fill-current">qasa</text>
                    </svg>
                  )}
                </div>
              </div>

              {/* Main Content Card */}
              <div className="px-6 pb-6">
                <div className="bg-gray-50 rounded-3xl p-8 text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                    Välkommen till
                  </h1>
                  
                  {/* Premium Logo */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 text-2xl font-bold">
                      {isBlocket ? (
                        <span style={{ color: theme?.colors?.primary || '#e3372a' }}>
                          blocket bostad
                        </span>
                      ) : (
                        <span style={{ color: theme?.colors?.primary || '#E91E63' }}>
                          qasa
                        </span>
                      )}
                      <span className="text-gray-800">premium</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-lg">
                    Med {isBlocket ? 'Blocket Bostad' : 'Qasa'} Premium har du allt du behöver för att förenkla 
                    ditt bostadssökande på både första- och andrahandsbostäder.
                  </p>

                  <button 
                    className="theme-bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    Utforska {isBlocket ? 'Blocket Bostad' : 'Qasa'} Premium
                  </button>
                </div>
              </div>

              {/* Features Section */}
              <div className="px-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Nyfiken på hur det fungerar?</h2>
                
                {/* Feature 1: Exclusive Insights */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6">
                    <div className="w-full max-w-sm mx-auto mb-4">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">📊</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">Exklusiva insikter</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Se mer, vet mer</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ta reda på mer om hemmen du är intresserad av. Med Exklusiva insikter kan du se om 
                    hyresvärden har börjat svara på ansökningar, vad hyran för liknande hem är, 
                    din plats i kön med mera*
                    <br /><br />
                    <span className="text-sm">* Insikterna varierar beroende på typ av hem och land</span>
                  </p>
                </div>

                {/* Feature 2: Super Apply */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6">
                    <div className="w-full max-w-sm mx-auto mb-4">
                      <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">⚡</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">Superansökan</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Stanna högst upp i inkorgen</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Visa att du verkligen är intresserad och maximera dina chanser med en Superansökan. 
                    Då stannar du högst upp i hyresvärdens inkorg tills du fått svar.
                  </p>
                </div>

                {/* Feature 3: Premium Profile */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6">
                    <div className="w-full max-w-sm mx-auto mb-4">
                      <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">⭐</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">Premiumprofil</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Se till att synas</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Vi hjälper dig att skapa en profil som sticker ut och ökar dina chanser att bli sedd, 
                    med en premium-badge på din profil. Både när du ansöker och när hyresvärdar söker efter hyresgäst.
                  </p>
                </div>

                {/* Feature 4: Apply Earlier */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6">
                    <div className="w-full max-w-sm mx-auto mb-4">
                      <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">🕒</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">Ansök tidigare</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Ansök innan alla andra</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Var bland de första att ansöka till utvalda förstahandsbostäder. Du får tillgång till 
                    bostäder markerade med "Ansök tidigare" 23 timmar innan de släpps till alla.
                  </p>
                </div>

                {/* Feature 5: More Applications */}
                <div className="mb-8">
                  <div className="bg-gray-50 rounded-3xl p-8 mb-6">
                    <div className="w-full max-w-sm mx-auto mb-4">
                      <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
                        <span className="text-4xl">🔢</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-8 h-8 theme-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="font-semibold text-gray-800">Fler ansökningar</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Fler chanser att hitta hem</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Öka dina chanser att hitta en förstahandsbostad. Ansök till 10 hem samtidigt istället för fem. 
                    Och som alltid, ansök hur mycket du vill till alla våra andra hem.
                  </p>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-50 rounded-3xl p-8 text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Hitta ditt nästa hem enklare
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Med {isBlocket ? 'Blocket Bostad' : 'Qasa'} Premium har du allt du behöver för att förenkla 
                    ditt bostadssökande på både första- och andrahandsbostäder.
                  </p>
                  <button className="theme-bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
                    Hitta hem
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white p-6">
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-white text-lg font-bold">
                    {isBlocket ? 'blocket' : 'qasa'}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Har du frågor? Besök vårt <a href="#" className="underline">hjälpcenter</a>
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  Vill du ändra hur du får dessa e-postmeddelanden?<br />
                  <a href="#" className="underline">Uppdatera dina e-postinställningar här</a>
                </p>
                <p className="text-sm text-gray-300">
                  Hitta ditt nästa hem på <a href="#" className="underline">{isBlocket ? 'blocket.se' : 'qasa.se'}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevExperimentsButton />
    </div>
  );
} 