<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "GuluCollapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    //一开始就通知儿子们，初始选中
    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      //vue不支持直接去修改props
      if(this.single){
        selectedCopy=[name]
      }else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
    //接收有改动的evenBus
    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index=selectedCopy.indexOf(name)
      selectedCopy.splice(index,1)
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
    this.$children.forEach((vm) => {
      vm.single = this.single
    })
  }
}
</script>

<style scoped lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>