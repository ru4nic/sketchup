import { createGlobalStyle } from 'styled-components';

import extraLight from '../assets/fonts/Nunito-ExtraLight.ttf';
import light from '../assets/fonts/Nunito-Light.ttf';
import regular from '../assets/fonts/Nunito-Regular.ttf';
import medium from '../assets/fonts/Nunito-Medium.ttf';
import semiBold from '../assets/fonts/Nunito-SemiBold.ttf';
import bold from '../assets/fonts/Nunito-Bold.ttf';
import extraBold from '../assets/fonts/Nunito-ExtraBold.ttf';
import black from '../assets/fonts/Nunito-Black.ttf';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 18px;
        line-height: 1.75;
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }
    body {
        font-weight: normal;
        margin: 0;
        box-sizing: border-box;
        overflow: auto;
        font-family: sans-serif;

    }
    #root {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 2rem;
        margin-top: 0;
    }
    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    h4 {
        margin: 0;
        font-size: 1rem;
    }
    li {
        list-style: none;
    }

    ul {
    padding: 0;
    margin: 0;
    }

    @font-face {
        font-display: swap;
        font-family: 'Nunito Extralight';
        font-style: normal;
        font-weight: 200;
        src: url(${extraLight});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Light';
        font-style: normal;
        font-weight: 300;
        src: url(${light});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Regular';
        font-style: normal;
        font-weight: 400;
        src: url(${regular});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Medium';
        font-style: normal;
        font-weight: 500;
        src: url(${medium});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Semi-Bold';
        font-style: normal;
        font-weight: 600;
        src: url(${semiBold});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Bold';
        font-style: normal;
        font-weight: 700;
        src: url(${bold});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Extra-Bold';
        font-style: normal;
        font-weight: 800;
        src: url(${extraBold});
    }
    @font-face {
        font-display: swap;
        font-family: 'Nunito Black';
        font-style: normal;
        font-weight: 900;
        src: url(${black});
    }
    @media screen and (min-width: 1600px) {
        html {
        font-size: 22px;
        }
    }

    @media screen and (max-width: 1600px) {
        html {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1400px) {
        html {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1280px) {
        html {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 1150px) {
        html {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 900px) {
        html {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 625px) {
        html {
            font-size: 14px;
        }
    }
`;

export default GlobalStyles;
