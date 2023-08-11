import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" {...props}>
            <Path
                d="M.28,9.16v-2h6v2Zm3,6v-2h6v2Zm7.41,6H7.28v-2h3a5,5,0,0,1,10-.22v.22h1a1,1,0,0,0,1-.88V11.85a1,1,0,0,0-.14-.5l-.08-.11L16.69,4.32a3,3,0,0,0-2.17-1.15H3.28v-2h11A5,5,0,0,1,18.1,2.89l.17.2L23.64,10a3,3,0,0,1,.63,1.62v6.53a3,3,0,0,1-2.83,3H19.86a5,5,0,0,1-9.17,0Z"
                transform="translate(-0.28 -1.16)"/>
        </Svg>
    );
}

export default SvgComponent;
