import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

function SvgComponent(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={569.16} height={569.16} viewBox="0 0 569.16 569.16" {...props} >
            <Path d="M284.58,0C127.663,0,0,127.663,0,284.58s127.663,284.58,284.58,284.58s284.58-127.663,284.58-284.58S441.497,0,284.58,0z
			 M284.58,507.96c-123.171,0-223.38-100.209-223.38-223.38S161.409,61.2,284.58,61.2s223.38,100.209,223.38,223.38
			S407.751,507.96,284.58,507.96z"/>
            <Path d="M284.58,113.709c-94.217,0-170.871,76.653-170.871,170.871c0,94.218,76.653,170.87,170.871,170.87
			c94.218,0,170.87-76.652,170.87-170.87C455.45,190.363,378.798,113.709,284.58,113.709z M284.58,394.25
			c-60.472,0-109.67-49.198-109.67-109.67s49.199-109.67,109.67-109.67s109.67,49.199,109.67,109.67S345.052,394.25,284.58,394.25z"
            />
            <Circle cx="284.58" cy="284.58" r="64.933"/>
        </Svg>
    );
}

export default SvgComponent;
