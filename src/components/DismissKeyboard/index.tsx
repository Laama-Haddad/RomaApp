/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { DismissKeyboardProps } from "../../resources/interfaces/components/dismissKeyboard";

const DismissKeyboard = ({children}: DismissKeyboardProps) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        {children}
    </TouchableWithoutFeedback>
);

export default DismissKeyboard;
