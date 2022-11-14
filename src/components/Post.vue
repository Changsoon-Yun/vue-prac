<template>
  <div v-for="(item, i) in post" :key="i" class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${item.userImage})` }"
      ></div>
      <span class="profile-name">{{ item.name }}</span>
    </div>
    <div
      class="post-body"
      :style="{ backgroundImage: `url(${item.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ item.likes }} Likes</p>
      <p>
        <strong>{{ item.name }}</strong
        >{{ item.content }}
      </p>
      <p class="date">{{ item.date }}</p>
    </div>
  </div>
  <button class="more_btn" @click="more">더 가져오기</button>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {};
  },
  props: {
    post: Array,
    more: Function,
  },
};
</script>

<style scoped>
.post {
  width: 100%;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
