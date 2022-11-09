<template>
  <div class="black-bg" @click="setModal()" v-if="modal === true">
    <div class="white-bg">
      <img :src="products[index].image" alt="" />
      <h4>{{ products[index].title }}</h4>
      <p>{{ products[index].content }}</p>
      <p>{{ products[index].price }}원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props:{
    products:Array,
    modal:Boolean,
    setModal: Function,
    index:Number
  }
}
</script>

<style scoped>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  top: 0;
}
.white-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>