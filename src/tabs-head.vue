<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      console.log(vm);
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>
<style lang="scss" scoped>
.tabs-head {
  display: flex;
  justify-content: flex-start;
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ddd;

  > .line {
    position: absolute;
    bottom: 0;
    border: 1px solid #F1453D;
    transition: all 350ms;
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  padding: 0 1em;
  }
}
</style>
