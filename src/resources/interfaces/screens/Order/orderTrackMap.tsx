import { NavigationProp, RouteProp } from "@react-navigation/native";
import { OrderItemProps } from "../../orderItem";

export interface OrderTrackMapProps {
    navigation?: NavigationProp<any>;
    route: RouteProp<{ params: { order: OrderItemProps } }, 'params'>
}
