import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {SearchBarProps} from "../../resources/interfaces/components/searchBar";
import Icon from '../Icon';
import {I18nManager} from "react-native";

const Container = styled.View`
    width:100%;
    height:100%;
    align-items:center;
    border-radius:50px;
    flex-direction:row;
    padding-horizontal:2%;
    background-color:${({
                                                          theme,
                                                          type
                                                      }) => type === 'small' ? `${theme.searchBar.smallSearchBarBackground}70` : `${theme.searchBar.largeSearchBarBackground}90`}   
`;
const Input = styled.TextInput`
    align-items:center;
    justify-content: center;
    background-color:transparent;
    font-size: ${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.searchBar.inputText};
    text-align:${I18nManager.isRTL ? "right" : "left"};
`;
const SearchBar = ({
                       type = 'large', iconSize, iconStyle, textInputStyle, containerStyle, ...props
                   }: SearchBarProps) => {
    const theme = useTheme();
    return (<Container style={containerStyle} type={type}>
        <Icon
            name={'search'} type={'Feather'}
            color={type === 'small' ? theme.searchBar.smallSearchBarIcon : theme.searchBar.largeSearchBarIcon}
            size={!!iconSize ? iconSize : theme.text.s6}
            style={iconStyle}
        />
        <Input
            placeholderTextColor={type === 'small' ? theme.searchBar.smallSearchBarPlaceholder : theme.searchBar.largeSearchBarPlaceholder}
            style={[{flex: 1}, textInputStyle]}
            {...props}
        />
    </Container>)
};
export default SearchBar;
