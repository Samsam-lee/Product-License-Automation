import axios from 'axios';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * 라이선스 발급 목록 호출 api
 * @param {String} name 사용자 이름
 * @param {number} currentPage 현재 페이지
 * @returns 사용자가 발급한 전체 데이터 수, 현재 페이지 라이선스 목록 데이터
 */
const listApi = async (name: String, currentPage: number) => axios.post(`${API_BASE_URL}:${PORT}/list`, {
  name,
  currentPage,
});

export default listApi;
