import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24.34} height={18.15} viewBox="0 0 24.34 18.15" {...props}>
            <Path
                fill={props.fill}
                d="M8.27,17.79.36,9.88a1.21,1.21,0,0,1,0-1.72L2.08,6.44a1.23,1.23,0,0,1,1.72,0l5.33,5.33L20.54.36a1.21,1.21,0,0,1,1.72,0L24,2.08A1.21,1.21,0,0,1,24,3.8l-14,14A1.2,1.2,0,0,1,8.27,17.79Z"/>
        </Svg>
    );
}

export default SvgComponent;
