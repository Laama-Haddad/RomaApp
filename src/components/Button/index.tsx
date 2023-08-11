import React from 'react';
import styled from "styled-components/native";
import { GenericButtonProps } from "../../resources/interfaces/components/button";
import Ripple from 'react-native-material-ripple';
import TextGeneric from "../TextGeneric";
import Icon from "../Icon";
import { useTheme } from "styled-components";
import { getByScreenSize } from "../../utils/responsive";

const Container = styled(Ripple)`
    align-items:center;
    flex-direction: row;
    height: ${getByScreenSize(50, 75)}px;
`;
const Title = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
`;
const RightText = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-size:${({theme}) => theme.text.s7}px;
`;
const GenericButton = ({
                           title,
                           titleStyle,
                           radius = getByScreenSize(25, 55),
                           disabled = false,
                           onPress,
                           showRightIcon = false,
                           rightIconName,
                           rightIconType,
                           rightIconStyle,
                           rightIconColor,
                           rightIconSize,
                           showRightText,
                           rightText,
                           rightTextStyle,
                           showLeftIcon = false,
                           leftIconName,
                           leftIconType,
                           leftIconColor,
                           leftIconSize,
                           leftIconStyle,
                           containerStyle,
                           ...props
                       }: GenericButtonProps) => {
    const theme = useTheme();
    return (<Container rippleContainerBorderRadius={radius}
                       disabled={disabled}
                       {...props}
                       onPress={onPress}
                       style={[!showLeftIcon && !showRightIcon && !showRightText && {justifyContent: 'center'}, {borderRadius: radius}, containerStyle]}>
        {showLeftIcon && !!leftIconType && !!leftIconName && (<Icon
            type={leftIconType}
            name={leftIconName}
            color={!!leftIconColor ? leftIconColor : theme.button.icon}
            size={!!leftIconSize ? leftIconSize : theme.text.s6}
            role="button"
            style={[{paddingLeft: '2%'}, leftIconStyle]}
        />)}
        <Title style={[{paddingHorizontal: '2%'}, titleStyle]}>{title}</Title>
        {showRightText && rightText && (<RightText style={[{
            position: 'absolute', right: getByScreenSize(17, 20)
        }, rightTextStyle]}>
            {rightText}
        </RightText>)}
        {showRightIcon && !!rightIconType && !!rightIconName && (<Icon
            type={rightIconType}
            name={rightIconName}
            color={!!rightIconColor ? rightIconColor : theme.button.icon}
            size={!!rightIconSize ? rightIconSize : theme.text.s6}
            role="button"
            style={[{
                position: 'absolute', right: getByScreenSize(8, 10)
            }, rightIconStyle]}
        />)}
    </Container>);
}
export default GenericButton;
