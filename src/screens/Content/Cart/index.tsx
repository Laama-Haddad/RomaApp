import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { CartProps, ItemCartProps } from "../../../resources/interfaces/screens/cart";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import Icon from "../../../components/Icon";
import TextGeneric from "../../../components/TextGeneric";
import { connect } from "react-redux";
import { RootState } from "../../../redux/store";
import CartItem from "../../../components/CartItem";
import { hdp, wdp } from "../../../utils/responsive";
import GenericButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import { FlatList } from "react-native";
import EmptyCartSvg from '../../../resources/assets/emptyCart.svg';
import { showGlobalModal } from "../../../connected-components/Modal/actions";
import { updateCartList } from "../../../utils/cartFuncs";
import { updateWishList } from "../../../utils/wishFuncs";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.cart.background};
    padding-top:5%; 
    align-items:center;
    padding-horizontal:3%;
`;
const TopContainer = styled.View`
    border-radius:15px;
    background-color:${({theme}) => theme.cart.topBackground};
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-vertical:3%;
    padding-horizontal:5%;
    margin-bottom:2%;
`;
const CartView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const InCart = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.label};
    margin-horizontal:10%;
`;
const Quantity = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.number};
`;
const Spacer = styled.View`
    width:100%;
    height:40px;
`;
const BottomView = styled.View`
    height:${hdp(52)}px;
    border-top-right-radius:30px;
    border-top-left-radius:30px;
    background-color:${({theme}) => theme.cart.checkoutContainerBackground};
    padding-horizontal:5%;
    padding-top:3%;
    align-items:center;
    width:100%;
    position:absolute;
    bottom:0px;
`;
const RowView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-vertical:2%;
`;
const Label = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.label};
`;
const Price = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.number};
`;
const EmptyCartContainer = styled.View`
    align-items:center;
    width:${wdp(90)}px;
    background-color:${({theme}) => theme.cart.emptyCartListContainerBackground};
    border-radius:15px;
    padding-vertical:10%;
`;
const EmptyCart = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.label};
    margin-vertical:5%;
    width:55%;
    text-align:center;
`;
const EmptyContainer = styled.View`
    height:${hdp(100)}px;
    background-color:${({theme}) => theme.cart.background};
`;
const Cart = ({navigation, cart, wish}: CartProps) => {
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const theme = useTheme();
    const {cartList} = cart;
    const {wishList} = wish;
    const calculateTotalAmount = () => {
        let total = 0;
        cartList?.map(item => total = total + (item.price * item.quantity));
        let d = total * discountPercentage / 100;
        discountPercentage != 0 && setDiscount(d);
        setTotalAmount(total - d);
    }
    const onApply = () => {
        coupon === '2022' ? setDiscountPercentage(10) : coupon === '2021' ? setDiscountPercentage(5) : showGlobalModal({
            title: tr('cart.couponTitle'), message: tr('cart.couponMessage')
        })
    }
    useEffect(() => {
        calculateTotalAmount()
    }, [cartList, discountPercentage]);
    const renderBottom = () => {
        return (<BottomView>
            <RowView>
                <GenericButton title={tr('cart.apply')}
                               titleStyle={{color: theme.cart.buttonTitle, fontSize: theme.text.s6}}
                               containerStyle={{backgroundColor: theme.cart.buttonBackground, width: wdp(35)}}
                               onPress={() => onApply()}/>
                <TextInput placeholder={tr('cart.couponPlaceHolder')}
                           containerStyle={{width: wdp(50)}}
                           maxLength={5}
                           value={coupon}
                           onChangeText={(text) => setCoupon(text)}
                />
            </RowView>
            <RowView>
                <Label>{tr('cart.discount')}</Label>
                <Price>${discount.toFixed(2)}</Price>
            </RowView>
            <RowView>
                <Label>{tr('cart.total')}</Label>
                <Price>${totalAmount.toFixed(2)}</Price>
            </RowView>
            <GenericButton title={tr('cart.checkout')} titleStyle={{color: theme.cart.buttonTitle}}
                           containerStyle={{
                               backgroundColor: theme.cart.buttonBackground, width: wdp(90),
                           }} onPress={() => navigation.navigate('checkout')}/>
        </BottomView>)
    }
    const renderHeaderComponent = () => {
        return (<TopContainer>
            <CartView>
                <Icon type={'SVG'} name={'cart'} size={theme.text.s6} color={theme.cart.cartIcon}
                      role={'button'}
                      style={{backgroundColor: theme.cart.cartBackground}} onPress={() => {
                }}/>
                <InCart>{tr('cart.inCart')}</InCart>
            </CartView>
            <Quantity>{cartList?.length}</Quantity>
        </TopContainer>);
    }
    const renderItem = ({item}) => {
        return (<CartItem productId={item.id} height={hdp(17)}
                          imageUrl={item.imageUrl}
                          selectedQuantity={item.quantity}
                          title={item[getByLanguage('name')]}
                          favorite={wishList.includes(item.id)}
                          price={item.price}
                          size={item.size} color={item.color}
                          toggleFavorite={(item) => updateWishList(wishList, item.id, item.isFavorite).then()}
                          starsCount={item.starsCount}
                          containerStyle={{marginVertical: '2%',}}
                          onQuantityChange={(val) => {
                              const newItem: ItemCartProps = {...item, quantity: val.quantity};
                              updateCartList(cartList, newItem, val.quantity != 0).then()
                          }}
        />)
    }
    const renderEmptyCart = () => {
        return (<EmptyCartContainer>
            <EmptyCartSvg width={wdp(70)} height={wdp(50)}/>
            <EmptyCart>{tr('cart.emptyCart')}</EmptyCart>
            <GenericButton title={tr('cart.shopNow')} titleStyle={{color: theme.cart.buttonTitle}}
                           containerStyle={{
                               backgroundColor: theme.cart.buttonBackground, width: wdp(65)
                           }} onPress={() => navigation.navigate('Home')}/>
        </EmptyCartContainer>);
    }
    return (<MainLayout backgroundColor={theme.cart.headerBackground}
                        tabHeader={true} menuColor={theme.cart.headerIcon}
                        onMenuPress={() => navigation?.toggleDrawer()}
                        iconSize={theme.text.s2}
                        title={tr('cart.headerTitle')}
                        titleColor={theme.cart.headerTitle}
                        onBackPress={() => navigation?.goBack()}
                        noPadding={true} enableScroll={false}
                        containerStyle={{height: hdp(100) + 50}}
        >
            <Container>
                {cartList?.length != 0 ? <FlatList data={cartList} renderItem={renderItem}
                                                   keyExtractor={(item, index) => item.id.toString()}
                                                   ListHeaderComponent={() => renderHeaderComponent()}
                                                   ListFooterComponent={() => <Spacer/>}
                                                   style={{
                                                       marginHorizontal: '5%', height: hdp(55), width: '100%'
                                                   }}/> : <EmptyContainer>{renderEmptyCart()}</EmptyContainer>}
            </Container>
            {cartList?.length != 0 && renderBottom()}
        </MainLayout>);
}
const mapStateToProps = (state: RootState) => ({
    cart: state.cart, wish: state.wish
});

export default connect(mapStateToProps)(Cart);
