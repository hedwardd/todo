import {
  CHECK_ALIAS_AVAILABILITY_SUCCESS,
  CHECK_ALIAS_AVAILABILITY_FAIL,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAIL,
  CHECK_EXISTING_ALIAS_SUCCESS,
  CHECK_EXISTING_ALIAS_FAIL,
  RESET_STATE,
} from '../actions/types';

const initialState = { isAliasAvailable: null, newListCreated: false, listFound: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHECK_ALIAS_AVAILABILITY_SUCCESS:
      return {
        ...state,
        isAliasAvailable: payload
      };
    case CHECK_ALIAS_AVAILABILITY_FAIL:
      return {
        ...state
      };
    case ADD_LIST_SUCCESS:
      return {
        ...state,
        newListCreated: true,
      };
    case ADD_LIST_FAIL:
      return {
        ...state,
        newListCreated: false,
      };
    case CHECK_EXISTING_ALIAS_SUCCESS:
      return {
        ...state,
        listFound: payload
      };
    case CHECK_EXISTING_ALIAS_FAIL:
      return {
        ...state
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
}
