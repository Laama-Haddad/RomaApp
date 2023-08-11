import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24.07} height={24.07} viewBox="0 0 24.07 24.07" {...props}>
            <Path
                d="M13.7,25.93a12.09,12.09,0,1,1,8.48-3.51,12,12,0,0,1-8.48,3.51Z"
                transform="translate(-1.7 -1.86)"/>
        </Svg>
    );
}

export default SvgComponent;
