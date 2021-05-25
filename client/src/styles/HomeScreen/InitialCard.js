import styled from 'styled-components';
import layoutSize from '../layoutSize';
import fontSize from '../fontSize';
import { NeutralColor } from './Colors';

export const ContentWrapper = styled.div`
margin: ${layoutSize[6]};
display: grid;
grid-template-columns: 3fr 1fr;
`;

export const StyledH2 = styled.h2`
/* Header / Card */
margin: auto;

font-style: normal;
font-weight: bold;
font-size: ${fontSize[6]};
text-align: center;

color: ${NeutralColor[700]};
`;
