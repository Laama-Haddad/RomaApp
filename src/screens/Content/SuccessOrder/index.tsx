import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { SuccessOrderProps } from "../../../resources/interfaces/successOrder";
import SuccessOrderSvg from '../../../resources/assets/successOrder.svg';
import { hdp, wdp } from "../../../utils/responsive";
import TextGeneric from "../../../components/TextGeneric";
import GenericButton from "../../../components/Button";
import { tr } from "../../../resources/translations";

const Container = styled.View`
    justify-content:center;
    align-items:center;
    height:${hdp(100)}px;
`;
const ModalContainer = styled.View`
    background-color:${({theme}) => theme.successOrder.modalBackground};
    border-radius:10px;
    padding-vertical:9%;
    padding-horizontal:5%;
    align-items:center;
    margin-top:20%;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.successOrder.title};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const Info = styled(TextGeneric)`
    color:${({theme}) => theme.successOrder.info};
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.bold};
    text-align:center;
    margin-top:2%;
    line-height:${hdp(3)}px;
`;
const SuccessOrder = ({navigation}: SuccessOrderProps) => {
    const theme = useTheme();
    return (<Container>
        <SuccessOrderSvg width={wdp(50)} height={hdp(20)}/>
        <ModalContainer>
            <Title>{tr('successOrder.title')}</Title>
            <Info>{tr('successOrder.info')}</Info>
            <GenericButton title={tr('successOrder.viewOrdersButtonTitle')}
                           onPress={() => navigation?.navigate('orderHistory')}
                           containerStyle={{
                               backgroundColor: theme.successOrder.viewOrdersButtonBackground,
                               width: wdp(80),
                               marginTop: '4%'
                           }} titleStyle={{color: theme.successOrder.viewOrdersButtonTitle}}/>
            <GenericButton title={tr('successOrder.continueButtonTitle')} onPress={() => navigation?.navigate('Home')}
                           containerStyle={{
                               backgroundColor: `${theme.successOrder.continueButtonBackground}35`,
                               width: wdp(80),
                               marginTop: '4%',
                               justifyContent: 'center',
                               alignItems: 'center'
                           }} titleStyle={{color: theme.successOrder.continueButtonTitle}}/>
        </ModalContainer>
    </Container>);
}
export default SuccessOrder;
