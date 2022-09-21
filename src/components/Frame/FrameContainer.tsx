import { useMediaQuery } from 'react-responsive';
import FrameProps from '../../@types/FrameTypes';
import MobileFramePresenter from './MobileFramePresenter';
import WebFramePresenter from './WebFramePresenter';

const FrameContainer: React.FC<FrameProps> = ({ children }) => {
  const isMobile: boolean = useMediaQuery({
    query: '(max-width:885px)',
  });

  return (
    <>
      {
        isMobile
          ? <MobileFramePresenter>
          { children }
        </MobileFramePresenter>
          : <WebFramePresenter>
          { children }
        </WebFramePresenter>
      }
    </>
  );
};

export default FrameContainer;
