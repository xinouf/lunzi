<template>
    <svg class="g-icon">
      <use :xlink:href="`#icon-${name}`"></use>
    </svg>
</template>

<script>
export default {
  props: {
    name: {},
}}
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1.3em;
  height: 1.3em;
}
</style>
