import * as React from 'react';
import Svg, { Polygon } from 'react-native-svg';

function SvgComponent(props) {
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={272.38} height={539.31} viewBox="0 0 272.38 539.31"
                 fill={'#ffffff'} opacity={0.13} {...props}>
        <Polygon points="0 254.61 272.38 0 246.81 539.31 0 254.61"/>
    </Svg>);
}

export default SvgComponent;
