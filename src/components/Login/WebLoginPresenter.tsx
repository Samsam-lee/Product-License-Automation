import LoginFrame, {
  Contents, LoginImage, Title,
} from './Login.style';
import LoginImg from '../../assets/images/pla1.svg';
import LoginContentContainer from './Content/LoginContentContainer';

const WebLoginPresenter = () => (
    <LoginFrame>
        <Title>License</Title>
        <Contents>
            {/* {isPad ? <></> : <LoginImage src={ LoginImg }/>} */}
            <LoginImage src={ LoginImg }/>
            <LoginContentContainer/>
        </Contents>
    </LoginFrame>
);

export default WebLoginPresenter;
