> 自定义位置

:::demo 使用 `style.top` 或配合其他样式来设置对话框位置。

```html
<template>
  <div id="components-modal-demo-position">
    <v-button type="primary" @click="() => setModal1Visible(true)">Display a modal dialog at 20px to Top</v-button>
    <v-modal
      title="20px to Top"
      style="top: 20px;"
      :visible="modal1Visible"
      @ok="() => setModal1Visible(false)"
      @cancel="() => setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
    <br /><br />
    <v-button type="primary" @click="() => modal2Visible = true">Vertically centered modal dialog</v-button>
    <v-modal
      title="Vertically centered modal dialog"
      wrapClassName="vertical-center-modal"
      v-model="modal2Visible"
      @ok="() => modal2Visible = false"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </v-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal1Visible: false,
      modal2Visible: false,
    }
  },
  methods: {
    setModal1Visible(modal1Visible) {
      this.modal1Visible = modal1Visible;
    },
  }
}
</script>
<style>
/* use css to set position of modal */
.vertical-center-modal {
  text-align: center;
  white-space: nowrap;
}

.vertical-center-modal:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  width: 0;
}

.vertical-center-modal .vcu-modal {
  display: inline-block;
  vertical-align: middle;
  top: 0;
  text-align: left;
}

/*
// Use flex which not working in IE
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-center-modal .vcu-modal {
  top: 0;
}
*/
</style>
```
:::


