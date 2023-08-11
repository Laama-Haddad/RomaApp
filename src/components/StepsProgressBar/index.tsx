import React from 'react';
import styled, {useTheme} from "styled-components/native";
import {StepsProgressBarProps} from "../../resources/interfaces/components/stepsProgressBar";
import {hdp} from "../../utils/responsive";
import Icon from "../Icon";
import TextGeneric from "../TextGeneric";

const Container = styled.View`
    flex-direction:column-reverse;
`;
const StepContainer = styled.View`
    flex-direction:row;
    height:${hdp(10)}px;
`;
const CircleView = styled.View`
   align-items:center
`;
const Circle = styled.View`
    width:${hdp(3.5)}px;
    height:${hdp(3.5)}px;
    border-radius:${hdp(3.5) / 2}px;
    border-width:2px;
    border-color:${({color}) => color};
    background-color:${({
                                                                                                                                                                         activeStepIndex,
                                                                                                                                                                         currentIndex,
                                                                                                                                                                         color
                                                                                                                                                                     }) => activeStepIndex >= currentIndex ? color : 'transparent'}
    justify-content:center;
    align-items:center;
`;
const Connector = styled.View`
    height:${hdp(6.5)}px;
    width:2px;
    background-color:${({color}) => color};
`;
const LabelContainer = styled.View`
    padding-left:7%;
`;
const Label = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.stepsProgressBar.label};
`;
const Description = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.stepsProgressBar.description};
    margin-top:1%;
`;
const StepsProgressBar = ({date, color, steps, activeStepIndex, containerStyle}: StepsProgressBarProps) => {
    const theme = useTheme();
    const renderStep = (step, index) => {
        return (
            <StepContainer key={index}>
                <CircleView>
                    <Circle color={!!color ? color : theme.stepsProgressBar.color} activeStepIndex={activeStepIndex}
                            currentIndex={index}>
                        {index <= activeStepIndex &&
                            <Icon name={'check'} type={'SVG'} color={theme.stepsProgressBar.checkIcon}
                                  size={theme.text.s10}/>}
                    </Circle>
                    {index != 0 && <Connector color={!!color ? color : theme.stepsProgressBar.color}/>}
                </CircleView>
                <LabelContainer>
                    <Label>{step.label}</Label>
                    <Description>{step.description} {index > 1 && date}</Description>
                </LabelContainer>
            </StepContainer>
        );
    }
    return (<Container style={containerStyle}>
        {steps.map((step, key) => renderStep(step, key))}
    </Container>);
}
export default StepsProgressBar;
