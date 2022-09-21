import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { DEEP_BLUE } from '../../global/global-color';

const CustomDatePicker = styled(DatePicker)`
  font-family: 'DalseoHealingBold';
  font-size: 20px;
  color: ${DEEP_BLUE};
  height: 40px;
  width: 97%;
  border: 0;
  border-radius: 10px;
  padding: 6px 0 0 13px;
  cursor: pointer;
`;

export default CustomDatePicker;
