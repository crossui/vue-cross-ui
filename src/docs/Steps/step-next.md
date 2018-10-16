> 步骤切换

:::demo 通常配合内容及按钮使用，表示一个流程的处理进度。

```html
<template>
  <div>
    <v-steps :current="current">
      <v-step v-for="item in steps" :key="item.title" :title="item.title"></v-step>
    </v-steps>
    <div class="steps-content">{{steps[current].content}}</div>
    <div class="steps-action">
      <v-button
        v-if="current < steps.length - 1"
        type="primary" @click="next"
      >
        Next
      </v-button>
      <v-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="$message.success('Processing complete!')"
      >
        Done
      </v-button>
      <v-button
        v-if="current>0"
        style="margin-left: 8px"
        @click="prev"
      >
        Previous
      </v-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: 0,
        steps: [{
          title: 'First',
          content: 'First-content',
        }, {
          title: 'Second',
          content: 'Second-content',
        }, {
          title: 'Last',
          content: 'Last-content',
        }],
      }
    },
    methods: {
      next() {
        this.current++
      },
      prev() {
        this.current--
      }
    },
  }
</script>
<style scoped>
  .steps-content {
    margin-top: 16px;
    border: 1px dashed #e9e9e9;
    border-radius: 6px;
    background-color: #fafafa;
    min-height: 200px;
    text-align: center;
    padding-top: 80px;
  }

  .steps-action {
    margin-top: 24px;
  }
</style>
```
:::
