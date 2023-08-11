import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ProductProps } from "./homeTabList";
import { CartState } from "./cart";
import { WishState } from "./wishList";

export interface HomeFilterProps {
    route?: RouteProp<{ params: { title: string, types: string[], products: ProductProps[] | [] } }, 'params'>
    navigation?: NavigationProp<any>;
    cart: CartState;
    wish: WishState;
}
