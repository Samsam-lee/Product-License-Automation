import axios from 'axios';
import { RequestDataProps } from '../@types/RequestLicenseTypes';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * 사용자가 입력한 라이선스 정보를 객체로 API 호출 후 라이선스 생성
 * @param {RequestDataProps} data 사용자가 입력한 라이선스 정보
 * @returns 라이선스 json
 */
const requestApi = async (data: RequestDataProps) => axios.post(`${API_BASE_URL}:${PORT}/request`, {
  name: data.name,
  email: data.email,
  agent: data.agent,
  product: data.product,
  expireDate: data.expire_date,
  allowedNumber: data.allowed_number,
  type: data.type,
  version: data.version,
  note: data.note,
});

export default requestApi;
