import styled, { createGlobalStyle } from 'styled-components';

import layoutSize from '../layoutSize';
import device from '../device';

export const TaskListGlobalStyles = createGlobalStyle`
body {
  margin: 0;
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
  cursor: pointer;
}
`

export const TaskListWrapper = styled.div`
display: grid;
grid-template-columns: 3fr 2fr 1fr;
gap: ${layoutSize[3]};
align-items: center;

margin: ${layoutSize[4]} ${layoutSize[3]};
padding: ${layoutSize[3]};

border-radius: 4px;
backdrop-filter: blur(4px);
background: ${({ theme }) => theme.listBackground};

@media ${device.tablet} {
  width: ${layoutSize[14]};
  margin: ${layoutSize[6]} auto;
  padding: ${layoutSize[4]} ${layoutSize[5]};
  gap: ${layoutSize[5]};
}
@media ${device.laptop} {
  width: ${layoutSize[15]};
  margin: ${layoutSize[7]} auto;
  padding: ${layoutSize[6]};
  gap: ${layoutSize[6]};
}
@media ${device.laptopL} {
  width: ${layoutSize[16]};
  margin: ${layoutSize[8]} auto;
}
`;

export const ListHeading = styled.h1`
grid-column: 1 / -1;
justify-self: center;
margin-bottom: 3vh;

font-size: 8vw;
font-style: normal;
font-weight: normal;
text-shadow: 1px 1px 1px ${({ theme }) => theme.headingTextShadowColor};
color: ${({ theme }) => theme.headingColor};

@media ${device.tablet} {
  font-size: 6vw;
}
@media ${device.laptop} {
  font-size: 5vw;
}
`

const SubheadingWrapper = styled.h2`
margin-bottom: 0;

text-align: center;
font-size: 5vw;
font-style: normal;
font-weight: normal;
color: ${({ theme }) => theme.subHeadingColor || theme.headingColor};
text-shadow: .5px .5px 1px ${({ theme }) => theme.subHeadingTextShadowColor || theme.headingTextShadowColor};

@media ${device.tablet} {
  font-size: 3vw;
}
@media ${device.laptop} {
  font-size: 2vw;
}
`;

export const ItemSubheading = styled(SubheadingWrapper)`
grid-column: 1 / 2;
`;

export const DateSubheading = styled(SubheadingWrapper)`
grid-column: 2 / 3;
`;

export const StatusSubheading = styled(SubheadingWrapper)`
grid-column: 3 / 4;
`;

export const StyledUL = styled.ul`
display: contents;
`;

export const TaskListItem = styled.li`
display: contents;
`;

const TaskBox = styled.div`
min-height: 8vw;

display: flex;
justify-content: center;
align-items: center;

font-size: 15px;
text-align: center;
border-radius: 4px;
text-shadow: .2px .2px 1px ${({ theme }) => theme.taskTextShadowColor};
background-color: ${({ theme }) => theme.taskBackgroundColor};
@media ${device.tablet} {
  min-height: 3vw;
}
`;

export const NameBox = styled(TaskBox)`
color: ${({ theme }) => theme.taskNameColor};
border: 1px solid ${({ theme }) => theme.taskNameBorderColor};
`

export const DateBox = styled(TaskBox)`
color: ${({ theme }) => theme.taskDateColor};
border: 1px solid ${({ theme }) => theme.taskDateBorderColor};
::-webkit-inner-spin-button,
::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
`;

export const DoneBox = styled(TaskBox)`
width: 8vw;
height: 8vw;
justify-self: center;

color: ${({ theme }) => theme.doneButtonColor};
border: 1px solid ${({ theme }) => theme.doneButtonBorderColor};
@media ${device.tablet} {
  width: 3vw;
  height: 3vw;
}
`;

export const StyledMessage = styled.p`
color: ${({ theme }) => theme.subHeadingColor || theme.headingColor};
`;

export const CreditsWrapper = styled.div`
grid-column: 1 / 3;
color: ${({ theme }) => theme.creditsColor || theme.doneButtonColor};
a {
  color: inherit;
}
`;

export const StyledSelect = styled.select`
grid-column: 3 / 4;
font-size: 16px;
padding: 0.5vw;
top: 2vw;
margin: auto 5%;
border-radius: 4px;
color: #ebebeb;
background-color: #696969;
@media ${device.tablet} {
  font-size: 20px;
}
`;
