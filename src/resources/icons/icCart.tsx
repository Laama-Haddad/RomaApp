import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}
             fill={'#FFFFFF'} stroke-linecap={'round'}
             stroke-linejoin={'round'} stroke-width={1.6}>
            <Path
                d="M10.88,16.63A3,3,0,0,1,8,14.44l0-.18-2.15-10A2,2,0,0,0,4,2.64H.26v-2H3.83a4,4,0,0,1,3.86,3l0,.2.39,1.83H21a1.43,1.43,0,0,1,.29,0l.14,0A2,2,0,0,1,23,7.92l0,.15-1.38,6.22a3,3,0,0,1-2.75,2.34H10.88Z"
                transform="translate(-0.26 -0.63)"/>
            <Path d="M5.26,21.63a3,3,0,1,1,3,3A3,3,0,0,1,5.26,21.63Z" transform="translate(-0.26 -0.63)"/>
            <Path d="M18.26,21.63a3,3,0,1,1,3,3A3,3,0,0,1,18.26,21.63Z" transform="translate(-0.26 -0.63)"/>
        </Svg>
    );
}

export default SvgComponent;
