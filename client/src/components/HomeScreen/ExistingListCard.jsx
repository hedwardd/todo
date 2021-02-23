import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { checkListExistence } from '../../actions/list';
import { Card, SectionWrapper, H2Wrapper, StyledH2, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../../styles/HomeScreen';

const ExistingListCard = ({ setIsUserCreating }) => {

  const [isLoading, setIsLoading] = useState(false);
  
  const [aliasInput, setAliasInput] = useState("");

  const { listFound } = useSelector(state => state.list);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (aliasInput.length > 2)
        dispatch(checkListExistence(aliasInput))
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
  const handleClick = () => {
    history.push(`/tasks/${aliasInput}`);
  }

  const handleChange = ({ target }) => {
    const { value } = target;
    setAliasInput(value);
  };

  return (
    <Card>
      <button
        onClick={() => setIsUserCreating(null)}
      >
        Back
      </button>

      <h2>
        Enter your alias...
      </h2>

      <input
        placeholder="my-list"
        value={aliasInput}
        onChange={handleChange}
      />

      <button
        disabled={isLoading ? true : !listFound}
        onClick={handleClick}
      >
        Go to List
      </button>

      {!isLoading && message && (
        <p>{message}</p>
      )}
    </Card>
  );
}

export default ExistingListCard;
