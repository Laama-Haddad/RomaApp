import { RouteProp } from "@react-navigation/native";

export interface LoadingProps {
    route: RouteProp<{ params: { label: string } }, 'params'>
}
