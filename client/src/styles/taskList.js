import styled from 'styled-components';
import device from './device';

export const TaskListWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: auto;
margin: auto;
margin-top: 5vw;
margin-bottom: 5vw;
border-radius: 4px;
backdrop-filter: blur(4px);
background: ${({ theme }) => theme.listBackground};
@media ${device.tablet} {
  width: 60%;
}
@media ${device.laptop} {
  width: 40%;
  margin-top: 2vw;
  margin-bottom: 2vw;
}
`;

export const ListHeading = styled.h1`
font-style: normal;
font-weight: normal;
font-size: 8vw;
margin-bottom: 3vh;
text-shadow: 1px 1px 1px ${({ theme }) => theme.headingTextShadowColor};
color: ${({ theme }) => theme.headingColor};
@media ${device.tablet} {
  font-size: 6vw;
}
@media ${device.laptop} {
  font-size: 5vw;
}
`

export const SubheadingSection = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const SubheadingWrapper = styled.div`
text-align: center;
font-size: 5vw;
font-style: normal;
font-weight: normal;
margin-bottom: 0;
padding-bottom: 0;
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
width: 50%;
`;

export const DateSubheading = styled(SubheadingWrapper)`
width: 33%;
`;

export const StatusSubheading = styled(SubheadingWrapper)`
width: 16.7%;
`;

export const StyledUL = styled.ul`
list-style-type: none;
width: 90%;
margin-top: 0;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0;
`;

export const TaskListItem = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const BoxWrapper = styled.div`
// display: flex;
// justify-content: center;
`;

export const NameBoxWrapper = styled(BoxWrapper)`
width: 50%;
`;

export const DateBoxWrapper = styled(BoxWrapper)`
width: 33%;
`;

export const DoneBoxWrapper = styled(BoxWrapper)`
width: 16.7%;
`;

const TaskBox = styled.div`
min-height: 8vw;
font-size: 15px;
margin: 10px auto;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
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

export const StyledSelect = styled.select`
align-self: flex-end;
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

export const CreditsWrapper = styled.div`
margin: auto 5%;
align-self: flex-start;
color: ${({ theme }) => theme.creditsColor || theme.doneButtonColor};
a {
  color: inherit;
}
`;
