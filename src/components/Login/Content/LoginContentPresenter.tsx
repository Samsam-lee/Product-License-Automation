import Content, {
  AtSign, Box, InputBox, InputBoxContainer, InputImage,
  LoginButton, MailBox, MailButton,
} from './Login.Content.style';
import NAME from '../../../assets/images/name.svg';
import MAIL from '../../../assets/images/mail.svg';
import NUMBER from '../../../assets/images/number.svg';
import ATSIGN from '../../../assets/images/@.svg';
import LoginProps from '../../../@types/LoginTypes';
import RequestModalContainer from '../../Modal/RequestModal/RequestModalContainer';

const LoginContentPresenter: React.FC<LoginProps> = ({
  handlingName, handlingEmail, sendEmail, handlingUserAuthCode, loginClick,
  closeModal, isOpen, text,
}) => (
  <Content>
    <InputBoxContainer>
      <Box>
        <InputImage src={ NAME } />
        <InputBox placeholder='이름 입력' onChange={handlingName} name='name' />
      </Box>
    </InputBoxContainer>
    <InputBoxContainer>
      <Box>
        <InputImage src={ MAIL } />
        <InputBox placeholder='메일 입력' onChange={handlingEmail} name='emailId' />
      </Box>
      <AtSign>
        <InputImage src={ATSIGN} />
      </AtSign>
      <MailBox>sgacorp.kr</MailBox>
      <MailButton onClick={ sendEmail }>인증번호 발급</MailButton>
    </InputBoxContainer>
    <InputBoxContainer>
      <Box>
        <InputImage src={ NUMBER } />
        <InputBox placeholder='인증번호 입력' onChange={handlingUserAuthCode}/>
      </Box>
    </InputBoxContainer>
    <InputBoxContainer>
      <LoginButton onClick={loginClick}>로그인</LoginButton>
    </InputBoxContainer>

    <RequestModalContainer isOpen={isOpen} onRequestClose={closeModal} text={text} />
  </Content>
);

export default LoginContentPresenter;
