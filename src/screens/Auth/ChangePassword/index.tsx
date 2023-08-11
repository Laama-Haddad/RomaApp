import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { ChangePasswordProps } from "../../../resources/interfaces/screens/changePassword";
import { tr } from "../../../resources/translations";
import MainLayout from "../../MainLayout";
import TextInput from "../../../components/TextInput";
import GenericButton from "../../../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView, Platform } from 'react-native';
import TextGeneric from "../../../components/TextGeneric";

const Container = styled.View`
    background-color:${({theme}) => theme.changePassword.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    padding-top:10%;
    padding-bottom:7%;
    margin-top:5%;
`;
const DisMatchPasswords = styled(TextGeneric)`
     font-size:${({theme}) => theme.text.s9}px;
     color:${({theme}) => theme.changePassword.errorText};
     padding-top: 3%;
`;
const mandatoryFields = ['password', 'confirmPassword'];
const ChangePassword = ({navigation}: ChangePasswordProps) => {
    const theme = useTheme();
    const [form, updateForm] = useState({
        password: '', confirmPassword: ''
    });
    const [formComplete, setFormComplete] = useState(false);
    const [matchPasswords, setMatchPasswords] = useState(true);
    useEffect(() => {
        if (form.password && form.confirmPassword) {
            setMatchPasswords(form.password === form.confirmPassword);
        } else if (matchPasswords) {
            if (form.password || form.confirmPassword) setMatchPasswords(false);
        }
    }, [form.password, form.confirmPassword]);
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
        // setAuthStatus({logged:true});
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
            <MainLayout backgroundColor={theme.homeBackground1} backgroundHeader={theme.changePassword.headerBackground}
                        backHeader={true} backColor={theme.changePassword.headerBackIcon}
                        title={tr('changePassword.headerTitle')}
                        titleStyle={{fontSize: theme.text.s5}} titleColor={theme.changePassword.headerTitle}
                        onBackPress={() => navigation?.goBack()}>
                <Container>
                    <TextInput placeholder={tr('changePassword.passwordPlaceHolder')}
                               placeholderTextColor={theme.changePassword.inputPlaceHolder}
                               autoComplete={'password'}
                               value={form.password}
                               onChangeText={text => handleChange('password', text)}
                               secureTextEntry={form.password.length !== 0}
                               noEye={false}
                               containerStyle={{marginTop: '5%'}}
                    />
                    <TextInput placeholder={tr('changePassword.confirmPasswordPlaceHolder')}
                               placeholderTextColor={theme.changePassword.inputPlaceHolder}
                               autoComplete={'password'}
                               value={form.confirmPassword}
                               onChangeText={text => handleChange('confirmPassword', text)}
                               onEndEditing={() => form.password === form.confirmPassword}
                               secureTextEntry={form.confirmPassword.length !== 0}
                               noEye={false}
                               containerStyle={{marginTop: '5%'}}
                    />
                    {!matchPasswords && <DisMatchPasswords>{tr('changePassword.disMatch')}</DisMatchPasswords>}
                    <GenericButton title={tr('changePassword.submitTitle')}
                                   onPress={() => matchPasswords && formComplete && submit()}
                                   disabled={!matchPasswords || !formComplete}
                                   containerStyle={{
                                       backgroundColor: theme.changePassword.submitBackground,
                                       width: '100%',
                                       marginTop: '5%'
                                   }}
                                   titleStyle={{
                                       color: theme.changePassword.submitTitle,
                                       fontSize: theme.text.s7
                                   }}/>
                </Container>
            </MainLayout>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}
export default ChangePassword;
