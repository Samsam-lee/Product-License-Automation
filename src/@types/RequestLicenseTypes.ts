type RequestLicenseProps = {
  requestMenuClicked?: boolean
  listMenuClicked?: boolean
  handleValue?: any
  onSubmit?: any
  isOpen: boolean
  closeModal: any
  logout: () => void
  name: String
  onClick?: any
  selectBoxClick?: any
  productClicked: boolean
  typeClicked: boolean
  versionClicked: boolean
  product?: String
  type?: String
  version?: String
  handleSelectValue: (target: HTMLDivElement, kind: string) => void
  date?: Date
  handleDate: (date: any) => void
  requestData?: any
  email: any
  handleEmail: any
};

export type RequestDataProps = {
  name?: String
  email?: String
  agent?: String
  product?: String
  allowed_number?: String
  expire_date?: String
  type?: String
  version?: String
  note?: String
};

export default RequestLicenseProps;
