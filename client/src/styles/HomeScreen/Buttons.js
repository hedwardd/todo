import styled, { createGlobalStyle } from 'styled-components';
import Loader from 'react-loader-spinner';
import layoutSize from '../layoutSize';
import fontSize from '../fontSize';
import { PrimaryColor, NeutralColor } from './Colors';

export const PrimaryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: ${layoutSize[2]} ${layoutSize[4]};

height: ${layoutSize[6]};

background: ${PrimaryColor[500]};
border: none;
border-radius: 4px;

:disabled {
  background: ${NeutralColor[300]};
}
`;

export const PrimaryButtonText = styled.p`
font-style: normal;
font-size: ${fontSize[3]};
font-weight: normal;

text-align: center;
white-space: nowrap;

color: #FFFFFF;
`;

export const SecondaryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: ${layoutSize[2]} ${layoutSize[4]};

height: ${layoutSize[6]};

background: ${NeutralColor[100]};
border: none;
border-radius: ${layoutSize[1]};
`;

export const SecondaryButtonText = styled.p`
font-style: normal;
font-weight: normal;
font-size: ${fontSize[3]};

text-align: center;

color: ${PrimaryColor[600]};
`;

export const TertiaryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: ${layoutSize[2]} ${layoutSize[4]};

position: absolute;
left: 0;
top: 0;

background: none;

box-sizing: border-box;
border: none;
`;

export const TertiaryButtonText = styled.p`
font-style: normal;
font-size: ${fontSize[2]};

text-align: center;

color: ${PrimaryColor[600]};
`;
