import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { OrderListItemProps } from "../../resources/interfaces/components/orderListItem";
import Icon from "../Icon";
import { orderTypes } from "../../utils/enums";
import { getByScreenSize, wdp } from "../../utils/responsive";
import TextGeneric from "../TextGeneric";
import Ripple from 'react-native-material-ripple';
import { getByLanguage } from "../../utils/langFuncs";

const Container = styled(Ripple)`
   background-color: ${({theme}) => theme.orderListItem.background};
   border-radius: 12px;
   padding-vertical: 4%;
   padding-horizontal: 3%;
   flex-direction: row;
   align-items: center;
   margin-bottom:4%;
`;
const IconContainer = styled.View`
  width: ${wdp(getByScreenSize(14, 9))}px;
  height: ${wdp(getByScreenSize(14, 9))}px;
  border-radius: ${wdp(getByScreenSize(10, 5))}px;
  justify-content: center;
  align-items:  center;
  background-color: ${({backgroundColor}) => backgroundColor};
`;
const Title = styled(TextGeneric)`
  font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s8)}px;
  color: ${({theme}) => theme.text.dark};
  font-weight: bold;
`;
const Description = styled(TextGeneric)`
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s10)}px;
  color: ${({theme}) => theme.text.grey};
  padding-top: 2%;
`;
const TitleContainer = styled.View`
  width: ${wdp(44)}px;
  padding-horizontal: 3%;
`;
const StatusContainer = styled.View`
   padding-vertical: 2%;
   padding-horizontal: 3%;
   min-width: ${wdp(26)}px;
   border-radius: 20px;
   background-color:  ${({backgroundColor}) => backgroundColor};
   text-align: center;
`;
const StatusText = styled(TextGeneric)`
  font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s9)}px;
  color: ${({theme}) => theme.text.light};
  text-align: center;
  text-transform: capitalize;
`;
const OrderListItem = ({status, containerStyle, orderNumber, numOfItems, date, onPress}: OrderListItemProps) => {
    const theme = useTheme();
    const iconNames = {
        [getByLanguage('cancel')]: 'close',
        [getByLanguage('shipped')]: 'orderShipped',
        [getByLanguage('delivered')]: 'check'
    };
    const iconBackground = {
        [getByLanguage('cancel')]: theme.orderListItem.cancelIconBackground,
        [getByLanguage('shipped')]: theme.orderListItem.shippedIconBackground,
        [getByLanguage('delivered')]: theme.orderListItem.checkIconBackground,
    };
    const statusBackground = {
        [getByLanguage('cancel')]: theme.orderListItem.cancelIconBackground,
        [getByLanguage('shipped')]: theme.orderListItem.shippedButtonBackground,
        [getByLanguage('delivered')]: theme.orderListItem.checkIconBackground,
    };
    return (<Container style={containerStyle} disabled={!onPress} onPress={onPress} rippleContainerBorderRadius={12}>
        <IconContainer backgroundColor={iconBackground[status]}>
            <Icon name={iconNames[status]} size={theme.text.s7} type={'SVG'} color={'white'}/>
        </IconContainer>
        <TitleContainer>
            <Title>#{orderNumber}</Title>
            <Description>{date} • {numOfItems} items</Description>
        </TitleContainer>
        <StatusContainer backgroundColor={statusBackground[status]}>
            <StatusText>{orderTypes[status]}</StatusText>
        </StatusContainer>
    </Container>);
}
export default OrderListItem;
