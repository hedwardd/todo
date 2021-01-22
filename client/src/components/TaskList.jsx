import React, { useState, useEffect } from 'react';
import NewTaskForm from './NewTaskForm';

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

function TaskList() {

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

  async function handleUpdate(taskId, update) {
    const result = await updateTask(taskId, update);
    console.log(result);
    if (result.success) setToFetch(true);
  }


  return (
    <div className="task-list">
      <h1>
        My To-dos
      </h1>
      <div class="headers">
        <h2>item</h2>
        <h2>date</h2>
        <h2>done?</h2>
      </div>
      <ul className="list">
        {tasks.map((task) => task.isDone ? "" : (
          <li className="task" key={task._id}>
            <div className="items">
              <p>
                {task.name}
              </p>
            </div>

            <div className="dates">
              <p>
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>

            <button className="done"
              onClick={() => handleUpdate(task._id, { isDone: true })}
            >
              Done?
            </button>
          </li>
        )
      )}

      <NewTaskForm setToFetch={setToFetch} />

      </ul>
    </div>
  );
}

export default TaskList;
