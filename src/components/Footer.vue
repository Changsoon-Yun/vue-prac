<template>
  <div class="footer">
    <ul class="footer-button-plus">
      <li>
        <input
          @change="upload($event)"
          type="file"
          id="file"
          class="inputfile"
        />
        <label for="file" class="input-plus">+</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    upload: Function,
  },
};
</script>

<style scoped></style>
