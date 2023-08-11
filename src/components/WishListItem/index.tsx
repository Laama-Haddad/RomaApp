import React from 'react';
import styled from "styled-components/native";
import { WishListItemProps } from "../../resources/interfaces/components/wishListItem";
import { I18nManager, Image } from "react-native";
import TextGeneric from "../TextGeneric";
import Stars from '../Stars';
import { useTheme } from "styled-components";
import Icon from "../Icon";
import Heart from '../Heart';
import Ripple from "react-native-material-ripple";
import { getByScreenSize } from "../../utils/responsive";

const Container = styled.TouchableOpacity`
    width:100%;
    height:${({height}) => height}px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${({theme}) => theme.wishListItem.background};
    border-radius:15px;
`;
const LeftView = styled.View`
    height:${({height}) => height}px;
    width:${({height}) => height}px;
    justify-content:center;
    align-items:center;
    border-radius:15px;
`;
const MiddleView = styled.View`
    height:100%;
    flex:2;
    justify-content:space-around;
    padding-horizontal:5%;
    padding-vertical:3%;
`;
const Title = styled(TextGeneric)`
    font-weight:bold;
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.wishListItem.title};
`;
const Price = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.wishListItem.price};
    text-align:${I18nManager.isRTL ? 'left' : 'right'} ;
`;
const StarsView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const StarsCount = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.regular};
    color:${({theme}) => theme.wishListItem.starsCount};
`;
const RightView = styled.View`
    height:100%;
    flex:1.2;
    justify-content:space-around;
    align-items:flex-end;
    padding-right:3%;
`;
const CartIconRipple = styled(Ripple)`
    background-color:${({theme}) => theme.wishListItem.cartIconBackground};
    justify-content:center;
    align-items:center;
    border-radius:25px;
    padding-vertical:4%;
    width:70%;
`;
const WishListItem = ({
                          productId,
                          height,
                          imageUrl,
                          title,
                          price,
                          isFavorite = true,
                          starsCount = 0,
                          containerStyle,
                          toggleFavorite,
                          isAddedToCart = false,
                          onPressCartIcon,
                          onPress
                      }: WishListItemProps) => {

    const theme = useTheme();
    const onChangeFavorite = () => {
        if (toggleFavorite) toggleFavorite({isFavorite: !isFavorite, id: productId})
    }
    const onChangeAddedToCart = () => {
        if (onPressCartIcon) onPressCartIcon({inCart: !isAddedToCart, id: productId});
    }
    return (<Container height={height} style={containerStyle} onPress={onPress}>
        <LeftView height={height}>
            <Image source={{uri: imageUrl}} style={{width: '100%', height: '100%', borderRadius: 15}}/>
        </LeftView>
        <MiddleView>
            <Title>{title}</Title>
            <Price>{price}$</Price>
            <StarsView>
                <Stars starsCount={starsCount} starStyle={{padding: '2%'}} starSize={theme.text.s7}/>
                <StarsCount>{starsCount}</StarsCount>
            </StarsView>
        </MiddleView>
        <RightView>
            <Heart onToggleFavorite={() => onChangeFavorite()} isFavorite={isFavorite} radius={getByScreenSize(16, 22)}
                   size={theme.text.s5}/>
            <CartIconRipple onPress={() => onChangeAddedToCart()} rippleContainerBorderRadius={15}>
                <Icon name={isAddedToCart ? 'cart-check' : 'shopping-cart'}
                      type={isAddedToCart ? 'MaterialCommunityIcons' : 'Feather'} color={theme.wishListItem.cartIcon}
                      size={theme.text.s6}/>
            </CartIconRipple>
        </RightView>
    </Container>);
}
export default WishListItem;
