import React, {useEffect, useState} from 'react';
import {ProductDetailsProps} from "../../../resources/interfaces/screens/productDetails";
import styled, {useTheme} from "styled-components/native";
import {getByScreenSize, hdp, wdp} from "../../../utils/responsive";
import {tr} from "../../../resources/translations";
import Heart from "../../../components/Heart";
import TextGeneric from "../../../components/TextGeneric";
import GenericButton from "../../../components/Button";
import Label from "../../../components/Label";
import Stars from "../../../components/Stars";
import Icon from "../../../components/Icon";
import CircleColor from "../../../components/CircleColor";
import RadioGroup from "../../../components/RadioGroup";
import {I18nManager, Platform, ScrollView, View} from "react-native";
import {updateCartList} from "../../../utils/cartFuncs";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {ItemCartProps} from "../../../resources/interfaces/screens/cart";
import {updateWishList} from "../../../utils/wishFuncs";
import Header from "../../../components/Header";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    flex: 1;
`;
const Image = styled.ImageBackground`
    width:100%;
    flex-direction: column;
    justify-content: space-between;
    height: ${hdp(65)}px;
    padding-bottom: ${hdp(5)}px;
`;
const ColoringContainer = styled.View`
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
`;
const TestImage = styled.Image`
    width:${wdp(20)}px;
    height:${wdp(20)}px;
    border-radius:${wdp(10)}px;
    opacity:${({degree}) => degree};
`;
const CircleColorsView = styled.View`
    padding-horizontal:1%;
    padding-vertical:3%;
    border-radius: 50px;
    background-color:${({theme}) => theme.productDetails.backgroundColorsContainer + '33'};
    justify-content:center;
    align-items:center;
    width:${wdp(12)}px;
`;
const Colors = styled(TextGeneric)`
    color:${({theme}) => theme.productDetails.titleColorsContainer};
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const CircleColorComponent = styled(CircleColor)`
    margin-vertical:5%;
`;
const BottomView = styled.View`
    height:${hdp(45)}px;
    border-top-right-radius:30px;
    border-top-left-radius:30px;
    background-color:${({theme}) => theme.productDetails.background};
    zIndex:100;
    padding-horizontal:5%;
    padding-top:9%;
    align-items:center;
    bottom:0px;
    position:absolute;
    width:100%;
`;
const PriceView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;
const TitleView = styled.View`
    align-items:flex-start;
`;
const RatingView = styled.View`
    flex-direction:row;
    padding-top:2%;
    align-items:center;
`;
const Rate = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.productDetails.label};
    margin-horizontal:2%;
    margin-top:2%;
`;
const Title = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.productDetails.label};
    text-align:${I18nManager.isRTL ? "right" : "left"};
`;
const Price = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.productDetails.price};
`;
const PowerView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-vertical:5%;
`;
const Power = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.productDetails.label};
`;
const PowerValueView = styled.View`
    flex-direction:row;
    justify-content:space-between;
`;
const QuantityView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-top:5%;
    margin-bottom:5%;
`;
const Quantity = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.productDetails.label};
`;
const QuantityValueView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const QuantityValue = styled(TextGeneric)`
    color:${({theme}) => theme.productDetails.quantity};
    border-color:${({theme}) => theme.productDetails.backgroundButton};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    border-width: 2px;
     border-radius:${getByScreenSize(Platform.OS === 'ios' ? 20 : 25, Platform.OS === 'ios' ? 40 : 45)}px;
    width:${wdp(25)}px;
    text-align:center;
    margin-horizontal:2%;
`;
const DegreeView = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    align-items:center;
`;
const Degree = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.productDetails.label};
    font-family:${({theme}) => theme.fonts.bold};
    text-align:center;
    margin-vertical:1%;
    margin-right:3%;
