import { createGlobalStyle } from 'styled-components';
import device from './device';

export const GlobalStyles = createGlobalStyle`

body {
  transition: all 0.25s linear;
  font-family: ${({ theme }) => theme.fontFamily}, Arial;
  font-style: normal;
  font-weight: normal;
  background-image: ${({ theme }) => theme.backgroundImage};
  background-color: ${({ theme }) => theme.backgroundColor};
  background-size: cover;
  background-attachment: fixed;
  @media ${device.tablet} {
    background-image: ${({ theme }) => theme.largeBackgroundImage};
  }
}

input {
  font-family: ${({ theme }) => theme.fontFamily}, Arial;
}

button {
  font-family: ${({ theme }) => theme.fontFamily}, Arial;
}
`
