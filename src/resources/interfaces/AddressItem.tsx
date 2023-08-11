import * as React from 'react';

export interface AddressItem {
    id?: number;
    recipient?: string;
    telephone: string;
    title: string;
    street: string;
    city?: string;
    area?: string;
}
