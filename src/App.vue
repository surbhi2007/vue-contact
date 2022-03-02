<template>
  <router-view :key="$route.path"/>
</template>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: teal;
  padding: 10px;
  padding: 2px 6px;
  font-size: 16px;
  color: #fff;
}
.d-flex {
  display: flex;
}
.row {
  flex-direction: row;
}
</style>
