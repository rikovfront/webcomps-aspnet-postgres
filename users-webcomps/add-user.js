const addUserTemplate = document.querySelector('[data-add-user]');

class AddUser extends HTMLElement {
  constructor() {
    super();
    this.appendChild(addUserTemplate.content.cloneNode(true));

    const nameInput = this.getElementsByTagName('input')[0];
    const lastNameInput = this.getElementsByTagName('input')[1];
    const addButton = this.getElementsByTagName('button')[0];

    addButton.onclick = async (e) => {
      if (nameInput.value === '') return;
      await postUser({
        name: nameInput.value,
        lastName: lastNameInput.value
      });
      nameInput.value = '';
      lastNameInput.value = '';
      getUsers();
    }
  }
}

window.customElements.define('add-user', AddUser);
