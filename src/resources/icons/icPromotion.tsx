import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={18} viewBox="0 0 24 18" {...props}>
            <Path
                d="M22.2,18.91H2.2a2,2,0,0,1-2-2v-4a.5.5,0,0,1,.5-.5,2.5,2.5,0,0,0,0-5,.49.49,0,0,1-.35-.15A.51.51,0,0,1,.2,6.91v-4a2,2,0,0,1,2-2h20a2,2,0,0,1,2,2v4a.5.5,0,0,1-.5.5,2.5,2.5,0,0,0,0,5,.5.5,0,0,1,.5.5v4A2,2,0,0,1,22.2,18.91Z"
                transform="translate(-0.2 -0.91)"/>
        </Svg>
    );
}

export default SvgComponent;
