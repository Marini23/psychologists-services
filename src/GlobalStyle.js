import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import InterRegular from './fonts/Inter-Regular.ttf';
import InterMedium from './fonts/Inter-Medium.ttf';
import InterSemiBold from './fonts/Inter-SemiBold.ttf';
import InterBold from './fonts/Inter-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  }

@font-face {
    font-family: 'Inter';
    src: url(${InterRegular});
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'Manrope';
    src: url(${InterMedium});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${InterSemiBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Manrope';
    src: url(${InterBold});
    font-weight: bold;
    font-style: normal;
  }

body {
width: 100%;
height: 100vh;
/* height: '100vh'; */
margin: 0 auto;
color: #191A15;
background-color: ${({ theme }) => theme.colors.background};
font-size: 100%;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

ul 
 {
    list-style: none;
  }

button {
    cursor: pointer;
}

`;
