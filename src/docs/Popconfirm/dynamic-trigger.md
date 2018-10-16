> 条件触发

:::demo 可以判断是否需要弹出。

```html
<template>
  <div>
    <v-popconfirm
      title="Are you sure delete this task?"
      :visible="visible"
      @visibleChange="handleVisibleChange"
      @confirm="confirm"
      @cancel="cancel"
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete a task</a>
    </v-popconfirm>
    <br />
    <br />
    Whether directly execute：<v-checkbox defaultChecked @change="changeCondition"></v-checkbox>
  </div>
</template>
<script>

export default {
  data () {
    return {
      visible: false,
      condition: true,
    }
  },
  methods: {
    changeCondition (e) {
      this.condition = e.target.checked
    },
    confirm () {
      this.visible = false
      this.$message.success('Next step.')
    },
    cancel () {
      this.visible = false
      this.$message.error('Click on cancel.')
    },
    handleVisibleChange (visible) {
      if (!visible) {
        this.visible = false
        return
      }
      // Determining condition before show the popconfirm.
      console.log(this.condition)
      if (this.condition) {
        this.confirm() // next step
      } else {
        this.visible = true
      }
    },
  },
}
</script>
```
:::