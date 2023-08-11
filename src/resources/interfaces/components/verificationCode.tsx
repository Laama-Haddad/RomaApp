import { StyleProp } from 'react-native';

export interface VerificationCodeProps {
    onSuccess: (string) => void;
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
