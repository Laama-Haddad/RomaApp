import React, { useState } from 'react';
import { ChooseCountryProps } from "../../../../resources/interfaces/screens/Address/chooseCountry";
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import Icon from "../../../../components/Icon";
import SearchBar from "../../../../components/SearchBar";
import { getByScreenSize, hdp, wdp } from "../../../../utils/responsive";
import { FlatList } from "react-native";
import TextGeneric from "../../../../components/TextGeneric";
import { countries } from '../../../../utils/countries';
import { flags } from "../../../../resources/static/flags";

const Container = styled.View`
    background-color:${({theme}) => theme.chooseCountry.background};
    padding:5%;
    height:${hdp(92)}px;
`;
const ContentContainer = styled.View`
    background-color:${({theme}) => theme.chooseCountry.contentBackground};
    border-radius:10px;
    padding:5%;
`;
const CountryTouchable = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:space-between
`;
const CountryView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const Flag = styled.Image`
    width:${wdp(6)}px
    height:${wdp(4)}px
`;
const Country = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.chooseCountry.country};
    font-family:${({theme}) => theme.fonts.semi_bold};
    margin-horizontal:7%;
`;
const Separator = styled.View`
    width:100%;
    height:1px;
    background-color:${({theme}) => theme.chooseCountry.separator};
    margin-vertical:3.5%;
`;
const NoResult = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.chooseCountry.noResult};
    margin-vertical:${getByScreenSize(hdp(35), hdp(31))}px;
    text-align:center;
    width:100%;
`;
const ChooseCountry = ({navigation, route}: ChooseCountryProps) => {
    const theme = useTheme();
    const {onToggleCountry} = route.params;
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredCountryList, setFilteredCountryList] = useState(countries);
    const renderLeftHeaderIcon = () => {
        return (
            <Icon name={showSearchBar ? 'close' : 'chevron-left'} type={showSearchBar ? 'AntDesign' : 'Feather'}
                  color={theme.chooseCountry.headerIcon} size={showSearchBar ? theme.text.s4 : theme.text.s2}
                  role={'button'} onPress={() => {
                if (showSearchBar) {
                    setShowSearchBar(!showSearchBar);
                    setFilteredCountryList(countries);
                } else
                    navigation?.goBack();
            }}/>
        )
    }
    const renderItem = ({item, index}) => {
        return (
            <CountryTouchable onPress={() => {
                onToggleCountry({country: item});
                navigation?.goBack();
            }}>
                <CountryView>
                    <Flag source={flags[item.alpha2]}/>
                    <Country>{item.name}</Country>
                </CountryView>
            </CountryTouchable>
        )
    }
    const onSearch = (text) => {
        setSearchKeyword(text);
        setFilteredCountryList(countries.filter((country) => country.name.includes(text)));
    }
    return (<MainLayout customLeftHeader backgroundColor={theme.chooseCountry.headerBackground} enableScroll={false}
                        noPadding
                        title={tr('chooseCountry.headerTitle')} titleColor={theme.chooseCountry.headerTitle}
                        showRightIcon={!showSearchBar} rightIconType={'Feather'} rightIconName={'search'}
                        rightIconColor={theme.chooseCountry.headerIcon}
                        onRightPress={() => setShowSearchBar(!showSearchBar)}
                        customLeftCompo={renderLeftHeaderIcon}
    >
        <Container>
            {showSearchBar && <SearchBar placeholder={tr('chooseCountry.searchPlaceHolder')}
                                         placeholderTextColor={theme.chooseCountry.searchPlaceHolder}
                                         iconStyle={{color: theme.chooseCountry.searchIcon}}
                                         containerStyle={{
                                             backgroundColor: theme.chooseCountry.searchBarBackground,
                                             width: wdp(90),
                                             height: getByScreenSize(50, 65),
                                             marginBottom: '5%'
                                         }}
                                         value={searchKeyword}
                                         onChangeText={(text) => onSearch(text)}
            />}
            <ContentContainer>
                <FlatList data={filteredCountryList} renderItem={renderItem} initialNumToRender={15}
                          ItemSeparatorComponent={() => <Separator/>}/>
                {filteredCountryList.length === 0 && <NoResult>{tr('home.noResult')}</NoResult>}
            </ContentContainer>
        </Container>
    </MainLayout>);
}
export default ChooseCountry;
