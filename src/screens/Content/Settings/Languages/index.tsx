import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import translations, { tr } from "../../../../resources/translations";
import { hdp } from "../../../../utils/responsive";
import { FlatList, I18nManager } from "react-native";
import TextGeneric from "../../../../components/TextGeneric";
import { LanguageProps } from "../../../../resources/interfaces/screens/Settings/languages";
import ExistLanguages from '../../../../resources/translations/loaders';
import { LanguageItemProps } from "../../../../resources/interfaces/items/languageItem";
import Icon from "../../../../components/Icon";
import { ToggleLanguage } from "../../../../utils/langFuncs";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/store";
import RNRestart from 'react-native-restart';
import { isEmptyObject } from "../../../../utils/funcs";

const Container = styled.View`
    background-color:${({theme}) => theme.languages.background};
    padding:5%;
    height:${hdp(92)}px;
`;
const ContentContainer = styled.View`
    background-color:${({theme}) => theme.languages.contentBackground};
    border-radius:10px;
    padding:5%;
`;
const LanguageTouchable = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:space-between
`;
const LanguageView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const LanguageItem = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.languages.language};
    font-family:${({theme}) => theme.fonts.semi_bold};
    margin-horizontal:7%;
`;
const Separator = styled.View`
    width:100%;
    height:1px;
    background-color:${({theme}) => theme.languages.separator};
    margin-vertical:3.5%;
`;
const Languages = ({navigation, lang}: LanguageProps) => {
    const theme = useTheme();
    const [languages, setLanguages] = useState<LanguageItemProps[]>([]);
    const {language} = lang;
    const [selectedIndex, setSelectedIndex] = useState(!isEmptyObject(language) ? language?.id : 0);
    useEffect(() => {
        let tempArray: LanguageItemProps[] = [];
        tempArray.push(ExistLanguages.en);
        tempArray.push(ExistLanguages.ar);
        setLanguages(tempArray);
    }, []);
    const onToggleLanguage = (index, callBack) => {
        setSelectedIndex(index);
        callBack();
    }
    const renderItem = ({item, index}) => {
        return (
            <LanguageTouchable onPress={() => {
                if (index === selectedIndex) navigation?.goBack()
                else {
                    onToggleLanguage(index, () => navigation?.navigate('loading', {label: item.languageCode === 'en' ? "Please wait for the English language setting" : "يرجى الانتظار من أجل إعداد اللغة العربية"}));
                    ToggleLanguage(item).then(() => {
                        translations(item.languageCode)
                        I18nManager.forceRTL(item.isRTL);
                        RNRestart.Restart();
                    })
                }
            }}>
                <LanguageView>
                    <LanguageItem>{item.language}</LanguageItem>
                </LanguageView>
                {selectedIndex === index &&
                    <Icon name={"check"} type={'SVG'} size={theme.text.s6} color={theme.languages.checkIcon}/>}
            </LanguageTouchable>
        );
    }
    return (<MainLayout backgroundColor={theme.languages.headerBackground} enableScroll={false} noPadding
                        title={tr('languages.headerTitle')} titleColor={theme.languages.headerTitle}
                        backHeader backColor={theme.languages.headerIcon}
                        onBackPress={() => navigation?.goBack()}
    >
        <Container>
            <ContentContainer>
                <FlatList data={languages} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}
                          ItemSeparatorComponent={() => <Separator/>}/>
            </ContentContainer>
        </Container>
    </MainLayout>);
}

const mapStateToProps = (state: RootState) => ({
    lang: state.lang
});

export default connect(mapStateToProps)(Languages);
