import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminApi from '../../../api/adminApi';
import emailApi from '../../../api/emailApi';
import loginApi from '../../../api/loginApi';
import useUserInfoContext from '../../../global/UserInfoContext';
import LoginContentPresenter from './LoginContentPresenter';

const LoginContentContainer = () => {
  const {
    name, email, setName, setEmail,
  } = useUserInfoContext();
  const [userAuthCode, setUserAuthCode] = useState<String>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<String>('');
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    setText('정보를 모두 입력해주세요.');
  };

  const handlingName = (getName?: any) => {
    setName(getName?.target.value);
  };

  const handlingEmail = (getEmail?: any) => {
    setEmail(`${getEmail.target.value}@sgacorp.kr`);
  };

  const handlingUserAuthCode = (getAuthCode?: any) => {
    setUserAuthCode(getAuthCode.target.value);
  };

  /**
   * 사용자 이름과 이메일 존재하면 Email API 사용
   */
  const sendEmail = () => {
    if (name && email) {
      emailApi(email);
      setText('인증번호가 발급되었습니다.');
      setIsOpen(true);
    } else {
      setText('정보를 모두 입력해주세요.');
      setIsOpen(true);
    }
  };

  /**
   * name, email, userAuthCode 존재하면 loginApi 호출 후 로그인
   */
  const loginClick = () => {
    if (name && email && userAuthCode) {
      loginApi(userAuthCode).then(() => {
        navigate('/request-license');
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
      }).catch((error: Error) => {
        console.error(error);
        setText('인증번호를 정확히 입력해주세요.');
        setIsOpen(true);
      });
    } else {
      setText('정보를 모두 입력해주세요.');
      setIsOpen(true);
    }
  };

  useEffect(() => {
    adminApi().then((response: any) => {
      // console.log(response.data);
      if (response.data) {
        setName(response.data.name);
        setEmail(response.data.email);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('isAdmin', 'true');
        navigate('/request-license');
      }
    });
  }, []);

  return (
    <LoginContentPresenter
      handlingName={handlingName}
      handlingEmail={handlingEmail}
      sendEmail={sendEmail}
      handlingUserAuthCode={handlingUserAuthCode}
      loginClick={loginClick}
      closeModal={closeModal}
      isOpen={isOpen}
      text={text}
    />
  );
};

export default LoginContentContainer;
