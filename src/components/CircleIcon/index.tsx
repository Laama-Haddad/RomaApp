import React from 'react';
import styled, {useTheme} from "styled-components/native";
import {CircleIconProps} from "../../resources/interfaces/components/circleIcon";
import Icon from "../Icon";
import Ripple from 'react-native-material-ripple';

const Container = styled(Ripple)`
    width:100%;
    height:100%
    justify-content:center;
    align-items:center;
    width:${({borderRadius}) => borderRadius * 2}px;
    height:${({borderRadius}) => borderRadius * 2}px;
    border-radius:${({borderRadius}) => borderRadius}px;
    background-color:${({backgroundColor}) => backgroundColor};
`;
const CircleIcon = ({
                        borderRadius = 25,
                        backgroundColor = 'transparent',
                        iconName,
                        iconType,
                        iconColor,
                        iconSize,
                        onPress,
                        containerStyle
                    }: CircleIconProps) => {
    const theme = useTheme();
    return (<Container rippleContainerBorderRadius={borderRadius} onPress={onPress}
                       borderRadius={borderRadius} backgroundColor={backgroundColor} style={containerStyle}>
        <Icon name={iconName} type={iconType} color={iconColor} size={!!iconSize ? iconSize : theme.text.s6}/>
    </Container>);
}
export default CircleIcon;



