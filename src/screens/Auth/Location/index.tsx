import React, { useEffect, useState } from 'react';
import { LocationProps } from "../../../resources/interfaces/screens/location";
import styled, { useTheme } from "styled-components/native";
import { tr } from "../../../resources/translations";
import MainLayout from "../../MainLayout";
import DropDownList from "../../../components/DropDownList";
import { areas, cities } from "../../../resources/static/location";
import GenericButton from "../../../components/Button";
import { ToggleAuth } from "../../../utils/authFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.location.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    padding-vertical:10%;
    margin-top:5%;
`;
const Location = ({navigation}: LocationProps) => {
    const theme = useTheme();
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        setDisabled(city === '' || area === '');
    }, [city, area]);
    return (<MainLayout backgroundColor={theme.homeBackground1} backgroundHeader={theme.location.headerBackground}
                        backHeader={true} backColor={theme.location.headerBackIcon} title={tr('location.headerTitle')}
                        titleStyle={{fontSize: theme.text.s5}} titleColor={theme.location.headerTitle}
                        onBackPress={() => navigation?.goBack()}>
        <Container>
            <DropDownList list={cities} placeHolder={tr('location.cityPlaceHolder')} titleKey={'name'}
                          valueKey={'name'} containerStyle={{marginBottom: '3%'}}
                          onValueChange={(value) => setCity(value)}/>
            <DropDownList list={areas} placeHolder={tr('location.areaPlaceHolder')} titleKey={'name'}
                          valueKey={'name'} onValueChange={(value) => setArea(value)}/>
            <GenericButton title={tr('location.submitTitle')} onPress={() => ToggleAuth({logged: false}).then()}
                           disabled={disabled}
                           containerStyle={{
                               backgroundColor: theme.location.submitBackground, width: '100%', marginTop: '5%'
                           }}
                           titleStyle={{color: theme.location.submitTitle}}/>
        </Container>
    </MainLayout>);
}
export default Location;
