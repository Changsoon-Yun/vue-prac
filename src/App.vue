<template>
  <Header />
  <div>
    <ul class="tap-list">
      <li>
        <button @click="step = 0">Post</button>
      </li>
      <li>
        <button @click="step = 1">ImageFilter</button>
      </li>
      <li>
        <button @click="step = 2">Posting</button>
      </li>
    </ul>
  </div>

  <Container
    :step="step"
    :post="post"
    :more="more"
    :upload="upload"
    :uploadedImage="uploadedImage"
  />
  <Footer />
</template>

<script>
import Container from "@/components/Container";
import { post } from "@/assets/post";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Container,
  },
  data() {
    return {
      post,
      page: 0,
      step: 0,
      uploadedImage: "",
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.page}.json`)
        .then((res) => {
          this.post.push(res.data);
          this.page++;
        });
    },
    upload(e) {
      let fileName = e.target.files;
      let url = URL.createObjectURL(fileName[0]).split("blob:")[1];
      this.uploadedImage = url;
      console.log(this.uploadedImage);
      this.step++;
    },
  },
};
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

.tap-list {
  display: flex;
  justify-content: space-between;
}

.tap-list li {
  width: 100%;
}

.tap-list li button {
  width: 100%;
  height: 50px;
  border: none;
  background-color: #555555;
  color: white;
  transition: 0.3s;
  cursor: pointer;
}

.tap-list li button:hover {
  background-color: white;
  color: black;
}
</style>
