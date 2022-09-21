import ModalContainer from '../ModalContainer';
import DANGER from '../../../assets/images/danger.svg';
import ModalProps from '../../../@types/ModalTypes';
import {
  InputImage, ModalBottom, ModalButton, ModalFlex, ModalTitle, ModalTop,
} from './RequestModal.style';

const RequestModalPresenter: React.FC<ModalProps> = ({ isOpen, onRequestClose, text }) => (
  <>
    <ModalContainer isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalFlex>
        <ModalTop>
          <InputImage src={DANGER} />
          {text !== '' ? <ModalTitle>{text}</ModalTitle> : <ModalTitle>정보를 모두 입력해주세요.</ModalTitle>}
        </ModalTop>
        <ModalBottom>
          <ModalButton onClick={onRequestClose}>
            <div>확인</div>
          </ModalButton>
        </ModalBottom>
      </ModalFlex>
    </ModalContainer>
  </>
);

export default RequestModalPresenter;
