<template>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i">{{ 작명 }}</a>
  </div>
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
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <img :src="products[index].image" alt="" />
      <h4>{{ products[index].title }}</h4>
      <p>{{ products[index].content }}</p>
      <p>{{ products[index].price }}원</p>
      <button @click="setModal()">모달</button>
    </div>
  </div>
</template>

<script>
import { posts } from "./assets/post";

export default {
  name: "App",
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      products: posts,
      신고수: [0, 0, 0],
      index: 0,
      modal: false,
    };
  },
  methods: {
    setModal() {
      this.modal = !this.modal;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
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

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: pointer;
}
</style>
