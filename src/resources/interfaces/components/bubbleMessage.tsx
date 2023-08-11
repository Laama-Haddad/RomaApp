import { StyleProp } from 'react-native';

export interface BubbleMessageProps {
    senderProfileUrl?: string;
    messageText: string;
    time: string;
    type: 'sent' | 'received';
    messageViewStyle?: StyleProp<any> | StyleProp<any>[];
    messageStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
