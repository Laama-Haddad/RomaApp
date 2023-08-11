import React from 'react';
import styled, {useTheme} from "styled-components/native";
import {ShippingItemCardProps} from "../../resources/interfaces/components/shippingItemCard";
import {wdp} from '../../utils/responsive';
import TextGeneric from "../TextGeneric";
import Ripple from 'react-native-material-ripple';
import Icon from "../Icon";

const Container = styled(Ripple)`
    width:100%;
    height:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${({theme}) => theme.shippingItemCard.background};
    border-radius:15px;
    padding:5%;
`;
const LeftView = styled.View`
    justify-content:center;
    height:100%;
    flex:1;
`;
const CircleView = styled.View`
    width:${wdp(13)}px;        
    height:${wdp(13)}px;
    border-radius:${wdp(13) / 2}px;
    align-items:center;
    justify-content:center;
`;
const DetailsView = styled.View`
    justify-content:center;
    height:100%;
    flex:3;
    padding-horizontal:5%;
`;
const ShippingNumberText = styled(TextGeneric)`
    font-weight:bold;
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.shippingItemCard.date};
    margin-bottom:2%;
`;
const Date = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.shippingItemCard.shippingNumberText};
`;
const RightView = styled.View`
    justify-content:center;
    align-items:center;
    flex:1.5;
    border-radius:20px;
    padding-vertical:2%;
    padding-horizontal:3%;
`;
const Status = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.shippingItemCard.icon};
`;
const ShippingItemCard = ({
                              shippingNumber, date, itemsCount, status, onPress, containerStyle
                          }: ShippingItemCardProps) => {

    const theme = useTheme();
    const getColor = () => {
        return (status.toLowerCase() === 'shipped' ? theme.shippingItemCard.shipped : status.toLowerCase() === 'delivered' ? theme.shippingItemCard.delivered : theme.shippingItemCard.cancel)
    }
    const getIconName = () => {
        return (status.toLowerCase() === 'shipped' ? 'shipped' : status.toLowerCase() === 'delivered' ? 'check' : 'close')
    }
    const getIconType = () => {
        return (status.toLowerCase() === 'shipped' ? 'SVG' : 'FontAwesome')
    }
    return (<Container rippleColor={`${getColor()}80`}
                       style={[{backgroundColor: theme.shippingItemCard.background}, containerStyle]} onPress={onPress}>
        <LeftView>
            <CircleView style={{backgroundColor: getColor()}}>
                <Icon name={getIconName()} type={getIconType()} size={theme.text.s3}
                      color={theme.shippingItemCard.icon}/>
            </CircleView>
        </LeftView>
        <DetailsView>
            <ShippingNumberText>#{shippingNumber}</ShippingNumberText>
            <Date>{date} . {itemsCount} items</Date>
        </DetailsView>
        <RightView style={{backgroundColor: status.toLowerCase() === 'shipped' ? theme.secondary : getColor()}}>
            <Status>{status}</Status>
        </RightView>
    </Container>);
}
export default ShippingItemCard;
