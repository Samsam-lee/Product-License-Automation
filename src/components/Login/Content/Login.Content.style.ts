import styled from 'styled-components';
import { DEEP_BLUE, WHITE } from '../../../global/global-color';
import ImagePresenter from '../../Image/ImagePresenter';

const Content = styled.div`
    width: 35vw;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const InputBoxContainer = styled.div`
    display: flex;
    margin: 0 15px 15px 15px;
    flex: 1;
    height: 60px;
`;

export const Box = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 10px;
  border: 2px solid ${DEEP_BLUE};
  align-items: center;
  padding-left: 10px;
`;

export const AtSign = styled.div`
  display: flex;
  flex: 0.1;
  height: 50px;
  background-color: ${WHITE};
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const MailBox = styled.div`
  display: flex;
  flex: 0.35;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 10px;
  border: 2px solid ${DEEP_BLUE};
  justify-content: center;
  line-height: 50px;
  text-align: center;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: 15px;
`;

export const MailButton = styled.div`
  display: flex;
  flex: 0.5;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 10px;
  background-color: ${DEEP_BLUE};
  border: 2px solid ${DEEP_BLUE};
  justify-content: center;
  margin-left: 10px;
  line-height: 50px;
  text-align: center;
  color: ${WHITE};
  font-family: 'DalseoHealingBold';
  font-size: 15px;
  cursor: pointer;
  min-width: 90px;
`;

export const InputImage = styled(ImagePresenter)`
  width: 30px;
  height: 30px;
  position: absolute;
`;

export const InputBox = styled.input`
  /* flex: 1; */
  width: 70%;
  height: 75%;
  margin: 0 10px 0 40px;
  border: 0;
  font-size: 20px;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
`;

export const LoginButton = styled.div`
  flex: 1;
  min-width: 170px;
  height: 60px;
  line-height: 60px;
  background-color: ${DEEP_BLUE};
  border-radius: 30px;
  text-align: center;
  color: ${WHITE};
  font-family: 'DalseoHealingBold';
  font-size: calc(10px + 1.5vw);
  cursor: pointer;
`;

export default Content;
