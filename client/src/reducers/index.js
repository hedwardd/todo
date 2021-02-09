import { combineReducers } from 'redux';
import task from './task';
import message from './message';
import theme from './theme';

export default combineReducers({
  task,
  message,
  theme,
});
