<template>
  <table v-if="contacts.length">
    <thead>
      <tr>
        <th
          v-for="(item, index) in ['Serial No.', ...Object.keys(contacts[0])]"
          :key="index"
        >{{item.slice(0,1 ).toUpperCase() + item.slice(1,item.length).toLowerCase()}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(contact, index) in contacts" :key="index">
        <td>{{index}}</td>
        <td v-for="(item, index) in Object.keys(contact)" :key="index">{{contact[item]}}</td>
        <td @click="deleteContact(contact)">&#9747;</td>
        <td><router-link to="/edit">&#9998;</router-link></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import {useStore} from "vuex";

const store = useStore();
const contacts = computed(function () {
      return store.state.contacts;
  });
onMounted(() => {
  if(!contacts.value.length){
   store.dispatch("getContacts");
  }
});

function deleteContact({id}) {
  store.commit("removeContactsItem", id);
}
</script> 

<style lang="scss">
  table {
    border: 1px solid black;
     th {
       padding: 3px;
     }
  }
</style>
