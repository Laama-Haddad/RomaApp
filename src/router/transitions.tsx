import {TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack';
import {TransitionProps} from '../resources/interfaces/transitionProps';

const LeftToRight = {
    gestureDirection: 'horizontal-inverted',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, layouts}) => ({
        cardStyle: {
            transform: [
                {
                    translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-layouts.screen.width, 0],
                    }),
                },
            ],
        },
        overlayStyle: {
            opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
            }),
        },
    }),
};

const RightToLeft: TransitionProps = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, layouts}) => ({
        cardStyle: {
            transform: [
                {
                    translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                    }),
                },
            ],
        },
        overlayStyle: {
            opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
            }),
        },
    }),
};

export default {
    RightToLeft,
    LeftToRight,
};
