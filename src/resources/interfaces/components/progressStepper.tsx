import { StyleProp } from 'react-native';
import React from 'react';

export interface StepProps {
    id: number;
    label?: string;
    component: React.ComponentType<any>;
}

export interface ProgressStepperProps {
    onSubmit: () => void;
    data: StepProps[];
    getActiveHeaderTitle: ({headerTitle: string}) => void;
    stepComponentStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
