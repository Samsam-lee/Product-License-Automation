import ModalProps from '../../@types/ModalTypes';
import ModalPresenter from './ModalPresenter';

const ModalContainer = ({
  children, isOpen, onRequestClose,
}: ModalProps) => (
    <ModalPresenter
      children = { children }
      isOpen = { isOpen }
      onRequestClose = { onRequestClose }
    />
);

export default ModalContainer;
