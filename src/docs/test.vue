
<template>
  <div class="back-demo demo-split">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane">Left Pane</div>
      <div slot="right" class="demo-split-pane">Right Pane</div>
    </Split>
  </div>
</template>

<script>
export default {
  data() {
    return {
      split1: 0.5
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.demo-split {
  height: 200px;
  border: 1px solid #dcdee2;
}
.demo-split-pane {
  padding: 10px;
}
</style>
