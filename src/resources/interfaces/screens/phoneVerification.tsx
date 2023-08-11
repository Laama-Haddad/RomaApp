import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface PhoneVerificationProps {
    navigation?: NavigationProp<any>;
    route?: RouteProp<{ params: { sentTo: string, type: 'signIn' | 'signUp' } }, 'params'>
}
