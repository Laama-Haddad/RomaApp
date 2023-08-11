import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" {...props}>
            <Path
                d="M3.83,21V11.88a4,4,0,0,1,0-7.75V1h2V4.13a4,4,0,0,1,0,7.75V21Zm10.43,0V18.36c-2.32-.38-3.94-1.72-3.94-3.26s1.62-2.89,3.94-3.27V4.13h2.63v7.7c2.32.38,3.94,1.73,3.94,3.27S19.21,18,16.89,18.36V21Z"
                transform="translate(-0.83 -1)"/>
        </Svg>
    );
}

export default SvgComponent;
