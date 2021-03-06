import {
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAIL,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  SET_MESSAGE,
} from './types';

import TaskService from '../services/task.service';

export const getTasks = (listAlias) => (dispatch) => {
  return TaskService.getTasks(listAlias)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: GET_TASKS_SUCCESS,
          payload: { tasks: data },
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: GET_TASKS_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
};

export const addTask = (name, dueDate, listAlias) => (dispatch) => {
  return TaskService.addTask(name, dueDate, listAlias)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: ADD_TASK_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: ADD_TASK_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
  );
};

export const updateTask = (taskId, update) => (dispatch) => {
  return TaskService.updateTask(taskId, update)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: UPDATE_TASK_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: UPDATE_TASK_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
};
