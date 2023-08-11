import React, { useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../MainLayout";
import { CheckoutProps } from "../../../resources/interfaces/screens/checkout";
import ProgressStepper from "../../../components/ProgressStepper";
import {  orderStepsList } from "../../../resources/static/orderSteps";
import { hdp } from "../../../utils/responsive";

const Container = styled.View`
    background-color:${({theme}) => theme.checkout.background};
    align-items:center;
    height:${hdp(92)}px;
`;
const Checkout = ({navigation}: CheckoutProps) => {
    const theme = useTheme();
    const [activeStepHeaderTitle, setActiveStepHeaderTitle] = useState('')
    return (<MainLayout backgroundColor={theme.checkout.headerBackground} backHeader showBackButton
                        backColor={theme.checkout.headerIcon}
                        title={activeStepHeaderTitle}
                        titleColor={theme.checkout.headerTitle} noPadding enableScroll={false}
                        onBackPress={() => navigation?.goBack()}>
        <Container>
            <ProgressStepper data={orderStepsList} onSubmit={() => navigation?.navigate('successOrder')}
                             getActiveHeaderTitle={({headerTitle}) => setActiveStepHeaderTitle(headerTitle)}/>
        </Container>
    </MainLayout>);
}
export default Checkout;
