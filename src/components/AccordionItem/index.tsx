import React, { useRef, useState } from 'react';
import { Animated, I18nManager, LayoutAnimation } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { AccordionItemProps } from "../../resources/interfaces/components/accordionItem";
import TextGeneric from "../TextGeneric";
import Icon from "../Icon";
import { wdp } from "../../utils/responsive";
import Ripple from 'react-native-material-ripple';
import { toggleAnimationConfig } from "../../utils/animation";

const Container = styled.View`
   background-color:${({theme}) => theme.accordionItem.background};
   padding-horizontal: 4%;
   padding-vertical: 3%;
`;
const TitleContainer = styled(Ripple)`
   flex-direction: row;
   justify-content:space-between;
   align-items:center;
   padding-vertical: 2%;
   border-color:${({theme}) => theme.accordionItem.border};
   background-color:${({theme}) => theme.accordionItem.background};
`;
const IconContainer = styled(Animated.View)`
    background-color:${({theme}) => theme.accordionItem.iconBackground};
    width:${wdp(6)}px;
    height:${wdp(6)}px;
    border-radius:${wdp(6) / 2}px;
    align-items:center;
    justify-content:center;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.accordionItem.title};
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    font-weight:bold;
`;
const ContentContainer = styled.View`
   padding-vertical: 4%;
 `;
const AccordionItem = ({
                           title, children, titleStyle, itemContainerStyle
                       }: AccordionItemProps) => {
    const theme = useTheme();
    const [showContent, setShowContent] = useState(false);
    const animationController = useRef(new Animated.Value(showContent ? 1 : 0)).current;
    const toggleContent = () => {
        if (showContent) {
            Animated.timing(animationController, {
                duration: 300, toValue: 0, useNativeDriver: true
            }).start();
        } else {
            Animated.timing(animationController, {
                duration: 300, toValue: 1, useNativeDriver: true
            }).start();
        }
        LayoutAnimation.configureNext(toggleAnimationConfig);
        setShowContent(!showContent);
    }

    const arrow = animationController.interpolate({
        inputRange: [0, 1], outputRange: ['0deg', I18nManager.isRTL ? "-90deg" : '90deg'],
    });

    return (<Container style={itemContainerStyle}>
        <TitleContainer rippleColor={`${theme.accordionItem.iconBackground}80`} onPress={() => toggleContent()} style={{
            borderBottomWidth: showContent ? 1 : 0
        }}>
            <Title style={titleStyle}>{title}</Title>
            <IconContainer style={{transform: [{rotateZ: arrow}]}}>
                <Icon name={I18nManager.isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"} type={'MaterialIcons'}
                      size={theme.text.s6}
                      color={theme.accordionItem.icon}/>
            </IconContainer>
        </TitleContainer>
        {showContent && <ContentContainer>
            {children}
        </ContentContainer>}
    </Container>);
}
export default AccordionItem;

