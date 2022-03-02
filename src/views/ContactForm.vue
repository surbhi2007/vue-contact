<template>
  <form>
    <div class="p-2">
      <label for="firstName">First Name:</label>
      <input
        :class="{'warning': !contact.firstName.length && buttonClicked}"
        type="text"
        id="firstName"
        v-model="contact.firstName"
      />
    </div>
    <div class="p-2">
      <label for="lastName">Last Name:</label>
      <input
        :class="{'warning': !contact.lastName.length && buttonClicked}"
        type="text"
        id="lastName"
        v-model="contact.lastName"
      />
    </div>
    <div class="p-2">
      <label for="phone">Phone Number:</label>
      <input :class="{'warning': !contact.phone.length && buttonClicked}" type="number" id="phone" v-model="contact.phone" />
    </div>
    <button class="p-2 m-2" @click.prevent="changeContacts">{{ buttonName }}</button>
  </form>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
const buttonClicked = ref(false);
const contact = reactive({
  firstName: '',
  lastName: '',
  phone: ''
});

const store = useStore();
const route = useRoute();
const router = useRouter();
const buttonName = computed(() => {
  return route.path.split('/')[1];
})

function changeContacts() {
  buttonClicked.value = true;
  console.log(contact, '...contact...');
  if (contact.firstName && contact.lastName && contact.phone) {
    store.commit('addContactsItem', contact);
    alert('Contact is added to your list');
    router.push({ name: 'ContactDashboard' })
  } else {
    alert('Please fill in all the details');
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
