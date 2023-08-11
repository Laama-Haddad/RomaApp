import { StyleProp } from 'react-native';
import React from 'react';

export interface TimerProps {
    timestamp:number;
    delay?:number;
    timerCallback?:(boolean)=>void;
    timeViewRadius:number;
    secondsStyle?: StyleProp<any> | StyleProp<any>[];
    minutesStyle?: StyleProp<any> | StyleProp<any>[];
    hoursStyle?:StyleProp<any> | StyleProp<any>[];
    secondsViewStyle?:  StyleProp<any> | StyleProp<any>[];
    minutesViewStyle?:  StyleProp<any> | StyleProp<any>[];
    hoursViewStyle?:  StyleProp<any> | StyleProp<any>[];
    containerStyle?:  StyleProp<any> | StyleProp<any>[];
}
