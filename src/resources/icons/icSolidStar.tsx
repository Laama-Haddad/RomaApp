import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" {...props}>
            <Path
                d="M7.88,7.35l2.85-5.79a1,1,0,0,1,1.8,0l2.85,5.79,6.39.93A1,1,0,0,1,22.33,10l-4.62,4.5,1.09,6.36a1,1,0,0,1-1.45,1l-5.72-3-5.71,3a1,1,0,0,1-1-.08,1,1,0,0,1-.4-1l1.09-6.36L.93,10a1,1,0,0,1,.56-1.71Z"
                transform="translate(-0.63 -1)"/>
        </Svg>
    );
}

export default SvgComponent;
