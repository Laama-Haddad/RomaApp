/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { I18nManager, Platform } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import DismissKeyboard from '../DismissKeyboard';
import * as commaCountries from '../../resources/static/countries_decimal.json';
import Icon from '../Icon';
import { getByScreenSize } from '../../utils/responsive';
import TextGeneric from "../TextGeneric";
import { TextInputProps } from "../../resources/interfaces/components/textInput";

const Container = styled.View`
    margin-top: ${({label}) => !!label ? 15 : 0}px;
    width: 100%;
`;
const ContainerLabel = styled.View`
    align-items:center;
    flex-direction:row;
`;
const Label = styled(TextGeneric)`
    font-size: ${({theme}) => getByScreenSize(theme.text.s9, theme.text.s10)}px;
    margin-left: 3px;
    margin-bottom: 5px;
`;
const RedContainer = styled(TextGeneric)`
    color: ${({theme}) => theme.textInput.required};
`;
const InputContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
`;
const Input = styled.TextInput`
    text-align:${I18nManager.isRTL ? "right" : "left"};
    font-size: ${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    padding-vertical: 5px;
    flex: 1;
    border-radius:${getByScreenSize(25, 55)}px;
    padding-horizontal: ${({
                                                                                                                                                                                                                                                                 showLeftIcon,
                                                                                                                                                                                                                                                                 leftIconSize,
                                                                                                                                                                                                                                                                 theme
                                                                                                                                                                                                                                                             }) => showLeftIcon ? !!leftIconSize ? leftIconSize * 2 : theme.text.s5 * 2 : getByScreenSize(22, 25)}px;
    background-color:${({theme}) => theme.textInput.background};
    height: ${getByScreenSize(50, 75)}px;
    color:${({theme}) => theme.textInput.inputText};
`;

const GenericInput = forwardRef(({
                                     containerStyle,
                                     labelStyle,
                                     inputStyle,
                                     label,
                                     secureTextEntry,
                                     children,
                                     keyboardType,
                                     returnKeyType,
                                     noEye,
                                     required,
                                     showLeftIcon,
                                     onLeftIconPress,
                                     leftIconColor,
                                     leftIconName,
                                     leftIconType,
                                     leftIconSize,
                                     leftIconStyle,
                                     showRightIcon,
                                     onRightIconPress,
                                     rightIconColor,
                                     rightIconName,
                                     rightIconType,
                                     rightIconSize,
                                     rightIconStyle,
                                     customLeftIcon,
                                     ...props
                                 }: TextInputProps, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const keyboardTypeIOS = useRef(Platform.OS === 'ios' && keyboardType === 'decimal-pad' ? 'decimal-pad-ios' : keyboardType);
    if (keyboardTypeIOS.current === 'decimal-pad-ios') {
        const countryCode = RNLocalize.getCountry();
        if (commaCountries.countries.indexOf(countryCode) >= 0) {
            keyboardTypeIOS.current = 'numbers-and-punctuation';
        } else {
            keyboardTypeIOS.current = 'decimal-pad';
        }
    }
    const withEye = !noEye && secureTextEntry;
    const theme = useTheme();
    return (<DismissKeyboard>
        <Container style={containerStyle} label={label}>
            {label && (<ContainerLabel>
                {required && <RedContainer>* </RedContainer>}
                <Label style={labelStyle}>

                    {label}
                </Label>
            </ContainerLabel>)}
            <InputContainer>
                {showLeftIcon && (<Icon
                    type={leftIconType}
                    name={leftIconName}
                    color={!!leftIconColor ? leftIconColor : theme.textInput.icon}
                    size={!!leftIconSize ? leftIconSize : theme.text.s6}
                    role="button"
                    onPress={() => {
                        if (onLeftIconPress) onLeftIconPress();
                    }}
                    style={[{
                        position: 'absolute', left: getByScreenSize(5, 20), zIndex: 1

                    }, leftIconStyle]}
                />)}
                {!!customLeftIcon && customLeftIcon()}
                <Input
                    {...props}
                    selectionColor={`${theme.textInput.cursorColor}80`}
                    ref={ref}
                    returnKeyType={returnKeyType || 'done'}
                    style={inputStyle}
                    keyboardType={keyboardTypeIOS.current}
                    secureTextEntry={withEye && !passwordVisible}
                    showLeftIcon={showLeftIcon}
                    leftIconSize={leftIconSize}
                />
                {children}
                {withEye && (<Icon
                    type="Ionicons"
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    color={theme.textInput.eyeIcon}
                    size={theme.text.s6}
                    role="button"
                    onPress={() => setPasswordVisible(!passwordVisible)}
                    style={{
                        position: 'absolute', right: getByScreenSize(5, 15),
                    }}
                />)}
                {showRightIcon && (<Icon
                    type={rightIconType}
                    name={rightIconName}
                    color={!!rightIconColor ? rightIconColor : theme.textInput.icon}
                    size={!!rightIconSize ? rightIconSize : theme.text.s6}
                    role="button"
                    onPress={() => {
                        if (onRightIconPress) onRightIconPress();
                    }}
                    style={[{
                        position: 'absolute', right: getByScreenSize(5, 15),
                    }, rightIconStyle]}
                />)}
            </InputContainer>
        </Container>
    </DismissKeyboard>);
});
export default GenericInput;
