import styled from 'styled-components';
import layoutSize from '../layoutSize';

export const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
padding: ${layoutSize[6]};

position: absolute;
width: ${layoutSize[13]};
height: ${layoutSize[12]};
left: calc(50% - ${layoutSize[13]}/2);
top: calc(50% - ${layoutSize[12]}/2);

background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;

box-shadow: 0px ${layoutSize[4]} ${layoutSize[5]} rgba(0, 0, 0, 0.12);
border-radius: ${layoutSize[2]};
`;
