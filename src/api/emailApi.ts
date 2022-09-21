import axios, { AxiosError } from 'axios';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * 사용자 인증번호 발급을 위한 이메일 API
 * @param {String} email 사용자 이메일
 * @returns HttpStatus
 */
const emailApi = async (email?: String) => axios.post(`${API_BASE_URL}:${PORT}/email`, {
  email,
}).catch((error: Error | AxiosError) => {
  console.error(error);
});

export default emailApi;
