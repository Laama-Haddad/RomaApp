import { NavigationProp } from "@react-navigation/native";

export interface NotificationItemListProps {
    type:   'accepted_en' | 'accepted_en'  | 'payment_en' | 'payment_ar' | 'cancelled_en' | 'cancelled_ar' | 'promotion_en' | 'promotion_ar',
    title: string;
    description: string;
    navigation?: NavigationProp<any>;
}
