<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected.sync="selected">
      <g-collapse-item title="chose more" name="1">content1</g-collapse-item>
      <g-collapse-item title="默认选中" name="2">content2</g-collapse-item>
      <g-collapse-item title="chose" name="3">content3</g-collapse-item>
    </g-collapse>
    <g-collapse :selected.sync="selected" single style="margin-top: 20px">
      <g-collapse-item title="chose one" name="1">content1</g-collapse-item>
      <g-collapse-item title="默认选中" name="2">content2</g-collapse-item>
      <g-collapse-item title="chose" name="3">content3</g-collapse-item>
    </g-collapse>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import GCollapse from "../../../src/collapse/collapse";
import GCollapseItem from "../../../src/collapse/collapse-item";

export default {
  components: {GCollapse,GCollapseItem},
  data() {
    return {
      selected: ['2'],
      content: `
         data:{
            selected: ['2']
          }
              <g-button>默认按钮</g-button>
              <g-button icon="settings">默认按钮</g-button>
              <g-button :loading="true">默认按钮</g-button>
              <g-button disabled>默认按钮</g-button>
          `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
