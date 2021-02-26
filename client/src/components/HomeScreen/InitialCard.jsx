import React from 'react';
import { Card, SectionWrapperRow, H2Wrapper, StyledH2, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../../styles/HomeScreen/HomeScreen';

const InitialCard = ({ setIsUserCreating }) => {

  return (
    <Card>
      <SectionWrapperRow>
        <H2Wrapper>
          <StyledH2>Create New List</StyledH2>
        </H2Wrapper>
        <PrimaryButton
          onClick={() => setIsUserCreating(true)}
        >
          <PrimaryButtonText>Create</PrimaryButtonText>
        </PrimaryButton>
      </SectionWrapperRow>
      
      <SectionWrapperRow>
        <H2Wrapper>
          <StyledH2>Use Existing</StyledH2>
        </H2Wrapper>
        <SecondaryButton
          onClick={() => setIsUserCreating(false)}
        >
          <SecondaryButtonText>Search</SecondaryButtonText>
        </SecondaryButton>
      </SectionWrapperRow>
    </Card>
  );
}

export default InitialCard;
