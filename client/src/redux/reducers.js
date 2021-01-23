import { combineReducers } from 'redux';
import { FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, SAVE_TASK_SUCCESS, SAVE_TASK_ERROR } from './constants';

const defaultTaskListState = {
  tasks: [],
  fetchErrorMessage: '',
}

const taskListReducer = (state = defaultTaskListState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return {...defaultTaskListState, tasks: action.tasks };
    case FETCH_TASKS_ERROR:
      return {...state, fetchErrorMessage: action.errorMessage };
    default:
      return state;
  }
};

const saveTaskReducer = (state = null, action) => {
  switch (action.type) {
    case SAVE_TASK_SUCCESS:
      return null;
    case SAVE_TASK_ERROR:
      return action.errorMessage;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  taskList: taskListReducer,
  saveResult: saveTaskReducer,
});

export default rootReducer;
