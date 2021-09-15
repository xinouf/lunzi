<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
  @click="$emit('click')">
    <icon v-if="icon && !loading"  :name="icon"></icon>
    <icon class="loading icon" v-if="loading" name="loading"></icon>
    <div class="g-button-content">
      <slot/>
    </div>
  </button>
</template>
<script>
import Icon from '../icon';
export default {
  components:{
    'icon':Icon
  },
  props: {
    icon:{},
    loading:{
      type:Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'right' || value === 'left'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../../styles/var";
.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.8em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  .g-icon {
    order: 1;
    margin-right: 0.1em;
  }

  .g-button-content {
    order: 2;
  }

  &.icon-right {
     .content {
      order: 1;
    }
     .g-icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }
  .loading {
    @include spin;
  }
}

</style>