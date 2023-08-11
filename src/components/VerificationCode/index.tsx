import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {wdp} from '../../utils/responsive';
import {VerificationCodeProps} from "../../resources/interfaces/components/verificationCode";
import {TextInput} from "react-native";

const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const PinView = styled.View`
    width: ${wdp(15)}px;
    height: ${wdp(15)}px;
    margin-horizontal:1%;
    align-items:center;
    border-radius: 10px;
    background-color:${({theme}) => theme.verificationCode.background};
`;
const PinInput = styled.TextInput`
    width:100%;
    height:100%;
    border-radius: 10px;
    text-align: center;
    font-size: ${({theme}) => theme.text.s6}px;
    color:${({theme}) => theme.verificationCode.number};
    font-family:${({theme}) => theme.fonts.bold};
`;
const Line = styled.View`
    height:1px;
    width:70%;
    border-bottom-width:3px;
    border-color: ${({theme}) => theme.verificationCode.line};
    position:absolute;
    bottom:0;
`;
const VerificationCode = ({onSuccess, containerStyle}: VerificationCodeProps) => {
    const [selected, setSelected] = useState(1);
    const [pin, setPin] = useState<(string | null)[]>([]);
    const refs = useRef<any>([React.createRef(), React.createRef()]);
    const handleEdit = (num, id) => {
        if (num) {
            const onEdit = id + 1;
            const code = [...pin];
            code[id - 1] = num;
            setPin(code);
            setSelected(onEdit);
        }
    };
    const onKeyPress = (e, idx) => {
        if (e.nativeEvent.key === 'Backspace') {
            const toFocus = idx - 1;
            const code = [...pin];
            code[idx - 1] = null;
            setPin(code);
            if (toFocus > 0) {
                setSelected(toFocus);
            }
        }
    };
    useEffect(() => {
        if (refs?.current[selected]) refs.current[selected]?.focus();
    }, [selected]);
    useEffect(() => {
        const code = [...pin];
        const areAllNotNull = code.every((item) => item !== null);
        if (areAllNotNull && pin.length === 4) {
            onSuccess(pin.join(''));
        }
    }, [pin]);

    return (<Container style={containerStyle}>
        {[1, 2, 3, 4].map((item, idx) => (<PinView key={`input_${idx}`}><PinInput
            ref={ref => (refs.current[item] = ref)}
            onChangeText={text => handleEdit(text, item)}
            maxLength={1}
            returnKeyType={'done'}
            autoCapitalize={'sentences'}
            autoCorrect={false}
            keyboardType={'numeric'}
            onKeyPress={e => onKeyPress(e, item)}
        />
            {pin.filter(item => item).length >= item && <Line item={item}/>}
        </PinView>))}
    </Container>);
};

export default VerificationCode;
