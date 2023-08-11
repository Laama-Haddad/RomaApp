import { NavigationProp, RouteProp } from "@react-navigation/native";
import { CartState } from "./cart";
import { ProductProps } from "./homeTabList";
import { WishState } from "./wishList";

export interface ProductDetailsProps {
    route: RouteProp<{ params: { category: string, details: ProductProps } }, 'params'>
    navigation?: NavigationProp<any>;
    cart: CartState;
    wish: WishState;
}
