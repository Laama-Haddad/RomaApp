import React, {useEffect, useState} from 'react';
import styled, {useTheme} from "styled-components/native";
import MainLayout from "../../MainLayout";
import Label from "../../../components/Label";
import {hdp, wdp} from "../../../utils/responsive";
import {paymentStatus} from "../../../utils/enums";
import {payments} from "../../../resources/static/payments";
import {FlatList} from "react-native";
import PaymentListItem from "../../../components/PaymentItem";
import {tr} from "../../../resources/translations";
import {PaymentItem} from "../../../resources/interfaces/paymentItem";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.paymentHistory.background};
    padding:5%;
    height:${hdp(92)}px;
`;
const TypeContainer = styled.View`
    justify-content:center;
    flex-direction:row;
    padding-bottom:3%;
`;
const Spacer = styled.View`
  padding: ${hdp(10)}px;
`
const types = [getByLanguage('success'), getByLanguage('failed'), getByLanguage('cancelled')];
const PaymentHistory = ({navigation}) => {
    const theme = useTheme();
    const [selected, setSelected] = useState(getByLanguage('success'));
    const [filterList, setFilterList] = useState<PaymentItem[]>([]);
    useEffect(() => {
        filterListByType(selected);
    }, [selected]);
    const filterListByType = (type: string) => {
        let temp = [...payments];
        temp = temp.filter(item => item.status === type);
        setFilterList(temp);
    }
    const renderItem = ({item}) => <PaymentListItem id={item.id} title={item[getByLanguage('title')]} price={item.price}
                                                    status={item.status} containerStyle={{marginVertical: '2%'}}/>
    return (
        <MainLayout backHeader backColor={theme.paymentHistory.headerBack} titleColor={theme.paymentHistory.headerTitle}
                    backgroundHeader={theme.paymentHistory.headerBackground}
                    onBackPress={() => navigation.goBack()}
                    enableScroll={false}
                    noPadding
                    bottomSpace
                    title={tr('paymentHistory.title')}>
            <Container>
                <TypeContainer>
                    {types.map((type, key) => <Label key={key} title={paymentStatus[type]}
                                                     onPress={() => setSelected(type)}
                                                     titleStyle={{color: selected === type ? theme.homeFilter.activeTypeTitle : theme.homeFilter.inActiveTypeTitle}}
                                                     containerStyle={{
                                                         backgroundColor: selected === type ? theme.homeFilter.typeBackground : theme.paymentHistory.typeBackground,
                                                         width: wdp(28),
                                                         marginHorizontal: '1%',
                                                         paddingVertical: '1%',
                                                         paddingHorizontal: '1%'
                                                     }}/>)}
                </TypeContainer>
                <FlatList data={filterList} renderItem={renderItem}
                          keyExtractor={(item) => item.id.toString()}
                          ListFooterComponent={() => <Spacer/>}/>
            </Container>
        </MainLayout>
    )
}

export default PaymentHistory;
