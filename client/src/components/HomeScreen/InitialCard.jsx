import React from 'react';
import { Card } from '../../styles/HomeScreen/Card';
import { ContentWrapper, H2Wrapper, StyledH2 } from '../../styles/HomeScreen/InitialCard';
import { PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText, TertiaryButton, TertiaryButtonText, } from '../../styles/HomeScreen/Buttons';

const InitialCard = ({ setIsUserCreating }) => {

  return (
    <ContentWrapper>
      <StyledH2>Create New List</StyledH2>
      <PrimaryButton
        onClick={() => setIsUserCreating(true)}
      >
        <PrimaryButtonText>Create</PrimaryButtonText>
      </PrimaryButton>

      <StyledH2>Use Existing</StyledH2>
      <SecondaryButton
        onClick={() => setIsUserCreating(false)}
      >
        <SecondaryButtonText>Search</SecondaryButtonText>
      </SecondaryButton>
    </ContentWrapper>
  );
}

export default InitialCard;
