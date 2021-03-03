const API_URL = '/api/tasks';

const getTasks = (listAlias) => {
  return fetch(`${API_URL}/${listAlias}`);
};

const addTask = (name, dueDate, listAlias) => {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ name, dueDate, listAlias }),
    headers: { 'Content-Type': 'application/json' },
  });
}

const updateTask = (taskId, update) => {
  return fetch(`${API_URL}/id/${taskId}`, {
    method: 'PUT',
    body: JSON.stringify(update),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default {
  getTasks,
  addTask,
  updateTask,
};
