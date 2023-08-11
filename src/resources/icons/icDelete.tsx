import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={23.88} height={19.1} viewBox="0 0 23.88 19.1" {...props}>
            <Path
                fill={props.fill}
                d="M0,3.58V1.19H3.58l1.19-1.19h4.78l1.19,1.19h3.58V3.58H0Zm15.52,3.58v-2.39h8.36v2.39H15.52Zm0,4.78v-2.39h7.16v2.39h-7.16Zm0,4.78v-2.39h4.78v2.39h-4.78Zm-11.94,2.38c-1.31,0-2.38-1.07-2.39-2.38V4.78H13.13v11.94c0,1.32-1.07,2.38-2.39,2.39H3.58Z"/>
        </Svg>
    );
}

export default SvgComponent;
