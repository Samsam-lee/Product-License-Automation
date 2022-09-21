import ModalProps from '../../../@types/ModalTypes';
import LicenseModalPresenter from './LicenseModalPresenter';

const LicenseModalContainer: React.FC<ModalProps> = ({ isOpen, onRequestClose, text }) => (
    <>
      <LicenseModalPresenter isOpen={isOpen} onRequestClose={onRequestClose} text={text} />
    </>
);

export default LicenseModalContainer;
