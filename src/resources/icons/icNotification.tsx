import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 20 22" {...props}>
            <Path
                d="M11.63,22.53a4,4,0,0,1-4-3.84H3.36a1.51,1.51,0,0,1-1.2-.36,1.54,1.54,0,0,1-.53-1.14c0-1.1,1-2,1.89-2.94l0,0c.72-.72.9-2.14,1-3.65C4.77,6.32,6,3.91,8.57,3a3.15,3.15,0,0,1,6.14,0,5.16,5.16,0,0,1,2.92,2.68,11.81,11.81,0,0,1,1,4.9c.14,1.51.32,2.93,1,3.64l0,0c.93.91,1.89,1.85,1.89,3a1.52,1.52,0,0,1-1.72,1.5H15.68a4,4,0,0,1-4,3.84Z"
                transform="translate(-1.63 -0.53)"/>
        </Svg>
    );
}

export default SvgComponent;
