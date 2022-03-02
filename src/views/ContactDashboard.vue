<template>
  <div>
    <ContactHeader />
    <table v-if="contacts.length">
      <thead>
        <tr>
          <th
            v-for="(item, index) in ['Serial No.', ...Object.keys(contacts[0])]"
            :key="index"
          >{{item.slice(0,1).toUpperCase() + item.slice(1,item.length).toLowerCase()}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{index}}</td>
          <td v-for="(item, keyO) in Object.keys(contact)" :key="keyO">{{contact[item]}}</td>
          <span class='editButton' @click="changeContact(contact, 'edit')">&#9998;</span>
          <button @click="changeContact(contact, 'delete', index)">Delete</button>
        </tr>
      </tbody>
    </table>
    <div v-else>No Contacts found</div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import ContactHeader from '../components/ContactHeader';

const store = useStore();
const router = useRouter();
const contacts = computed(function() {
  return store.state.searchText ? store.state.contacts.filter(item=> item.firstName.toLowerCase() === store.state.searchText.toLowerCase() || item.phone === store.state.searchText)
        : store.state.contacts;
});
onMounted(() => {
  if (!contacts.value.length) {
    store.dispatch("getContacts");
  }
});

function changeContact({ firstName, lastName, phone, id }, key, index) {
  if (key === 'delete') {
    store.commit("removeContactsItem", index)
  } else {
    router.push({
      name: 'UpdateContact', params: {
        firstName,
        id,
        lastName,
        phone,
      }
    })
  }
}
</script> 

<style lang="scss">
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #04aa6d;
    color: white;
  }
}
.editButton {
  font-size: 24px;
  padding-right: 12px;
  cursor: pointer;
  width: 100%;
}

</style>
