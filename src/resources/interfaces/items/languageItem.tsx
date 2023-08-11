import * as React from 'react';

export interface LanguageItemProps {
    id: number;
    languageCode: string;
    countryCode: string;
    language: string;
    isRTL:boolean;
    loader: () => void;
}
