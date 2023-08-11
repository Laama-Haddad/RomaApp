import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'styled-components/native';
import Icon from '../Icon';
import {getByScreenSize} from '../../utils/responsive';
import {MarkerProps} from "../../resources/interfaces/components/markerProps";

const Marker = ({style, type = 'point', radius = 0, color, onPress }: MarkerProps) => {
    const theme = useTheme();
    if (type === 'point') {
        return (
            <View style={style}>
                <Icon
                    onPress={(ev) => {
                        if (onPress) onPress();
                        ev.stopPropagation();
                    }}
                    style={{fontSize: getByScreenSize(theme.text.s1, theme.text.s3)}}
                    type="Fontisto"
                    name="map-marker-alt"
                    size={getByScreenSize(theme.text.s2, theme.text.s4)}
                    color={color}
                />
            </View>
        );
    }
    return (
        <View
            style={
                [style,
                    {
                        backgroundColor: color,
                        width: 20 + radius,
                        height: 20 + radius,
                        borderRadius: 10000,
                    }]
            }
        />
    );
};
export default Marker;
