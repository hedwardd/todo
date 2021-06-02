import { SET_THEME, GET_THEME_SUCCESS, GET_THEME_FAIL } from '../actions/types';

const initialState = { theme: 'classy' };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return { theme: payload };
    case GET_THEME_SUCCESS:
      return { theme: payload };
    case GET_THEME_FAIL:
      return state;
    default:
      return state;
  }
}
