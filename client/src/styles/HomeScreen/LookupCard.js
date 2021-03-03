import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import layoutSize from '../layoutSize';
import fontSize from '../fontSize';
import { NeutralColor, GreenColor, RedColor } from './Colors';

export const SectionWrapperCol = styled.div`
display: flex;
flex-direction: column;
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

export const InputWrapper = styled.div`
position: relative;
`;

export const StyledInput = styled.input`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${layoutSize[2]};

width: ${layoutSize[12]};

border: 1px solid ${NeutralColor[300]};

font-size: ${fontSize[3]};
text-align: center;
color: ${NeutralColor[900]};


::placeholder {
  color: ${NeutralColor[500]};
}

&:focus {
  border: 1px solid ${NeutralColor[700]};
  outline: none;
}
`;

export const StyledLoader = styled(Loader)`
position: absolute;
right: ${layoutSize[2]};
top: calc(50% - ${layoutSize[5]}/2);
`;

export const MessageWrapper = styled.div`
position: absolute;
bottom: 30%;
`;

export const MessageText = styled.p`
font-style: normal;
font-weight: normal;
font-size: ${fontSize[3]};
text-align: center;

color: ${({error}) => error ? RedColor[600] : GreenColor[600]};
`;
