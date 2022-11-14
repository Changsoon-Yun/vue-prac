<template>
  <v-app ref="app">
    <Header />
    <v-main>
      <router-view :products="products" />
    </v-main>
  </v-app>
</template>

<script>
import { products } from "@/products";
import Header from "@/components/Header";
export default {
  name: "App",
  components: { Header },
  data: () => ({
    products,
  }),
};
</script>
