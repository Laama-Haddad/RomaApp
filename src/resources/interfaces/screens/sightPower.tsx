import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface SightPowerProps {
    route: RouteProp<{ params: { onToggleValues: ({leftDegree: number, rightDegree: number}) => void } }, 'params'>;
    navigation?: NavigationProp<any>;
}
