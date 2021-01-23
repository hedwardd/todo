import { FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from '../constants';

const addTasks = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  tasks
});

const serveFetchError = (errorMessage) => ({
  type: FETCH_TASKS_ERROR,
  errorMessage,
});

export const _attemptFetchTasks = () => async (dispatch) => {
  const response = await fetch('/api/tasks');
  if (response.status !== 200) {
    dispatch(serveFetchError({ error: response.status }))
  } else {
    const data = await response.json();
    if (data.error)
      dispatch(serveFetchError({ error: data.error }));
    else 
      dispatch(addTasks(data));
  }
};
