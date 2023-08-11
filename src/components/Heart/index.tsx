import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ripple from "react-native-material-ripple";
import Icon from '../Icon';
import { HeartProps } from "../../resources/interfaces/components/heart";
import { useTheme } from "styled-components";

const CircleButton = styled(Ripple)`
    justify-content:center;
    align-items:center;
    padding:2%;
    width:${({radius}) => radius * 2}px;
    height:${({radius}) => radius * 2}px;
    border-radius:${({radius}) => !!radius ? radius : 20}px;
    background-color: ${({
                                                                                                                                                                                                     favorite,
                                                                                                                                                                                                     theme,
                                                                                                                                                                                                     type
                                                                                                                                                                                                 }) => favorite ? theme.heart.background : type === 'solid' ? '#FFFFFF25' : 'transparent'}
`;
const Heart = ({
                   size,
                   disable = false,
                   onToggleFavorite,
                   isFavorite = false,
                   radius = 20,
                   type = 'outline',
                   style
               }: HeartProps) => {
    const theme = useTheme();
    const onFavoriteChange = () => {
        if (onToggleFavorite) onToggleFavorite();
    }
    return (<CircleButton rippleContainerBorderRadius={radius}
                          disabled={disable}
                          radius={radius}
                          type={type}
                          favorite={isFavorite}
                          style={style}
                          onPress={onFavoriteChange}>

        <Icon name={'heart'} type={type === 'outline' ? 'SVG' : 'AntDesign'}
              size={!!size ? size : type === 'outline' ? theme.text.s2 : theme.text.s5}
              color={type === 'outline' ? isFavorite ? theme.heart.outlineFavorite : theme.heart.outlineUnFavorite : theme.heart.solid}/>
    </CircleButton>)
}

export default Heart;
