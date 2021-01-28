import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { _attemptFetchTasks } from '../redux/actions/taskListActions';
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


const mapStateToProps = (state) => ({
  tasks: state.taskList.tasks,
  fetchErrorMessage: state.taskList.fetchErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  attemptFetchTasks: () => dispatch(_attemptFetchTasks()),
});


function Presentational({ tasks, fetchErrorMessage, attemptFetchTasks }) {

  const [toFetch, setToFetch] = useState(true);
  useEffect(() => {
    if (toFetch) {
      attemptFetchTasks();
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
      <div className="headers">
        <h2>item</h2>
        <h2>date</h2>
        <h2>done?</h2>
      </div>
      <ul className="list">
        {tasks.map((task) => task.isDone ? "" : (
          <li className="task" key={task.id}>
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
              onClick={() => handleUpdate(task.id, { isDone: true })}
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

const TaskList = connect(mapStateToProps, mapDispatchToProps)(Presentational);

export default TaskList;
