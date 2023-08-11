import React from 'react';
import styled, { useTheme } from "styled-components/native";
import TextGeneric from "../../../components/TextGeneric";
import { getByScreenSize, hdp, wdp } from "../../../utils/responsive";
import { tr } from "../../../resources/translations";
import GenericButton from "../../../components/Button";
// @ts-ignore
import Welcome2Svg from '../../../resources/assets/welcome2.svg';
import { WelcomeWithEmailProps } from "../../../resources/interfaces/screens/welcomeWithEmail";
import Icon from "../../../components/Icon";
import { I18nManager } from "react-native";

const Container = styled.View`
    flex:1;
`;
const TopView = styled.View`
    flex:2;
    justify-content:center;
    align-items:center;
`;
const BottomView = styled.View`
    flex:1.4;
    align-items:center;
    border-top-left-radius:${getByScreenSize(30, 40)}px;
    border-top-right-radius:${getByScreenSize(30, 40)}px;
    background-color:${({theme}) => theme.welcomeWithEmail.bottomBackground};
    padding-top:10%;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.welcomeWithEmail.title};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const Description = styled(TextGeneric)`
    color:${({theme}) => theme.welcomeWithEmail.description};
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    text-align: center;
    width:65%;
    margin-top:3%;
`;

const WelcomeWithEmail = ({navigation}: WelcomeWithEmailProps) => {
    const theme = useTheme();
    return (<Container>
        <Icon name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
              type={"Feather"} size={theme.text.s2}
              color={theme.welcomeWithEmail.backIcon} style={{position: 'absolute', left: wdp(1), top: hdp(6)}}
              role={'button'} onPress={() => navigation?.goBack()}/>
        <TopView>
            <Welcome2Svg width={'90%'} height={'60%'}/>
        </TopView>
        <BottomView>
            <Title>{tr('welcomeWithEmail.title')}</Title>
            <Description>{tr('welcomeWithEmail.description')}</Description>
            <GenericButton title={tr('welcomeWithEmail.login')} onPress={() => navigation?.navigate('signInWithEmail')}
                           containerStyle={{
                               backgroundColor: theme.welcomeWithEmail.buttonLoginBackground,
                               width: '80%',
                               marginTop: '8%'
                           }} titleStyle={{color: theme.welcomeWithEmail.buttonLoginText}}/>
            <GenericButton title={tr('welcomeWithEmail.register')} onPress={() => navigation?.navigate('signUp')}
                           containerStyle={{
                               backgroundColor: `${theme.welcomeWithEmail.buttonRegisterBackground}35`,
                               width: '80%',
                               marginTop: '5%'
                           }} titleStyle={{color: theme.welcomeWithEmail.buttonRegisterText}}/>
        </BottomView>
    </Container>);
}
export default WelcomeWithEmail;



