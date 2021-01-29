import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
} from '../actions/types';

const initialState = { toFetch: true, tasks: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        toFetch: false,
        tasks: payload.tasks,
      };
    case GET_TASKS_FAIL:
      return {
        ...state,
        toFetch: false,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        toFetch: true,
      };
      case ADD_TASK_FAIL:
        return {
          ...state,
          toFetch: false,
        };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        toFetch: true,
      };
    case UPDATE_TASK_FAIL:
      return {
        ...state,
        toFetch: false,
        };
    default:
      return state;
  }
}
