import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability, addList, checkListExistence, resetState } from '../../actions/list';
import { SectionWrapperCol, H2Wrapper, StyledH2, InputWrapper, StyledInput, StyledLoader, MessageWrapper, MessageText } from '../../styles/HomeScreen/LookupCard';
import { Card } from '../../styles/HomeScreen/Card';
import { PrimaryButton, PrimaryButtonText, TertiaryButton, TertiaryButtonText } from '../../styles/HomeScreen/Buttons';

const LookupCard = ({ isUserCreating, setIsUserCreating }) => {

  const { isAliasAvailable, newListCreated, listFound } = useSelector(state => state.list);
  const { message } = useSelector(state => state.message);

  const [isLoading, setIsLoading] = useState(false);
  
  const [aliasInput, setAliasInput] = useState("");
  
  const dispatch = useDispatch();
  
  const [toCheck, setToCheck] = useState(false);
  const checkFunc = isUserCreating ? checkAliasAvailability : checkListExistence;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (aliasInput.length > 2) {
        setIsLoading(true);
        dispatch(checkFunc(aliasInput))
          .then(() => {
            setIsLoading(false);
            setToCheck(false);
          })
          .catch(() => {
            setIsLoading(false);
            setToCheck(false);
          });
      }
      else setIsLoading(false);
    }, 500);

    return () => {clearTimeout(timer)};
  }, [aliasInput]);

  const handleBackButton = () => {
    setIsUserCreating(null);
    dispatch(resetState());
  }

  const history = useHistory();

  const handlePrimaryClick = isUserCreating
    ? () => dispatch(addList(aliasInput))
    : () => history.push(`/tasks/${aliasInput}`);

  const handleChange = ({ target }) => {
    const { value } = target;
    setAliasInput(value);
    setToCheck(true);
    if (value.length < 3)
      dispatch(resetState);
  };

  useEffect(() => {
    if (newListCreated)
      history.push(`/tasks/${aliasInput}`);
  }, [newListCreated]);

  const headerText = isUserCreating ? "Pick an alias..." : "Enter your alias...";
  const buttonText = isUserCreating ? "Create" : "Go to List";
  const lookupError = isUserCreating ? !isAliasAvailable : !listFound;
  const isButtonDisabled = toCheck || isLoading || isUserCreating ? !isAliasAvailable : !listFound;

  return (
    <Card>
      <TertiaryButton
        onClick={handleBackButton}
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
            onChange={handleChange}
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
          {!toCheck && !isLoading && message && (
            <MessageText
              error={lookupError}
            >
              {message}
            </MessageText>
          )}
        </MessageWrapper>
      </SectionWrapperCol>

      <SectionWrapperCol>
        <PrimaryButton
          disabled={isButtonDisabled}
          onClick={handlePrimaryClick}
        >
          <PrimaryButtonText>
            {buttonText}
          </PrimaryButtonText>
        </PrimaryButton>
      </SectionWrapperCol>
    </Card>
  );
}

export default LookupCard;
