import styled from 'styled-components';
import layoutSize from '../layoutSize';

export const Card = styled.div`
position: absolute;
width: ${layoutSize[13]};
height: ${layoutSize[12]};
left: calc(50% - ${layoutSize[13]}/2);
top: calc(50% - ${layoutSize[12]}/2);

display: flex;
justify-content: center;

background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;

box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
border-radius: ${layoutSize[4]};
`;

export default Card;
