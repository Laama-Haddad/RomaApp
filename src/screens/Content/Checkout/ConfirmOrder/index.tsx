import React, { useEffect } from 'react'
import styled, { useTheme } from "styled-components/native";
import { ConfirmOrderProps } from "../../../../resources/interfaces/screens/confirmOrder";
import { RootState } from "../../../../redux/store";
import { connect } from "react-redux";
import Icon from "../../../../components/Icon";
import { tr } from "../../../../resources/translations";
import CartItem from "../../../../components/CartItem";
import { getByScreenSize, hdp, wdp } from "../../../../utils/responsive";
import { updateWishList } from "../../../../utils/wishFuncs";
import { ItemCartProps } from "../../../../resources/interfaces/screens/cart";
import { updateCartList } from "../../../../utils/cartFuncs";
import TextGeneric from "../../../../components/TextGeneric";
import { FlatList } from "react-native";
import GenericButton from "../../../../components/Button";
import { addresses } from "../../../../resources/static/location";
import { deliveryWaysList } from "../../../../resources/static/deliveryWays";
import { getByLanguage } from "../../../../utils/langFuncs";

const Container = styled.View`
    align-items:center;
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    background-color:${({theme}) => theme.confirmOrder.background};
    padding-horizontal:5%;
    padding-top:5%;
`;
const TopContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-bottom:5%;
`;
const CartView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const InCart = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.confirmOrder.label};
    margin-horizontal:10%;
`;
const Quantity = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.confirmOrder.number};
    margin-right:6%;
`;
const Spacer = styled.View`
    width:100%;
    height:40px;
`;
const Address = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.confirmOrder.lightLabel};
`;
const AddressContainer = styled.View`
    width:100%;
    padding-vertical:5%;
`;
const CreditCardContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    background-color:${({theme}) => theme.confirmOrder.creditBackground};
    border-radius:10px;
    padding-horizontal:7%;
    padding-vertical:2%;
    margin-vertical:5%;
`;
const CreditDescriptionView = styled.View``;
const CreditCard = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.confirmOrder.label};
`;
const CreditCardNumber = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.confirmOrder.lightLabel};
    margin-top:10%;
`;
const CreditIconContainer = styled.View`
    align-items:center;
    justify-content:center;
`;
const CreditCompany = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s10}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.confirmOrder.label};
`;
const TotalAmountContainer = styled.View`
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color:${({theme}) => theme.confirmOrder.totalAmountBackground};
    border-top-left-radius:35px;
    border-top-right-radius:35px;
    padding-top:8%;
    width:${wdp(100)}px;
`;
const TotalAmount = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.confirmOrder.label};
`;
const ConfirmOrder = ({onToggleStep, cart, wish}: ConfirmOrderProps) => {
    const theme = useTheme();
    const {cartList} = cart;
    const {wishList} = wish;
    useEffect(() => {
        !!onToggleStep && onToggleStep({headerTitle: tr('confirmOrder.headerTitle')})
    }, []);
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
    const renderFooterComponent = () => {
        return (
            <>
                <GenericButton title={tr('confirmOrder.delivery')}
                               titleStyle={{color: theme.confirmOrder.label, marginLeft: '2%'}}
                               onPress={() => {
                               }}
                               disabled={true}
                               showRightText
                               rightText={'+$2.50'}
                               rightTextStyle={{
                                   color: theme.confirmOrder.deliveryPrice,
                                   fontFamily: theme.fonts.bold,
                                   fontSize: theme.text.s6
                               }}
                               showLeftIcon
                               leftIconName={'orderShipped'}
                               leftIconType={'SVG'}
                               leftIconColor={theme.confirmOrder.deliveryIcon}
                               leftIconSize={theme.text.s5}
                               leftIconStyle={{
                                   backgroundColor: theme.confirmOrder.deliveryIconBackground,
                                   paddingLeft: 0
                               }}
                               containerStyle={{
                                   width: wdp(90),
                                   backgroundColor: 'transparent',
                                   marginTop: '7%'
                               }}/>
                <AddressContainer>
                    <Address>{addresses[0].street}{addresses[0].area},{addresses[0].city}</Address>
                </AddressContainer>
                <GenericButton title={deliveryWaysList[1][getByLanguage('way')]}
                               titleStyle={{color: theme.confirmOrder.label, marginLeft: '5%'}}
                               onPress={() => {
                               }}
                               disabled={true}
                               showRightText
                               rightText={deliveryWaysList[1][getByLanguage('period')]}
                               rightTextStyle={{
                                   color: theme.confirmOrder.rightLabel,
                                   fontSize: theme.text.s9,
                                   marginRight: '0.5%'
                               }}
                               leftIconStyle={{backgroundColor: theme.confirmOrder.deliveryIconBackground}}
                               containerStyle={{
                                   width: wdp(90),
                                   backgroundColor: theme.confirmOrder.deliveryBackground,
                                   marginTop: '7%',
                                   height: getByScreenSize(55, 70)
                               }}/>
                <GenericButton title={tr('confirmOrder.payment')}
                               titleStyle={{color: theme.confirmOrder.label, marginLeft: '2%'}}
                               onPress={() => {
                               }}
                               disabled={true}
                               showRightIcon
                               rightIconName={'options'}
                               rightIconType={'SimpleLineIcons'}
                               rightIconColor={theme.confirmOrder.optionsIcon}
                               rightIconSize={theme.text.s6}
                               showLeftIcon
                               leftIconName={'card'}
                               leftIconType={'MaterialCommunityIcons'}
                               leftIconColor={theme.confirmOrder.paymentIcon}
                               leftIconSize={theme.text.s4}
                               leftIconStyle={{
                                   backgroundColor: theme.confirmOrder.paymentIconBackground,
                                   paddingLeft: 0
                               }}
                               containerStyle={{
                                   width: wdp(90),
                                   backgroundColor: 'transparent',
                                   marginTop: '7%'
                               }}/>
                <CreditCardContainer>
                    <CreditDescriptionView>
                        <CreditCard>{tr('confirmOrder.creditCard')}</CreditCard>
                        <CreditCardNumber>**** **** **** 3208</CreditCardNumber>
                    </CreditDescriptionView>
                    <CreditIconContainer>
                        <Icon name={'creditCard'} type={'SVG'} size={getByScreenSize(60, 70)} color={'red'}/>
                        <CreditCompany>mestercard</CreditCompany>
                    </CreditIconContainer>

                </CreditCardContainer>
            </>
        );
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
                          containerStyle={{
                              marginVertical: '2%',
                              backgroundColor: theme.confirmOrder.cartItemBackground
                          }}
                          onQuantityChange={(val) => {
                              const newItem: ItemCartProps = {...item, quantity: val.quantity};
                              updateCartList(cartList, newItem, val.quantity != 0).then()
                          }}
        />)
    }
    return (<Container>
        {cartList?.length != 0 && <FlatList data={cartList} renderItem={renderItem}
                                            keyExtractor={(item, index) => item.id.toString()}
                                            ListHeaderComponent={() => renderHeaderComponent()}
                                            ListFooterComponent={() => renderFooterComponent()}
                                            style={{
                                                marginHorizontal: '5%', height: hdp(55), width: '100%'
                                            }}/>}
        <TotalAmountContainer>
            <TotalAmount>{tr('confirmOrder.total')}:</TotalAmount>
            <TotalAmount>$264.33</TotalAmount>
        </TotalAmountContainer>

    </Container>);
}
const mapStateToProps = (state: RootState) => ({
    cart: state.cart, wish: state.wish
});
export default connect(mapStateToProps)(ConfirmOrder);
