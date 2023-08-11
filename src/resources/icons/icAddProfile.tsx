import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" {...props} >
            <Path d="M9.42,12.63a5,5,0,1,1,5-5A5,5,0,0,1,9.42,12.63Z" transform="translate(-0.92 -2.63)"/>
            <Path
                d="M20.92,15.63a1,1,0,0,1-1-1v-2h-2a1,1,0,0,1,0-2h2v-2a1,1,0,1,1,2,0v2h2a1,1,0,0,1,0,2h-2v2A1,1,0,0,1,20.92,15.63Z"
                transform="translate(-0.92 -2.63)"/>
            <Path
                d="M16.92,22.63a1,1,0,0,1-1-1v-2a3,3,0,0,0-3-3h-7a3,3,0,0,0-3,3v2a1,1,0,0,1-2,0v-2a5,5,0,0,1,5-5h7a5,5,0,0,1,5,5v2A1,1,0,0,1,16.92,22.63Z"
                transform="translate(-0.92 -2.63)"/>
        </Svg>
    );
}

export default SvgComponent;

