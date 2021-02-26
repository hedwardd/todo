import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability, addList } from '../../actions/list';
import { Card, SectionWrapper, H2Wrapper, StyledH2, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../../styles/HomeScreen/HomeScreen';

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

  const headerText = isUserCreating
    ? "Pick an alias..."
    : "Enter your alias...";

  const buttonText = isUserCreating
    ? "Create"
    : "Go to List";

  return (
    <Card>
      <button
        onClick={() => setIsUserCreating(null)}
      >
        Back
      </button>

      <h2>
        {headerText}
      </h2>

      <input
        placeholder="my-list"
        value={aliasInput}
        onChange={handleChange}
      />

      <button
        disabled={isLoading ? true : !isAliasAvailable}
        onClick={() => dispatch(addList(aliasInput))}
      >
        {buttonText}
      </button>

      {!isLoading && message && (
        <p>{message}</p>
      )}
    </Card>
  );
}

export default NewListCard;
