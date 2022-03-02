import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: []
  },
  actions: {
    getContacts({ commit }) {
        console.log('...in action..');
        fetch('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts')
        .then(response => response.json())
        .then(data => commit('setContacts', data))
        .catch(err => console.log(err));
    }
  },
  mutations: {
    setContacts(state, data) {
        state.contacts = data;
        console.log(state.contacts, '...contacts 2..');
    },
    addContactsItem(state, item) {   
      state.contacts.push(item);
    },
    updateContactsItem(state, updatedItem) {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id == updatedItem.id) {
          return updatedItem;
        }

        return contact;
      });
    },
    removeContactsItem(state, item) {
      state.contacts = state.contacts.filter((contact) => {
        return contact.id != item.id;
      });
    }
  }
});