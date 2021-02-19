import React, { useState } from 'react';

const HomeScreen = (props) => {

  const [isCreating, setIsCreating] = useState(null);
  const [aliasInput, setAliasInput] = useState("");

  const headerText = isCreating
    ? "Pick an alias..."
    : "Enter your alias...";

  const buttonText = isCreating
    ? "Create"
    : "Go to List";

  return (
    <div>
      {isCreating == null ? (
        <div>
          <div>
            <h2>Create New List</h2>
            <button
              onClick={() => setIsCreating(true)}
            >Create</button>
          </div>
          
          <div>
            <h2>Use Existing</h2>
            <button
              onClick={() => setIsCreating(false)}
            >Search</button>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setIsCreating(null)}
          >
            Back
          </button>

          <h2>
            {headerText}
          </h2>

          <input
            placeholder="my-list"
          />

          <button disabled>
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
