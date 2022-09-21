import styled from 'styled-components';
import { DEEP_BLUE, WHITE } from '../../../global/global-color';
import ImagePresenter from '../../Image/ImagePresenter';

const RequestModalFrame = styled.div`

`;

export const InputImage = styled(ImagePresenter)`
  width: 40px;
  height: 40px;
`;

export const ModalFlex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px;
`;

export const ModalTop = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: 25px;
  line-height: 40px;
  padding-left: 20px;
`;

export const ModalBottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const ModalButton = styled.div`
  display: flex;
  width: 120px;
  border-radius: 20px;
  background-color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: 18px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${WHITE};
`;

export default RequestModalFrame;
