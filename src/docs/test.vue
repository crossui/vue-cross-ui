
<template>
  <div class="back-demo">
    <v-textarea
      placeholder="Autosize height with minimum and maximum number of lines"
      :autosize="{ minRows: minRow, maxRows: maxRow }"
    />
	<v-button type="primary" @click="handleChage">Primary</v-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      minRow: 3,
	  maxRow: 6
    }
  },
  methods: {
    handleChage () {
      this.minRow = 10
	  this.maxRow = 20
	  console.info(this.minRow,this.maxRow)
    },
  },
}
</script>
<style lang="less" scoped>

</style>
