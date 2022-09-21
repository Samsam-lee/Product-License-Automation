import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DEEP_BLUE, GREY, WHITE } from '../../global/global-color';
import ImagePresenter from '../Image/ImagePresenter';

const NameImage = styled(ImagePresenter)`
  width: calc(25px + 1vw);
  height: calc(25px + 1vw);
`;

export const Name = styled.div`
  text-align: center;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  font-size: calc(10px + 1vw);
  line-height: calc(25px + 1vw);
  margin-left: 10px;
`;

export const MenuFrame = styled(Link)`
  display: flex;
  margin: 0 10px;
  cursor: pointer;
`;

export const MenuImage = styled(ImagePresenter)`
  width: calc(15px + 1vw);
  height: calc(15px + 1vw);
  margin-right: 5px;
`;

export const Menu = styled.div`
  text-align: center;
  color: ${({ color }: any) => (color)};
  font-family: 'DalseoHealingBold';
  font-size: calc(15px + 0.5vw);
  line-height: calc(15px + 1vw);
`;

export const InputBox = styled.input`
  flex: 1;
  width: 100%;
  height: 75%;
  border: 0;
  border-radius: 10px;
  font-size: 20px;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
  box-sizing: border-box;
  padding-left: 13px;
`;

export const Box = styled.div<{ isClickBox?: any }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 50px;
  background-color: ${WHITE};
  border-radius: 10px;
  border: 2px solid ${DEEP_BLUE};
  cursor: ${({ isClickBox }: any) => (isClickBox ? 'pointer' : 'auto')};
  font-size: 20px;
  color: ${DEEP_BLUE};
  font-family: 'DalseoHealingBold';
`;

export const SelectBox = styled.div<{ isClick?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  display: ${({ isClick }: any) => (isClick ? 'block' : 'none')};
  background-color: ${WHITE};
  border-radius: 10px;
  z-index: 999;
  border: ${({ isClick }: any) => (isClick ? `2px solid ${GREY}` : 'none')};
  box-shadow: 0px 15px 30px -5px rgb(0 0 0 / 0.7);
  margin-top: 15px;
`;

export const SelectBoxVisualBox = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const SelectBoxContents = styled.div<{ line?: boolean, isClick?: boolean }>`
  flex: 1;
  width: 100%;
  line-height: 50px;
  border-top: ${({ line }: any) => (line ? 'none' : `2px solid ${GREY}`)};
  z-index: 9999;
`;

export const ContentsText = styled.div`
  margin-left: 15px;
`;

export const SelectBoxArrow = styled(ImagePresenter)`
  display: flex;
  width: 40px;
  height: 40px;
`;

export default NameImage;
