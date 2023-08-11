export interface OrderItemProps {
    id: number;
    // status: 'cancel_en' | 'cancel_ar' | 'delivered_en' | 'delivered_ar' | 'shipped_en' | 'shipped_ar';
    status:string;
    orderNumber: string;
    date: string;
    numOfItems: number;
    price: number
}
