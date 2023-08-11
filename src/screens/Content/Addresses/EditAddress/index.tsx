import React, { useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import TextInput from "../../../../components/TextInput";
import { getByScreenSize } from "../../../../utils/responsive";
import { EditAddressProps } from "../../../../resources/interfaces/screens/Address/editAddress";
import { AddressItem } from "../../../../resources/interfaces/AddressItem";
import GenericSwitch from "../../../../components/Switch";
import TextGeneric from "../../../../components/TextGeneric";
import GenericButton from "../../../../components/Button";
import Ripple from 'react-native-material-ripple';
import { showGlobalModal } from "../../../../connected-components/Modal/actions";

const SwitchContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-vertical: 10%;
    padding-horizontal: 4%;
    margin-bottom: 6%;
    background-color: ${({theme}) => theme.editAddress.inputBackground};
    border-radius: 12px;
`;
const Label = styled(TextGeneric)`
    font-size: ${({theme}) => getByScreenSize(theme.text.s7, theme.text.s8)}px;
    color: ${({theme}) => theme.editAddress.label};
`;
const AddNewAddressContainer = styled(Ripple)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-vertical: 4%;
    padding-horizontal: 4%;
    margin-bottom: 6%;
    background-color: ${({theme}) => theme.editAddress.inputBackground};
    border-radius: 12px;
`;
const DashedBorder = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-vertical: 4%;
    padding-horizontal: 3%;
    border-style: dashed;
    border-width: 1px;
    border-radius: 2px;
    border-color: #707070;
`;
const EditAddress = ({navigation, route}: EditAddressProps) => {
    const theme = useTheme();
    const {item} = route.params;
    const [form, updateForm] = useState<AddressItem>({...item})
    const handleChange = (key, value, isNumber = false) => {
        updateForm({
            ...form,
            [key]: isNumber ? +value : value,
        });
    };

    return (
        <MainLayout backHeader showBackButton
                    backgroundColor={theme.editAddress.background} title={tr('editAddress.title')}
                    titleColor={theme.editAddress.headerTitle}
                    showRightIcon
                    rightIconName={'delete'}
                    rightIconType={'SVG'}
                    rightIconColor={theme.editAddress.removeIcon}
                    onRightPress={() => showGlobalModal({
                        message: tr('editAddress.deleteMessage'),
                        type: 'question',
                        onConfirm: () => navigation?.goBack()
                    })}
                    backgroundHeader={theme.editAddress.headerBackground}
                    backColor={theme.editAddress.headerIcon} onBackPress={() => navigation?.goBack()}>
            <TextInput
                label={tr('editAddress.fullName')}
                placeholderTextColor={theme.signUp.inputPlaceHolder}
                value={form.recipient}
                inputStyle={{
                    paddingLeft: getByScreenSize(10, 25) * 2.2,
                    backgroundColor: theme.editAddress.inputBackground
                }}
                onChangeText={(val) => handleChange('recipient', val)}
                containerStyle={{marginBottom: '6%'}}/>
            <TextInput
                label={tr('editAddress.telephone')}
                placeholderTextColor={theme.signUp.inputPlaceHolder}
                value={form.telephone}
                inputStyle={{
                    paddingLeft: getByScreenSize(10, 25) * 2.2,
                    backgroundColor: theme.editAddress.inputBackground
                }}
                onChangeText={(val) => handleChange('telephone', val)}
                containerStyle={{marginBottom: '6%'}}/>
            <TextInput
                label={tr('editAddress.address')}
                placeholderTextColor={theme.signUp.inputPlaceHolder}
                value={form.street}
                inputStyle={{
                    paddingLeft: getByScreenSize(10, 25) * 2.2,
                    backgroundColor: theme.editAddress.inputBackground
                }}
                onChangeText={(val) => handleChange('street', val)}
                containerStyle={{marginBottom: '6%'}}/>
            <SwitchContainer>
                <Label>{tr('editAddress.defaultAddress')}</Label>
                <GenericSwitch/>
            </SwitchContainer>
            <AddNewAddressContainer rippleContainerBorderRadius={12} onPress={() => navigation?.navigate('addAddress')}>
                <DashedBorder>
                    <Label style={{color: '#2d2d2d'}}>{tr('editAddress.addNewAddress')}</Label>
                </DashedBorder>
            </AddNewAddressContainer>
            <GenericButton title={tr('app.save')} containerStyle={{backgroundColor: theme.primary}}
                           titleStyle={{color: 'white'}} onPress={() => navigation?.goBack()}/>
        </MainLayout>
    )
}

export default EditAddress;
