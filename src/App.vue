<template>
  <v-app ref="app">
    <v-app-bar color="grey-lighten-2" name="app-bar" class="justify-center">
      <div class="d-flex justify-center align-center w-100">
        <v-btn>Get data</v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-2" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100"></div>
    </v-navigation-drawer>
    <v-main>
      <List />
    </v-main>
  </v-app>
</template>

<script>
import List from "./components/List.vue";
export default {
  name: "App",

  components: { List },

  data: () => ({
    //
  }),
};
</script>
