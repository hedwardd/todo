import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { addTask } from '../../actions/task';
import { TaskListItem, NameBoxWrapper, DateBoxWrapper, DoneBoxWrapper, NameBox, DoneBox } from '../../styles/TaskList';
import { DateInput } from '../../styles/NewTaskForm';


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

  function handleSubmit(event) {
    event.preventDefault();
    
    setIsLoading(true);

    const { name, dueDate } = formValues;

    dispatch(addTask(name, dueDate, listAlias))
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
      onSubmit={(event) => handleSubmit(event)}
    >
      
      <NameBoxWrapper>
        <NameBox
          as="input"
          type="text"
          required
          id="name"
          name="name"
          label="Name"
          value={formValues.name}
          onChange={(event) => handleChange(event)} 
        />
      </NameBoxWrapper>
    
      <DateBoxWrapper>
        <DateInput
          as="input"
          type="date"
          required
          id="dueDate"
          name="dueDate"
          label="dueDate"
          value={formValues.dueDate}
          onChange={(event) => handleChange(event)} 
        />
      </DateBoxWrapper>    

      <DoneBoxWrapper>
        {isLoading ? (
          <DoneBox disabled="true" >
            <p>...</p>
          </DoneBox>
        ) : (
          <DoneBox
            as="button"
          >
            +
          </DoneBox>
        )}
      </DoneBoxWrapper>
    </TaskListItem>
  )
}

export default NewTaskForm;