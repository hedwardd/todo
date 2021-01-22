import React, { useState, useEffect } from 'react';

async function postTask({ name, dueDate }) {
  const newTask = { name, dueDate };
  const response = await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(newTask),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.status !== 200) {
    return { error: response.status }
  } else {
    const data = await response.json();
    return data;
  }
}

function NewTaskForm({setToFetch}) {

  const [formValues, setFormValues] = useState({ name: '', dueDate: '' });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const result = await postTask(formValues);
    console.log(result);
    if (result.success) {
      setFormValues({ name: '', dueDate: '' });
      setToFetch(true);
    };
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

export default NewTaskForm;