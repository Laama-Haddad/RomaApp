import React from 'react';
import { LoadingProps } from "../../../resources/interfaces/screens/loading";
import styled, { useTheme } from "styled-components/native";
import { ActivityIndicator, Platform } from "react-native";
import TextGeneric from "../../../components/TextGeneric";
import { hdp, wdp } from "../../../utils/responsive";

const Container = styled.View`
    width:${wdp(100)}px;
    height:${hdp(110)}px;
    align-items:center;
    justify-content:center;
`;
const Label = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.loading.label};
    margin-vertical:5%;
`;
const Loading = ({route}: LoadingProps) => {
    const theme = useTheme();
    const {label} = route.params;

    return (<Container>
        <Label>{label}</Label>
        <ActivityIndicator color={theme.loading.indicator} size={Platform.OS === 'ios' ? 'large' : 35}/>
    </Container>);
}
export default Loading;
