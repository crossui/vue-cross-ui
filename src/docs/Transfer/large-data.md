> 大数据性能测试

:::demo 2000 条数据。

```html
<template>
  <v-transfer
    :dataSource="mockData"
    :targetKeys="targetKeys"
    @change="handleChange"
    :render="item=>item.title"
  >
  </v-transfer>
</template>
<script>
export default {
  data () {
    return {
      mockData: [],
      targetKeys: [],
    }
  },
  mounted() {
    this.getMock()
  },
  methods: {
    getMock() {
      const targetKeys = [];
      const mockData = [];
      for (let i = 0; i < 2000; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
          targetKeys.push(data.key);
        }
        mockData.push(data);
      }
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    handleChange(targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys);
      this.targetKeys = targetKeys
    },
  },
}
</script>
```
:::
