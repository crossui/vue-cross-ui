> 自定义页脚

:::demo 更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。不需要默认确定取消按钮时，你可以把 `footer` 设为 `null`。

```html
<template>
  <div>
    <v-button type="primary" @click="showModal">
      Open
    </v-button>
    <v-modal
      v-model="visible"
      title="Title"
      onOk="handleOk"
    >
      <template slot="footer">
        <v-button key="back" @click="handleCancel">Return</v-button>
        <v-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </v-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </v-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
  }
}
</script>
```
:::