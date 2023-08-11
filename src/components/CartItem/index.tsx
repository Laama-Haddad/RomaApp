import React, { useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { CartItemProps } from "../../resources/interfaces/components/cartItem";
import { I18nManager, Image } from "react-native";
import TextGeneric from "../TextGeneric";
import Stars from '../Stars';
import Icon from "../Icon";
import Heart from '../Heart';
import Ripple from "react-native-material-ripple";
import { getByScreenSize, wdp } from "../../utils/responsive";
import { tr } from "../../resources/translations";

const Container = styled.View`
    width:100%;
    height:${({height}) => height}px;
    flex-direction:row;
    align-items:center;
    background-color:${({theme}) => theme.cartItem.background};
    border-radius:15px;
`;
const LeftView = styled.View`
    height:${({height}) => height}px;
    width:${({height}) => height * 0.8}px;
    border-radius:15px;
`;
const RightView = styled.View`
    flex:1;
    padding-horizontal:4%;
    padding-vertical:5%;
`;
const TitleView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const Title = styled(TextGeneric)`
    font-weight:bold;
    font-size:${({theme}) => getByScreenSize(theme.text.s7, theme.text.s6)}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cartItem.title};
`;
const Price = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cartItem.price};
    text-align:${I18nManager.isRTL ? 'left' : 'right'} ;
`;
const DescriptionView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const DescriptionText = styled(TextGeneric)`
    font-weight:bold;
    font-size:${({theme}) => getByScreenSize(theme.text.s7, theme.text.s6)}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cartItem.description};
`;
const StarsView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const StarsCount = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.regular};
    color:${({theme}) => theme.cartItem.starsCount};
`;
const QuantityView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const PlusIconRipple = styled(Ripple)`
    background-color:${({theme}) => `${theme.cartItem.plusIcon}20`};
    justify-content:center;
    align-items:center;
    border-radius:${wdp(6) / 2}px;
    width:${wdp(6)}px;
    height:${wdp(6)}px;
`;
const MinusIconRipple = styled(Ripple)`
    background-color:${({theme}) => `${theme.cartItem.minusIcon}20`};
    justify-content:center;
    align-items:center;
    border-radius:${wdp(6) / 2}px;
    width:${wdp(6)}px;
    height:${wdp(6)}px;
`;
const QuantityValueView = styled.View`
    background-color:${({theme}) => `${theme.cartItem.quantity}10`};
    justify-content:center;
    align-items:center;
    border-radius:${wdp(7) / 3}px;
    width:${wdp(8)}px;
    height:${wdp(6)}px;
    margin-horizontal:3%;
`;
const QuantityValue = styled(TextGeneric)`
    color:${({theme}) => theme.cartItem.quantity};
    font-size:${({theme}) => getByScreenSize(theme.text.s9, theme.text.s6)}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const CartItem = ({
                      productId,
                      height,
                      imageUrl,
                      title,
                      price,
                      size,
                      color,
                      starsCount = 0,
                      favorite,
                      selectedQuantity = 1,
                      onQuantityChange,
                      containerStyle,
                      toggleFavorite,
                  }: CartItemProps) => {

    const [quantity, setQuantity] = useState(selectedQuantity);
    const onChange = (val) => {
        let newQuantity = quantity + val;
        setQuantity(newQuantity);
        if (onQuantityChange) onQuantityChange({quantity: newQuantity, id: productId});
    }
    const onChangeFavorite = () => {
        if (toggleFavorite) toggleFavorite({isFavorite: !favorite, id: productId})
    }
    const theme = useTheme();
    return (<Container height={height} style={containerStyle}>
        <LeftView height={height}>
            <Image source={{uri: imageUrl}} style={{width: '100%', height: '100%', borderRadius: 15}}/>
        </LeftView>
        <RightView>
            <TitleView>
                <Title>{title}</Title>
                <Heart onToggleFavorite={() => onChangeFavorite()} isFavorite={favorite}
                       radius={getByScreenSize(wdp(4), wdp(3))} size={getByScreenSize(theme.text.s4, theme.text.s3)}/>
            </TitleView>
            <Price>{price}$</Price>
            <DescriptionView>
                <DescriptionText>{tr('cartItem.size')} {color} {size}</DescriptionText>
                <QuantityView>
                    <MinusIconRipple disabled={quantity === 0} rippleContainerBorderRadius={wdp(5) / 2} onPress={() => {
                        onChange(-1)
                    }}>
                        <Icon name={'minus'} type={'Entypo'} color={theme.cartItem.minusIcon} size={theme.text.s7}/>
                    </MinusIconRipple>
                    <QuantityValueView>
                        <QuantityValue>{quantity}</QuantityValue>
                    </QuantityValueView>
                    <PlusIconRipple rippleContainerBorderRadius={wdp(5) / 2} onPress={() => {
                        setQuantity(quantity + 1);
                        onChange(+1)
                    }}>
                        <Icon name={'plus'} type={'Entypo'} color={theme.cartItem.plusIcon} size={theme.text.s7}/>
                    </PlusIconRipple>
                </QuantityView>
            </DescriptionView>
            <StarsView>
                <Stars starsCount={starsCount} starSize={theme.text.s7} starStyle={{paddingHorizontal: '1.5%'}}/>
                <StarsCount>{starsCount}</StarsCount>
            </StarsView>
        </RightView>
    </Container>);
}
export default CartItem;
