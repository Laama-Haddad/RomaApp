import { NavigationProp, RouteProp } from "@react-navigation/native";
import { OrderItemProps } from '../../../../resources/interfaces/orderItem';

export interface TrackOrderProps {
    navigation?: NavigationProp<any>;
    route: RouteProp<{ params: { order: OrderItemProps } }, 'params'>
}
