
<template>
  <div class="back-demo">
    <template v-for="item in 100">
      <p>{{item}}</p>
    </template>
  </div>
</template>

<script>
</script>
<style lang="less" scoped>
.back-demo {
  width: 100%;
  height: 500px;
  overflow: auto;
}
</style>
