import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={18.79} height={18.78} viewBox="0 0 18.79 18.78" {...props}>
            <Path
                fill={props.fill}
                d="M18.61,15.09l-5.7-5.7,5.7-5.7a.59.59,0,0,0,0-.83L15.92.17a.59.59,0,0,0-.83,0l-5.7,5.7L3.69.17a.59.59,0,0,0-.83,0L.17,2.86a.59.59,0,0,0,0,.83l5.7,5.7-5.7,5.7a.59.59,0,0,0,0,.83l2.69,2.69a.59.59,0,0,0,.83,0l5.7-5.7,5.7,5.7a.59.59,0,0,0,.83,0l2.7-2.69a.6.6,0,0,0,0-.83Z"/>
        </Svg>
    );
}

export default SvgComponent;
