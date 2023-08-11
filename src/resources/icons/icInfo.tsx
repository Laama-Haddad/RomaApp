import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...props}>
            <Path
                d="M.83,11a10,10,0,1,1,10,9.91h0A10,10,0,0,1,.83,11Z" transform="translate(-0.83 -1.04)"/>
            <Path
                d="M13.76,8.48A4.3,4.3,0,0,0,10.42,10,2.21,2.21,0,0,0,10,12a4.64,4.64,0,0,1,.2,3.05,1.87,1.87,0,0,0,1.1,2.5,2.41,2.41,0,0,0,.84.16A5.07,5.07,0,0,0,15.47,16a6.41,6.41,0,0,0,2-4.27A3.54,3.54,0,0,0,13.76,8.48Z"
                transform="translate(-0.83 -1.04)"/>
        </Svg>
    );
}

export default SvgComponent;
