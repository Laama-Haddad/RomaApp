import { CartState } from "./cart";
import { WishState } from "./wishList";

export interface ProductProps {
    id: number;
    name_en: string;
    name_ar: string;
    imageUrl: string;
    images: string[] | null;
    types_en: string[];
    types_ar: string[];
    layout: 'horizontal' | 'vertical' | 'small';
    description_en?: string;
    description_ar?: string;
    starsCount?: number;
    favorite?: boolean;
    size?: string;
    price: number;
    offerValue?: number;
    offerTime?: number;
    buyNumber?: number;
    freeNumber?: number;
    discount?: number;
    type?: 'normal' | 'sale' | 'offer';
}

export interface HomeTabProps {
    id: number;
    category?: string;
    tabName_en: string;
    tabName_ar: string;
    productTypes_en: string[],
    productTypes_ar: string[],
    list: [] | ProductProps[]
}

export interface HomeTabListProps {
    tab: HomeTabProps;
    category: string;
    tabLabel: string;
    onPressFilterIcon: ({tab: HomeTabProps}) => void;
    onPressProduct: ({category: string, details: ProductProps}) => void;
    cart: CartState;
    wish: WishState;
}
