import ModalProps from '../../../@types/ModalTypes';
import RequestModalPresenter from './RequestModalPresenter';

const RequestModalContainer: React.FC<ModalProps> = ({ isOpen, onRequestClose, text }) => (
    <>
      <RequestModalPresenter isOpen={isOpen} onRequestClose={onRequestClose} text={text} />
    </>
);

export default RequestModalContainer;
