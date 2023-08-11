import { StyleProp } from 'react-native';

export interface StepProps {
    id: number;
    label: string;
    description: string;
}

export interface StepsProgressBarProps {
    date?: string,
    color?: string;
    steps: StepProps[];
    activeStepIndex: number;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
