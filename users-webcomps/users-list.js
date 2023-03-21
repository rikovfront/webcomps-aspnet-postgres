const usersListTemplate = document.querySelector('[data-users-list]');
const userItemTemplate = document.querySelector('[data-user-item]');

class UsersList extends HTMLElement {
  constructor() {
    super();
    this.appendChild(usersListTemplate.content.cloneNode(true));
  }

  update(users) {
    const tbody = this.querySelector('tbody');
    tbody.innerHTML = '';
    users.forEach(user => tbody.appendChild(userItemTemplate.content.cloneNode(true)));

    for (let i = 0; i < users.length; i++) {
      const node = tbody.children[i];
      const user = users[i];
      const nameInput = node.getElementsByTagName('input')[0];
      const lastNameInput = node.getElementsByTagName('input')[1];
      const editButton = node.getElementsByTagName('button')[0];
      const removeButton = node.getElementsByTagName('button')[1];

      nameInput.value = user.name;
      lastNameInput.value = user.lastName;

      editButton.onclick = async e => {
        if (nameInput.value === '') return;
        await putUser({
          ...user,
          name: nameInput.value,
          lastName: lastNameInput.value,
        });
        getUsers();
      };

      removeButton.onclick = async e => {
        await deleteUser(user);
        getUsers();
      };
    }
  }

  connectedCallback() {
    getUsers();
    appService.subscribeToState('users', users => this.update(users));
  }
}

window.customElements.define('users-list', UsersList);
