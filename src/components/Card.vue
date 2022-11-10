<template>
  <div
      class="content"
      @click="
      setModal();
      index = i;
    "
      v-for="(a, i) in products"
      :key="i"
  >
    <img :src="a.image" alt="" />
    <h4>{{ a.title }}</h4>
    <p>{{ a.content }}</p>
    <p>{{ a.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>

</style>