import { createGlobalStyle } from 'styled-components';
import device from './device';

export const GlobalStyles = createGlobalStyle`

  // @import url(https://fonts.googleapis.com/css?family=Henny+Penny);
  // @import url(https://fonts.googleapis.com/css?family=Emilys+Candy);
  // @import url(https://fonts.googleapis.com/css?family=La+Belle+Aurore);
  // @import url(https://fonts.googleapis.com/css?family=Actor);

  // *,
  // *::after,
  // *::before {
  //   box-sizing: border-box;
  // }

  body {
    background-image: ${({ theme }) => theme.backgroundImage};
    background-color: ${({ theme }) => theme.backgroundColor};
    background-size: cover;
    background-attachment: fixed;
    font-family: ${({ theme }) => theme.fontFamily}, Arial;
    font-style: normal;
    font-weight: normal;
    transition: all 0.25s linear;
    @media ${device.tablet} {
      background-image: ${({ theme }) => theme.largeBackgroundImage};
    }
  }

  input {
    font-family: ${({ theme }) => theme.fontFamily}, Arial;
  }
`
