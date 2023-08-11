import * as React from 'react';
import Svg, { Line, Path, Polyline } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={16.08} height={16.08} viewBox="0 0 16.08 16.08" {...props}
             fill={'none'} stroke-linecap={'round'}
             stroke-linejoin={'round'} stroke-width={1.6}>
            <Path d="M6.85,9.35V6A2.2,2.2,0,0,1,9,3.78,2.19,2.19,0,0,1,11.14,6V9.35"
                  transform="translate(-2.83 -2.98)"/>
            <Path
                d="M14.36,10.46a3.57,3.57,0,0,1,1.44.3,3.93,3.93,0,0,1,2,2.11,4,4,0,0,1,.28,1.49,4,4,0,0,1-.28,1.49A3.8,3.8,0,0,1,17,17.12,3.47,3.47,0,0,1,15.8,18a3.61,3.61,0,0,1-2.88,0,3.47,3.47,0,0,1-1.21-.84,3.8,3.8,0,0,1-.82-1.27,4,4,0,0,1-.28-1.49,4,4,0,0,1,.28-1.49,3.93,3.93,0,0,1,2-2.11A3.57,3.57,0,0,1,14.36,10.46Z"
                transform="translate(-2.83 -2.98)"/>
            <Line x1="11.53" y1="9.71" x2="11.53" y2="13.05"/>
            <Line x1="9.92" y1="11.38" x2="13.13" y2="11.38"/>
            <Polyline points="11.53 15.28 0.8 15.28 1.87 4.14 10.45 4.14 10.78 7.54"/>
        </Svg>
    );
}

export default SvgComponent;
