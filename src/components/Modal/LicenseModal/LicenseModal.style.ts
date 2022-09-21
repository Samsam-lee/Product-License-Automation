import styled from 'styled-components';
import { DEEP_BLUE, GREY, WHITE } from '../../../global/global-color';

const LicenseModalFrame = styled.div`

`;

export const ModalFlex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
`;

export const ModalTop = styled.div`
  display: flex;
  flex: 6;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex: 1;
  /* text-align: center; */
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: 15px;
  line-height: 25px;
  white-space: pre-wrap;
  word-break: break-all;
`;

export const ModalBottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const ModalButton = styled.div`
  display: flex;
  width: 120px;
  height: 60px;
  border-radius: 20px;
  background-color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${WHITE};
`;

export const ModalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: WHITE,
  width: '700px',
  height: '380px',
  borderRadius: '15px',
  border: `1px solid ${GREY}`,
  boxShadow: '10px 20px 100px -10px rgb(0 0 0 / 0.25)',
  display: 'flex',
  flex: 1,
};

export default LicenseModalFrame;
