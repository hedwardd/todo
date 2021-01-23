import { SAVE_TASK_SUCCESS, SAVE_TASK_ERROR } from '../constants';

const saveTask = () => ({
  type: SAVE_TASK_SUCCESS,
});

const saveTaskError = (errorMessage) => ({
  type: SAVE_TASK_ERROR,
  errorMessage,
});

export const _attemptTaskSave = (name, dueDate) => async (dispatch) => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify({ name, dueDate }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.status !== 200) {
    dispatch(saveTaskError({ error: response.status }))
  } else {
    const data = await response.json();
    if (data.error)
      dispatch(saveTaskError({ error: data.error }));
    else 
      dispatch(saveTask());
  }
};



// import { LOGIN, LOGOUT } from '../constants/auth_constants';

// const logIn = (user) => ({
//   type: LOGIN,
//   user,
// });

// const logOut = () => ({
//   type: LOGOUT,
// });

// export const _checkIfLoggedIn = () => async (dispatch) => {
//   const response = await fetch('api/auth', {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Credentials': true,
//     },
//   });
//   if (response.status === 200) {
//     const data = await response.json();
//     if (!data.error) dispatch(logIn(data.user));
//   }
// };

// export const _attemptLogIn = (username, password) => async (dispatch) => {
//   const response = await fetch('/api/login', {
//     method: 'POST',
//     body: JSON.stringify({ username, password }),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   const data = await response.json();
//   if (!data.error) dispatch(logIn(data.user));
// };

// export const _handleLogOut = () => async (dispatch) => {
//   const response = await fetch('/api/logout');
//   if (response.status === 200) dispatch(logOut());
// };
