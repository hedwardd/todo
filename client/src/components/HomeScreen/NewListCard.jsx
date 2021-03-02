import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability, addList } from '../../actions/list';
import { SectionWrapperRow, SectionWrapperCol, H2Wrapper, StyledH2, StyledInput, MessageWrapper, MessageText } from '../../styles/HomeScreen/LookupCard';
import { Card } from '../../styles/HomeScreen/Card';
import { PrimaryButton, PrimaryButtonText, TertiaryButton, TertiaryButtonText } from '../../styles/HomeScreen/Buttons';

const NewListCard = ({ isUserCreating, setIsUserCreating }) => {

  const [isLoading, setIsLoading] = useState(false);
  
  const [aliasInput, setAliasInput] = useState("");

  const { isAliasAvailable, newListCreated } = useSelector(state => state.list);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (aliasInput.length > 2)
        dispatch(checkAliasAvailability(aliasInput))
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
    }, 500);

    return () => {clearTimeout(timer)};
  }, [aliasInput]);


  const history = useHistory();
  useEffect(() => {
    if (newListCreated)
      history.push(`/tasks/${aliasInput}`);
  }, [newListCreated]);

  const handleChange = ({ target }) => {
    const { value } = target;
    setAliasInput(value);
  };

  // const headerText = isUserCreating
  //   ? "Pick an alias..."
  //   : "Enter your alias...";

  // const buttonText = isUserCreating
  //   ? "Create"
  //   : "Go to List";

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
            Pick an alias...
          </StyledH2>
        </H2Wrapper>

        <StyledInput
          placeholder="my-list"
          value={aliasInput}
          onChange={handleChange}
        />

        <MessageWrapper>
          {!isLoading && message && (
            <MessageText>{message}</MessageText>
          )}
        </MessageWrapper>
      </SectionWrapperCol>

      <SectionWrapperCol>
        <PrimaryButton
          disabled={isLoading ? true : !isAliasAvailable}
          onClick={() => dispatch(addList(aliasInput))}
        >
          <PrimaryButtonText>Create</PrimaryButtonText>
        </PrimaryButton>
      </SectionWrapperCol>
    </Card>
  );
}

export default NewListCard;
