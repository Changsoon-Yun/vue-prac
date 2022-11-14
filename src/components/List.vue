<template>
  <div v-for="(item, i) in products" :key="i" class="pa-2">
    <router-link to='/detail/item.id'>
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "List",
  props: {
    products: Array,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
