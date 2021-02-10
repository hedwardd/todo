import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/task';
import { TaskListItem, TaskNameWrapper, TaskDateWrapper, DoneButton } from '../styles/taskList';


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
    <TaskListItem
      as="form"
      onSubmit={(event) => handleSubmit(event)}
    >
      
      <TaskNameWrapper
        as="input"
        type="text"
        required
        id="name"
        name="name"
        label="Name"
        value={formValues.name}
        onChange={(event) => handleChange(event)} 
      />
    
      <TaskDateWrapper
        as="input"
        type="date"
        required
        id="dueDate"
        name="dueDate"
        label="dueDate"
        value={formValues.dueDate}
        onChange={(event) => handleChange(event)} 
      />      

      {isLoading ? (
        <DoneButton disabled="true" >
          <p>Loading...</p>
        </DoneButton>
      ) : (
        <DoneButton
          as="input"
          type="submit"
          value="Add"
        />
      )}
    </TaskListItem>
  )
}

export default NewTaskForm;