import { WishListProps } from "../../../resources/interfaces/screens/wishList";

import { homeData } from "../../../resources/static/home";
import React from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import { hdp, wdp } from "../../../utils/responsive";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import WishListItem from "../../../components/WishListItem";
import TextGeneric from "../../../components/TextGeneric";
// @ts-ignore
import EmptyWishListSvg from '../../../resources/assets/emptyWishList.svg';
import GenericButton from "../../../components/Button";
import { updateWishList } from "../../../utils/wishFuncs";
import { ProductProps } from "../../../resources/interfaces/screens/homeTabList";
import { ItemCartProps } from "../../../resources/interfaces/screens/cart";
import { updateCartList } from "../../../utils/cartFuncs";
import { showGlobalModal } from "../../../connected-components/Modal/actions";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.wishList.background};
    width:100%;
    height:${hdp(92)}px;
    align-items:center;
`;
const WishListContainer = styled.ScrollView`
    background-color:${({theme}) => theme.wishList.background};
    width:100%;
    padding-horizontal:5%;
    padding-top:5%;
`;
const EmptyWishListContainer = styled.View`
    align-items:center;
    width:${wdp(90)}px;
    background-color:${({theme}) => theme.wishList.emptyWishListContainerBackground};
    border-radius:15px;
    padding-vertical:10%;
`;
const EmptyWishList = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.wishList.label};
    margin-vertical:5%;
    width:55%;
    text-align:center;
`;
const Spacer = styled.View`
    width:100%;
    height:90px;
    background-color:${({theme}) => theme.wishList.background};

`;
const WishList = ({navigation, wish, cart}: WishListProps) => {
    const theme = useTheme();
    const {wishList} = wish;
    const {cartList} = cart;
    const updateCart = (inCart: boolean, item: ProductProps) => {
        const tempItem: ItemCartProps = {
            ...item,
            itemCartId: cartList.length,
            isExist: true,
            quantity: 1,
            power: false,
            color: ''
        };
        updateCartList(cartList, tempItem, inCart).then();
    }
    const renderEmptyWishList = () => {
        return (
            <EmptyWishListContainer>
                <EmptyWishListSvg width={wdp(70)} height={wdp(50)}/>
                <EmptyWishList>{tr('wishList.emptyWishList')}</EmptyWishList>
                <GenericButton title={tr('cart.shopNow')} titleStyle={{color: theme.cart.buttonTitle}}
                               containerStyle={{
                                   backgroundColor: theme.wishList.buttonBackground,
                                   width: wdp(65)
                               }} onPress={() => navigation.navigate('Home')}/>
            </EmptyWishListContainer>
        );
    }

    return (<MainLayout backgroundColor={theme.wishList.headerBackground}
                        tabHeader={true} menuColor={theme.wishList.headerIcon}
                        onMenuPress={() => navigation?.toggleDrawer()} iconSize={theme.text.s2}
                        title={tr('wishList.headerTitle')}
                        titleColor={theme.wishList.headerTitle}
                        onBackPress={() => navigation?.goBack()} enableScroll={false}
                        noPadding={true} containerStyle={{height: hdp(100) + 50}}>
            <Container>
                <WishListContainer>
                    {wishList?.length != 0 && homeData?.map((tab, index) => tab?.list.map((item, key) => {
                            let idx = wishList.findIndex(itemId => itemId === item.id);
                            if (idx > -1)
                                return <WishListItem
                                    key={key}
                                    productId={item.id}
                                    height={hdp(15)}
                                    imageUrl={!!item.imageUrl ? item.imageUrl : 'https://dummyimage.com/105/cccccc/000000'}
                                    starsCount={item.starsCount}
                                    title={item[getByLanguage('name')]}
                                    price={item.price}
                                    isFavorite={wishList.includes(item.id)}
                                    isAddedToCart={cartList.findIndex(cartItem => cartItem.id === item.id) > -1}
                                    toggleFavorite={(wishItem) =>
                                        showGlobalModal({
                                            message: tr('wishList.deleteFavoriteMessage'),
                                            type: 'question',
                                            onConfirm: () => updateWishList(wishList, item.id, wishItem.isFavorite).then()
                                        })
                                    }
                                    onPressCartIcon={({
                                                          inCart,
                                                          id
                                                      }) => updateCart(inCart, item)}
                                    containerStyle={{marginBottom: '5%', width: '100%'}}
                                    onPress={() => navigation?.navigate('productDetails', {
                                        category: tab?.tabName,
                                        details: tab?.list[item.id]
                                    })}
                                />
                        })
                    )}
                    {wishList?.length === 0 && renderEmptyWishList()}
                    <Spacer/>
                </WishListContainer>
            </Container>
        </MainLayout>
    );
}

const mapStateToProps = (state: RootState) => ({
    wish: state.wish,
    cart: state.cart
});

export default connect(mapStateToProps)(WishList);
