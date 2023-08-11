import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { NotificationItemListProps } from "../../resources/interfaces/components/notificationItemList";
import { getByScreenSize, wdp } from "../../utils/responsive";
import TextGeneric from "../TextGeneric";
import { notificationTypes } from "../../utils/enums";
import Icon from "../Icon";
import { getByLanguage } from "../../utils/langFuncs";

const Container = styled.View`
    background-color: ${({theme}) => theme.notificationItemList.background};
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
const TitleContainer = styled.View`
    padding-horizontal: 3%;
`;
const Title = styled(TextGeneric)`
    font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s8)}px;
    color: ${({theme}) => theme.notificationItemList.title};
    font-weight: bold;
    font-family:${({theme}) => theme.fonts.bold};
`;
const Description = styled(TextGeneric)`
    font-size: ${({theme}) => getByScreenSize(theme.text.s8, theme.text.s10)}px;
    color: ${({theme}) => theme.notificationItemList.description};
    padding-top: 2%;
    font-family:${({theme}) => theme.fonts.semi_bold};
  width: ${wdp(getByScreenSize(68, 55))}px;
`;

const NotificationItemList = ({type, title, description, navigation}: NotificationItemListProps) => {
    const theme = useTheme();
    const iconNames = {
        [getByLanguage('cancelled')]: 'circle',
        [getByLanguage('accepted')]: 'circle',
        [getByLanguage('payment')]: 'payment',
        [getByLanguage('promotion')]: 'promotion'
    };
    const iconBackground = {
        [getByLanguage('cancelled')]: theme.notificationItemList.cancelledIconBackground,
        [getByLanguage('accepted')]: theme.notificationItemList.acceptedIconBackground,
        [getByLanguage('payment')]: theme.notificationItemList.paymentIconBackground,
        [getByLanguage('promotion')]: theme.notificationItemList.promotionIconBackground,
    };
    return (<Container>
        <IconContainer backgroundColor={iconBackground[type]}>
            <Icon name={iconNames[type]} size={theme.text.s5} type={'SVG'} color={theme.notificationItemList.icon}/>
        </IconContainer>
        <TitleContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </TitleContainer>
    </Container>);
}
export default NotificationItemList;
