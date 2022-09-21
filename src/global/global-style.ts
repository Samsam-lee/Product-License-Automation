import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import DalseoHealing from '../assets/fonts/DalseoHealingMedium.ttf';
import DalseoHealingBold from '../assets/fonts/DalseoHealingBold.ttf';
import { BLACK } from './global-color';

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'DalseoHealing';
        src: url(${DalseoHealing});
    }
    @font-face {
        font-family: 'DalseoHealingBold';
        src: url(${DalseoHealingBold});
    }
    a {
        color: ${BLACK};
        text-decoration: none;
    }
`;

export default GlobalStyle;
