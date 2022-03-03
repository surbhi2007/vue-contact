<template>
  <form>
    <div class="p-2">
      <label for="firstName">First Name:</label>
      <input
        :class="{' warning': !contact?.firstName?.length && buttonClicked}    "
        type="text"
        id="firstName"
        v-model="contact.firstName"
      />
    </div>
    <div class="p-2">
      <label for="lastName">Last Name:</label>
      <input
        :class="{'warning': !contact?.lastName?.length && buttonClicked}"
        type="text"
        id="lastName"
        v-model="contact.lastName"
      />
    </div>
    <div class="p-2">
      <label for="phone">Phone Number:</label>
      <input
        :class="{'warning': !contact?.phone?.length && buttonClicked}"
        type="number"
        id="phone"
        v-model="contact.phone"
      />
    </div>
    <button class="p-2 m-2" @click.prevent="changeContacts">Save and and Go back</button>
    <button class="p-2 m-2" @click.prevent="$router.push({ name: 'ContactDashboard' })">Cancel</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router'
const buttonClicked = ref(false);
const store = useStore();
const route = useRoute();
const router = useRouter();

const contact = reactive({
  firstName: route.params.firstName,
  lastName: route.params.lastName,
  phone: route.params.phone,
  id: route.params.id
})

function changeContacts() {
  buttonClicked.value = true;
  if (contact.firstName && contact.lastName && contact.phone) {
    if (store.state.contacts.find(item => {
      return item.firstName === contact.firstName
        && item.lastName === contact.lastName
        && item.phone === contact.phone
    })) {
      alert('We can not add this contact as it already exists in list.');
    } else if (route.path.includes('add')) {
      store.commit('addContactsItem', contact);
    } else {
      store.commit('updateContactsItem', contact);
    }
    router.push({ name: 'ContactDashboard' })
  } else {
    alert('Please fill in valid details');
  }
}
</script>

<style lang="scss">
.p-2 {
  padding: 4px;
}
.m-2 {
  margin: 4px;
}
.warning {
  border: 1px solid orange;
  outline: none;
}
</style>
