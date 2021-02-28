import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import scale from '../scale'
import device from '../device';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
padding: ${scale[6]};

position: absolute;
width: ${scale[13]};
height: ${scale[12]};
left: calc(50% - ${scale[13]}/2);
top: calc(50% - ${scale[12]}/2);

background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;

box-shadow: 0px ${scale[4]} ${scale[5]} rgba(0, 0, 0, 0.12);
border-radius: ${scale[2]};
`;

export const SectionWrapperRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

margin: ${scale[5]} 0px;
`;

export const SectionWrapperCol = styled(SectionWrapperRow)`
flex-direction: column;
`;

export const H2Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

flex-grow: 1;
margin: 0px ${scale[5]};
`;

export const StyledH2 = styled.h2`
/* Header / Card */
font-family: SF Pro Display;
font-style: normal;
font-weight: 800;
font-size: ${scale[5]};
line-height: ${scale[5]};

text-align: center;

color: #000000;
`;

export const PrimaryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: ${scale[2]} ${scale[4]};

height: ${scale[6]};

background: #808080;
border: none;
border-radius: 4px;
`;

export const PrimaryButtonText = styled.p`
font-family: SF Pro Display;
font-style: normal;
font-size: ${scale[3]};
line-height: ${scale[4]};

text-align: center;
white-space: nowrap;

color: #FFFFFF;
`;

export const SecondaryButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${scale[2]} ${scale[4]};

height: ${scale[6]};

background: #FFFFFF;

border: 1px solid #C1C9D2;
box-sizing: border-box;
box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1);
border-radius: ${scale[1]};
`;

export const SecondaryButtonText = styled.p`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: ${scale[3]};
line-height: ${scale[4]};

text-align: center;

color: #4F566B;
`;

export const TertiaryButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${scale[2]} ${scale[4]};

position: absolute;
left: 0;
top: 0;

background: none;

box-sizing: border-box;
border: none;
`;

export const TertiaryButtonText = styled.p`
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: ${scale[3]};
line-height: ${scale[4]};

text-align: center;

color: #4F566B;
`;

export const InputWrapper = styled.div`
position: relative;
`;

export const StyledInput = styled.input`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: ${scale[2]};

width: ${scale[12]};

border: 1px solid #000000;

font-size: ${scale[4]};
text-align: center;
`;

export const StyledLoader = styled(Loader)`
position: absolute;
right: ${scale[2]};
top: calc(50% - ${scale[5]}/2);

`;

export const MessageWrapper = styled.div`
position: absolute;
bottom: 30%;
`;

export const MessageText = styled.p`
font-family: SF Pro Display;
font-style: normal;
// font-weight: 400;
font-size: ${scale[3]};
line-height: ${scale[3]};
text-align: center;

color: #000000;
`;
