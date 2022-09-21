import styled from 'styled-components';
import ImagePresenter from '../Image/ImagePresenter';
import { DEEP_BLUE } from '../../global/global-color';

const LoginFrame = styled.div`
    display: flex;
    /* padding: 100px; */
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 500px;
`;

export const Title = styled.div`
    font-family: 'DalseoHealingBold';
    font-size: calc(25px + 2vw);
    text-align: center;
    margin-bottom: calc(25px + 2vw);
    color: ${DEEP_BLUE};
`;

export const Contents = styled.div`
    display: flex;
`;

export const LoginImage = styled(ImagePresenter)`
    width: 35vw;
`;

export default LoginFrame;
