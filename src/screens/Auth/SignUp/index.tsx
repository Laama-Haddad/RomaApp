import React, { useState } from 'react';
import { SignUpProps } from "../../../resources/interfaces/screens/signUp";
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView, Platform } from 'react-native';
import TextGeneric from "../../../components/TextGeneric";
import TextInput from "../../../components/TextInput";
import GenericButton from "../../../components/Button";
import { getByScreenSize, hdp } from "../../../utils/responsive";
import { CountryProps } from "../../../resources/interfaces/screens/Address/chooseCountry";
import Ripple from 'react-native-material-ripple';
import { flags } from "../../../resources/static/flags";

const Container = styled.View`
    background-color:${({theme}) => theme.signUp.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    height:${hdp(75)}px;
    margin-top:5%;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.signUp.title};
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s5}px;
    margin-top:10%;
`;
const SubTitle = styled(TextGeneric)`
    color:${({theme}) => theme.signUp.subTitle};
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-size:${({theme}) => theme.text.s6}px;
;`
const SeparatorView = styled.View`
    flex-direction:row;
    margin-vertical:4%;
    align-items:center;
`;
const Line = styled.View`
    height:4px;
    flex:1;
    background-color:${({theme}) => theme.signUp.line};
`;
const OR = styled(TextGeneric)`
    color:${({theme}) => theme.signUp.or};
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
    margin-horizontal:10%;
`;
const SignInTouchable = styled.TouchableOpacity`
    flex-direction:row;
    position:absolute;
    bottom:3%;
    width:100%;
    align-items:center;
    justify-content:center;
`;
const AlreadyAccount = styled(TextGeneric)`
    color:${({theme}) => theme.signUp.alreadyAccount};
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
`;
const SignIn = styled(TextGeneric)`
    color:${({theme}) => theme.signUp.signIn};
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
`;
const Flag = styled.Image`
    width:${getByScreenSize(25, 40)}px
    height:${getByScreenSize(25, 40)}px
    resize-mode: contain;
    border-radius: 100px;
`;
const SignUp = ({navigation}: SignUpProps) => {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [country, setCountry] = useState<CountryProps>();
    const checkValidation = (email, phone) => {
        setDisabled(email === '' && phone === '');
    }
    const renderCountryFlag = () => {
        return (
            <Ripple style={{
                position: 'absolute', left: getByScreenSize(20, 30),
                zIndex: 1, top: getByScreenSize(12, 18),
            }} onPress={() => navigation?.navigate('chooseCountry', {
                previousCountry: country,
                onToggleCountry: ({country}) => setCountry(country)
            })}>
                {!!country && <Flag source={flags[country.alpha2]}/>}
            </Ripple>
        );
    }
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
            <MainLayout backgroundColor={theme.homeBackground1} backgroundHeader={theme.signUp.headerBackground}
                        backHeader={true} backColor={theme.signUp.headerBackIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('signUp.headerTitle')} titleColor={theme.signUp.headerTitle}
            >
                <Container>
                    <Title>{tr('signUp.title')}</Title>
                    <SubTitle>{tr('signUp.subTitle')}</SubTitle>
                    <TextInput
                        placeholder={tr('signUp.emailPlaceHolder')}
                        placeholderTextColor={theme.signUp.inputPlaceHolder}
                        value={email}
                        onChangeText={value => {
                            setEmail(value);
                            setPhone('');
                            checkValidation(value, '');
                        }}
                        inputStyle={{paddingLeft: getByScreenSize(25, 35) * 2.2}}
                        containerStyle={{marginTop: '10%'}}
                        showLeftIcon
                        leftIconColor={theme.signUp.emailIcon}
                        leftIconName={'email'}
                        leftIconType={'Zocial'}
                    />
                    <SeparatorView>
                        <Line/>
                        <OR>{tr('signUp.or')}</OR>
                        <Line/>
                    </SeparatorView>
                    <TextInput
                        placeholder={tr('signUp.phonePlaceHolder')}
                        placeholderTextColor={theme.signUp.inputPlaceHolder}
                        value={!!country && phone === '' ? country.dial_code + ' ' + phone : phone}
                        onChangeText={value => {
                            setPhone(value);
                            setEmail('');
                            checkValidation('', value);
                        }}
                        editable={!!country}
                        keyboardType={'numeric'}
                        containerStyle={{marginBottom: '10%'}}
                        inputStyle={{paddingLeft: getByScreenSize(25, 35) * 2.2}}
                        showLeftIcon={!country}
                        leftIconColor={theme.signUp.globeIcon}
                        leftIconName={'globe'}
                        leftIconType={'Feather'}
                        onLeftIconPress={() => navigation?.navigate('chooseCountry', {
                            previousCountry: country,
                            onToggleCountry: ({country}) =>
                                setCountry(country)
                        })}
                        customLeftIcon={renderCountryFlag}
                        showRightIcon={phone !== ''}
                        rightIconColor={theme.signUp.checkIcon}
                        rightIconName={'check'}
                        rightIconSize={theme.text.s10}
                        rightIconType={'Entypo'}
                        rightIconStyle={{
                            backgroundColor: theme.signUp.checkIconBackground,
                            width: getByScreenSize(15, 30),
                            height: getByScreenSize(15, 30),
                            right: getByScreenSize(20, 30)
                        }}/>
                    <GenericButton title={tr('signUp.buttonSignUp')}
                                   onPress={() => navigation?.navigate('phoneVerification', {
                                       sentTo: email === '' ? phone : email,
                                       type: 'signUp'
                                   })}
                                   disabled={disabled}
                                   containerStyle={{backgroundColor: theme.signUp.buttonBackground, width: '100%'}}
                                   titleStyle={{color: theme.signUp.buttonTitle, fontFamily: theme.fonts.regular}}/>
                    <GenericButton title={tr('signUp.buttonGoogle')} onPress={() => {
                    }} containerStyle={{
                        backgroundColor: theme.signUp.buttonBackground, width: '100%', marginVertical: '4%'
                    }} titleStyle={{color: theme.signUp.buttonTitle, fontFamily: theme.fonts.regular}}/>
                    <GenericButton title={tr('signUp.buttonApple')} onPress={() => {
                    }} containerStyle={{backgroundColor: theme.signUp.buttonBackground, width: '100%'}}
                                   titleStyle={{color: theme.signUp.buttonTitle, fontFamily: theme.fonts.regular}}/>
                </Container>
            </MainLayout>
            <SignInTouchable onPress={() => navigation?.navigate('signInWithEmail')}>
                <AlreadyAccount>{tr('signUp.alreadyAccount')}</AlreadyAccount>
                <SignIn>{tr('signUp.signIn')}</SignIn>
            </SignInTouchable>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}
export default SignUp;
