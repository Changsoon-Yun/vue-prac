<template>
  <div class="pa-2" v-for="(item, i) in products" :key="i">
    <h2>{{ item.title }}</h2>
    <p>{{ item.content }}</p>
  </div>
</template>
<script>
import { products } from "../products";
console.log(products);
export default {
  name: "List",
  data() {
    return {
      products: products,
    };
  },
};
</script>
<style></style>
