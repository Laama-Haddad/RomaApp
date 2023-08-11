import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState, } from 'react';
import styled, { useTheme } from "styled-components/native";
import TextGeneric from "../TextGeneric";
import { getByScreenSize } from "../../utils/responsive";
import { TimerProps } from "../../resources/interfaces/components/timer";

const Container = styled.View`
        width:100%;
        height:100%;
        flex-direction:row;    
        justify-content:center;
        align-items:center; 
    `;
const TimerView = styled.View`
        margin:1%;
        justify-content:center;
        align-items:center;
        width:${({timeViewRadius}) => timeViewRadius * 2}px;
        height:${({timeViewRadius}) => timeViewRadius * 2}px;
        border-radius:${({timeViewRadius}) => timeViewRadius}px;
    `;
const Time = styled(TextGeneric)`
        color:${({theme}) => theme.timer.time};
        font-family:${({theme}) => theme.fonts.bold};
        font-size:${({theme}) => getByScreenSize(theme.text.s9, theme.text.s9)}px;
        font-weight:bold;
    `;

const Timer = forwardRef((props: TimerProps, ref) => {
    // For Total seconds
    const [timeStamp, setTimeStamp] = useState(
        props.timestamp ? props.timestamp : 0,
    );
    // Delay Required
    const [delay, setDelay] = useState(props.delay ? props.delay : 1000);

    // Flag for informing parent component when timer is over
    const [sendOnce, setSendOnce] = useState(true);

    // Flag for final display time format
    const [finalDisplayTime, setFinalDisplayTime] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    useInterval(() => {
        if (timeStamp > 0) {
            setTimeStamp(timeStamp - 1);
        } else if (sendOnce) {
            if (props.timerCallback) {
                props.timerCallback(true);
            } else {
                console.log('Please pass a callback function...');
            }
            setSendOnce(false);
        }
        secondsToDhms(timeStamp);
    }, delay);

    function secondsToDhms(seconds) {
        seconds = Number(seconds);
        let d = Math.floor(seconds / (3600 * 24));
        let h = Math.floor((seconds % (3600 * 24)) / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = Math.floor(seconds % 60);
        setSeconds(s);
        setMinutes(m);
        setHours(h);
        setDays(d);
    }

    const refTimer = useRef();
    useImperativeHandle(ref, () => ({
        resetTimer: () => {
            // Clearing days, hours, minutes and seconds
            // Clearing Timestamp
            setTimeStamp(props.timestamp);
            setSendOnce(true);
        },
    }));
    const theme = useTheme()
    return (
        <Container ref={refTimer} style={props.containerStyle}>
            <TimerView style={[{backgroundColor: theme.timer.hoursBackground}, props.hoursViewStyle]}
                       timeViewRadius={props.timeViewRadius}><Time
                style={props.hoursStyle}>{sendOnce ? hours : '0'}</Time></TimerView>
            <TimerView style={[{backgroundColor: theme.timer.minutesBackground}, props.minutesViewStyle]}
                       timeViewRadius={props.timeViewRadius}><Time
                style={props.minutesStyle}>{sendOnce ? minutes : '0'}</Time></TimerView>
            <TimerView style={[{backgroundColor: theme.timer.secondsBackground}, props.secondsViewStyle]}
                       timeViewRadius={props.timeViewRadius}><Time
                style={props.secondsStyle}>{sendOnce ? seconds : '0'}</Time></TimerView>
        </Container>
    );
});

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            };
        }
    }, [delay]);
}

export default Timer;
