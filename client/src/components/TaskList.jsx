import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask} from '../actions/task';
import NewTaskForm from './NewTaskForm';
import ThemePicker from './ThemePicker';
import { TaskListWrapper, ListHeading, SubheadingWrapper, ItemSubheading, DateSubheading, StatusSubheading, StyledUL, TaskListItem, TaskNameWrapper, TaskDateWrapper, StyledMessage, DoneButton } from '../styles/taskList';

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

      <ListHeading>
        My To-dos
      </ListHeading>

      <SubheadingWrapper>
        <ItemSubheading>
          Item
        </ItemSubheading>

        <DateSubheading>
          Date
        </DateSubheading>

        <StatusSubheading>
          Status
        </StatusSubheading>
      </SubheadingWrapper>
      
      <StyledUL>
        {tasks.map((task) => task.isDone ? "" : (
          <TaskListItem key={task.id}>
            <TaskNameWrapper>
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
              as="checkbox"
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
        <StyledMessage>
          {message}
        </StyledMessage>
      )}

      <ThemePicker />

    </TaskListWrapper>
  );
}

export default TaskList;
