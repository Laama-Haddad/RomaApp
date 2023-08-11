import {TransitionSpec} from '@react-navigation/stack/src/types';

export interface TransitionProps {
  gestureDirection: string;
  transitionSpec: {
    open: TransitionSpec;
    close: TransitionSpec;
  };
  headerStyleInterpolator: any;
  cardStyleInterpolator: any;
}
