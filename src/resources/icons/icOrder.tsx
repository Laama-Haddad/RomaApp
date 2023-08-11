import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" {...props}>
            <Path
                d="M10.75,21.78h0L7.54,20.2,4.38,21.47a2,2,0,0,1-2.75-1.86V4.1a3,3,0,0,1,3-3h14a3,3,0,0,1,3,3V19.61a2,2,0,0,1-2.74,1.86L15.73,20.2l-3.21,1.58a2,2,0,0,1-1.77,0Z"
                transform="translate(-1.63 -1.1)"/>
        </Svg>
    );
}

export default SvgComponent;
