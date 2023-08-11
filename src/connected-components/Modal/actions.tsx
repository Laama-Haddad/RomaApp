import {store} from '../../redux/store';
import {showModal, hideModal} from './reducer';
import {ModalMessage} from "../../resources/interfaces/connected-components/modal";
import {modalTypes} from "../../utils/enums";

export const showGlobalModal = ({message, title = '', type = modalTypes.info, onConfirm, onReject}: ModalMessage) => {
    store.dispatch(showModal({
        message, title, type, onConfirm, onReject
    }),);
};

/**
 * This function close global modal
 */
export const closeGlobalModal = () => {
    store.dispatch(hideModal());
};
