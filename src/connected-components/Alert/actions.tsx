import {store} from '../../redux/store';
import {showAlert, hideAlert} from './reducer';
import {AlertMessage} from '../../resources/interfaces/alert';

/**
 * This function show global modal alert
 * [
 *  {message: 'test message', title: 'alert', onPress: () => console.log('close')}
 * ]
 */
export const showGlobalAlert = ({message, title}: AlertMessage) => {
  store.dispatch(
    showAlert({
      message,
      title,
    }),
  );
};

/**
 * This function close global modal alert
 */
export const closeGlobalAlert = () => {
  store.dispatch(hideAlert());
};
