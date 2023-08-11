import React, { useCallback, useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { HomeFilterProps } from "../../../resources/interfaces/screens/homeFilter";
import MainLayout from "../../MainLayout";
import SearchBar from "../../../components/SearchBar";
import Label from "../../../components/Label";
import { getByScreenSize, hdp, wdp } from "../../../utils/responsive";
import { ScrollView } from "react-native";
import SmallOfferCard from "../../../components/SmallOfferCard";
import OfferVerticalCard from "../../../components/OfferVerticalCard";
import { tr } from "../../../resources/translations";
import TextGeneric from "../../../components/TextGeneric";
import Icon from "../../../components/Icon";
import { updateWishList } from "../../../utils/wishFuncs";
import { ProductProps } from "../../../resources/interfaces/screens/homeTabList";
import { ItemCartProps } from "../../../resources/interfaces/screens/cart";
import { updateCartList } from "../../../utils/cartFuncs";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import OfferHorizontalCard from "../../../components/OfferHorizontalCard";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.homeFilter.contentBackground};
    height:${hdp(100)}px;
    padding-horizontal:5%;
`;
const TypeContainer = styled.View`
    justify-content:center;
    flex-direction:row;
    padding-vertical:5%;
`;
const ProductsContainer = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    margin-vertical:2%;
    justify-content:space-between;
    align-items:center;
`;
const NoResult = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.home.noResult};
    margin-top:50%;
    text-align:center;
    width:100%;
`;
const BottomSpacer = styled.View`
    padding: ${hdp(5)}px;
`;
const HomeFilter = ({navigation, route, cart, wish}: HomeFilterProps) => {
    const theme = useTheme();
    const [showSearchBar, setShowSearchBar] = useState(false);
    const {cartList} = cart;
    const {wishList} = wish;
    const searchComponent = () => {
        return (<SearchBar type={'small'} placeholder={tr('homeFilter.searchPlaceHolder')}/>)
    }
    const [filteredData, setFilteredData] = useState(route?.params.products);
    const [filteredTypes, setFilteredTypes] = useState(route?.params.types);
    const getSelectedTypes = (type, callBack) => {
        let tempTypesArray = filteredTypes;
        filteredTypes?.includes(type) ? tempTypesArray = tempTypesArray?.filter(item => item !== type) : tempTypesArray = tempTypesArray?.concat([type])
        callBack(tempTypesArray)
    }
    useEffect(() => {
        setFilteredData(route?.params.products.map(item => (item[getByLanguage('types')].some(ai => filteredTypes?.includes(ai))) ? item : null).filter(i => i != null))
    }, [filteredTypes]);
    const customLeftCompo = () => {
        return (
            <Icon type={'FontAwesome'} name={'filter'} color={theme.homeFilter.headerIcon} size={theme.text.s5}/>
        )
    }
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
    const renderList = useCallback(() => filteredData?.map(item => {
            switch (item.layout) {
                case 'small':
                    return <SmallOfferCard key={item.id}
                                           productImageUrl={item.imageUrl}
                                           type={item.type}
                                           discount={item.discount}
                                           buyNumber={item.buyNumber}
                                           freeNumber={item.freeNumber}
                                           title={item[getByLanguage('name')]}
                                           containerStyle={{
                                               width: wdp(25),
                                               height: wdp(25),
                                               marginVertical: hdp(1.5),
                                               marginHorizontal: '1%'
                                           }}/>;
                case 'vertical' :
                    return <OfferVerticalCard key={item.id}
                                              productId={item.id}
                                              productImageUrl={item.imageUrl}
                                              offerValue={item.offerValue}
                                              productPrice={item.price}
                                              favorite={wishList.includes(item.id)}
                                              offerTime={item.offerTime}
                                              productName={item[getByLanguage('name')]}
                                              isAddedToCart={cartList.findIndex(cartItem => cartItem.id === item.id) > -1}
                                              onPressHeartIcon={(item) => updateWishList(wishList, item.id, item.inFavoriteList).then()}
                                              onPressCartIcon={({
                                                                    inCart,
                                                                    id
                                                                }) => updateCart(inCart, item)}
                                              containerStyle={{
                                                  width: wdp(35),
                                                  height: getByScreenSize(hdp(32), hdp(45)),
                                                  marginVertical: hdp(1.5),
                                                  marginLeft: wdp(5)
                                              }}/>;
                default:
                    return <OfferHorizontalCard key={item.id} offerValue={item.offerValue} imageUri={item.imageUrl}
                                                containerStyle={{
                                                    width: wdp(94), height: hdp(20), marginVertical: hdp(1.5)
                                                }}/>;
            }
        }
    ), [wishList, cartList, filteredData])
    return (
        <MainLayout backgroundColor={theme.homeFilter.background}
                    noPadding={true}
                    showBackButton={true} backHeader={true} backColor={theme.homeFilter.headerIcon}
                    onBackPress={() => navigation?.goBack()} title={route?.params?.title.toLocaleUpperCase()}
                    titleColor={theme.homeFilter.headerTitle}
                    showRightIcon={true} rightIconName={!showSearchBar ? 'search' : 'close'}
                    rightIconType={!showSearchBar ? 'Feather' : 'AntDesign'}
                    rightIconColor={theme.homeFilter.headerIcon} onRightPress={() => setShowSearchBar(!showSearchBar)}
                    customLeftCompo={customLeftCompo} showSearchBar={showSearchBar} searchCompo={searchComponent}
        >
            <Container>
                <TypeContainer>
                    {route?.params?.types.map((type, key) => <Label key={key} title={type}
                                                                    onPress={() => getSelectedTypes(type, (types) => setFilteredTypes(types))}
                                                                    titleStyle={{color: filteredTypes?.includes(type) ? theme.homeFilter.activeTypeTitle : theme.homeFilter.inActiveTypeTitle}}
                                                                    containerStyle={{
                                                                        backgroundColor: filteredTypes?.includes(type) ? theme.homeFilter.typeBackground : theme.homeFilter.typeBackground + '11',
                                                                        width: wdp(18),
                                                                        marginHorizontal: '1%',
                                                                        paddingVertical: '1%',
                                                                        paddingHorizontal: '1%'
                                                                    }}/>)}
                </TypeContainer>
                <ScrollView>
                    <ProductsContainer>
                        {renderList()}
                        {filteredData?.length === 0 && <NoResult>{tr('homeFilter.noResult')}</NoResult>}
                    </ProductsContainer>
                    <BottomSpacer/>
                </ScrollView>
            </Container>
        </MainLayout>);
}

const mapStateToProps = (state: RootState) => ({
    cart: state.cart,
    wish: state.wish
});

export default connect(mapStateToProps)(HomeFilter);

