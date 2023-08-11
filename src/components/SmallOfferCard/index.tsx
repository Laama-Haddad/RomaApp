import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { SmallOfferCardProps } from "../../resources/interfaces/components/smallOfferCard";
import { getByScreenSize, wdp } from "../../utils/responsive";
import TextGeneric from "../TextGeneric";
import { tr } from "../../resources/translations";
import Icon from "../Icon";

const Container = styled.View`
    align-items:center;
`;
const BackgroundImage = styled.TouchableOpacity`
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    background-color:${({theme}) => theme.smallOfferCard.background};
    border-radius:${getByScreenSize(15, 25)}px;
`;
const ProductImage = styled.Image`
    width:70%;
    height:70%;
`;
const OfferView = styled.View`
    width:30%;
    height:100%;
    align-items:center;
    background-color:transparent;
    position:absolute;
    top:0px;
    right:${wdp(1)}px;
`;
const Value = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-size:${({theme}) => getByScreenSize(theme.text.s12, theme.text.s11)}px;
    color:${({theme}) => theme.smallOfferCard.value};
    font-weight:bold;
`;
const OfferValueContainer = styled.View`
    position:absolute;
    top:${wdp(0.5)}px;  
    left:${wdp(1)}px;    
`;
const Title = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.smallOfferCard.title};
`;
const SmallOfferCard = ({
                            title,
                            titleStyle,
                            productImageUrl,
                            buyNumber,
                            freeNumber,
                            discount,
                            type = 'normal',
                            onPress,
                            containerStyle
                        }: SmallOfferCardProps) => {
    const theme = useTheme();
    return (<Container>
        <BackgroundImage style={containerStyle} onPress={onPress}>
            <ProductImage source={{uri: productImageUrl}}/>
            {type !== 'normal' && <OfferView>
                <Icon name={'smallOffer'} type={'SVG'}
                      color={type === 'offer' ? theme.smallOfferCard.offerBackground : theme.smallOfferCard.saleBackground}
                      size={getByScreenSize(wdp(9), wdp(8))}/>
                <OfferValueContainer>
                    {type === 'offer' ?
                        <Value>{tr('smallOfferCard.buy')} {buyNumber} {tr('smallOfferCard.get')} {freeNumber} {tr('smallOfferCard.free')}</Value> :
                        <Value
                            style={{fontSize: getByScreenSize(theme.text.s11, theme.text.s9)}}>{discount} $ {'\n'} {tr('smallOfferCard.off')} </Value>}
                </OfferValueContainer>
            </OfferView>}
        </BackgroundImage>
        {!!title && <Title style={titleStyle}>{title}</Title>}
    </Container>);
}
export default SmallOfferCard;
