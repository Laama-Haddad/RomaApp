import { getByLanguage } from "../../utils/langFuncs";

export const notificationList = [{
    id: 0, title_en: 'Booking Cancel', title_ar: 'إلغاء الحجز',description_en: 'Booking     #1234 \nhas been cancelled',description_ar: 'الحجز رقم     #1234 \nتم إلغاءه', type: getByLanguage('cancelled')
}, {
    id: 1, title_en: 'Payment',title_ar: 'الدفعة', description_en: 'Thank you! Your transaction is com...',description_ar: 'شكرا لك! مناقلتك تمت بنجاح', type: getByLanguage('payment')
}, {
    id: 2, title_en: 'Promotion',title_ar: 'الرمز', description_en: 'Invite friends - Get 1 coupons each!',description_ar: 'قم بدعوة اصدقائك - احصل على قسيمة مجانية عن كل دعوة',type: getByLanguage('promotion')
}, {
    id: 3, title_en: 'Booking Accept',title_ar: 'قبول الحجز', description_en: 'Booking #1234 \nhas been success...',description_ar: 'الحجز رقم     #1234 \nتم قبوله',type: getByLanguage('accepted')
}];
