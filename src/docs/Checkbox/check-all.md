> 全选

:::demo 在实现全选效果时，你可能会用到`indeterminate`属性

```html
<template>
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <v-checkbox
        :indeterminate="indeterminate"
        @change="onCheckAllChange"
        :checked="checkAll"
      >
        Check all
      </v-checkbox>
    </div>
    <br />
    <br />
    <v-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange"></v-checkbox-group>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']
export default {
  data () {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
    }
  },
  methods: {
    onChange (checkedList) {
      this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      })
    },
  },
}
</script>
```
:::
