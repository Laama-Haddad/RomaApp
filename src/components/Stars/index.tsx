import React, { useState } from 'react';
import { useTheme } from "styled-components/native";
import { StarsProps } from "../../resources/interfaces/components/stars";
import StarRating from 'react-native-star-rating';

const Stars = ({
                   emptyStarName,
                   fullStarName,
                   halfStarName,
                   iconSet,
                   emptyStarColor,
                   fullStarColor,
                   starsCount = 0,
                   starSize,
                   maxStars = 5,
                   disable = true,
                   starStyle,
                   buttonStyle,
                   containerStyle,
               }: StarsProps) => {
    const theme = useTheme();
    const [value, setValue] = useState(starsCount);
    return (<StarRating
        disabled={disable}
        emptyStar={!!emptyStarName ? emptyStarName : 'star-o'}
        fullStar={!!fullStarName ? fullStarName : 'star'}
        halfStar={!!halfStarName ? halfStarName : 'star-half-full'}
        iconSet={!!iconSet ? iconSet : 'FontAwesome'}
        maxStars={maxStars}
        starSize={!!starSize ? starSize : theme.text.s6}
        rating={value}
        emptyStarColor={!!emptyStarColor ? emptyStarColor : theme.stars.icon}
        fullStarColor={!!fullStarColor ? fullStarColor : theme.stars.icon}
        selectedStar={(rating) => setValue(rating)}
        starStyle={starStyle}
        containerStyle={containerStyle}
        buttonStyle={buttonStyle}
    />);
}
export default Stars;
