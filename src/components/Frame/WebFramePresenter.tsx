import FrameProps from '../../@types/FrameTypes';
import Container, { Copyright, Frame, Logo } from './Frame.style';
import SGASOL from '../../assets/images/sgasol.png';
import { COPYRIGHT } from '../../global/global-conf';

const WebFramePresenter: React.FC<FrameProps> = ({ children }) => (
  <Container>
    <Frame>
      { children }
    </Frame>
    <Logo src={SGASOL} />
    <Copyright>
      {COPYRIGHT}
    </Copyright>
  </Container>
);

export default WebFramePresenter;
