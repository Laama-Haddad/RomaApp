import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { SignInWithPhoneProps } from "../../../resources/interfaces/screens/signInWithPhone";
import TextGeneric from "../../../components/TextGeneric";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView, Platform } from 'react-native';
import TextInput from "../../../components/TextInput";
import { getByScreenSize } from "../../../utils/responsive";
import GenericButton from "../../../components/Button";
import { CountryProps } from "../../../resources/interfaces/screens/Address/chooseCountry";
import { flags } from "../../../resources/static/flags";
import Ripple from 'react-native-material-ripple';

const Container = styled.View`
    background-color:${({theme}) => theme.signInWithPhone.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    padding-top:10%;
    padding-bottom:7%;
    margin-top:5%;
`;
const Title = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s5}px;
    color:${({theme}) => theme.signInWithPhone.title};
    margin-vertical:2%;
`;
const SubTitle = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.signInWithPhone.subTitle};
`;
const SignUpTouchable = styled.TouchableOpacity`
    flex-direction:row;
    position:absolute;
    bottom:3%;
    width:100%;
    align-items:center;
    justify-content:center;
`;
const NotAlreadyAccount = styled(TextGeneric)`
    color:${({theme}) => theme.signInWithPhone.notAlready};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
`;
const SignUp = styled(TextGeneric)`
    color:${({theme}) => theme.signInWithPhone.signUp};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
`;
const Flag = styled.Image`
    width:${getByScreenSize(25, 40)}px
    height:${getByScreenSize(25, 40)}px
    resize-mode: contain;
    border-radius: 100px;
`;
const SignInWithPhone = ({navigation}: SignInWithPhoneProps) => {
    const theme = useTheme();
    const [phone, setPhone] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [country, setCountry] = useState<CountryProps>();
    const renderCountryFlag = () => {
        return (
            <Ripple style={{
                position: 'absolute', left: getByScreenSize(20, 30),
                zIndex: 1, top: getByScreenSize(12, 18),
            }} onPress={() => navigation?.navigate('chooseCountry', {
                onToggleCountry: ({country}) => setCountry(country)
            })}>
                {!!country && <Flag source={flags[country.alpha2]}/>}
            </Ripple>
        );
    }
    useEffect(() => {
        setDisabled(phone === '');
    }, [phone]);
    return (<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={48}
        style={{
            flexGrow: 1, width: '100%', height: '100%', backgroundColor: theme.homeBackground1
        }}>
        <KeyboardAwareScrollView
            enableOnAndroid
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <MainLayout backgroundColor={theme.homeBackground1}
                        backgroundHeader={theme.signInWithPhone.headerBackground}
                        backHeader={true} backColor={theme.signInWithPhone.headerBackIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('signInWithPhone.headerTitle')} titleColor={theme.signInWithPhone.headerTitle}
            ><Container>
                <Title>{tr('signInWithPhone.title')}</Title>
                <SubTitle>{tr('signInWithPhone.subTitle')}</SubTitle>
                <TextInput
                    placeholder={tr('signInWithPhone.phonePlaceHolder')}
                    placeholderTextColor={theme.signInWithPhone.inputPlaceHolder}
                    value={!!country && phone === '' ? country.dial_code + ' ' + phone : phone}
                    onChangeText={value => {
                        setPhone(value);
                    }}
                    editable={!!country}
                    keyboardType={'numeric'}
                    containerStyle={{marginTop: '7%', marginBottom: '10%'}}
                    inputStyle={{paddingLeft: getByScreenSize(25, 35) * 2.2}}
                    showLeftIcon={!country}
                    leftIconColor={theme.signInWithPhone.globeIcon}
                    leftIconName={'globe'}
                    leftIconType={'Feather'}
                    onLeftIconPress={() => navigation?.navigate('chooseCountry', {
                        onToggleCountry: ({country}) =>
                            setCountry(country)
                    })}
                    customLeftIcon={renderCountryFlag}
                    showRightIcon={phone !== ''}
                    rightIconColor={theme.signInWithPhone.checkIcon}
                    rightIconName={'check'}
                    rightIconSize={theme.text.s10}
                    rightIconType={'Entypo'}
                    rightIconStyle={{
                        backgroundColor: theme.signInWithPhone.checkIconBackground,
                        width: getByScreenSize(15, 30),
                        height: getByScreenSize(15, 30),
                        right: getByScreenSize(20, 30)
                    }}/>
                <GenericButton title={tr('signInWithPhone.submitTitle')}
                               onPress={() => navigation?.navigate('phoneVerification', {
                                   sentTo: phone,
                                   type: 'signIn'
                               })}
                               disabled={disabled}
                               containerStyle={{backgroundColor: theme.signInWithPhone.submitBackground, width: '100%'}}
                               titleStyle={{
                                   color: theme.signInWithPhone.submitTitle, fontFamily: theme.fonts.semi_bold
                               }}/>
            </Container>
            </MainLayout>
            <SignUpTouchable onPress={() => navigation?.navigate('signUp')}>
                <NotAlreadyAccount>{tr('signInWithPhone.notAlreadyAccount')}</NotAlreadyAccount>
                <SignUp>{tr('signInWithPhone.signUp')}</SignUp>
            </SignUpTouchable>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}
export default SignInWithPhone;
