import React from 'react';
import { Card } from '../../styles/HomeScreen/Card';
import { SectionWrapperRow, H2Wrapper, StyledH2 } from '../../styles/HomeScreen/HomeScreen';
import { PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText, TertiaryButton, TertiaryButtonText, } from '../../styles/HomeScreen/Buttons';

const InitialCard = ({ setIsUserCreating }) => {

  return (
    <Card>
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
    </Card>
  );
}

export default InitialCard;
