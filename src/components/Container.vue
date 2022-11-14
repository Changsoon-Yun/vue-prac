<template>
<div>
    <Post :post="post"/>
</div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Container",
  components: {
    Post
  },
  props:{
    post:Array
  }
}
</script>

<style scoped>

</style>