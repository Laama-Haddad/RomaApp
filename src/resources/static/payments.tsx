import { paymentStatus } from "../../utils/enums";
import { PaymentItem } from "../interfaces/paymentItem";
import { getByLanguage } from "../../utils/langFuncs";

export const payments: PaymentItem[] = [{
    id: 71280,
    title_en: 'Black shirt Fashion',
    title_ar: 'قميص أسود',
    price: '-$30.00',
    status:getByLanguage('failed')
}, {
    id: 71281,
    title_en: 'White Shirt Fashion',
    title_ar: 'قميص أبيض',
    price: '-$40.00',
    status:getByLanguage('success')
}, {
    id: 71282,
    title_en: 'Red Shirt Fashion',
    title_ar: 'قميص أحمر',
    price: '-$10.00',
    status: getByLanguage('cancelled')
}, {
    id: 71283,
    title_en: 'Green Shirt Fashion',
    title_ar: 'قميص أخضر',
    price: '-$80.00',
    status: getByLanguage('success')
}, {
    id: 71284,
    title_en: 'Green Skirt Fashion',
    title_ar: 'قميص أخضر',
    price: '-$30.00',
    status: getByLanguage('cancelled')
}, {
    id: 71285,
    title_en: 'Black shirt Fashion',
    title_ar: 'قميص أسود',
    price: '-$30.00',
    status: getByLanguage('failed')
}, {
    id: 71286,
    title_en: 'White Shirt Fashion',
    title_ar: 'قميص أبيض',
    price: '-$40.00',
    status: getByLanguage('success')
}, {
    id: 71287,
    title_en: 'Red Shirt Fashion',
    title_ar: 'قميص أحمر',
    price: '-$10.00',
    status:getByLanguage('cancelled')
}, {
    id: 71288,
    title_en: 'Green Shirt Fashion',
    title_ar: 'قميص أخضر',
    price: '-$80.00',
    status:getByLanguage('success')
}, {
    id: 71289,
    title_en: 'Green Skirt Fashion',
    title_ar: 'قميص أخضر',
    price: '-$30.00',
    status:getByLanguage('cancelled')
}]
