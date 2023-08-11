import React, { useState } from 'react';
import { MyAddressesProps } from "../../../../resources/interfaces/screens/Address/myAddresses";
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import { FlatList } from "react-native";
import { addresses } from "../../../../resources/static/location";
import { hdp, wdp } from "../../../../utils/responsive";
import TextGeneric from "../../../../components/TextGeneric";
import Icon from "../../../../components/Icon";

const Container = styled.View`
    background-color:${({theme}) => theme.myAddresses.background};
    align-items:center;
    padding-vertical:5%;
    padding-horizontal:5%;
    height:100%;
`;
const AddressContainer = styled.TouchableOpacity`
    width:${wdp(90)}px;
    height:${hdp(20)}px;
    border-radius:12px;
    background-color:${({theme}) => theme.myAddresses.addressBackground};
    padding-horizontal:2%;
    margin-bottom:4%;
`;
const AddressTitle = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.myAddresses.addressTitle};
    font-family:${({theme}) => theme.fonts.semi_bold};
    text-align:center;
    margin-vertical:7%;
`;
const AddressDetails = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.myAddresses.addressDetails};
    font-family:${({theme}) => theme.fonts.semi_bold};
    margin-vertical:1%;
`;
const MyAddresses = ({navigation}: MyAddressesProps) => {
    const theme = useTheme();
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
    const renderItem = ({item, index}) => {
        return (<AddressContainer onPress={() => {
            setSelectedAddressIndex(index);
            navigation?.navigate('editAddress', {item})
        }}>
            {index === selectedAddressIndex &&
                <Icon name={'check'} type={'SVG'} color={theme.address.check} size={theme.text.s8} style={{
                    position: 'absolute', right: 10, top: 10,
                }}/>}
            <AddressTitle>{item.title}</AddressTitle>
            <AddressDetails>{item.street}</AddressDetails>
            <AddressDetails>{item.area},{item.city}</AddressDetails>
        </AddressContainer>);
    }
    return (<MainLayout backHeader showBackButton noPadding enableScroll={false}
                        backgroundColor={theme.myAddresses.headerBackground} title={tr('myAddresses.headerTitle')}
                        titleColor={theme.myAddresses.headerTitle}
                        backColor={theme.myAddresses.headerIcon} onBackPress={() => navigation?.goBack()}>
        <Container>
            <FlatList data={addresses} renderItem={renderItem} keyExtractor={(item) => item.id.toString()}/>
        </Container>
    </MainLayout>);
}
export default MyAddresses;
