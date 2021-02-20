const API_URL = '/api/tasks';

const getTasks = () => {
  return fetch(API_URL);
};

const addTask = (name, dueDate) => {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ name, dueDate }),
    headers: { 'Content-Type': 'application/json' },
  });
}

const updateTask = (taskId, update) => {
  return fetch(`${API_URL}/${taskId}`, {
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
