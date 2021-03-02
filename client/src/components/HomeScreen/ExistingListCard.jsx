import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkListExistence } from '../../actions/list';
import { SectionWrapperCol, H2Wrapper, StyledH2, InputWrapper, StyledInput, StyledLoader, MessageWrapper, MessageText } from '../../styles/HomeScreen/HomeScreen';
import { Card } from '../../styles/HomeScreen/Card';
import { PrimaryButton, PrimaryButtonText, TertiaryButton, TertiaryButtonText } from '../../styles/HomeScreen/Buttons';

const ExistingListCard = ({ setIsUserCreating }) => {

  const [toCheck, setToCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [aliasInput, setAliasInput] = useState("");

  const { listFound } = useSelector(state => state.list);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (aliasInput.length > 2) {
        setIsLoading(true);
        dispatch(checkListExistence(aliasInput))
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

  const history = useHistory();
  const handleClick = () => {
    history.push(`/tasks/${aliasInput}`);
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    setAliasInput(value);
    setToCheck(true);
  };

  return (
    <Card>
      <TertiaryButton
        onClick={() => setIsUserCreating(null)}
      >
        <TertiaryButtonText>Back</TertiaryButtonText>
      </TertiaryButton>

      <SectionWrapperCol>
        <H2Wrapper>
          <StyledH2>
            Enter your alias...
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
              error={!listFound}
            >
              {message}
            </MessageText>
          )}
        </MessageWrapper>
      </SectionWrapperCol>

      <SectionWrapperCol>
        <PrimaryButton
          disabled={(toCheck || isLoading) ? true : !listFound}
          onClick={handleClick}
        >
          <PrimaryButtonText>Go</PrimaryButtonText>
        </PrimaryButton>

      </SectionWrapperCol>
    </Card>
  );
}

export default ExistingListCard;
