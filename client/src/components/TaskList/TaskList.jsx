import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, updateTask} from '../../actions/task';
import NewTaskForm from './NewTaskForm';
import ThemePicker from './ThemePicker';
import { TaskListWrapper, ListHeading, SubheadingSection, ItemSubheading, DateSubheading, StatusSubheading, StyledUL, TaskListItem, NameBoxWrapper, DateBoxWrapper, DoneBoxWrapper, NameBox, DateBox, StyledMessage, DoneBox, CreditsWrapper } from '../../styles/TaskList';

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
        My To-Dos
      </ListHeading>

      <SubheadingSection>
        <ItemSubheading>
          Item
        </ItemSubheading>

        <DateSubheading>
          Date
        </DateSubheading>

        <StatusSubheading>
          Status
        </StatusSubheading>
      </SubheadingSection>
      
      <StyledUL>
        {tasks.map((task) => task.isDone ? "" : (
          <TaskListItem key={task.id}>
            <NameBoxWrapper>
              <NameBox>
                <p>
                  {task.name}
                </p>
              </NameBox>
            </NameBoxWrapper>

            <DateBoxWrapper>
              <DateBox>
                <p>
                  {new Date(task.dueDate).toLocaleDateString()}
                </p>
              </DateBox>
            </DateBoxWrapper>

            <DoneBoxWrapper>
              <DoneBox
                as="button"
                onClick={() => handleUpdateTask(task.id, { isDone: true })}
              />
            </DoneBoxWrapper>
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

      <CreditsWrapper>
        <p>Credits:<br/>Themes and design by <a href="http://www.helenthum.com/">Helen Thum</a></p>
      </CreditsWrapper>

    </TaskListWrapper>
  );
}

export default TaskList;
