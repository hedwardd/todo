const API_URL = '/api/lists';

const getListWithTasks = (alias) => {
  return fetch(`${API_URL}/${alias}`);
};

const fetchListAvailability = (alias) => {
  return fetch(`${API_URL}/${alias}/avail`);
};

const addList = (alias) => {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ alias }),
    headers: { 'Content-Type': 'application/json' },
  });
}

const getTheme = (alias) => {
  return fetch(`${API_URL}/${alias}/theme`);
}

const updateTheme = (alias, theme) => {
  return fetch(`${API_URL}/${alias}/theme`, {
    method: 'PUT',
    body: JSON.stringify({ theme: theme }),
    headers: { 'Content-Type': 'application/json' },
  })
}

export default {
  getListWithTasks,
  fetchListAvailability,
  addList,
  getTheme,
  updateTheme,
};