`;
const colorsAry = [{id: 0, name: '#FF0D66', label: 'Pink'}, {id: 1, name: '#FF914D', label: 'Orange'}, {
    id: 2,
    name: '#FFDE59',
    label: 'Yellow'
}, {id: 3, name: '#FF5757', label: 'Red'}, {id: 4, name: '#156797', label: 'Blue'}, {
    id: 5,
    name: '#159749',
    label: 'Green'
}];
const ProductDetails = ({
                            navigation, route, cart, wish
                        }: ProductDetailsProps) => {
    const theme = useTheme();
    const {category, details} = route.params;
    const {cartList} = cart;
    const {wishList} = wish;
    const [color, setColor] = useState('');
    const [fav, setFav] = useState(details.favorite);
    const [powerValue, setPowerValue] = useState(false);
    const [quantityValue, setQuantityValue] = useState(1);
    const [leftDegree, setLeftDegree] = useState(0);
    const [rightDegree, setRightDegree] = useState(0);
    useEffect(() => {
        if (cartList.findIndex(cartItem => cartItem.id === details.id) > -1) {
            let idx = details.id;
            cartList[idx]?.power && setPowerValue(cartList[idx].power);
            cartList[idx]?.quantity && setQuantityValue(cartList[idx].quantity);
            cartList[idx]?.color && setColor(cartList[idx].color);
        } else {
            setPowerValue(false);
            setQuantityValue(1);
            setColor('');
        }
    }, [details]);
    const customRightCompo = () => (
        <Heart onToggleFavorite={() => onChangeFavorite()} isFavorite={wishList.includes(details.id)}
               radius={getByScreenSize(18, 22)}
               size={theme.text.s7} type={'solid'}/>)
    const onChangeFavorite = () => {
        let newValue = !wishList.includes(details.id);
        setFav(newValue);
        updateWishList(wishList, details.id, newValue).then();
    }
    const onChange = (val) => {
        let newQuantity = quantityValue + val;
        setQuantityValue(newQuantity);
    }
    const addToCart = () => {
        const item: ItemCartProps = {
            ...details,
            itemCartId: cartList.length,
            isExist: true,
            quantity: quantityValue,
            power: powerValue,
            leftDegree: leftDegree,
            rightDegree: rightDegree,
            color: color,
            favorite: fav
        };
        updateCartList(cartList, item, true).then(() => navigation?.goBack());
    }
    const onToggleDegrees = ({leftDegree, rightDegree}) => {
        if (leftDegree === 0 && rightDegree === 0) setPowerValue(false); else {
            setLeftDegree(leftDegree);
            setRightDegree(rightDegree);
        }
    }
    return (<Container>
        <Image source={{uri: details.imageUrl}}>
            <Header backHeader showBackButton title={tr('productDetails.headerTitle')}
                    backgroundColor={'transparent'}
                    titleColor={theme.productDetails.headerTitle + '88'}
                    backColor={theme.productDetails.headerIcon}
                    onBackPress={() => navigation?.goBack()}
                    customRightCompo={customRightCompo} noPadding/>
            <ColoringContainer>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {details?.images?.map((uri, key) => <View key={key}
                                                              style={{flex: 1, marginHorizontal: 5}}><TestImage
                        source={{uri: uri}} resizeMode={'cover'}
                        degree={0.7}/></View>)}
                </ScrollView>
                <CircleColorsView>
                    <Colors>{tr('productDetails.color')}:</Colors>
                    <RadioGroup style={{marginTop: '5%'}} list={colorsAry}
                                renderItem={(item, selected) => <CircleColorComponent
                                    colorItem={{id: item.id, color: item.name}}
                                    radius={wdp(4)}
                                    showBorder={true}
                                    selected={selected === item.id}
                                />}
                                onValueChange={(selectedId) => colorsAry.filter(item => item.id === selectedId ? setColor(item.label) : setColor(''))}
                                radius={wdp(8)}/>
                </CircleColorsView>
            </ColoringContainer>
        </Image>
        <BottomView>
            <PriceView><TitleView><Title>{details[getByLanguage('name')]}</Title><RatingView><Stars
                starsCount={details.starsCount} fullStarColor={theme.productDetails.stars}
                starSize={theme.text.s9}
                containerStyle={{width: '40%'}}/>
                <Rate>{details.starsCount}</Rate>
            </RatingView>
            </TitleView>
                <Price>${details.price}</Price>
            </PriceView>
            <PowerView>
                {category.toLowerCase() === 'lenses' && (<>
                    <Power>{tr('productDetails.power')}:</Power>
                    <PowerValueView>
                        <Label title={tr('productDetails.noPower')} onPress={() => setPowerValue(false)}
                               titleStyle={{color: theme.productDetails.label, fontSize: theme.text.s8}}
                               containerStyle={{
                                   width: wdp(27),
                                   paddingVertical: '1.5%',
                                   marginHorizontal: '2%',
                                   backgroundColor: !powerValue ? theme.productDetails.backgroundButton + 'ff' : theme.productDetails.backgroundButton + '77'
                               }}/>
                        <Label title={tr('productDetails.medical')} onPress={() => {
                            setPowerValue(true);
                            navigation?.navigate('sightPower', {
                                onToggleValues: ({
                                                     leftDegree, rightDegree
                                                 }) => onToggleDegrees({
                                    leftDegree, rightDegree
                                })
                            })
                        }}
                               titleStyle={{color: theme.productDetails.label, fontSize: theme.text.s8}}
                               containerStyle={{
                                   width: wdp(27),
                                   paddingVertical: '1.5%',
                                   backgroundColor: powerValue ? theme.productDetails.backgroundButton + 'ff' : theme.productDetails.backgroundButton + '77'
                               }}/>
                    </PowerValueView>
                </>)}
            </PowerView>
            <DegreeView>
                {!!leftDegree && <Degree>{tr('productDetails.leftDegree')}: {leftDegree.toFixed(2)}</Degree>}
                {!!rightDegree && <Degree>{tr('productDetails.rightDegree')}: {rightDegree.toFixed(2)}</Degree>}
            </DegreeView>
            <QuantityView>
                <Quantity>{tr('productDetails.quantity')}</Quantity>
                <QuantityValueView>
                    <Icon disabled={quantityValue === 1} role={'button'}
                          rippleContainerBorderRadius={wdp(7) / 2} type={'Feather'} name={'minus'}
                          color={theme.productDetails.minus} size={theme.text.s10}
                          style={{
                              backgroundColor: theme.productDetails.backgroundButton + '88',
                              width: wdp(7),
                              height: wdp(7)
                          }} onPress={() => {
                        onChange(-1)
                    }}/>
                    <QuantityValue>{quantityValue}</QuantityValue>
                    <Icon type={'Feather'} name={'plus'} color={theme.productDetails.plus} size={theme.text.s10}
                          role={'button'} style={{
                        backgroundColor: theme.productDetails.backgroundButton, width: wdp(7), height: wdp(7)
                    }} onPress={() => onChange(+1)}/>
                </QuantityValueView>
            </QuantityView>
            <GenericButton title={tr('productDetails.submitTitle')}
                           titleStyle={{color: theme.productDetails.submitTitle}} onPress={() => addToCart()}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.productDetails.backgroundButton,
                               position: 'absolute',
                               bottom: '10%'
                           }}/>
        </BottomView>
    </Container>);
}

const mapStateToProps = (state: RootState) => ({
    cart: state.cart, wish: state.wish
});

export default connect(mapStateToProps)(ProductDetails);
