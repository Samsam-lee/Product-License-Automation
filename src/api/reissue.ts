import axios from 'axios';
import LicenseProps from '../@types/LicenseTypes';
import { API_BASE_URL, PORT } from '../global/global-conf';

/**
 * list data를 전달하여 license 재발급
 * @param {LicenseProps} licenseData 라이선스 데이터
 * @returns license의 json String
 */
const reissueApi = async (licenseData: LicenseProps) => axios.post(`${API_BASE_URL}:${PORT}/reissue`, {
  id: licenseData.id,
  name: licenseData.name,
  email: licenseData.email,
  agent: licenseData.agent,
  activatedDate: licenseData.activatedDate,
  expireDate: licenseData.expireDate,
  product: licenseData.product,
  allowedNumber: licenseData.allowedNumber,
  type: licenseData.type,
  version: licenseData.version,
  license: licenseData.license,
  key: licenseData.key,
  note: licenseData.note,
});

export default reissueApi;
