import {
  CHECK_ALIAS_AVAILABILITY_SUCCESS,
  CHECK_ALIAS_AVAILABILITY_FAIL,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAIL,
  SET_MESSAGE,
} from './types';

import ListService from '../services/list.service';

export const checkAliasAvailability = (alias) => (dispatch) => {
  return ListService.fetchListAvailability(alias)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: CHECK_ALIAS_AVAILABILITY_SUCCESS,
          payload: data.available,
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
          type: CHECK_ALIAS_AVAILABILITY_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
};

export const addList = (alias) => (dispatch) => {
  return ListService.addList(alias)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: ADD_LIST_SUCCESS,
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
          type: ADD_LIST_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
  );
};

