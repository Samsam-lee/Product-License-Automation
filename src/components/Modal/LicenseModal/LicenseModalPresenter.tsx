// import ModalContainer from '../ModalContainer';
import Modal from 'react-modal';
import ModalProps from '../../../@types/ModalTypes';
import {
  ModalBottom, ModalButton, ModalFlex, ModalStyle, ModalTitle, ModalTop,
} from './LicenseModal.style';

const LicenseModalPresenter: React.FC<ModalProps> = ({ isOpen, onRequestClose, text }) => (
  <>
    <Modal
      isOpen = { isOpen }
      onRequestClose = { onRequestClose }
      style = {{ content: ModalStyle }}
      ariaHideApp = { false }
    >
      <ModalFlex>
        <ModalTop>
          <ModalTitle>{text}</ModalTitle>
        </ModalTop>
        <ModalBottom>
          <ModalButton onClick={onRequestClose}>
            <div>확인</div>
          </ModalButton>
        </ModalBottom>
      </ModalFlex>
    </Modal>
  </>
);

export default LicenseModalPresenter;
