<template>
  <v-app-bar class="justify-center" color="grey-lighten-2" name="app-bar">
    <div class="d-flex justify-center align-center w-100">
      <router-link to="/">홈으로</router-link>
      <router-link to="/list">리스트페이지</router-link>
    </div>
  </v-app-bar>
  <v-navigation-drawer color="grey-darken-2" name="drawer" permanent>
    <div class="d-flex justify-center align-center h-100"></div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
