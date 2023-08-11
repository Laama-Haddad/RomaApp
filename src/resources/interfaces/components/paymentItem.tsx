export interface PaymentItemProps {
    id: number;
    title: string;
    price: string;
    status: string;
    onPress?: () => void;
    containerStyle?: Object | any[];
}
