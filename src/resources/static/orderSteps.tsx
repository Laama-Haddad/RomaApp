import { TouchableOpacity } from "react-native";
import TextGeneric from "../../components/TextGeneric";
import React from 'react';
import Address from "../../screens/Content/Checkout/Address";
import Delivery from "../../screens/Content/Checkout/Delivery";
import Payment from "../../screens/Content/Checkout/Payment";
import ConfirmOrder from "../../screens/Content/Checkout/ConfirmOrder";
import { getByLanguage } from "../../utils/langFuncs";
import { orderSteps } from "../../utils/enums";

const ConfirmComponent = ({onNextStep}) => {
    return (
        <TouchableOpacity onPress={() => {
            onNextStep();
        }}>
            <TextGeneric>Finish tracking Order</TextGeneric>
        </TouchableOpacity>
    )
}
export const orderStepsList = [
    {
        id: 0,
        label: orderSteps[getByLanguage('address')],
        component: Address
    },
    {
        id: 1,
        label: orderSteps[getByLanguage('delivery')],
        component: Delivery
    },
    {
        id: 2,
        label: orderSteps[getByLanguage('payment')],
        component: Payment
    },
    {
        id: 3,
        label: orderSteps[getByLanguage('confirm')],
        component: ConfirmOrder
    }
];
