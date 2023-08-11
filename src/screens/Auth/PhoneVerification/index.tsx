import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { PhoneVerificationProps } from "../../../resources/interfaces/screens/phoneVerification";
import { tr } from "../../../resources/translations";
import MainLayout from "../../MainLayout";
import TextGeneric from "../../../components/TextGeneric";
import VerificationCode from "../../../components/VerificationCode";
import GenericButton from "../../../components/Button";
import { TouchableOpacity } from "react-native";
import { showGlobalAlert } from "../../../connected-components/Alert/actions";
import { setAuthStatus } from "../SignInWithEmail/action";

const Container = styled.View`
    background-color:${({theme}) => theme.phoneVerification.contentBackground};
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
    color:${({theme}) => theme.phoneVerification.title};
    margin-vertical:2%;
`;
const SubTitle = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.phoneVerification.subTitle};
    text-align:center;
    line-height:25px;
`;
const InfoView = styled.View`
     flex-direction:row;
     width:80%;
     align-items:center;
     justify-content:center;
     margin-top:2%;
`;
const Info = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.phoneVerification.info};
`;
const ResendCode = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.phoneVerification.resendCode};
`;
const TimerView = styled.View`
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:3%;
`;
const Time = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-Size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.phoneVerification.time};
`;
const PhoneVerification = ({navigation, route}: PhoneVerificationProps) => {
    const theme = useTheme();
    const [disabled, setDisabled] = useState(true);
    const [verificationCode, setVerificationCode] = useState('');
    const [timer, setTimer] = useState('');
    const [showTimer, setShowTimer] = useState(false);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (counter === 1) startTimer(0); else if (counter === 2) startTimer(4); else if (counter === 3) startTimer(14); else if (counter === 4) startTimer(29);
    }, [counter]);
    useEffect(() => {
        setDisabled(verificationCode.length !== 4);
    }, [verificationCode]);
    let interval = null;
    const startTimer = (duration) => {
        let min = duration;
        let sec = 60;
        let secound = '';
        let minute = min < 10 ? ('0' + min.toString()) : min.toString();
        setTimer(minute + ' : ' + sec);
        setShowTimer(true);
        let id = setInterval(() => {
            sec--;
            if (sec === 0) {
                min--;
                sec = 60;
                if (min <= 0) {
                    stopTimer();
                }
            }
            secound = sec < 10 ? ('0' + sec.toString()) : sec.toString();
            minute = min < 10 ? ('0' + min.toString()) : min.toString();
            setTimer(minute + ' : ' + secound);
        }, 1000);
        interval = id;
    }
    const stopTimer = () => {
        clearInterval(interval);
        setShowTimer(false)
    }
    return (
        <MainLayout backgroundColor={theme.homeBackground1} backgroundHeader={theme.phoneVerification.headerBackground}
                    backHeader={true} backColor={theme.phoneVerification.headerBackIcon}
                    title={tr('phoneVerification.headerTitle')}
                    titleStyle={{fontSize: theme.text.s5}} titleColor={theme.phoneVerification.headerTitle}
                    onBackPress={() => navigation?.goBack()}>
            <Container>
                <Title>{tr('phoneVerification.title')}</Title>
                <SubTitle>{tr('phoneVerification.subTitle') + '\n' + route?.params.sentTo}</SubTitle>
                <VerificationCode onSuccess={(value) => setVerificationCode(value)}
                                  containerStyle={{marginVertical: '5%'}}/>
                <InfoView>
                    <Info>{tr('phoneVerification.info')}</Info>
                    <TouchableOpacity onPress={() => {
                        showGlobalAlert({
                            title: tr('phoneVerification.sendCodeMessageTitle'),
                            message: tr('phoneVerification.sendCodeMessage')
                        });
                        setCounter(counter + 1);
                    }}
                                      disabled={showTimer}>
                        <ResendCode>{tr('phoneVerification.resendCode')}</ResendCode>
                    </TouchableOpacity>
                </InfoView>
                {showTimer && <TimerView>
                    <Time>     {timer} {tr('phoneVerification.left')}</Time>
                </TimerView>}
                <GenericButton title={tr('phoneVerification.submitTitle')}
                               onPress={() => route?.params.type === 'signUp' ? navigation?.navigate('location') : setAuthStatus({logged: true})}
                               disabled={disabled}
                               containerStyle={{
                                   backgroundColor: theme.phoneVerification.submitBackground,
                                   width: '100%',
                                   marginTop: '5%'
                               }}
                               titleStyle={{
                                   color: theme.phoneVerification.submitTitle, fontFamily: theme.fonts.semi_bold
                               }}/>
            </Container>

        </MainLayout>);
}
export default PhoneVerification;
