import React, { useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { Select } from "native-base";
import { getByScreenSize } from "../../utils/responsive";
import TextGeneric from "../TextGeneric";
import { DropDownListProps } from "../../resources/interfaces/components/dropDownList";
import Icon from "../Icon";

const Container = styled.View`
    flex-direction: column;
    width: 100%;
    background-color:transparent;
`;
const Label = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s5}px;
    font-family:${({theme}) => theme.fonts.bold};
    font-weight:bold;
    margin-vertical:1%;
    color:${({theme}) => theme.dropDownList.text}
`;
const PickerContainer = styled.View`
    width: 100%;}
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius:${getByScreenSize(25, 45)}px;
    padding-vertical: 5%;
    padding-horizontal: 3%;
    height: ${getByScreenSize(50, 45)}px;
    margin-top: 1%;
    background-color:${({theme}) => theme.dropDownList.background};
`;

const DropDownList = ({
                          placeHolder,
                          label,
                          required = false,
                          list,
                          titleKey,
                          valueKey = '',
                          value,
                          onValueChange,
                          disabled = false,
                          labelStyle,
                          dropDownListContainerStyle,
                          containerStyle,
                          ...props
                      }: DropDownListProps) => {
    const theme = useTheme();
    const [selected, setSelected] = useState(value);
    const [width, setWidth] = useState(120);
    const onLayout = (event) => {
        const {width} = event.nativeEvent.layout;
        setWidth(getByScreenSize(width / 1.8, width / 1.9));
    };

    return (<Container style={containerStyle}>
        {!!label && <Label style={labelStyle}>{label}</Label>}
        <PickerContainer onLayout={onLayout} style={dropDownListContainerStyle}>
            <Select
                placeholder={!!placeHolder ? placeHolder : '--None--'}
                placeholderTextColor={`${theme.dropDownList.text}.500`}
                borderWidth={0}
                minWidth={width}
                minHeight={12}
                fontFamily={theme.fonts.bold}
                color={`${theme.dropDownList.text}.500`}
                fontWeight={'bold'}
                dropdownIcon={<Icon name={'arrow-drop-down'} type={'MaterialIcons'} size={theme.text.s1}
                                    color={theme.dropDownList.icon}/>}
                fontSize={getByScreenSize(theme.text.s7, theme.text.s6)}
                selectedValue={selected}
                isDisabled={disabled}
                onValueChange={(itemValue) => {
                    setSelected(itemValue);
                    let itemIndex = 0;
                    if (titleKey && valueKey) {
                        itemIndex = list.findIndex((item) => item[valueKey] === itemValue);
                    } else {
                        itemIndex = list.findIndex((item) => item === itemValue);
                    }
                    if (onValueChange) onValueChange(itemValue, itemIndex);
                }}
                {...props}
            >
                {list.map((item, idx) => (<Select.Item
                    key={idx.toString()}
                    label={titleKey ? item[titleKey] : item}
                    value={valueKey ? item[valueKey] : item}
                />))}
            </Select>
        </PickerContainer>
    </Container>);
};

export default DropDownList;
