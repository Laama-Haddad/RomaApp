import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 25 25" {...props}>
            <Path
                d="M14.93,23.64a1,1,0,0,1-.92-.59L10.17,14.4,1.52,10.56a1,1,0,0,1-.6-.88,1,1,0,0,1,.54-.92l.11-.06,21-8a1,1,0,0,1,1.18.38,1,1,0,0,1,.11.91l-8,21a1,1,0,0,1-.92.65Z"
                transform="translate(-0.92 -0.64)"/>
        </Svg>
    );
}

export default SvgComponent;
