/* eslint-disable global-require */

/**
 * This file can be used to load multiple languages
 * and using the default function in the index.tsx
 * language can be changed. This can be done through
 * React Context or Redux
 */

export default {
    en: {
        id: 0,
        languageCode: 'en',
        countryCode: 'US',
        language: 'English (US)',
        isRTL: false,
        loader: () => require('./en.json'),
    }, ar: {
        id: 1,
        languageCode: 'ar',
        countryCode: 'SY',
        language: 'العربية',
        isRTL: true,
        loader: () => require('./ar.json'),
    },
};
