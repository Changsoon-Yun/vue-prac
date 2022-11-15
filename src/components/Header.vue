<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step > 0" @click="arrowAction(-1)">back</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step < 2" @click="arrowAction(1)">Next</li>
      <li v-if="step === 2" @click="publish">publish</li>
    </ul>
    <img src="../assets/logo.png" class="logo" alt="" />
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    step: Number,
    arrowAction: Function,
    publish: Function,
  },
};
</script>

<style scoped></style>
