import styled from 'styled-components';

export const TaskListWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw;
	padding-bottom: 10vw;
	border-radius: 4px;
  backdrop-filter: blur(4px);
  background: ${({ theme }) => theme.listBackground};

  @media (min-width: 768px){
    width: 60%;
    padding-bottom: 2vw;
  }
`;

export const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 8vw;
  margin-bottom: 0vw;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.headingTextShadowColor};
  color: ${({ theme }) => theme.headingColor};
`

export const H2Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledH2 = styled.h2`
  font-size: 5.5vw;
  font-style: normal;
  font-weight: normal;
  color: ${({ theme }) => theme.subHeadingColor || theme.headingColor};
  text-shadow: .5px .5px 1px ${({ theme }) => theme.subHeadingTextShadowColor || theme.headingTextShadowColor};
`;

export const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
	justify-content: space-around;
	margin-left: -5vw;
`;

export const TaskListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TaskInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  margin: 10px 10px;
  padding: 0px 5px;
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
  text-shadow: .2px .2px 1px ${({ theme }) => theme.taskTextShadowColor};
  background-color: ${({ theme }) => theme.taskBackgroundColor};
  @media (min-width: 768px){
    font-size: 20px;
  }
`;

export const TaskNameWrapper = styled(TaskInfoBox)`
  width: 50%;
  color: ${({ theme }) => theme.taskNameColor};
  border: 1px solid ${({ theme }) => theme.taskNameBorderColor};
`

export const TaskDateWrapper = styled(TaskInfoBox)`
  width: 33%;
  color: ${({ theme }) => theme.taskDateColor};
  border: 1px solid ${({ theme }) => theme.taskDateBorderColor};
`;

export const DoneButton = styled(TaskInfoBox)`
  width: 16.7%;
  color: ${({ theme }) => theme.doneButtonColor};
  border: 1px solid ${({ theme }) => theme.doneButtonBorderColor};
`;

export const StyledSelect = styled.select`
  align-self: flex-end;
  font-size: 3vw;
	width: 16vw;
	top: 2vw;
	margin-bottom: 1vw;
	border-radius: 4px;
	height: 6vw;
	color: #ebebeb;
  background-color: #696969;
`;
