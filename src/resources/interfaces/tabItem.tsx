import * as React from 'react';

export interface TabItem {
    id: number;
    name: string;
    component: React.ComponentType<any>;
    icon: (color: string, size: number) => void;
}
