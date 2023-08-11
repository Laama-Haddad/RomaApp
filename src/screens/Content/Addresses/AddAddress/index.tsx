import React, { useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import TextInput from "../../../../components/TextInput";
import { getByScreenSize } from "../../../../utils/responsive";
import { AddressItem } from "../../../../resources/interfaces/AddressItem";
import GenericButton from "../../../../components/Button";

const Container = styled.View`
  background-color: ${({theme}) => theme.addAddress.cardBackground};
  padding-top: 5%;
  padding-bottom: 8%;
  padding-horizontal: 3%;
  margin-top: 4%;
  border-radius: 12px;
`
const AddAddress = ({navigation}) => {
    const theme = useTheme();
    const [form, updateForm] = useState<AddressItem>({
        title: '',
        telephone: '',
        street: '',
    });
    const handleChange = (key, value, isNumber = false) => {
        updateForm({
            ...form,
            [key]: isNumber ? +value : value,
        });
    };

    return (
        <MainLayout backHeader showBackButton
                    backgroundColor={theme.addAddress.background} title={tr('addAddress.title')}
                    titleColor={theme.addAddress.headerTitle}
                    backgroundHeader={theme.addAddress.headerBackground}
                    backColor={theme.addAddress.headerIcon} onBackPress={() => navigation?.goBack()}>
            <Container>
                <TextInput
                    placeholder={tr('addAddress.recipientName')}
                    placeholderTextColor={theme.signUp.inputPlaceHolder}
                    value={form.title}
                    inputStyle={{
                        paddingLeft: getByScreenSize(10, 25) * 2.2,
                    }}
                    onChangeText={(val) => handleChange('title', val)}
                    containerStyle={{marginBottom: '6%'}}/>
                <TextInput
                    placeholder={tr('addAddress.telephone')}
                    placeholderTextColor={theme.signUp.inputPlaceHolder}
                    value={form.telephone}
                    inputStyle={{
                        paddingLeft: getByScreenSize(10, 25) * 2.2,
                    }}
                    onChangeText={(val) => handleChange('telephone', val)}
                    containerStyle={{marginBottom: '6%'}}/>
                <TextInput
                    placeholder={tr('addAddress.address')}
                    placeholderTextColor={theme.signUp.inputPlaceHolder}
                    value={form.street}
                    inputStyle={{
                        paddingLeft: getByScreenSize(10, 25) * 2.2,
                    }}
                    showRightIcon
                    rightIconName={'circles'}
                    rightIconType={'SVG'}
                    rightIconSize={theme.text.s5}
                    rightIconColor={theme.info}
                    onRightIconPress={() => navigation.navigate('mapSheet')}
                    rightIconStyle={{right: getByScreenSize(9, 24)}}
                    onChangeText={(val) => handleChange('street', val)}
                    containerStyle={{marginBottom: '10%'}}/>
                <GenericButton title={tr('app.finished')} containerStyle={{backgroundColor: theme.primary}}
                               titleStyle={{color: 'white'}} onPress={() => navigation?.goBack()}/>
            </Container>
        </MainLayout>
    )
}

export default AddAddress;
