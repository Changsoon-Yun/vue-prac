<template>
  <div
      class="content"
      @click="$emit('setIndex', a.id); setModal() "
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
  name: "Card",
  props: {
    products: Array,
    setModal:Function,
    index:Number,
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
}
</style>