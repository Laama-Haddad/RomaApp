import * as React from 'react';

export interface StackItem {
  id: number;
  name: string;
  component: React.ComponentType<any>;
}
