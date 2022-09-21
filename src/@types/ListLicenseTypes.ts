import { PagingType } from '../utils/pagination';

type ListLicenseProps = {
  requestMenuClicked?: boolean
  listMenuClicked?: boolean
  title?: Array<String>
  paging?: PagingType
  pageNumber?: Array<number>
  tableData?: Array<any>
  reIssue?: any
  logout: () => void
  name: String
  currentPage?: number
  changePage: (num: number, name: String) => void
  checkJson: (jsonData: any) => void
  isOpen: boolean
  closeModal: () => void
  modalText: String
  redirectingForReissue: (data: any) => void
};

export default ListLicenseProps;
