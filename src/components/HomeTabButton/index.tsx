import React from 'react';
import { Animated, I18nManager } from 'react-native';
import { hdp, wdp } from '../../utils/responsive';
import TextGeneric from '../TextGeneric';
import styled, { useTheme } from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { HomeTabButtonProps } from "../../resources/interfaces/components/homeTabButton";

const TabItem = styled(Animated.View)`
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-vertical: ${hdp(I18nManager.isRTL ? 1 : 2)}px;
    margin-horizontal: ${wdp(2.5)}px;
    align-self: center;
    padding-horizontal: ${wdp(2)}px;
`;
const TabItemText = styled(TextGeneric)`
    font-size: ${({theme}) => theme.text.s7}px;
    padding-horizontal: ${wdp(3)}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const HomeTabButton = ({
                           onPress,
                           active,
                           title
                       }: HomeTabButtonProps) => {
    const theme = useTheme();
    return (
        <Ripple onPress={() => onPress()}>
            <TabItem style={{
                backgroundColor: active ?
                    theme.homeTabButton.tabBackground + 'ff' :
                    theme.homeTabButton.tabBackground + '22'
            }}>
                <TabItemText style={{
                    color: active ?
                        theme.homeTabButton.activeTabTitle :
                        theme.homeTabButton.inActiveTabTitle
                }}>{title}</TabItemText>
            </TabItem>
        </Ripple>
    );
}
export default HomeTabButton;
