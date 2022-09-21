type LoginProps = {
  isMobile?: boolean
  isPad?: boolean
  handlingName: (name: any) => void
  handlingEmail: (email: any) => void
  sendEmail: () => void
  handlingUserAuthCode: (auth_code: any) => void
  loginClick: () => void
  closeModal: any
  isOpen: boolean
  text?: any
};

export default LoginProps;
