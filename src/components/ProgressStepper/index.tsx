import React, { useRef } from 'react';
import styled, { useTheme } from "styled-components/native";
import { ProgressStepperProps } from "../../resources/interfaces/components/progressStepper";
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import { getByScreenSize, hdp, wdp } from "../../utils/responsive";
import { tr } from "../../resources/translations";

const Container = styled.View`
    width:100%;
    height:100%;
`;
const StepContainer = styled.View`
    width:100%;
    height:100%;
`;
const ProgressStepper = ({
                             data,
                             getActiveHeaderTitle,
                             stepComponentStyle,
                             onSubmit,
                             containerStyle
                         }: ProgressStepperProps) => {
    const theme = useTheme();
    const progressStepRef = useRef();
    return (<Container style={containerStyle}>
        <ProgressSteps progressBarColor={theme.progressStepper.connector}
                       disabledStepIconColor={'transparent'}
                       completedProgressBarColor={theme.progressStepper.connector}
                       completedStepIconColor={theme.progressStepper.circleBackground}
                       activeStepIconColor={theme.progressStepper.circleBackground}
                       labelColor={theme.progressStepper.label}
                       activeLabelColor={theme.progressStepper.activeLabel}
                       activeLabelFontSize={getByScreenSize(theme.text.s10, theme.text.s11)}
                       completedLabelColor={theme.progressStepper.label}
                       borderWidth={2}
                       labelFontSize={getByScreenSize(theme.text.s10, theme.text.s11)}
                       disabledStepIconBorderColor={theme.progressStepper.circleBorder}
        >
            {
                data.map((step, key) =>
                    <ProgressStep key={key} label={step.label} removeBtnRow={false} ref={progressStepRef}
                                  thirdBtnText={tr('progressStepper.paymentNextButtonTitle')}
                                  nextBtnText={tr('progressStepper.nextButtonTitle')}
                                  finishBtnText={tr('progressStepper.confirmNextButtonTitle')}
                                  nextBtnStyle={{
                                      backgroundColor: theme.progressStepper.nextButtonBackground,
                                      borderRadius: 30,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      marginBottom: hdp(2),
                                      height: getByScreenSize(50, 65),
                                      width: wdp(90)
                                  }} nextBtnTextStyle={{
                        color: theme.progressStepper.nextButtonTitle,
                        fontFamily: theme.fonts.bold,
                        fontSize: theme.text.s7
                    }}
                                  onSubmit={onSubmit}>
                        <StepContainer style={stepComponentStyle}>
                            <step.component
                                onToggleStep={({headerTitle}) => !!getActiveHeaderTitle && getActiveHeaderTitle({headerTitle: headerTitle})}/>
                        </StepContainer>
                    </ProgressStep>
                )
            }
        </ProgressSteps>
    </Container>);
}
export default ProgressStepper;
