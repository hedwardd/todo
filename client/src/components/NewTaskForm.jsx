import React, { useState } from 'react';
import { connect } from 'react-redux';
import { _attemptTaskSave } from '../redux/actions/taskFormActions';

// async function postTask({ name, dueDate }) {
//   const newTask = { name, dueDate };
//   const response = await fetch('/api/tasks', {
//     method: 'POST',
//     body: JSON.stringify(newTask),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if (response.status !== 200) {
//     return { error: response.status }
//   } else {
//     const data = await response.json();
//     return data;
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  attemptTaskSave: (name, dueDate) => dispatch(_attemptTaskSave(name, dueDate)),
});

function Presentational({ attemptTaskSave }) {

  const [formValues, setFormValues] = useState({ name: '', dueDate: '' });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    const { name, dueDate } = formValues;
    attemptTaskSave(name, dueDate);
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
      <input
        className="done"
        type="submit"
        value="Add"
      />
    </form>
  )
}

const NewTaskForm = connect(null, mapDispatchToProps)(Presentational);

export default NewTaskForm;