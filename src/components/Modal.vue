<template>
  <div :class="{close :modal}" class=" open black-bg">
    <div class="white-bg">
      <img :src="products[index].image" alt="" />
      <h4>{{ products[index].title }}</h4>
      <p>{{ products[index].content }}</p>
      <input type="text" v-model="month">
      <p>{{month}}개월 선택함 : {{ products[index].price * month }}원</p>
      <button @click="$emit('close', false); "> 닫기 </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data(){
    return {
      month:1
    }
  },
  watch: {
    month(a){
      if(isNaN(a)===true) {
        alert("문자만 입력하세요");
        this.month = 1;
      }
    }
  },
  props:{
    products:Array,
    modal:Boolean,
    setModal: Function,
    index:Number
  }
}
</script>

<style scoped lang="scss">
.black-bg {
  //width: 100%;
  //height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  top: 0;
}
.white-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
  max-width: 100%;
  }

}
.open {
  opacity: 0;
  transition: 0.5s;
}

.close {
  opacity: 1;
}
</style>