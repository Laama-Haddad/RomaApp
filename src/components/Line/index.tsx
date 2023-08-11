import React from 'react';
import styled from "styled-components/native";
import { LineProps } from "../../resources/interfaces/components/line";
import { wdp } from "../../utils/responsive";

const Container = styled.View`
    width:${wdp(35)}px;
    height:${wdp(1)}px;
    border-radius:${wdp(1)}px;
    background-color:${({color}) => color};
`;
const Line = ({color, style}: LineProps) => {
    return (<Container color={color} style={style}/>);
}
export default Line;
