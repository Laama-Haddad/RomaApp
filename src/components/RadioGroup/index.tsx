import React, { useState } from 'react';
import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";
import { RadioGroupProps } from "../../resources/interfaces/components/radioGroup";

const Container = styled.View`
   align-items: center;
   justify-content:center;
`;
/*
* Usage <RadioGroup list={Array of objects} renderItem={(item, selected) => <CircleColor item={item}
                                                                                        radius={wdp(8)}
                                                                                        selected={selected === item.id}/>}
                    onValueChange={(item) =>  console.log(item)} radius={wdp(8)}/>
* */
const RadioGroup = ({list, renderItem, onValueChange, selected, radius, style}: RadioGroupProps) => {
    const [selectedValue, setSelectedValue] = useState(selected);
    const onItemPress = (val) => {
        setSelectedValue(val);
        if (onValueChange) onValueChange(val);
    }
    return (<Container style={style}>
        {list.map((item) => <Ripple
            rippleContainerBorderRadius={radius}
            key={item.id}
            onPress={() => onItemPress(item.id)}>{renderItem(item, selectedValue)}</Ripple>)}
    </Container>)
}
export default RadioGroup;
