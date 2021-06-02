import listService from '../services/list.service';
import { SET_THEME, GET_THEME_SUCCESS, GET_THEME_FAIL, SAVE_THEME_SUCCESS, SAVE_THEME_FAIL, SET_MESSAGE } from './types';

export function getTheme(alias) {
  return (dispatch) => {
    return listService.getTheme(alias)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: GET_THEME_SUCCESS,
          payload: data.theme,
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
          type: GET_THEME_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  }
};

export const setTheme = (alias, theme) => (dispatch) => {
  dispatch({
    type: SET_THEME,
    payload: theme,
  });

  return listService.updateTheme(alias, theme)
    .then(res => res.json())
    .then(
      (data) => {
        dispatch({
          type: SAVE_THEME_SUCCESS,
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
          type: SAVE_THEME_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
};
