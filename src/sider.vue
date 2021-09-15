<template>
  <transition name="slider">
  <div class="sider" v-if="visible">
    <slot></slot>
    <button @click="visible=false">close</button>
  </div>
  </transition>
</template>
<script>
import Button from "./button/button";
export default {
  name:'GuluSider',
  components: {Button},
  data(){
    return{
      visible:true
    }
  },
  methods:{}
}
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  >button{
    position: absolute;
    top:0;
    right: 0;
  }
}
.slider-enter-active, .slider-leave-active {
  transition: all .2s;
}
.slider-enter, .slider-leave-to {
  margin-left: -200px;
}
</style>