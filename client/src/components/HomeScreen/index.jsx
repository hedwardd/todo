import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { checkAliasAvailability, addList, checkListExistence, resetState } from '../../actions/list';
import { setMessage } from '../../actions/message';
import Card from '../../styles/HomeScreen/Card';
import InitialCard from './InitialCard';
import LookupCard from './LookupCard';

const AliasRegEx = /^[a-z0-9_-]{0,15}$/;

const HomeScreen = (props) => {

  // Hooks init
  const dispatch = useDispatch();
  const history = useHistory();

  // App state
  const { isAliasAvailable, newListCreated, listFound } = useSelector(state => state.list);
  const { message } = useSelector(state => state.message);
  
  // Local state
  const [isUserCreating, setIsUserCreating] = useState(null);
  const [aliasInput, setAliasInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toCheck, setToCheck] = useState(false);

  // Other variables
  const aliasCheckMethod = isUserCreating ? checkAliasAvailability : checkListExistence;

  // Effect(s)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (aliasInput.length > 2) {
        setIsLoading(true);
        dispatch(aliasCheckMethod(aliasInput))
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

  useEffect(() => {
    if (newListCreated)
      history.push(`/tasks/${aliasInput}`);
  }, [newListCreated]);

  // Logic
  const handleBackClick = () => {
    setAliasInput('');
    setIsUserCreating(null);
    dispatch(resetState());
  }

  const handlePrimaryClick = isUserCreating
    ? () => dispatch(addList(aliasInput))
    : () => {
      dispatch(setMessage('Welcome back!'));
      history.push(`/tasks/${aliasInput}`);
    };

  const handleInputChange = ({ target }) => {
    const { value } = target;
    if (AliasRegEx.test(value)) {
      setAliasInput(value);
      setToCheck(true);
    }
    if (value.length < 3)
      dispatch(resetState);
  };

  const headerText = isUserCreating ? "Pick an alias..." : "Enter your alias...";
  const buttonText = isUserCreating ? "Create" : "Go to List";
  const isPrimaryButtonEnabled =
    (toCheck || isLoading)
      ? true
      : isUserCreating
        ? isAliasAvailable
        : listFound
  const displayMessage = (!toCheck && !isLoading)
    ? message
    : '';
  const isErrorMessage = isUserCreating
    ? !isAliasAvailable
    : !listFound;

  return (
    <Card>
      {isUserCreating === null ? (
        <InitialCard
          setIsUserCreating={setIsUserCreating}
        />
      ) : (
        <LookupCard
          handleBackClick={handleBackClick}
          handlePrimaryClick={handlePrimaryClick}
          handleInputChange={handleInputChange}
          aliasInput={aliasInput}
          isLoading={isLoading}
          headerText={headerText}
          buttonText={buttonText}
          isPrimaryButtonEnabled={isPrimaryButtonEnabled}
          displayMessage={displayMessage}
          isErrorMessage={isErrorMessage}
        />
      )}
    </Card>
  )
}

export default HomeScreen;
