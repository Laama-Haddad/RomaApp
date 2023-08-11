import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" {...props}>
            <Path
                d="M1.26,20.68v-15a4,4,0,0,1,4-4h11.8a4,4,0,0,1,4,4V6a2.18,2.18,0,0,1,1.51.69,2.2,2.2,0,0,1,.69,1.5V21.66a2,2,0,0,1-2,2h-17A3,3,0,0,1,1.26,20.68Z"
                transform="translate(-1.26 -1.63)"/>
        </Svg>
    );
}

export default SvgComponent;
