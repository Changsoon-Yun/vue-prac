<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo"  alt=""/>
  </div>

  <Container :post="post"/>
  <button class="more_btn" @click="more">더 가져오기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </li>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container";
import {post} from "@/assets/post";
import axios from 'axios'


export default {
  name: 'App',
  components: {
    Container
  },
  data(){
    return {
        post,
      page:0,
    }
  },
  methods:{
  more(){
    axios.get(`https://codingapple1.github.io/vue/more${this.page}.json`).then(res=> {
      this.post.push(res.data);
      this.page++
    })
  }
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.more_btn {
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
