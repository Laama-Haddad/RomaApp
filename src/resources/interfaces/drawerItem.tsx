import * as React from 'react';

export interface DrawerItem {
    id: number;
    name: string;
    component: React.ComponentType<any>;
    icon: (color: string, size: number) => void
}
