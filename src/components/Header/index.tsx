import React from 'react';
import TextGeneric from '../TextGeneric';
import { I18nManager, Image, Platform, StatusBar, View } from 'react-native';
import { hdp, wdp } from '../../utils/responsive';
import Icon from '../Icon';
import styled, { useTheme, withTheme } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { HeaderProps } from '../../resources/interfaces/components/header';

const Title = styled(TextGeneric)`
    font-size: ${({theme}) => theme.text.s6}px;
    color: ${({theme}) => theme.text.dark};
    font-family:${({theme}) => theme.fonts.bold};
`;
const SubTitle = styled(TextGeneric)`
    font-size: ${({theme}) => theme.text.s10}px;
    color: ${({theme}) => theme.text.dark};
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const LinkText = styled(TextGeneric)`
    font-size: ${({theme}) => theme.text.s7}px;
    color: ${({theme}) => theme.primary};
    font-family:${({theme}) => theme.fonts.regular};
`;
const HeaderContainer = styled.View`
    display: flex;
    width: ${wdp(100)}px;
    padding-vertical: ${hdp(1)}px;
    padding-horizontal: 3%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 4;
`;
const LeftContainer = styled.View`
    min-width: ${wdp(15)}px;
    flex-direction:row;
    align-items:center;
`;
const IconContainer = styled.View`
    min-width: ${wdp(15)}px;
    flex-direction: row-reverse;
    text-align: right;
`;
const TitleContainer = styled.View`
    flex-direction: column;
    align-items: center;
    padding:1%;
    width:${wdp(55)}px;
    height:${wdp(13)}px;
    justify-content:center;
    align-items:center;
`;

function Header({
                    noPaddingTop = false,
                    isModal = false,
                    backgroundHeader = 'transparent',
                    titleImage,
                    titleImageStyle,
                    title,
                    titleStyle,
                    subTitle,
                    subTitleStyle,
                    titleColor,
                    backColor,
                    menuColor,
                    rightIconName,
                    onRightPress,
                    rightIconType = 'Feather',
                    rightIconSize,
                    rightIconStyle,
                    rightTextStyle,
                    rightIconColor,
                    iconSize,
                    showLine = false,
                    onBackPress,
                    onMenuPress,
                    showRightIcon = false,
                    isLight = false,
                    showRightText = false,
                    rightText = 'Cancel',
                    showBackButton,
                    showMenuButton,
                    showLeftText = false,
                    leftTextStyle,
                    leftText = 'Done',
                    onLeftPress,
                    customLeftCompo,
                    customRightCompo,
                    searchCompo,
                    showSearchBar
                }: HeaderProps) {
    const theme = useTheme();
    const onMenuPressed = () => {
        if (onMenuPress) {
            onMenuPress();
        }
    };
    const onBackPressed = () => {
        if (onBackPress) {
            onBackPress();
        }
    };
    return (<View
        style={{
            overflow: 'hidden', paddingBottom: 2,
        }}>
        <HeaderContainer
            style={[{backgroundColor: backgroundHeader}, !noPaddingTop && {
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : isModal ? 12 : 55,
            }, showLine && {
                borderBottomWidth: 0,
                elevation: 3,
                shadowColor: 'rgba(0,0,0,1)',
                backgroundColor: backgroundHeader,
                shadowOffset: {
                    width: 0, height: 2,
                },
                shadowOpacity: 0.2,
                borderColor: 'rgba(0, 0,0, 0.20)',
            },]}>
            <LeftContainer>
                {showBackButton && (<Ripple onPress={onBackPressed}>
                    <Icon
                        name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
                        type="Feather"
                        color={!!backColor ? backColor : isLight ? theme.text.light : theme.text.dark}
                        size={iconSize || theme.text.s2}
                    />
                </Ripple>)}
                {showMenuButton && (<Ripple onPress={onMenuPressed}>
                    <Icon name="menu" type="SVG"
                          color={menuColor || (isLight ? theme.text.light : theme.text.dark)}
                          size={iconSize || theme.text.s3}
                    />
                </Ripple>)}
                <Ripple onPress={onLeftPress}>
                    {showLeftText && (<LinkText style={leftTextStyle}>{leftText}</LinkText>)}
                </Ripple>
                {!!customLeftCompo && customLeftCompo()}
            </LeftContainer>
            <TitleContainer>
                {titleImage ? <Image source={require('../../resources/assets/logo.png')} style={[{
                    width: '60%', height: '110%', paddingHorizontal: '2%'
                }, titleImageStyle]}/> : showSearchBar && !!searchCompo ? searchCompo() : (<><Title
                    style={[{
                        color: !!titleColor ? titleColor : isLight ? theme.text.light : theme.text.dark,
                    }, titleStyle]}>
                    {title}
                </Title>
                    {subTitle && <SubTitle style={subTitleStyle}>{subTitle}</SubTitle>}</>)}
            </TitleContainer>
            <IconContainer style={{rightIconStyle}}>
                {!!customRightCompo ? customRightCompo() : <Ripple onPress={onRightPress}>
                    {showRightIcon && (<Icon
                        style={{alignSelf: 'flex-end'}}
                        name={rightIconName}
                        type={rightIconType}
                        color={rightIconColor || (isLight ? theme.text.light : theme.text.dark)}
                        size={rightIconSize || theme.text.s4}
                    />)}
                    {showRightText && (<LinkText style={rightTextStyle}>{rightText}</LinkText>)}
                </Ripple>}
            </IconContainer>
        </HeaderContainer>
    </View>);
}

export default withTheme(Header);
