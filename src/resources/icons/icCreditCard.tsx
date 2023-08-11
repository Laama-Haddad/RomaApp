import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={40} viewBox="0 0 62 40" {...props} >
            <Rect fill={'#ff5f00'} x="22.46" y="4.07" width="16.65" height="29.92"/>
            <Path fill={'#eb001b'} d="M26.17,20.29a19,19,0,0,1,7.27-15,19,19,0,1,0,0,29.92A19,19,0,0,1,26.17,20.29Z"
                  transform="translate(-2.66 -1.26)"/>
            <Path fill={'#f79e1b'} d="M64.23,20.29a19,19,0,0,1-30.79,15,19,19,0,0,0,0-29.92,19,19,0,0,1,30.79,15Z"
                  transform="translate(-2.66 -1.26)"/>
        </Svg>
    );
}

export default SvgComponent;
