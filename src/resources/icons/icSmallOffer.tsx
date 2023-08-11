import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={37} viewBox="0 0 24 37" {...props}>
            <Path
                d="M0,0H24V35.45a1.61,1.61,0,0,1-.54,1.26.92.92,0,0,1-1.11.07l-9.45-6a.91.91,0,0,0-1,0L1.61,36.87a.91.91,0,0,1-1.09-.11A1.64,1.64,0,0,1,0,35.52V0Z"
            />
        </Svg>
    );
}

export default SvgComponent;
