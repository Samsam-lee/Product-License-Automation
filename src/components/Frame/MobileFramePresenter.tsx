import FrameProps from '../../@types/FrameTypes';
import Container, { MobileFrame } from './Frame.style';

const MobileFramePresenter: React.FC<FrameProps> = ({ children }) => (
  <Container>
    <MobileFrame>
      { children }
    </MobileFrame>
  </Container>
);

export default MobileFramePresenter;
