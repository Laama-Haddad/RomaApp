import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { PaymentProps } from "../../../../resources/interfaces/screens/payment";
import { tr } from "../../../../resources/translations";
import { getByScreenSize, wdp } from "../../../../utils/responsive";
import TextInput from "../../../../components/TextInput";
import { View } from "react-native";
import GenericButton from "../../../../components/Button";

const Container = styled.View`
   background-color:${({theme}) => theme.payment.background};
   padding-horizontal:3%;
   align-items:center;
   padding-bottom:5%;
`;
const mandatoryFields = ['account', 'cardNumber', 'expDate', 'cvCode'];
const Payment = ({onToggleStep}: PaymentProps) => {
    const theme = useTheme();
    useEffect(() => {
        !!onToggleStep && onToggleStep({headerTitle: tr('payment.headerTitle')})
    }, []);
    const [form, updateForm] = useState({
        account: '', cardNumber: '', expDate: '', cvCode: ''
    });
    const [formComplete, setFormComplete] = useState(false);

    const handleChange = (key, value) => {
        updateForm({
            ...form, [key]: value,
        });
    };
    useEffect(() => {
        let _formComplete = true;
        for (let index = 0; index < mandatoryFields.length; index++) {
            const field = mandatoryFields[index];
            if (!form[field] || form[field].length <= 0) {
                setFormComplete(false);
                _formComplete = false;
                break;
            }
        }
        if (_formComplete) setFormComplete(true);
    }, [form]);
    return (
        <Container>
            <GenericButton title={tr('payment.visaButtonTitle')}
                           titleStyle={{color: theme.payment.buttonTitle, marginLeft: '4%'}} onPress={() => {
            }}
                           showRightText
                           rightText={tr('payment.buttonRightText')}
                           rightTextStyle={{color: theme.payment.buttonRightText, fontSize: theme.text.s9}}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.payment.buttonBackground,
                               marginTop: '5%'
                           }}/>
            <GenericButton title={tr('payment.creditButtonTitle')}
                           titleStyle={{color: theme.payment.buttonTitle}} onPress={() => {
            }}
                           showLeftIcon
                           leftIconName={'circle-slice-8'}
                           leftIconType={'MaterialCommunityIcons'}
                           leftIconSize={theme.text.s6}
                           leftIconColor={theme.payment.buttonLeftIcon}
                           showRightIcon
                           rightIconName={'chevron-down'}
                           rightIconType={'Feather'}
                           rightIconSize={theme.text.s2}
                           rightIconColor={theme.payment.buttonRightIcon}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.payment.buttonBackground,
                               marginTop: '3%'
                           }}/>
            <TextInput placeholder={tr('payment.accountPlaceHolder')}
                       placeholderTextColor={theme.payment.inputPlaceHolder}
                       inputStyle={{backgroundColor: theme.payment.inputBackground}}
                       containerStyle={{marginTop: '3%', width: wdp(90)}}
                       value={form.account}
                       onChangeText={text => handleChange('account', text)}
            />
            <TextInput placeholder={tr('payment.cardNumberPlaceHolder')}
                       placeholderTextColor={theme.payment.inputPlaceHolder}
                       inputStyle={{backgroundColor: theme.payment.inputBackground}}
                       containerStyle={{marginTop: '3%', width: wdp(90)}}
                       value={form.cardNumber}
                       onChangeText={text => handleChange('cardNumber', text)}
                       showRightIcon
                       rightIconName={'creditCard'}
                       rightIconType={'SVG'}
                       rightIconSize={theme.text.s2}
                       rightIconStyle={{right: getByScreenSize(10, 20)}}
            />
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: wdp(90)}}>
                <TextInput placeholder={tr('payment.expDataPlaceHolder')}
                           placeholderTextColor={theme.payment.inputPlaceHolder}
                           inputStyle={{backgroundColor: theme.payment.inputBackground}}
                           containerStyle={{marginTop: '3%', width: wdp(42)}}
                           value={form.expDate}
                           onChangeText={text => handleChange('expDate', text)}
                />
                <TextInput placeholder={tr('payment.cvCodePlaceHolder')}
                           placeholderTextColor={theme.payment.inputPlaceHolder}
                           inputStyle={{backgroundColor: theme.payment.inputBackground}}
                           containerStyle={{marginTop: '3%', width: wdp(42)}}
                           value={form.cvCode}
                           onChangeText={text => handleChange('cvCode', text)}
                />
            </View>
            <GenericButton title={tr('payment.bankTransferButtonTitle')}
                           titleStyle={{color: theme.payment.buttonTitle}} onPress={() => {
            }}
                           showLeftIcon
                           leftIconName={'circle-slice-8'}
                           leftIconType={'MaterialCommunityIcons'}
                           leftIconSize={theme.text.s6}
                           leftIconColor={theme.payment.buttonLeftIcon}
                           showRightIcon
                           rightIconName={'chevron-right'}
                           rightIconType={'Feather'}
                           rightIconSize={theme.text.s2}
                           rightIconColor={theme.payment.buttonRightIcon}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.payment.buttonBackground,
                               marginTop: '10%'
                           }}/>
            <GenericButton title={tr('payment.cashPaymentButtonTitle')}
                           titleStyle={{color: theme.payment.buttonTitle}} onPress={() => {
            }}
                           showLeftIcon
                           leftIconName={'circle-slice-8'}
                           leftIconType={'MaterialCommunityIcons'}
                           leftIconSize={theme.text.s6}
                           leftIconColor={theme.payment.buttonLeftIcon}
                           showRightIcon
                           rightIconName={'chevron-right'}
                           rightIconType={'Feather'}
                           rightIconSize={theme.text.s2}
                           rightIconColor={theme.payment.buttonRightIcon}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.payment.buttonBackground,
                               marginTop: '3%'
                           }}/>
            <GenericButton title={tr('payment.appleButtonTitle')}
                           titleStyle={{color: theme.payment.buttonTitle}} onPress={() => {
            }}
                           showLeftIcon
                           leftIconName={'circle-slice-8'}
                           leftIconType={'MaterialCommunityIcons'}
                           leftIconSize={theme.text.s6}
                           leftIconColor={theme.payment.buttonLeftIcon}
                           showRightIcon
                           rightIconName={'chevron-right'}
                           rightIconType={'Feather'}
                           rightIconSize={theme.text.s2}
                           rightIconColor={theme.payment.buttonRightIcon}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.payment.buttonBackground,
                               marginTop: '3%'
                           }}/>
        </Container>
    );
}
export default Payment;
