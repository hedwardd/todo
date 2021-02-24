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

export default {
  getListWithTasks,
  fetchListAvailability,
  addList,
};
