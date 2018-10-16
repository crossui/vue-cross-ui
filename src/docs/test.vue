<template>
  <div>
    <v-scrollbar class="scroll-container">
      <p v-for="i in 100" :key="`item-${i}`">item - {{ i }}</p>
    </v-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  watch: {

  },
}
</script>
<style lang="less">
.scroll-container {
  height: 260px;
}
.list-item {
  word-break: keep-all;
  white-space: nowrap;
}
</style>