import React from 'react';
import styled from 'styled-components/native';
import { CircleColorProps } from "../../resources/interfaces/components/circleColor";

/**
 * Usage
 *   <CircleColor item={{id:0,color:"red"}} selected={false} radius={40} style={{}} />
 *   used in RadioGroup Component
 * **/
const ContainerView = styled.View`
    overflow: hidden;
    background-color:${({color}) => color};
    justify-content:center;
    align-items:center;
    width: ${({radius}) => radius * 2}px;
    height: ${({radius}) => radius * 2}px;
    border-radius: ${({radius}) => radius}px;
    border-color: ${({theme}) => theme.circleColor.border};
    border-width:${({showBorder}) => showBorder ? 2 : 0}px;
`;
const SelectedColor = styled.View`
    width: 70%;
    height: 70%;
    border-radius:${({radius}) => radius}px;
    background-color: transparent;
    border-color: ${({theme}) => theme.circleColor.selectedBorder};
    border-width:${({selected}) => selected ? 0.8 : 0}px;
`;

const CircleColor = ({colorItem, radius = 20, showBorder = false, style, selected = false}: CircleColorProps) => {
    return (<ContainerView color={colorItem.color} style={style} showBorder={showBorder} radius={radius}>
        <SelectedColor radius={radius} selected={selected}/>
    </ContainerView>)
};

export default CircleColor;
