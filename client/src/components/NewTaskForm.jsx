import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/task';


const NewTaskForm = (props) => {

  const [formValues, setFormValues] = useState({ name: '', dueDate: '' });
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    setIsLoading(true);

    const { name, dueDate } = formValues;

    dispatch(addTask(name, dueDate))
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });;
  }

  return (
    <form
      className="task"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label>
        <input
          className="items"
          type="text"
          required
          id="name"
          name="name"
          label="Name"
          value={formValues.name}
          onChange={(event) => handleChange(event)} 
        />
      </label>

      <label>
        <input
          className="dates"
          type="date"
          required
          id="dueDate"
          name="dueDate"
          label="dueDate"
          value={formValues.dueDate}
          onChange={(event) => handleChange(event)} 
        />
      </label>

      {isLoading ? (
        <button className="done" disabled="true" >
          <p>Loading...</p>
        </button>
      ) : (
        <input className="done" type="submit" value="Add" />
      )}
    </form>
  )
}

export default NewTaskForm;