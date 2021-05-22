import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getTasks, updateTask } from '../../actions/task';
import NewTaskForm from './NewTaskForm';
import ThemePicker from './ThemePicker';
import { TaskListWrapper, ListHeading, ItemSubheading, DateSubheading, StatusSubheading, StyledUL, TaskListItem, NameBoxWrapper, DateBoxWrapper, DoneBoxWrapper, NameBox, DateBox, StyledMessage, DoneBox, FooterSection, CreditsWrapper } from '../../styles/TaskList/TaskList';

const TaskList = (props) => {

  const { tasks, toFetch } = useSelector(state => state.task);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const handleUpdateTask = (taskId, update) => {
    dispatch(updateTask(taskId, update));
  };

  const { listAlias } = useParams();
  useEffect(() => {
    if (toFetch) dispatch(getTasks(listAlias));
  }, [toFetch]);

  return (
    <TaskListWrapper>

      <ListHeading>
        My To-Dos
      </ListHeading>

      <ItemSubheading>
        Item
      </ItemSubheading>

      <DateSubheading>
        Date
      </DateSubheading>

      <StatusSubheading>
        Status
      </StatusSubheading>
      
      <StyledUL>
        {tasks.map((task) => task.isDone ? "" : (
          <TaskListItem key={task.id}>
            <NameBox>
              <p>
                {task.name}
              </p>
            </NameBox>

            <DateBox>
              <p>
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </DateBox>

            <DoneBox
              as="button"
              onClick={() => handleUpdateTask(task.id, { isDone: true })}
              title="Mark as done"
            />
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


      <CreditsWrapper>
        <p>Credits:<br/>Themes and design by <a href="http://www.helenthum.com/">Helen Thum</a></p>
      </CreditsWrapper>

      <ThemePicker />

    </TaskListWrapper>
  );
}

export default TaskList;
