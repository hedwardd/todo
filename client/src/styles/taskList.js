import styled from 'styled-components';

export const TaskListWrapper = styled.div`
  width: 50vw;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2vw;
  margin-bottom: 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.listBackground};
  backdrop-filter: ${({ theme }) => theme.listBackdropFilter};
`;

export const StyledH1 = styled.h1`
font-style: normal;
font-weight: normal;
font-size: 4vw;
text-align: center;
text-shadow: 1px 1px 1px #000000;
margin-bottom: 0vw;
font-family: ${({ theme }) => theme.fontFamily};
text-shadow: ${({ theme }) => theme.headingTextShadow};
color: ${({ theme }) => theme.headingColor};
`

export const H2Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledH2 = styled.h2`
font-style: normal;
font-weight: normal;
font-size: 2.5vw;
text-align: center;
text-shadow: 1px 1px 1px #000000;
font-family: ${({ theme }) => theme.fontFamily};
color: ${({ theme }) => theme.headingColor};
text-shadow: ${({ theme }) => theme.headingTextShadow};
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

export const TaskNameWrapper = styled.div`
  width: 14vw;
  height: 4vw;
  background: rgba(242, 253, 248, 0.6);
  border: 2px solid #D7FFDD;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`

export const TaskDateWrapper = styled.div`
  width: 10vw;
  height: 4vw;
  background: rgba(242, 253, 248, 0.6);
  border: 2px solid #EC8B83;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2vw;
`;

export const DoneButton = styled.button`
  width: 10vw;
  height: 4vw;
  background: rgba(242, 253, 248, 0.6);
  border: 2px solid #9369A8;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  text-align: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 2vw;
`;

export const StyledSelect = styled.select`
  align-self: flex-end;
`;
