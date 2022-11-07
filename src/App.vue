<template>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i">{{ 작명 }}</a>
  </div>
  <div v-for="(a, i) in products" :key="i">
    <img :src="a.image" alt="" />
    <h4>{{ a.title }}</h4>
    <p>{{ a.content }}</p>
    <p>{{ a.price }}원</p>
  </div>
  <button @click="setModal()">모달</button>
  <div class="black-bg" v-if="modal === true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="setModal()">모달</button>
    </div>
  </div>
</template>

<script>
import { posts } from "./assets/post";

console.log(posts);

export default {
  name: "App",
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      products: posts,
      신고수: [0, 0, 0],
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
</style>
