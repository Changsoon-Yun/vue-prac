<template>
  <div class="menu">
    <a v-for="(작명, i) in 메뉴들" :key="i">{{ 작명 }}</a>
  </div>
  <div v-for="(a, i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>50만원</p>
    <button @click="신고수[i]++">허위매물신고</button>
    <span>신고수 : {{ 신고수[i] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      신고수: [0, 0, 0],
    };
  },
  methods: {},
};
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
