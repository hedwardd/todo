import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask} from '../actions/task';
import NewTaskForm from './NewTaskForm';
import ThemePicker from './ThemePicker';

const TaskList = (props) => {

  const { tasks, toFetch } = useSelector(state => state.task);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const handleUpdateTask = (taskId, update) => {
    dispatch(updateTask(taskId, update));
  };

  useEffect(() => {
    if (toFetch) dispatch(getTasks());
  }, [toFetch]);

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

            <button
              className="done"
              onClick={() => handleUpdateTask(task.id, { isDone: true })}
            >
              Done?
            </button>
          </li>
        )
      )}

      <NewTaskForm />

      </ul>

      {message && (
        <p>
          {message}
        </p>
      )}

      <ThemePicker />

    </div>
  );
}

export default TaskList;
