import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability } from '../actions/list';

const HomeScreen = (props) => {

  const [selectedCreate, setSelectedCreate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const [aliasInput, setAliasInput] = useState("");

  const { toCheck, isAliasAvailable } = useSelector(state => state.list);
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

  const handleChange = ({ target }) => {
    const { value } = target;
    setAliasInput(value);
  };

  const headerText = selectedCreate
    ? "Pick an alias..."
    : "Enter your alias...";

  const buttonText = selectedCreate
    ? "Create"
    : "Go to List";

  return (
    <div>
      {selectedCreate == null ? (
        <div>
          <div>
            <h2>Create New List</h2>
            <button
              onClick={() => setSelectedCreate(true)}
            >Create</button>
          </div>
          
          <div>
            <h2>Use Existing</h2>
            <button
              onClick={() => setSelectedCreate(false)}
            >Search</button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedCreate(null)}
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
          >
            {buttonText}
          </button>

          {!isLoading && message && (
            <p>{message}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
