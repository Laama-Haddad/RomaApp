import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { SignInWithEmailProps } from "../../../resources/interfaces/screens/signInWithEmail";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import TextGeneric from "../../../components/TextGeneric";
import { getByScreenSize, hdp } from "../../../utils/responsive";
import TextInput from "../../../components/TextInput";
import GenericButton from "../../../components/Button";
import Icon from '../../../components/Icon';
import { connect } from 'react-redux';
import { setAuthStatus } from './action';
import { RootState } from "../../../redux/store";
import { ToggleAuth } from "../../../utils/authFuncs";

const Container = styled.View`
    justify-content:center;
    height:${hdp(90)}px;
`;
const Title = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s5}px;
    color:${({theme}) => theme.signInWithEmail.title};
    margin-vertical:2%;
`;
const SubTitle = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.signInWithEmail.subTitle};
`;
const ContentView = styled.View`
    background-color:${({theme}) => theme.signInWithEmail.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    margin-top:5%;
`;
const ForgetView = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-vertical:5%;
    width:100%;
`;
const RememberTouchable = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:center;
`;
const CheckView = styled.View`
    width: ${getByScreenSize(15, 30)}px;
    height: ${getByScreenSize(15, 30)}px;
    border-width:2px;
    border-radius:5px;
    border-color:${({theme}) => theme.signInWithEmail.checkIconBackground};  
    justify-content:center;
    align-items:center;
`;
const Remember = styled(TextGeneric)`
    color:${({theme}) => theme.signInWithEmail.remember};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s8}px;
    margin-horizontal:5%;
`;
const Forget = styled(TextGeneric)`
    color:${({theme}) => theme.signInWithEmail.forget};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s8}px;
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
    color:${({theme}) => theme.signInWithEmail.notAlready};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
`;
const SignUp = styled(TextGeneric)`
    color:${({theme}) => theme.signInWithEmail.signUp};
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
`;
const mandatoryFields = ['username', 'password'];
const SignInWithEmail = ({navigation, auth, ...props}: SignInWithEmailProps) => {
    const theme = useTheme();
    const [rememberMe, setRememberMe] = useState(false);
    const [form, updateForm] = useState({
        username: '', password: ''
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
    const submit = async () => {
        ToggleAuth({logged: true}).then();
    };
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
                        backgroundHeader={theme.signInWithEmail.headerBackground}
                        backHeader={true} backColor={theme.signInWithEmail.headerBackIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('signInWithEmail.headerTitle')} titleColor={theme.signInWithEmail.headerTitle}
            >
                <Container>
                    <Title>{tr('signInWithEmail.title')}</Title>
                    <SubTitle>{tr('signInWithEmail.subTitle')}</SubTitle>
                    <ContentView>
                        <TextInput placeholder={tr('signInWithEmail.emailPlaceHolder')}
                                   placeholderTextColor={theme.signUp.inputPlaceHolder}
                                   autoComplete={'username'}
                                   value={form.username}
                                   onChangeText={text => handleChange('username', text)}
                                   inputStyle={{paddingLeft: getByScreenSize(25, 35) * 2.2}}
                                   containerStyle={{marginTop: '10%'}}
                                   showLeftIcon={true}
                                   leftIconColor={theme.signInWithEmail.inputIcon}
                                   leftIconName={'email'}
                                   leftIconType={'Zocial'}
                        />
                        <TextInput placeholder={tr('signInWithEmail.passwordPlaceHolder')}
                                   placeholderTextColor={theme.signInWithEmail.inputPlaceHolder}
                                   autoComplete={'password'}
                                   value={form.password}
                                   onChangeText={text => handleChange('password', text)}
                                   secureTextEntry={form.password.length !== 0}
                                   noEye={false}
                                   inputStyle={{paddingLeft: getByScreenSize(25, 35) * 2.2}}
                                   containerStyle={{marginTop: '5%'}}
                                   showLeftIcon={true}
                                   leftIconColor={theme.signInWithEmail.inputIcon}
                                   leftIconName={'lock'}
                                   leftIconType={'FontAwesome5'}
                        />
                        <ForgetView>
                            <RememberTouchable rememberMe={rememberMe} onPress={() => setRememberMe(!rememberMe)}>
                                <CheckView
                                    style={{backgroundColor: rememberMe ? theme.signInWithEmail.checkIconBackground : 'transparent'}}>
                                    {rememberMe &&
                                        <Icon name={'check'} type={'Entypo'} color={theme.signInWithEmail.checkIcon}
                                              size={theme.text.s11}/>}
                                </CheckView>
                                <Remember>{tr('signInWithEmail.remember')}</Remember>
                            </RememberTouchable>
                            <TouchableOpacity onPress={() => navigation?.navigate('forgetPassword')}>
                                <Forget>{tr('signInWithEmail.forget')}</Forget>
                            </TouchableOpacity>
                        </ForgetView>
                        <GenericButton title={tr('signInWithEmail.signIn')} onPress={() => formComplete && submit()}
                                       containerStyle={{
                                           backgroundColor: theme.signInWithEmail.submitBackground,
                                           width: '100%'
                                       }}
                                       titleStyle={{
                                           color: theme.signInWithEmail.submitTitle, fontFamily: theme.fonts.regular
                                       }}
                                       disabled={!formComplete}
                        />
                        <GenericButton title={tr('signInWithEmail.google')} onPress={() => {
                        }} containerStyle={{
                            backgroundColor: theme.signInWithEmail.submitBackground, width: '100%', marginVertical: '4%'
                        }}
                                       titleStyle={{
                                           color: theme.signInWithEmail.submitTitle, fontFamily: theme.fonts.regular
                                       }}/>
                        <GenericButton title={tr('signInWithEmail.apple')}
                                       onPress={() => {
                                       }} containerStyle={{
                            backgroundColor: theme.signInWithEmail.submitBackground, width: '100%', marginBottom: '7%'
                        }}
                                       titleStyle={{
                                           color: theme.signInWithEmail.submitTitle, fontFamily: theme.fonts.regular
                                       }}/>
                    </ContentView>
                </Container>
            </MainLayout>
            <SignUpTouchable onPress={() => navigation?.navigate('signUp')}>
                <NotAlreadyAccount>{tr('signInWithEmail.notAlreadyAccount')}</NotAlreadyAccount>
                <SignUp>{tr('signInWithEmail.signUp')}</SignUp>
            </SignUpTouchable>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setAuthStatus})(SignInWithEmail);
