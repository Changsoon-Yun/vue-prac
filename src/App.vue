<template>
  <div class="menu">
    메인에서 수정했음
    <a v-for="(name, i) in menus" :key="i">{{ name }}</a>
  </div>
  <Discount />
  <Card @setIndex="index = $event" :products="products" :setModal="openModal"/>
  <Modal :products="products" :index="index" @close="closeModal" :modal="modal"/>
</template>

<script>
import { posts } from "./assets/post";
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";
import Card from "@/components/Card"

export default {
  name: "App",
  components: {Discount, Modal, Card},
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      products: posts,
      index: 0,
      modal: false,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal(close){
      this.modal = close;
    }
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

</style>
