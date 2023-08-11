/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Switch} from "react-native";
import {SwitchProps} from "../../resources/interfaces/components/switch";
import {getByScreenSize, wdp} from '../../utils/responsive';

const ContainerView = styled.View`
   width:${wdp(getByScreenSize(10, 7))}px;
   height:${wdp(getByScreenSize(6, 4))}px;
   justify-content:center;
   align-items:center;
   border-width:1.5px;
   border-radius:${wdp(3)}px;
   padding-horizontal:1%;
   padding-vertical:1%;
   border-color:${({enabled, theme}) => enabled ? theme.switch.switchOn : theme.switch.switchOff}
`;
const GenericSwitch = ({onValueChangeEvent, value = false, style}: SwitchProps) => {
    const [enabled, setEnabled] = useState(value);
    const theme = useTheme();
    const onChange = (val) => {
        let newVal=val;
        setEnabled(val);
        if (onValueChangeEvent) onValueChangeEvent(newVal);
    }
    return (<ContainerView enabled={enabled} style={style}>
        <Switch
            trackColor={{false: 'transparent', true: 'transparent'}}
            thumbColor={enabled ? theme.switch.switchOn : theme.switch.switchOff}
            ios_backgroundColor={'transparent'}
            onValueChange={() => onChange(!enabled)}
            value={enabled}
            style={{transform: [{scaleX: 0.9}, {scaleY: 0.9}]}}
        />
    </ContainerView>);
};
export default GenericSwitch;


