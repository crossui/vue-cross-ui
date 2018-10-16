> 改变

:::demo 改变每页显示条目数。

```html
<template>
  <div>
    <v-pagination showSizeChanger @showSizeChange="onShowSizeChange" :defaultCurrent="3" :total="500"></v-pagination>
    <br/>
    <v-pagination showSizeChanger :pageSize.sync="pageSize" @showSizeChange="onShowSizeChange" :total="500" v-model="current"></v-pagination>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        pageSize: 20,
        current:4,
      }
    },
    watch:{
      pageSize(val) {
        console.log('pageSize',val);
      },
      current(val) {
        console.log('current',val);
      }
    },
    methods: {
      onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
      }
    }
  }
</script>
```
:::