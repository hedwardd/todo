import React from 'react';
import { ContentWrapper, SectionWrapperCol, H2Wrapper, StyledH2, InputWrapper, StyledInput, StyledLoader, MessageWrapper, MessageText } from '../../styles/HomeScreen/LookupCard';
import { PrimaryButton, PrimaryButtonText, TertiaryButton, TertiaryButtonText } from '../../styles/HomeScreen/Buttons';

const LookupCard = ({ handleBackClick, handlePrimaryClick, handleInputChange, aliasInput, isLoading, headerText, buttonText, isPrimaryButtonEnabled, displayMessage, isErrorMessage }) => {

  return (
    <ContentWrapper>
      <TertiaryButton
        onClick={handleBackClick}
      >
        <TertiaryButtonText>Back</TertiaryButtonText>
      </TertiaryButton>

      <SectionWrapperCol>
        <H2Wrapper>
          <StyledH2>
            {headerText}
          </StyledH2>
        </H2Wrapper>

        <InputWrapper>
          <StyledInput
            placeholder="my-list"
            value={aliasInput}
            onChange={handleInputChange}
          />
          {isLoading ? (
            <StyledLoader 
              type="TailSpin"
              color="#808080"
              height={24}
              width={24}
              timeout={10000} //3 secs
            />
          ) : null }
        </InputWrapper>

        <MessageWrapper>
            <MessageText
              error={isErrorMessage}
            >
              {displayMessage}
            </MessageText>
        </MessageWrapper>
      </SectionWrapperCol>

      <SectionWrapperCol>
        <PrimaryButton
          disabled={!isPrimaryButtonEnabled}
          onClick={handlePrimaryClick}
        >
          <PrimaryButtonText>
            {buttonText}
          </PrimaryButtonText>
        </PrimaryButton>
      </SectionWrapperCol>
    </ContentWrapper>
  );
}

export default LookupCard;
