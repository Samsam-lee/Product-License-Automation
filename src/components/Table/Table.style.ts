import styled from 'styled-components';
import {
  DEEP_BLUE, GREY, TABLE, TABLETITLE, WHITE,
} from '../../global/global-color';

const TableFrame = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 0.25);
`;

export const TableRow: any = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: ${({ isTitle }: { isTitle: String }) => (isTitle ? WHITE : TABLETITLE)};
  font-family: 'DalseoHealing';
  background-color: ${({ isTitle }) => (isTitle ? TABLETITLE : TABLE)};
  border-top: 1px solid ${({ isTitle }) => (isTitle ? 'none' : TABLETITLE)};
  cursor: ${({ isTitle }) => (isTitle ? 'auto' : 'pointer')};
`;

export const TableField = styled.div<{ fontSize?: any }>`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
`;

export const ReIssueButton = styled.div`
  display: flex;
  flex: 0.7;
  padding: 10px;
  border-radius: 10px;
  background-color: ${DEEP_BLUE};
  color: ${WHITE};
  font-family: 'DalseoHealing';
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;

export const PageFrame = styled.div`
  display: flex;
`;

export const Page: any = styled.div`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: 'DalseoHealingBold';
  color: ${({ currentPage }: { currentPage: String }) => (currentPage === 'true' ? DEEP_BLUE : GREY)};
  padding: 10px;
  cursor: pointer;
`;

export default TableFrame;
