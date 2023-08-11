import { OrderItemProps } from "../interfaces/orderItem";
import { getByLanguage } from "../../utils/langFuncs";

export const orderList: OrderItemProps[] = [{
    id: 0,
    status: getByLanguage('shipped'),
    orderNumber: '270012',
    date: '9 July',
    numOfItems: 5,
    price: 127
}, {
    id: 1,
    status: getByLanguage('delivered'),
    orderNumber: '270013',
    date: '10 July',
    numOfItems: 5,
    price: 200
}, {
    id: 2,
    status: getByLanguage('cancel'),
    orderNumber: '270014',
    date: '11 July',
    numOfItems: 5,
    price: 300
}, {
    id: 3,
    status:  getByLanguage('delivered'),
    orderNumber: '270015',
    date: '12 July',
    numOfItems: 5,
    price: 160
}, {
    id: 4,
    status: getByLanguage('cancel'),
    orderNumber: '270016',
    date: '13 July',
    numOfItems: 5,
    price: 450
}, {
    id: 5,
    status:  getByLanguage('shipped'),
    orderNumber: '270017',
    date: '14 July',
    numOfItems: 5,
    price: 300
}];
