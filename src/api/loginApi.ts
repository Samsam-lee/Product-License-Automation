import axios from 'axios';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * 로그인 할 때, 사용하는 API
 * @param {String} authCode 인증번호
 * @returns HttpStatus
 */
const loginApi = async (authCode?: String) => axios.post(`${API_BASE_URL}:${PORT}/login`, {
  authCode,
});

export default loginApi;
