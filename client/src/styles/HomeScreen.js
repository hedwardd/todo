import styled from 'styled-components';
import device from './device';

export const Card = styled.div`
/* Auto Layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 24px;

position: absolute;
width: 350px;
height: 294px;
left: calc(50% - 350px/2);
top: calc(50% - 294px/2);

/* Background / Card */
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;

/* Frames / Elevated */
box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.12);
border-radius: 8px;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
`;

export const SectionWrapper = styled.div`
/* Auto Layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 24px;

position: static;
width: 330px;
height: 123px;
left: 10px;
top: 147px;


/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
`;

export const H2Wrapper = styled.div`
/* Auto Layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 183px;
height: 29px;
left: 24px;
top: 47px;

/* Inside Auto Layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;
margin: 0px 24px;
`;

export const StyledH2 = styled.h2`
/* Use Existing */
position: static;
width: 179px;
height: 29px;
left: 0px;
top: 0px;

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

/* Inside Auto Layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;
`;

export const PrimaryButton = styled.button`

/* Auto Layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 16px;

position: static;
left: 70%;
right: 7.27%;
top: 36.99%;
bottom: 36.99%;

background: #808080;
border-radius: 4px;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 24px;
`;

export const PrimaryButtonText = styled.p`
position: static;
width: 43px;
height: 20px;
left: 16px;
top: 6px;

font-family: SF Pro Display;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;

/* Base / White */
color: #FFFFFF;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 4px 0px;
`;

export const SecondaryButton = styled.button`
/* Auto Layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 16px;

position: static;
left: 68.79%;
right: 7.27%;
top: 36.99%;
bottom: 36.99%;

/* Base / White */
background: #FFFFFF;

/* Gray / 200 */
border: 1px solid #C1C9D2;
box-sizing: border-box;
/* Elevation / 300 */

box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.06), 0px 1px 3px rgba(55, 65, 81, 0.1);
border-radius: 4px;

/* Inside Auto Layout */
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 24px;
`;

export const SecondaryButtonText = styled.p`
position: static;
width: 47px;
height: 20px;
left: 16px;
top: 6px;

/* Body / 500 */
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

text-align: center;

/* Gray / 600 */
color: #4F566B;

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 12px 0px;
`;