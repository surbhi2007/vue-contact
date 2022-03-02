<template>
  <form class="p-2 d-flex row">
      <input
        type="text"
        id="search"
        placeholder='Filter Contacts by name or number'
        v-model="searchText"
      />
    <button class="px-2-py-1 ml-2" @click.prevent="addNewContact">Add New Contact</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const searchText = ref('');
const store = useStore();
const router = useRouter();

watch(searchText, (newValue) => {
  store.commit('setSearchText', newValue);
})
function addNewContact() {
  store.commit('setSearchText', '');
  router.push({name: 'AddContact'});
}
</script>

<style lang="scss">
.p-2 {
  padding: 4px;
}
.px-2-py-1 {
  padding: 1px 4px;
}
.ml-2 {
  margin-left: 4px;
}
.warning {
  border: 1px solid orange;
  outline: none;
}
</style>
