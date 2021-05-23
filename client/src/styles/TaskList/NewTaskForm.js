import styled from 'styled-components';
import device from '../device';
import { NameBox, DateBox } from './TaskList';

export const NameInput = styled(NameBox)`
::placeholder{
  color: ${({ theme }) => theme.taskNameColor};
  font-style: italic;
  opacity: 0.6;
}
`;

export const DateInput = styled(DateBox)`
font-style: italic;

font-size: 10px;
@media ${device.mobileM} {
  font-size: 12px;
}
@media ${device.mobileL} {
  font-size: 14px;
}
@media ${device.tablet} {
  font-size: inherit;
}
`;