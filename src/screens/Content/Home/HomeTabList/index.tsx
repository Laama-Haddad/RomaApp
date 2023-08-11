import React, {useCallback, useEffect, useState} from 'react';
import { getByScreenSize, hdp, wdp } from "../../../../utils/responsive";
import styled, { useTheme } from "styled-components/native";
import SearchBar from "../../../../components/SearchBar";
import Icon from "../../../../components/Icon";
import Label from "../../../../components/Label";
import OfferHorizontalCard from "../../../../components/OfferHorizontalCard";
import OfferVerticalCard from "../../../../components/OfferVerticalCard";
import { tr } from "../../../../resources/translations";
import { ScrollView } from 'react-native';
import TextGeneric from "../../../../components/TextGeneric";
import { HomeTabListProps, ProductProps } from "../../../../resources/interfaces/screens/homeTabList";
import { updateCartList } from "../../../../utils/cartFuncs";
import { RootState } from "../../../../redux/store";
import { connect } from "react-redux";
import { updateWishList } from "../../../../utils/wishFuncs";
import { ItemCartProps } from "../../../../resources/interfaces/screens/cart";
import SmallOfferCard from "../../../../components/SmallOfferCard";
import { getByLanguage } from "../../../../utils/langFuncs";

const Container = styled.View`
    height:${hdp(90)}px;
`;
const FilterContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-vertical:5%;
`;
const TypesContainer = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center
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
    padding: ${hdp(9)}px;
`;
const HomeTabList = ({tab, tabLabel,category, onPressFilterIcon, onPressProduct, cart, wish}: HomeTabListProps) => {
    const theme = useTheme();
    const [filteredData, setFilteredData] = useState(tab.list);
    const [filteredTypes, setFilteredTypes] = useState(tab[getByLanguage('productTypes')]);
    const {cartList} = cart;
    const {wishList} = wish;
    const renderList = useCallback(() => filteredData.map(item => {
        switch (item.layout) {
            case 'horizontal':
                return  null; /*<OfferHorizontalCard key={item.id} offerValue={item.offerValue} imageUri={item.imageUrl}
                                            containerStyle={{
                                                width: wdp(94), height: hdp(20), marginVertical: hdp(1.5)
                                            }} onPress={() => onPressProduct({
                    category: category, details: item
                })}/>;*/
            case 'vertical':
                return null; /*<OfferVerticalCard key={item.id}
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
                                                                inCart, id
                                                            }) => updateCart(inCart, item)}
                                          containerStyle={{
                                              width: wdp(35),
                                              height: getByScreenSize(hdp(32), hdp(45)),
                                              marginVertical: hdp(1.5),
                                              marginLeft: wdp(5)
                                          }}
                                          onPress={() => onPressProduct({
                                              category: category, details: item
                                          })}
                />*/
            default:
                return null; /*<SmallOfferCard key={item.id}
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
                                       }}
                                       onPress={() => onPressProduct({
                                           category: category, details: item
                                       })}/>*/
        }
    }), [wishList, cartList, filteredData]);

    const getSelectedTypes = (type, callBack) => {
        let tempTypesArray = filteredTypes;
        filteredTypes.includes(type) ? tempTypesArray = tempTypesArray.filter(item => item !== type) : tempTypesArray = tempTypesArray.concat([type])
        callBack(tempTypesArray)
    }
    const updateCart = (inCart: boolean, item: ProductProps) => {
        const tempItem: ItemCartProps = {
            ...item, itemCartId: cartList.length, isExist: true, quantity: 1, power: false, color: ''
        };
        updateCartList(cartList, tempItem, inCart).then();
    }
    useEffect(() => {
        setFilteredData(tab.list.map(item => (item[getByLanguage('types')].some(ai => filteredTypes.includes(ai))) ? item : null).filter(i => i != null))
    }, [filteredTypes])
    return (<Container>
        <FilterContainer>
            <SearchBar type={'small'} containerStyle={{width: getByScreenSize(wdp(25), wdp(30)), height: wdp(10)}}
                       placeholder={tr('home.searchPlaceHolder')}/>
            <Icon name={'filter'} type={'Feather'} color={theme.home.filterIcon} size={theme.text.s5}
                  role={'button'}
                  onPress={() => onPressFilterIcon({tab: tab})}/>
            <TypesContainer>
                {tab[getByLanguage('productTypes')].map((type, key) => <Label key={key} title={type}
                                                            onPress={() => getSelectedTypes(type, (types) => setFilteredTypes(types))}
                                                            titleStyle={{color: filteredTypes.includes(type) ? theme.home.activeTypeTitle : theme.home.inActiveTypeTitle}}
                                                            containerStyle={{
                                                                width: wdp(17),
                                                                backgroundColor: filteredTypes.includes(type) ? theme.home.typeBackground : theme.home.typeBackground + '11',
                                                                marginHorizontal: '1%',
                                                                paddingVertical: '2%',
                                                                paddingHorizontal: '1%'
                                                            }}/>)}
            </TypesContainer>
        </FilterContainer>
        <ScrollView>
            {/*{renderList()}*/}
            {filteredData.length === 0 && <NoResult>{tr('home.noResult')}</NoResult>}
            <BottomSpacer/>
        </ScrollView>
    </Container>)
}

const mapStateToProps = (state: RootState) => ({
    cart: state.cart, wish: state.wish
});

export default connect(mapStateToProps)(HomeTabList);
