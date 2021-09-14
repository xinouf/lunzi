<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String , Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disable: this.disabled
      }
    }
  },
  methods: {
    onClick () {
      if (this.disabled) { return }
      this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
      this.$emit('click', this)
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
}
</script>
<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 20px;
  &.active {
    color: #F1453D;
  }
  &.disable {
    color: grey;
    cursor: not-allowed;
  }
}
</style>
