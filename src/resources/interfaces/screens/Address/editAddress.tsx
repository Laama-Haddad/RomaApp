import { NavigationProp, RouteProp } from "@react-navigation/native";
import { AddressItem } from "../../AddressItem";

export interface EditAddressProps {
    route: RouteProp<{ params: { item: AddressItem } }, 'params'>
    navigation?: NavigationProp<any>;
}
