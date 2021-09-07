<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <icon v-if="icon" :name="icon"></icon>
    <icon class="loading" name="loading"></icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>
<script>

import Icon from "./icon";
export default {
  props: {
    icon:{},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'right' || value === 'right'
      }
    }
  },
  components: {Icon}
}
</script>
<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.8em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  .g-icon {
    order: 1;
    margin-right: 0.1em;
  }

  .content {
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
    animation: spin 1s infinite linear;
  }
}

</style>