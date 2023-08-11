import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { ForgetPasswordProps } from "../../../resources/interfaces/screens/forgetPassword";
import { tr } from "../../../resources/translations";
import TextGeneric from "../../../components/TextGeneric";
import GenericButton from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import MainLayout from "../../MainLayout";
import VerificationCode from "../../../components/VerificationCode";
import { showGlobalModal } from "../../../connected-components/Modal/actions";
import { showGlobalAlert } from "../../../connected-components/Alert/actions";

const Container = styled.View`
    background-color:${({theme}) => theme.forgetPassword.contentBackground};
    align-items:center;
    border-radius:15px;
    padding-horizontal:3%;
    padding-top:10%;
    padding-bottom:7%;
    margin-top:5%;
`;
const InfoView = styled.View``;
const Info = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.forgetPassword.info};
    text-align:center;
`;
const EmailSent = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.forgetPassword.emailSent};
`;
const ResendTouchable = styled.TouchableOpacity`
    flex-direction:row;
`;
const NoCode = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.forgetPassword.noCode};
`;
const Resend = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.forgetPassword.resend};
`;
const ForgetPassword = ({navigation}: ForgetPasswordProps) => {
    const theme = useTheme();
    // const [email, setEmail] = useState('');
    // const [digitCode, setDigitCode] = useState('');
    // const [showVerificationCode, setShowVerificationCode] = useState(false);
    // const [encryptedEmail, setEncryptedEmail] = useState('');
    // const [emailDisabled, setEmailDisabled] = useState(true);
    // const [codeDisabled, setCodeDisabled] = useState(true);
    const convertToEncryptedEmail = () => {
        let a : string[]= email.split("@");
        let b : string = a[0];
        let tempValue = "";
        for (let i in b) {
            if (i > 1 && i < b.length) tempValue += "*"; else tempValue += b[i];
        }
        {
            !!a[1] && setEncryptedEmail(tempValue + '@' + a[1])
        }
    }
    useEffect(() => {
        setEmailDisabled(email === '');
    }, [email]);
    useEffect(() => {
        setCodeDisabled(digitCode.length !== 4);
    }, [digitCode]);
    return (<MainLayout backgroundColor={theme.homeBackground1} backgroundHeader={theme.forgetPassword.headerBackground}
                        backHeader={true} backColor={theme.forgetPassword.headerBackIcon}
                        title={tr('forgetPassword.headerTitle')}
                        titleStyle={{fontSize: theme.text.s5}} titleColor={theme.forgetPassword.headerTitle}
                        onBackPress={() => navigation?.goBack()}>
        <Container>
            {/*<InfoView>*/}
            {/*    <Info>{tr('forgetPassword.info')}</Info>*/}
            {/*</InfoView>*/}
            {/*{!showVerificationCode && <TextInput*/}
            {/*    placeholder={tr('forgetPassword.emailPlaceHolder')}*/}
            {/*    placeholderTextColor={theme.forgetPassword.inputPlaceHolder}*/}
            {/*    value={email}*/}
            {/*    onChangeText={(value) => {*/}
            {/*        setEmail(value);*/}
            {/*        setEncryptedEmail('');*/}
            {/*    }}*/}
            {/*    // onEndEditing={() => convertToEncryptedEmail()}*/}
            {/*    containerStyle={{marginTop: '5%', marginBottom: '6%'}}*/}
            {/*/>}*/}
            {/*{showVerificationCode && <VerificationCode onSuccess={(value) => setDigitCode(value)}*/}
            {/*                                           containerStyle={{*/}
            {/*                                               marginTop: '5%', marginBottom: '6%'*/}
            {/*                                           }}/>}*/}
            {/*{!!encryptedEmail && !showVerificationCode &&*/}
            {/*    <EmailSent>{tr('forgetPassword.emailSent')}{encryptedEmail}</EmailSent>}*/}
            {/*{showVerificationCode && <ResendTouchable onPress={() => showGlobalAlert({*/}
            {/*    title: tr('forgetPassword.sendCodeMessageTitle'),*/}
            {/*    message: tr('forgetPassword.sendCodeMessage')*/}
            {/*})}><NoCode>{tr('forgetPassword.noCode')}</NoCode>*/}
            {/*    <Resend>{tr('forgetPassword.resend')}</Resend></ResendTouchable>}*/}
            {/*{!showVerificationCode ? <GenericButton title={tr('forgetPassword.submitTitle')}*/}
            {/*                                        onPress={() => {*/}
            {/*                                            // showGlobalModal({*/}
            {/*                                            //     title: tr('forgetPassword.modalTitle'),*/}
            {/*                                            //     message: tr('forgetPassword.modalMessage')*/}
            {/*                                            // });*/}
            {/*                                            // setShowVerificationCode(!showVerificationCode)*/}
            {/*                                        }}*/}
            {/*                                        disabled={emailDisabled}*/}
            {/*                                        // containerStyle={{*/}
            {/*                                        //     backgroundColor: theme.forgetPassword.submitBackground,*/}
            {/*                                        //     width: '100%',*/}
            {/*                                        //     marginTop: '5%'*/}
            {/*                                        // }}*/}
            {/*                                        // titleStyle={{*/}
            {/*                                        //     color: theme.forgetPassword.submitTitle,*/}
            {/*                                        //     fontFamily: theme.fonts.semi_bold,*/}
            {/*                                        //     fontSize: theme.text.s8*/}
            {/*                                        // }}*/}
            {/*    />*/}
            {/*    :*/}
            {/*    <GenericButton title={tr('forgetPassword.submitTitle')}*/}
            {/*                   onPress={() => navigation?.navigate('changePassword')}*/}
            {/*                   disabled={codeDisabled}*/}
            {/*                   containerStyle={{*/}
            {/*                       backgroundColor: theme.forgetPassword.submitBackground,*/}
            {/*                       width: '100%',*/}
            {/*                       marginTop: '5%'*/}
            {/*                   }}*/}
            {/*                   titleStyle={{*/}
            {/*                       color: theme.forgetPassword.submitTitle,*/}
            {/*                       fontFamily: theme.fonts.semi_bold,*/}
            {/*                       fontSize: theme.text.s8*/}
            {/*                   }}/>}*/}
        </Container>
    </MainLayout>);
}
export default ForgetPassword;
