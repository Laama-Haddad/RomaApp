import React, {useCallback, useState} from "react";
import RangeSliderRN from "rn-range-slider";
import styled from "styled-components/native";
import TextGeneric from "../TextGeneric";
import {RangeSliderProps} from "../../resources/interfaces/components/rangeSlider";
import {getByScreenSize} from "../../utils/responsive";

const Container = styled.View``;
const LowThumb = styled.View`
    width: ${getByScreenSize(25, 30)}px;
    height:${getByScreenSize(25, 30)}px;
    border-radius:${getByScreenSize(25, 30) / 2}px;
    background-color: ${({
                                                                                                                                                                                    theme,
                                                                                                                                                                                    selectedRangeColor
                                                                                                                                                                                }) => selectedRangeColor ? selectedRangeColor : theme.rangeSlider.lowThumb};
`;
const HighThumb = styled.View`
   width: ${getByScreenSize(32, 40)}px;
    height:${getByScreenSize(32, 40)}px;
    border-radius:${getByScreenSize(32, 40) / 2}px;
    background-color: ${({
                                                                                                                                                                                    theme,
                                                                                                                                                                                    selectedRangeColor
                                                                                                                                                                                }) => selectedRangeColor ? selectedRangeColor : theme.rangeSlider.highThumb};
`;
const Rail = styled.View`
    flex: 1;
    height: 3px;
    border-radius: 2px;
    background-color:  ${({theme}) => theme.rangeSlider.rail};
`;
const RailSelected = styled.View`
   height: 3px;
   background-color: ${({
                                                             theme, selectedRangeColor
                                                         }) => selectedRangeColor ? selectedRangeColor : theme.rangeSlider.selectedRail};
   border-radius: 2px;
`;
const ContainerLabel = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-vertical: 2%;
`;
const Label = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold}
    font-size: ${({theme}) => getByScreenSize(theme.text.s6, theme.text.s5)}px;
    color: ${({theme}) => theme.rangeSlider.label};
`;
const RangeSlider = ({min, max, selectedRangeColor, onValueChange, labelStyle, containerStyle}: RangeSliderProps) => {
    const [low, setLow] = useState(min);
    const [high, setHigh] = useState(max);
    const renderLowThumb = useCallback(() => <LowThumb selectedRangeColor={selectedRangeColor}/>, []);
    const renderHighThumb = useCallback(() => <HighThumb selectedRangeColor={selectedRangeColor}/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected selectedRangeColor={selectedRangeColor}/>, []);

    const handleValueChange = useCallback((newLow, newHigh) => {
        setLow(newLow);
        setHigh(newHigh);
        !!onValueChange && onValueChange(newLow, newHigh);
    }, [setLow, setHigh]);

    return (<Container style={{containerStyle}}>
        <RangeSliderRN
            style={{padding: '3%'}}
            min={min}
            max={max}
            step={1}
            floatingLabel
            renderLowThumb={renderLowThumb}
            renderHighThumb={renderHighThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            onValueChanged={handleValueChange}
        />
        <ContainerLabel>
            <Label style={labelStyle}>
                ${low}
            </Label>
            <Label style={labelStyle}>
                ${high}
            </Label>
        </ContainerLabel>
    </Container>);
};

export default RangeSlider;
