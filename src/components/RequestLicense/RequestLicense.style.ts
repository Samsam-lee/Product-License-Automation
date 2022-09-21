import styled from 'styled-components';
import {
  DEEP_BLUE, PLACEHOLDER_GREY, WHITE,
} from '../../global/global-color';
import ImagePresenter from '../Image/ImagePresenter';

const RequestLicenseFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-top: -10px;
`;

export const TopLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const TopRight = styled.div`
  display: flex;
`;

export const Middle = styled.div`
  display: flex;
  flex: 6;
  justify-content: space-between;
`;

export const MiddleLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 20px;
`;

export const MiddleLeftFrame = styled.div`
  display: flex;
  padding: 2px 0;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const MiddleTitle = styled.div`
  display: flex;
  flex: 0.3;
  text-align: center;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: calc(13px + 0.5vw);
  line-height: calc(20px + 0.5vw);
`;

export const MiddleRight = styled.div`
  display: flex;
`;

export const MiddleImage = styled(ImagePresenter)`
  width: 25vw;
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-top: 15px;
`;

export const BottomButton = styled.div<{ isAdmin?: any }>`
  display: flex;
  width: 40%;
  background-color: ${DEEP_BLUE};
  border-radius: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  font-family: 'DalseoHealingBold';
  height: 50px;
  font-size: 20px;
  cursor: ${({ isAdmin }: any) => (isAdmin ? null : 'pointer')};
`;

export const EmailInput = styled.input`
  /* border: 0; */
  padding: 5px;
  font-size: 20px;
  margin-left: 20px;
  font-family: 'DalseoHealingBold';
  color: ${PLACEHOLDER_GREY};
  outline: none;
  letter-spacing: 1px;
`;

export const SGAEmail = styled.div`
  font-size: 20px;
  font-family: 'DalseoHealingBold';
  color: ${PLACEHOLDER_GREY};
  letter-spacing: 1px;
  margin-left: 5px;
`;

export default RequestLicenseFrame;
