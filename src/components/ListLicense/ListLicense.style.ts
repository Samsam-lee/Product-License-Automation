import styled from 'styled-components';

const ListLicenseFrame = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px;
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const TopLeft = styled.div`
  display: flex;
`;

export const TopRight = styled.div`
  display: flex;
`;

export const Middle = styled.div`
  display: flex;
  flex: 6;
  /* justify-content: space-between; */
`;

export const Bottom = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export default ListLicenseFrame;
