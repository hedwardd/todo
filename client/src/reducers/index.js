import { combineReducers } from 'redux';
import task from './task';
import message from './message';

export default combineReducers({
  task,
  message,
});
