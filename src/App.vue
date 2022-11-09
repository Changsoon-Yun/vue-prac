<template>
  <div class="menu">
    <a v-for="(name, i) in menus" :key="i">{{ name }}</a>
  </div>
  <Discount></Discount>
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
  <Modal :products="products" :index="index" :setModal="setModal" :modal="modal"/>
</template>

<script>
import { posts } from "./assets/post";
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";

export default {
  name: "App",
  components: {Discount, Modal},
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      products: posts,
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

<style scoped>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
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
