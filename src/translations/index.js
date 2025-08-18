import { en } from './en';
import { sv } from './sv';
import { fi } from './fi';
import { no } from './no';

export const translations = {
  en,
  sv,
  fi,
  no,
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
];

export const defaultLanguage = 'en'; 