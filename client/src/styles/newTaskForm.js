import styled from 'styled-components';
import device from './device';
import { DateBox } from './TaskList';

export const DateInput = styled(DateBox)`
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