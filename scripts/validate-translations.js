/*
 Simple i18n key validator.
 Compares all languages against English (default) and reports missing or extra keys.
 Run: node scripts/validate-translations.js
*/

const path = require('path');
const { translations } = require('../src/translations');

function flatten(obj, prefix = '') {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      Object.assign(out, flatten(v, key));
    } else {
      out[key] = true;
    }
  }
  return out;
}

const defaultLang = 'en';
const defaultMap = flatten(translations[defaultLang]);

let hasIssues = false;
for (const [lang, dict] of Object.entries(translations)) {
  if (lang === defaultLang) continue;
  const map = flatten(dict);
  const missing = Object.keys(defaultMap).filter(k => !map[k]);
  const extra = Object.keys(map).filter(k => !defaultMap[k]);

  if (missing.length || extra.length) {
    hasIssues = true;
    console.log(`\n== ${lang.toUpperCase()} ==`);
    if (missing.length) {
      console.log(`Missing (${missing.length}):`);
      missing.slice(0, 50).forEach(k => console.log('  -', k));
      if (missing.length > 50) console.log(`  ...and ${missing.length - 50} more`);
    }
    if (extra.length) {
      console.log(`Extra (${extra.length}):`);
      extra.slice(0, 50).forEach(k => console.log('  +', k));
      if (extra.length > 50) console.log(`  ...and ${extra.length - 50} more`);
    }
  }
}

if (!hasIssues) {
  console.log('All translation files match the English key structure.');
}


