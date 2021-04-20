<template>
  <div ref="domRef" class="dom-ref-wrap">
    <div v-for="(item, index) in 100" :key="index">{{ item }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let dom = this.$refs.domRef
      console.info(dom)
      dom.addEventListener("scroll",()=>{
        console.info(dom.scrollTop)
      }, false)
    },
  },
};
</script>
<style lang="less" scoped>
.dom-ref-wrap {
  margin: 20px;
  background: #fff;
  border: 1px solid red;
  max-height: 100px;
  overflow-y: scroll;
}
</style>
