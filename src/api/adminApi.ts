import axios, { AxiosError } from 'axios';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * admin ip 가 맞는지 아닌지 판단하는 api
 * @returns admin ip 가 맞다면 true, 아니면 false
 */
const adminApi = async () => axios.get(`${API_BASE_URL}:${PORT}/admin`).catch((error: Error | AxiosError) => {
  console.error(error);
});

export default adminApi;
