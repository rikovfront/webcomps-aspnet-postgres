const usersRequest = (url, method, data) => {
  let options = { method };

  if (method !== 'GET')
    options = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

  return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if (method === 'GET') {
        appState.users = data;
        appService.changeState('users', data);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const getUsers = () => {
  return usersRequest('http://localhost:5052/api/users', 'GET');
};

const postUser = user => {
  return usersRequest('http://localhost:5052/api/users', 'POST', user);
};

const putUser = user => {
  return usersRequest(`http://localhost:5052/api/users/${user.id}`, 'PUT', user);
};

const deleteUser = user => {
  return usersRequest(`http://localhost:5052/api/users/${user.id}`, 'DELETE', user);
};
