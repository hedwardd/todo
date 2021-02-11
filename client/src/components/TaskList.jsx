import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask} from '../actions/task';
import NewTaskForm from './NewTaskForm';
import ThemePicker from './ThemePicker';
import { TaskListWrapper, StyledH1, H2Wrapper, StyledH2, StyledUL, TaskListItem, TaskNameWrapper, TaskDateWrapper, DoneButton } from '../styles/taskList';

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
    <TaskListWrapper>

      <StyledH1>
        My To-dos
      </StyledH1>

      <H2Wrapper>
        <StyledH2>
          Item
        </StyledH2>

        <StyledH2>
          Date
        </StyledH2>

        <StyledH2>
          Status
        </StyledH2>
      </H2Wrapper>
      
      <StyledUL>
        {tasks.map((task) => task.isDone ? "" : (
          <TaskListItem className="task" key={task.id}>
            <TaskNameWrapper className="items">
              <p>
                {task.name}
              </p>
            </TaskNameWrapper>

            <TaskDateWrapper>
              <p>
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </TaskDateWrapper>

            <DoneButton
              as="button"
              onClick={() => handleUpdateTask(task.id, { isDone: true })}
            >
              Done
            </DoneButton>
          </TaskListItem>
        )
      )}

      <NewTaskForm />

      </StyledUL>

      {message && (
        <p>
          {message}
        </p>
      )}

      <ThemePicker />

    </TaskListWrapper>
  );
}

export default TaskList;
