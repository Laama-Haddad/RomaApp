import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { SplashChooseLanguageProps } from "../../../resources/interfaces/screens/splashChooseLanguage";
import GenericButton from "../../../components/Button";
import { LanguageItemProps } from "../../../resources/interfaces/items/languageItem";
import { hdp, wdp } from "../../../utils/responsive";
import { ToggleLanguage } from "../../../utils/langFuncs";
import ExistLanguages from '../../../resources/translations/loaders';
import TextGeneric from "../../../components/TextGeneric";
import { FlatList, I18nManager } from "react-native";
import Icon from "../../../components/Icon";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import translations from "../../../resources/translations";
import { isEmptyObject } from "../../../utils/funcs";

const Container = styled.View`
    width:${wdp(100)}px;
    height:${hdp(110)}px;
    align-items:center;
    justify-content:center;
    background-color:${({theme}) => theme.splashChooseLanguage.background};
    padding-horizontal:5%;
`;
const LogoContainer = styled.View`
    width:${wdp(60)}px;
    height:${wdp(60)}px;
    border-radius:${wdp(60) / 2}px;
    background-color:${({theme}) => theme.splashChooseLanguage.logoBackground};
    align-items:center;
    justify-content:center;
    margin-bottom:30%;
`;
const Logo = styled.Image`
    width:80%;
    height:30%;
`;
const BottomView = styled.View`
    width:100%;
    height:35%;
    position:absolute;
    bottom:0;
    align-items:center;
    justify-content:center;
`;
const LanguagesContainer = styled.View`
    background-color:${({theme}) => theme.splashChooseLanguage.languagesBackground};
    border-radius:25px;
    width:100%;
    padding-horizontal:5%;
    padding-vertical:3%;
`;
const LanguageTouchable = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-vertical:2%;
`;
const Language = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.splashChooseLanguage.language}
`;
const SplashChooseLanguage = ({navigation, lang}: SplashChooseLanguageProps) => {
    const theme = useTheme();
    const {language} = lang;
    const [currentLanguage, setCurrentLanguage] = useState<LanguageItemProps>(language ? language : ExistLanguages.en);
    const [languages, setLanguages] = useState<LanguageItemProps[]>([]);
    const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(!isEmptyObject(language) ? language?.id : 0);
    useEffect(() => {
        let tempArray: LanguageItemProps[] = [];
        tempArray.push(ExistLanguages.en);
        tempArray.push(ExistLanguages.ar);
        setLanguages(tempArray);
    }, []);
    const renderItem = ({item, index}) => {
        return (
            <LanguageTouchable onPress={() => {
                setSelectedLanguageIndex(index);
                setCurrentLanguage(item);
            }}>
                <Language>{item.language}</Language>
                {index === selectedLanguageIndex &&
                    <Icon name={"check"} type={'SVG'} color={theme.splashChooseLanguage.checkIcon}
                          size={theme.text.s6}/>}
            </LanguageTouchable>
        );
    }
    return (<Container>
        <LogoContainer>
            <Logo source={require('../../../resources/assets/logo.png')}/>
        </LogoContainer>
        <BottomView>
            <LanguagesContainer>
                <FlatList data={languages} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}/>
            </LanguagesContainer>
            <GenericButton title={selectedLanguageIndex === 0 ? 'Continue' : "متابعة"}
                           onPress={() => ToggleLanguage(currentLanguage).then(() => {
                               translations(currentLanguage.languageCode);
                               // I18nManager.forceRTL(currentLanguage.isRTL);
                               navigation?.navigate('welcome');
                           })}
                           containerStyle={{
                               backgroundColor: theme.splashChooseLanguage.submitBackground,
                               width: '100%',
                               marginVertical: '5%'
                           }}
                           titleStyle={{color: theme.splashChooseLanguage.submitTitle}}/>
        </BottomView>
    </Container>);
}

const mapStateToProps = (state: RootState) => ({
    lang: state.lang
});

export default connect(mapStateToProps)(SplashChooseLanguage);
