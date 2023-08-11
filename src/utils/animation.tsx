import {LayoutAnimation} from "react-native";

export const toggleAnimationConfig = {
    duration: 300,
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
        duration: 200,
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
};
