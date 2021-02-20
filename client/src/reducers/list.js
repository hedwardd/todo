import {
  CHECK_ALIAS_AVAILABILITY_SUCCESS,
  CHECK_ALIAS_AVAILABILITY_FAIL,
  ADD_LIST_SUCCESS,
  ADD_LIST_FAIL,
} from '../actions/types';

const initialState = { aliasInput: "", toCheck: false, isAliasAvailable: null, newListCreated: null, };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHECK_ALIAS_AVAILABILITY_SUCCESS:
      return {
        ...state,
        isAliasAvailable: payload,
        toCheck: false,
      };
    case CHECK_ALIAS_AVAILABILITY_FAIL:
      return {
        ...state,
        toCheck: false,
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
    default:
      return state;
  }
}
