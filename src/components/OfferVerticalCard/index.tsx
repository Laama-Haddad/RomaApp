import React, {useRef} from 'react';
import styled, {useTheme} from "styled-components/native";
import {OfferVerticalCardProps} from "../../resources/interfaces/components/offerVerticalCard";
import TextGeneric from "../TextGeneric";
import Timer from "../Timer";
import Ripple from 'react-native-material-ripple';
import Icon from "../Icon";
import {getByScreenSize, hdp, wdp} from "../../utils/responsive";
import {tr} from "../../resources/translations";
import Heart from "../Heart";
import {Shadow} from 'react-native-shadow-2';
import config from "../../config";
import {I18nManager, Platform} from "react-native";
import { getByLanguage } from "../../utils/langFuncs";

const Container = styled.TouchableOpacity`
    width:100%;
    height:100%
    justify-content:center;
    align-items:flex-end;
`;
const TopView = styled.View`
    flex-direction:${I18nManager.isRTL ? 'row-reverse' : 'row'};
    width:100%;
    height:82%;   
    justify-content:flex-end;
`;
const OfferView = styled.View`
    width:${wdp(7)}px;
    height:${getByScreenSize(hdp(30), hdp(38))}px;
    align-items:center;
    background-color:transparent;
    zIndex:1
    right:${-wdp(2)}px;  
`;
const OfferIcon = styled(Icon)`
    width:${wdp(7)}px;
    height:${getByScreenSize(hdp(30), hdp(38))}px;
    left:0px;
    top:0px;
    position:absolute;
`;
const OfferValueContainer = styled.View`
    paddingVertical:40%;
    justify-content:center;
    align-items:center;
`;
const OfferValue = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => getByScreenSize(theme.text.s11, theme.text.s8)}px; 
    color:${({theme}) => theme.offerVerticalCard.offerValue};
`;
const ProductName = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => getByScreenSize(theme.text.s9, theme.text.s7)}px;
    color:${({theme}) => theme.offerVerticalCard.productName};
    width:${getByScreenSize(hdp(18), hdp(25))}px;
    position:absolute;
    bottom:${getByScreenSize(hdp(13), hdp(20))}px;       
`;
const ImageView = styled.View`
    border-top-${Platform.OS === 'ios' ? 'left' : 'right'}-radius:${getByScreenSize(wdp(24), wdp(22))}px;
    width:100%;
    height:100%;
`;
const ProductImage = styled.Image`
   border-top-${Platform.OS === 'ios' ? 'left' : 'right'}-radius:${getByScreenSize(wdp(24), wdp(22))}px;
    width:100%;
    height:100%;
`;
const BottomView = styled.View`
    width:100%;
    height:100%;
    flex-direction:row;
    padding-top:3%;
    background-color:${({theme}) => theme.offerVerticalCard.background};
`;
const CartIconRipple = styled(Ripple)`
    background-color:${({theme}) => theme.offerVerticalCard.iconBackground};
    width:${getByScreenSize(wdp(7), wdp(6))}px;
    height:${getByScreenSize(wdp(7), wdp(6))}px;
    border-radius:${getByScreenSize(wdp(7), wdp(6)) / 2}px;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:${-wdp(7) / 2}px;
    right:${wdp(5) / 2}px;
`;
const PriceView = styled.View`
    flex:1;
    justify-content:center;
    align-items:flex-end;
    padding-right:15%;
`;
const Price = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-size:${({theme}) => getByScreenSize(theme.text.s11, theme.text.s9)}px;
    text-decoration-line: line-through;
    color:${({theme}) => theme.offerVerticalCard.price};
    font-weight:bold;
`;
const FinalPrice = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => getByScreenSize(theme.text.s9, theme.text.s7)}px;
    color:${({theme}) => theme.offerVerticalCard.finalPrice}
`;
const TimerView = styled.View`
    flex:1;
    padding-top:2%;
`;
const OfferVerticalCard = ({
                               productId,
                               productName,
                               productImageUrl,
                               offerValue,
                               productPrice,
                               favorite,
                               offerTime,
                               isAddedToCart = false,
                               onPressCartIcon,
                               onPressHeartIcon,
                               onPress,
                               containerStyle
                           }: OfferVerticalCardProps) => {

    const theme = useTheme();
    const refTimer = useRef();

    const onChangeAddedToCart = () => {
        if (onPressCartIcon) onPressCartIcon({inCart: !isAddedToCart, id: productId});
    }
    const toggleFavorite = () => {
        if (onPressHeartIcon) onPressHeartIcon({inFavoriteList: !favorite, id: productId})
    }
    const timerCallbackFunc = timerFlag => {
        // Setting timer flag to finished
        if (config.debug) console.log(
            'You can alert the user by letting him know that Timer is out.',
        );
    };
    return (<Container style={containerStyle} onPress={onPress}>
        <TopView>
            <OfferView>
                <OfferIcon name={'largeOffer'} type={'SVG'} color={theme.offerVerticalCard.offerBackground}/>
                <OfferValueContainer>
                    <OfferValue>{tr('offerVerticalCard.off')}</OfferValue>
                    <OfferValue style={{fontSize: theme.text.s10}}>{offerValue}% </OfferValue>
                </OfferValueContainer>
                <ProductName style={{transform: [{rotate: '-90deg'}]}}>
                    {productName}
                </ProductName>
            </OfferView>
            <ImageView>
                <ProductImage source={{uri: productImageUrl}}/>
                <CartIconRipple rippleContainerBorderRadius={getByScreenSize(wdp(7), wdp(6)) / 2}
                                onPress={() => onChangeAddedToCart()}>
                    <Icon name={isAddedToCart ? 'check' : 'addToCart'} type={isAddedToCart ? 'Encrypt' : 'SVG'}
                          color={theme.offerVerticalCard.icon}
                          size={theme.text.s7}/>
                </CartIconRipple>
            </ImageView>
            <Heart isFavorite={favorite} type={'solid'} radius={getByScreenSize(15, 21)}
                   size={getByScreenSize(theme.text.s7, theme.text.s6)}
                   style={{position: 'absolute', top: '2%', left: '10%'}}
                   onToggleFavorite={() => toggleFavorite()}/>
        </TopView>
        <Shadow containerViewStyle={{width: '100%', height: '18%', zIndex: -1}} distance={5}
                startColor={theme.offerVerticalCard.startShadow} finalColor={theme.offerVerticalCard.finalShadow}
                sides={['left', 'bottom', 'right']}>
            <BottomView>
                <PriceView>
                    <Price>${(productPrice).toFixed(2)}</Price>
                    <FinalPrice>${(productPrice - ((productPrice * offerValue) / 100)).toFixed(2)}</FinalPrice>
                </PriceView>
                <TimerView>
                    {!!offerTime && <Timer
                        ref={refTimer}
                        timestamp={offerTime}
                        delay={2000}
                        timerCallback={timerCallbackFunc}
                        timeViewRadius={wdp(2.3)}
                        containerStyle={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    />}
                </TimerView>
            </BottomView>
        </Shadow>
    </Container>);
}
export default OfferVerticalCard;
