import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={23} viewBox="0 0 24 23" {...props}>
            <Path
                fill={props.fill}
                d="M0,8V6H6V8Zm3,6V12H9v2Zm7.42,6H7V18h3a5,5,0,0,1,10-.22V18h1a1,1,0,0,0,1-.88V10.69a1,1,0,0,0-.14-.5l-.07-.11L16.41,3.16A2.94,2.94,0,0,0,14.24,2H3V0H14a5,5,0,0,1,3.79,1.73l.16.2,5.38,6.92A3,3,0,0,1,24,10.47V17a3,3,0,0,1-2.82,3h-1.6a5,5,0,0,1-9.16,0Z"/>
        </Svg>
    );
}

export default SvgComponent;
