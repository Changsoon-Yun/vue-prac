<template>
  <div
    :class="[{ isActive: item === adoptedName }, item, { 'filter-item': true }]"
    :style="{
      backgroundImage: `url(${uploadedImage})`,
    }"
    @click="this.emitter.emit('filterName2', item)"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    uploadedImage: String,
    adoptedName: String,
    filterName: Array,
    item: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.filter-item {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: blue;
  font-weight: 700;
  background-size: cover;
  background-position: center;
}
.filter-item.isActive {
  border: 3px solid red;
}
</style>
