import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { PaymentItemProps } from "../../resources/interfaces/components/paymentItem";
import { wdp } from '../../utils/responsive';
import TextGeneric from "../TextGeneric";
import Ripple from 'react-native-material-ripple';
import { getByLanguage } from "../../utils/langFuncs";

const Container = styled(Ripple)`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${({theme}) => theme.paymentItem.background};
    border-radius:15px;
    padding-vertical:4%;
    padding-horizontal:5%;
`;
const LeftView = styled.View`
    justify-content:center;
    width:20%;
`;
const CircleView = styled.View`
    width:${wdp(13)}px;        
    height:${wdp(13)}px;
    border-radius:${wdp(13) / 2}px;
    align-items:center;
    justify-content:center;
`;
const Circle = styled.View`
    width:${wdp(6)}px;        
    height:${wdp(6)}px;
    border-radius:${wdp(6) / 2}px;
`;
const RightView = styled.View`
    width:80%;
    justify-content:center;
`;
const TitleView = styled.View`
    justify-content:space-between;
    flex-direction:row;
    align-items:flex-end;
    flex:1;
`;
const StatusView = styled.View`
    justify-content:space-between;
    flex-direction:row;
    margin-top:1%;
    flex:1;
`;
const Title = styled(TextGeneric)`
    font-weight:bold;
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.paymentItem.title};
    margin-bottom:2%;
`;
const ID = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.paymentItem.id};
`;
const Price = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.paymentItem.price};
`;
const Status = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const statusText = {
    success_en: 'Successfully',
    success_ar: 'ناجحة',
    failed_en: 'Failed',
    failed_ar: 'فاشلة',
    cancelled_en: 'Cancelled',
    cancelled_ar: 'ملغاة'
}

const PaymentItem = ({
                         id,
                         title,
                         price,
                         status,
                         onPress,
                         containerStyle
                     }: PaymentItemProps) => {

    const theme = useTheme();
    const statusColor = {
        [getByLanguage('success')]: theme.paymentItem.successfully,
        [getByLanguage('failed')]: theme.paymentItem.failed,
        [getByLanguage('cancelled')]: theme.paymentItem.cancel
    }
    return (<Container rippleColor={`${statusColor[status]}80`}
                       style={[{backgroundColor: theme.paymentItem.background}, containerStyle]} onPress={onPress}>
        <LeftView>
            <CircleView style={{backgroundColor: `${statusColor[status]}30`}}>
                <Circle style={{backgroundColor: statusColor[status]}}/>
            </CircleView>
        </LeftView>
        <RightView>
            <TitleView>
                <Title>{title}</Title>
                <Price>{price}</Price>
            </TitleView>
            <StatusView>
                <ID>ID:{id}</ID>
                <Status style={{color: statusColor[status]}}>{statusText[status]}</Status>
            </StatusView>
        </RightView>
    </Container>);
}
export default PaymentItem;
