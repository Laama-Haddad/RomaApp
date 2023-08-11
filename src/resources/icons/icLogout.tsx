import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={17} viewBox="0 0 20 17" {...props}>
            <Path
                d="M.68,9.91,5.44,6.34V8.72H15V11.1H5.44v2.38Zm7.14,8.33V15.86h9.53V4H7.82V1.58H19.73V18.24Z"
                transform="translate(-0.68 -1.58)"/>
        </Svg>
    );
}

export default SvgComponent;
