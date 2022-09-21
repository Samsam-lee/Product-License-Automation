import styled from 'styled-components';
import { GREY, WHITE } from '../../global/global-color';
import ImagePresenter from '../Image/ImagePresenter';

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    min-height: 600px;
    justify-content: center;
    align-items: center;
`;

export const Frame = styled.div`
    display: flex;
    width: 80vw;
    height: 70vh;
    min-height: 600px;
    background-color: ${WHITE};
    box-shadow: 10px 20px 100px -10px rgb(0 0 0 / 0.25);
    border-radius: 50px;
`;

export const MobileFrame = styled.div`
    display: flex;
    width: 80vw;
`;

export const Logo = styled(ImagePresenter)`
    position: absolute;
    bottom: 50px;
    right: 200px;
    width: 230px;
`;

export const Copyright = styled.div`
    position: absolute;
    bottom: 50px;
    left: 200px;
    font-family: 'DalseoHealingBold';
    color: ${GREY};
`;

export default Container;
