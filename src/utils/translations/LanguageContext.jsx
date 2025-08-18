import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { translations, defaultLanguage } from '../../translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'app_lang';

const readLanguageFromUrl = () => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('lang');
};

const writeLanguageToUrl = (lang) => {
  if (typeof window === 'undefined' || !window.history?.replaceState) return;
  const url = new URL(window.location.href);
  if (lang && lang !== defaultLanguage) url.searchParams.set('lang', lang);
  else url.searchParams.delete('lang');
  window.history.replaceState({}, '', url.toString());
};

const readLanguageFromStorage = () => {
  if (typeof window === 'undefined') return null;
  try { return window.localStorage.getItem(STORAGE_KEY); } catch { return null; }
};

const writeLanguageToStorage = (lang) => {
  if (typeof window === 'undefined') return;
  try {
    if (lang) window.localStorage.setItem(STORAGE_KEY, lang);
    else window.localStorage.removeItem(STORAGE_KEY);
  } catch { /* ignore */ }
};

export const LanguageProvider = ({ children, initialLanguage = defaultLanguage }) => {
  // Resolve persisted sources once on mount
  const initialFromUrl = readLanguageFromUrl();
  const initialFromStorage = readLanguageFromStorage();
  const persistedInitial = initialFromUrl || initialFromStorage || null;
  const initializedFromPersistedRef = useRef(Boolean(persistedInitial));

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return persistedInitial || initialLanguage || defaultLanguage;
  });

  // React to prop changes (e.g., Storybook toolbar) but do not override
  // persisted languages when the prop is just the default.
  useEffect(() => {
    if (!initialLanguage) return;
    if (initializedFromPersistedRef.current && initialLanguage === defaultLanguage) return;
    if (initialLanguage === currentLanguage) return;

    setCurrentLanguage(initialLanguage);
    writeLanguageToStorage(initialLanguage);
    writeLanguageToUrl(initialLanguage);
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('[LanguageProvider] Switched language to:', initialLanguage);
    }
  }, [initialLanguage, currentLanguage]);

  const t = useCallback((key, replacements = {}) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations[defaultLanguage];
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
            return key;
          }
        }
        break;
      }
    }

    if (typeof value === 'string') {
      return Object.keys(replacements).reduce((str, key2) => {
        return str.replace(`{${key2}}`, replacements[key2]);
      }, value);
    }

    return value || key;
  }, [currentLanguage]);

  const changeLanguage = useCallback((language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      writeLanguageToStorage(language);
      writeLanguageToUrl(language);
    }
  }, []);

  // Persist any changes driven by internal state
  useEffect(() => {
    writeLanguageToStorage(currentLanguage);
    writeLanguageToUrl(currentLanguage);
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}; 