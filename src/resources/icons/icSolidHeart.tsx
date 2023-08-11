import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={21} viewBox="0 0 24 21" {...props}>
            <Path
                d="M3.54,15,2,13.36A6.55,6.55,0,0,1,.26,8.84,6.49,6.49,0,0,1,2,4.31a5.88,5.88,0,0,1,8.46-.23l.22.23L12.26,6,13.8,4.31a5.88,5.88,0,0,1,8.51-.18l.18.18a6.66,6.66,0,0,1,0,9c-6.66,7.24-9.15,9.56-10.23,9.56S9,20.84,3.54,15Z"
                transform="translate(-0.26 -2.4)"
            />
        </Svg>
    );
}

export default SvgComponent;
