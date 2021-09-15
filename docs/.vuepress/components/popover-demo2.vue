<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-popover trigger="hover" style="margin-left: 10px">
      <template slot="content" slot-scope="{close}">
        <div style="display: flex; justify-content: center;align-items: center">我是内容1</div>
      </template>
      <template>
        <g-button>放(上)</g-button>
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容2</div>
      </template>
      <template>
        <g-button>放(下)</g-button>
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容3</div>
      </template>
      <template>
        <g-button>放(左)</g-button>
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容4</div>
      </template>
      <template>
        <g-button>放(右)</g-button>
      </template>
    </g-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import GPopover from "../../../src/popover/popover";
import GButton from "../../../src/button/button"

export default {
  components: {GPopover,GButton},
  data() {
    return {
      content: `
           <g-popover trigger="hover" style="margin-left: 10px">
      <template slot="content" slot-scope="{close}">
        <div style="display: flex; justify-content: center;align-items: center">我是内容1</div>
      </template>
      <template>
        <g-button>放(上)</g-button>
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容2</div>
      </template>
      <template>
        <g-button>放(下)</g-button>
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容3</div>
      </template>
      <template>
        <g-button>放(左)</g-button>
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover" style="margin-left: 100px">
      <template #content>
        <div>我是内容4</div>
      </template>
      <template>
        <g-button>放(右)</g-button>
      </template>
    </g-popover>
          `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>
