import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { WelcomeProps } from "../../../resources/interfaces/screens/welcome";
import TextGeneric from "../../../components/TextGeneric";
import { getByScreenSize, hdp, wdp } from "../../../utils/responsive";
import { tr } from "../../../resources/translations";
import GenericButton from "../../../components/Button";
// @ts-ignore
import WelcomeSvg from '../../../resources/assets/welcome.svg';
import Icon from '../../../components/Icon';
import { I18nManager } from "react-native";

const Container = styled.View`
    flex:1;
`;
const TriangleView = styled.View`
    position:absolute;
   ${I18nManager.isRTL ? 'left' : 'right'}:-10px;
    top: -38%;
    width:28%;
    height:80%;
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
    background-color:${({theme}) => theme.welcome.bottomBackground};
    padding-top:10%;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.welcome.text};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const RegisterTouchable = styled.TouchableOpacity`
    flex-direction:row;
    margin-top:8%;
`;
const Register = styled(TextGeneric)`
    color:${({theme}) => theme.welcome.text};
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const Welcome = ({navigation}: WelcomeProps) => {
    const theme = useTheme();
    return (<Container>
        <Icon name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
              type={"Feather"} size={theme.text.s2}
              color={theme.welcomeWithEmail.backIcon} style={{position: 'absolute', left: wdp(1), top: hdp(6)}}
              role={'button'} onPress={() => navigation?.navigate('splashChooseLanguage')}/>
        <TopView>
            <WelcomeSvg width={'90%'} height={'60%'}/>
        </TopView>
        <BottomView>
            <TriangleView>
                <Icon name={'triangle'} type={'SVG'} size={'100%'} color={theme.welcome.triangle}/>
            </TriangleView>
            <Title>{tr('welcome.title')}</Title>
            <GenericButton title={tr('welcome.withEmail')}
                           onPress={() => navigation?.navigate('welcomeWithEmail')}
                           containerStyle={{
                               backgroundColor: theme.welcome.buttonBackground,
                               width: '80%',
                               marginTop: '8%',
                               zIndex: 100,
                               position: 'relative'
                           }} titleStyle={{color: theme.welcome.buttonText}}/>
            <GenericButton title={tr('welcome.withPhone')} onPress={() => navigation?.navigate('signInWithPhone')}
                           containerStyle={{
                               backgroundColor: theme.welcome.buttonBackground, width: '80%', marginTop: '5%'
                           }} titleStyle={{color: theme.welcome.buttonText}}/>
            <RegisterTouchable onPress={() => navigation?.navigate('signUp')}>
                <Register>{tr('welcome.noAccount')}</Register>
            </RegisterTouchable>
        </BottomView>
    </Container>);
}
export default Welcome;



