import Modal from 'react-modal';
import ModalProps from '../../@types/ModalTypes';
import ModalStyle from './Modal.style';

const ModalPresenter = ({
  isOpen, children, onRequestClose,
}: ModalProps) => (
  <Modal
    isOpen = { isOpen }
    onRequestClose = { onRequestClose }
    style = {{ content: ModalStyle }}
    ariaHideApp = { false }
  >
    { children }
  </Modal>
);

export default ModalPresenter;
