import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={26.14} height={209.05} viewBox="0 0 26.14 209.05" {...props}>
            <Path
                d="M.52-.17H26.66V200.11a35.53,35.53,0,0,1-.58,7.11c-.37,1.53-.82,1.69-1.21.42l-10.3-12.1c-.33-1.1.34-1,0,0L2.28,208.13c-.39,1.17-.83,1-1.19-.59a36,36,0,0,1-.57-7Z"
                transform="translate(-0.52 0.17)"/>
        </Svg>
    );
}

export default SvgComponent;
