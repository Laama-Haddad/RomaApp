import React, {Ref} from 'react';

export const navigationRef: Ref<any> = React.createRef();

export default (name, params) => {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
