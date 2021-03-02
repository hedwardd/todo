import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import layoutSize from '../layoutSize';
import fontSize from '../fontSize';
import { PrimaryColor, NeutralColor, GreenColor, RedColor } from './Colors';

export const SectionWrapperRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

margin: ${layoutSize[5]} 0px;
`;

export const H2Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

flex-grow: 1;
margin: 0px ${layoutSize[5]};
`;

export const StyledH2 = styled.h2`
/* Header / Card */
font-style: normal;
font-weight: bold;
font-size: ${fontSize[6]};

text-align: center;

color: ${NeutralColor[700]};
`;
