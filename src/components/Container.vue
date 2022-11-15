<template>
  <div>
    <Post v-if="step === 0" :post="post" :more="more" />
    <!-- 필터선택페이지 -->

    <div v-if="step === 1">
      <div
        class="upload-image"
        :style="{
          backgroundImage: `url(${uploadedImage})`,
          backgroundColor: 'red',
        }"
      ></div>

      <div class="filters">
        <FilterBox />
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
        class="upload-image"
        :style="{
          backgroundImage: `url(${uploadedImage})`,
        }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
          placeholder="Write!"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post";
import FilterBox from "@/components/FilterBox";

export default {
  name: "Container",
  components: {
    FilterBox,
    Post,
  },
  props: {
    post: Array,
    step: Number,
    more: Function,
    uploadedImage: String,
  },
};
</script>

<style scoped>
.upload-image {
  width: 100%;
  height: 450px;
  /*background: cornflowerblue;*/
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
