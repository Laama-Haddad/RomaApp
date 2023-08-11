import React from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import { FlatList } from "react-native";
import { orderList } from "../../../../resources/static/orderList";
import OrderListItem from "../../../../components/OrderListItem";
import TextGeneric from "../../../../components/TextGeneric";
import GenericButton from "../../../../components/Button";
import { wdp } from "../../../../utils/responsive";
import EmptyOrderSvg from '../../../../resources/assets/emptyCart.svg';
import { OrderHistoryProps } from "../../../../resources/interfaces/screens/Order/orderHistory";

const Container = styled.View`
    background-color:${({theme}) => theme.orderHistory.background};
    height:100%;
    padding-horizontal:5%;
    padding-vertical:5%;
`;
const EmptyContainer = styled.View`
    align-items:center;
    padding-vertical:10%;
`;
const InfoContainer = styled.View`
    border-radius:10px;
    background-color:${({theme}) => theme.orderHistory.emptyOrderBackground};
    border-radius:12px;
    align-items:center;
    padding-horizontal:5%;
    padding-vertical:7%;
    margin-top:10%;
`;
const Title = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s5}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.orderHistory.title};
`;
const Description = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.orderHistory.description};
    text-align:center;
    margin-vertical:4%;
`;
const OrderHistory = ({navigation}: OrderHistoryProps) => {
    const theme = useTheme();
    const renderItem = ({item}) => <OrderListItem status={item.status} orderNumber={item.orderNumber} date={item.date}
                                                  numOfItems={item.numOfItems}
                                                  onPress={() => navigation?.navigate('trackOrder', {order: item})}/>
    const renderEmptyOrder = () => {
        return (
            <EmptyContainer>
                <EmptyOrderSvg width={wdp(60)} height={wdp(40)}/>
                <InfoContainer>
                    <Title>
                        {tr('orderHistory.title')}
                    </Title>
                    <Description>
                        {tr('orderHistory.description')}
                    </Description>
                    <GenericButton title={tr('orderHistory.shopButtonTitle')}
                                   titleStyle={{color: theme.orderHistory.buttonTitle}}
                                   containerStyle={{
                                       backgroundColor: theme.orderHistory.buttonBackground, width: wdp(80)
                                   }} onPress={() => navigation?.navigate('Home')}/>
                </InfoContainer>
            </EmptyContainer>)
    }
    return (<MainLayout backHeader
                        enableScroll={false} noPadding
                        onBackPress={() => navigation?.goBack()}
                        title={tr('orderHistory.headerTitle')}>
        <Container>
            {orderList.length != 0 ? <FlatList data={orderList} renderItem={renderItem}/> : renderEmptyOrder()}
        </Container>
    </MainLayout>)
}
export default OrderHistory;
