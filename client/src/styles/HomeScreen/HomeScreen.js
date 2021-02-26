import styled from 'styled-components';
import device from '../device';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
padding: 24px;

position: absolute;
width: 350px;
height: 300px;
left: calc(50% - 350px/2);
top: calc(50% - 300px/2);

/* Background / Card */
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;

/* Frames / Elevated */
box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
border-radius: 8px;
`;

export const SectionWrapperRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

flex: 1;
margin: 20px 0px;
`;

export const SectionWrapperCol = styled(SectionWrapperRow)`
flex-direction: column;
`;

export const H2Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
margin: 0px 24px;
`;

export const StyledH2 = styled.h2`
/* Header / Card */
font-family: SF Pro Display;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
/* identical to box height */
text-align: center;

/* Full / Black */
color: #000000;
`;

export const PrimaryButton = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 16px;

height: 32px;

background: #808080;
border: none;
border-radius: 4px;
`;

export const PrimaryButtonText = styled.p`
font-family: SF Pro Display;
font-style: normal;
// font-weight: bold;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;
white-space: nowrap;

/* Base / White */
color: #FFFFFF;
`;

export const SecondaryButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 16px;

height: 32px;

/* Base / White */
background: #FFFFFF;

/* Gray / 200 */
border: 1px solid #C1C9D2;
box-sizing: border-box;

box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1);
border-radius: 4px;
`;

export const SecondaryButtonText = styled.p`
/* Body / 500 */
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;

/* Gray / 600 */
color: #4F566B;
`;

export const TertiaryButton = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 6px;

position: absolute;
left: 0;
top: 0;

/* Base / White */
background: none;

/* Gray / 200 */
// border: 1px solid #C1C9D2;
box-sizing: border-box;
/* Elevation / 300 */

// box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1);
// border-radius: 4px;
border: none;
`;

export const TertiaryButtonText = styled.p`
padding: 6px 16px;

/* Body / 500 */
font-family: SF Pro Display;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;

/* Gray / 600 */
color: #4F566B;
`;

export const StyledInput = styled.input`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px;

width: 302px;

border: 1px solid #000000;

text-align: center;
`;

export const MessageWrapper = styled.div`
position: absolute;
bottom: 41%;
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;

// height: 33px;
`;

export const MessageText = styled.p`
font-family: SF Pro Display;
font-style: normal;
font-weight: 800;
font-size: 11px;
line-height: 13px;
text-align: center;

color: #000000;
`;
