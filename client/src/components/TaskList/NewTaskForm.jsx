import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import formatDate from 'date-fns/format'

import { addTask } from '../../actions/task';
import { TaskListItem, DoneBox } from '../../styles/TaskList/TaskList';
import { NameInput, DateInput } from '../../styles/TaskList/NewTaskForm';

const NewTaskForm = (props) => {

  const [formValues, setFormValues] = useState({ name: '', dueDate: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const { listAlias } = useParams();

  const { name, dueDate } = formValues;

  function handleDateFocus(event) {
    event.preventDefault();
    if (dueDate === '') {
      const todayDateFormatted = formatDate(new Date(), 'yyyy-MM-dd');

      setFormValues({
        ...formValues,
        dueDate: todayDateFormatted,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const dateValues = dueDate.split('-');
    const year = dateValues[0];
    const month = dateValues[1];
    const day = dateValues[2];
    const dateFromVals = new Date(year, month-1, day);
    const dueDateTimestamp = dateFromVals.getTime();

    dispatch(addTask(name, dueDateTimestamp, listAlias))
      .then(() => {
        setIsLoading(false);
        setFormValues({ name: '', dueDate: '' });
      })
      .catch(() => {
        setIsLoading(false);
        setFormValues({ name: '', dueDate: '' });
      });
  }

  return (
    <TaskListItem
      as="form"
      onSubmit={handleSubmit}
    >
        <NameInput
          as="input"
          type="text"
          placeholder="Add new task"
          required
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={handleChange} 
        />
    
        <DateInput
          as="input"
          type="date"
          required
          id="dueDate"
          name="dueDate"
          label="dueDate"
          value={dueDate}
          onChange={handleChange} 
          onFocus={handleDateFocus}
        />

        {isLoading ? (
          <DoneBox disabled={true} >
            <p>...</p>
          </DoneBox>
        ) : (
          <DoneBox
            as="button"
            title="Add new task"
          >
            +
          </DoneBox>
        )}
    </TaskListItem>
  )
}

export default NewTaskForm;