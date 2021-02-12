import styled from 'styled-components';
import device from './device';

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 5vw;
  margin-bottom: 5vw;
  padding: 2vw;
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
  margin-bottom: 0vw;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.headingTextShadowColor};
  color: ${({ theme }) => theme.headingColor};
  @media ${device.tablet} {
    font-size: 6vw;
  }
  @media ${device.laptop} {
    font-size: 5vw;
  }
`

export const SubheadingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Subheading = styled.h2`
  text-align: center;
  font-size: 5.5vw;
  font-style: normal;
  font-weight: normal;
  color: ${({ theme }) => theme.subHeadingColor || theme.headingColor};
  text-shadow: .5px .5px 1px ${({ theme }) => theme.subHeadingTextShadowColor || theme.headingTextShadowColor};
  @media ${device.tablet} {
    font-size: 4vw;
  }
  @media ${device.laptop} {
    font-size: 2.5vw;
  }
`;

export const ItemSubheading = styled(Subheading)`
  width: 32vw;
  // width: 45%;
  // flex-grow: 3;
`;

export const DateSubheading = styled(Subheading)`
  width: 28vw;
  // width: 30%;
  // flex-grow: 2;
`;

export const StatusSubheading = styled(Subheading)`
  width: 12vw;
  // width: 15%;
  // flex-grow: 1;
`;

export const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
	justify-content: center;
	margin-left: -5vw;
`;

export const TaskListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TaskInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 30px;
  margin: 10px 10px;
  padding: 0px 5px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  text-shadow: .2px .2px 1px ${({ theme }) => theme.taskTextShadowColor};
  background-color: ${({ theme }) => theme.taskBackgroundColor};
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const TaskNameWrapper = styled(TaskInfoBox)`
  width: 36vw;
  // width: 50%;
  color: ${({ theme }) => theme.taskNameColor};
  border: 1px solid ${({ theme }) => theme.taskNameBorderColor};
`

export const TaskDateWrapper = styled(TaskInfoBox)`
  width: 20vw;
  // width: 33%;
  color: ${({ theme }) => theme.taskDateColor};
  border: 1px solid ${({ theme }) => theme.taskDateBorderColor};
`;

export const DoneButton = styled(TaskInfoBox)`
  // width: 8vw;
  // height: 8vw;
  // width: 16.7%;
  padding: 10px;
  color: ${({ theme }) => theme.doneButtonColor};
  border: 1px solid ${({ theme }) => theme.doneButtonBorderColor};
`;

export const StyledMessage = styled.p`
  color: ${({ theme }) => theme.subHeadingColor || theme.headingColor};
`;

export const StyledSelect = styled.select`
  align-self: flex-end;
  font-size: 16px;
  padding: 0.5vw;
	top: 2vw;
	margin-bottom: 1vw;
	border-radius: 4px;
	color: #ebebeb;
  background-color: #696969;
  @media ${device.tablet} {
    font-size: 20px;
  }
`;
