import React, { useState, useEffect } from 'react';
import './App.css';

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

async function updateTask(taskId, update) {
  const response = await fetch(`/api/tasks/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify(update),
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

function App() {

  const [tasks, setTasks] = useState([]);
  const [toFetch, setToFetch] = useState(true);
  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      if (data) setTasks(data);
    }
    if (toFetch) {
      fetchTasks();
      setToFetch(false);
    }
  }, [toFetch]);

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
    if (result.success) setToFetch(true);
  }

  async function handleUpdate(taskId, update) {
    const result = await updateTask(taskId, update);
    console.log(result);
    if (result.success) setToFetch(true);
  }


  return (
    <div className="App">
      <h1>
        My To-dos
      </h1>
      <ul className="list">
        {tasks.map((task) => task.isDone ? "" : (
          <li className="item" key={task._id}>
            <p>
              {task.name}
            </p>
            <p>
              {task.dueDate}
            </p>
            <button
              onClick={() => handleUpdate(task._id, { isDone: true })}
            >
              Done?
            </button>
          </li>
        )
      )}
      </ul>

      <form className="task-form" onSubmit={(event) => handleSubmit(event)}>
        <label>
          <input
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
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
}

export default App;
