import React from 'react';
import styled from "styled-components/native";
import { LabelProps } from "../../resources/interfaces/components/label";
import TextGeneric from "../TextGeneric";
import { getByScreenSize } from "../../utils/responsive";
import Ripple from 'react-native-material-ripple'

const Container = styled(Ripple)`
    justify-content:center;
    align-items:center;
    border-radius:${getByScreenSize(25, 45)}px;
    padding-vertical:2%;
    padding-horizontal:3%;
`;
const Title = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold};
    font-size:${({theme}) => theme.text.s7}px;
`;
const Label = ({title, titleStyle, containerStyle, onPress}: LabelProps) => {
    return (<Container rippleContainerBorderRadius={getByScreenSize(25, 45)} style={containerStyle} onPress={onPress}
                       disabled={!!onPress ? false : true}>
        <Title style={titleStyle}>{title}</Title>
    </Container>);
}
export default Label;



