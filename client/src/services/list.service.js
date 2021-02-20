const API_URL = '/api/lists';

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
  fetchListAvailability,
  addList,
};
