import { createStore } from "vuex";

export default createStore({
  state: {
    contacts: [],
    searchText: ''
  },
  actions: {
    getContacts({ commit }) {
        fetch('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts')
        .then(response => response.json())
        .then(data => commit('setContacts', data))
        .catch(err => console.log(err));
    }
  },
  mutations: {
    setContacts(state, data) {
        state.contacts = data;
    },
    setSearchText(state, value) {
      state.searchText = value;
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
    removeContactsItem(state, index) {
      console.log('removeContactsItem');
      state.contacts.splice(index,1);
    }
  }
});