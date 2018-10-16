> 多层抽屉

:::demo 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

```html
<template>
  <div>
    <v-button type="primary" @click="showDrawer">
      Open
    </v-button>
    <v-drawer
      title="Multi-level drawer"
      width=520
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <v-button type="primary" @click="showChildrenDrawer">
        Two-level drawer
      </v-button>
      <v-drawer
        title="Two-level Drawer"
        width=320
        :closable="false"
        @close="onChildrenDrawerClose"
        :visible="childrenDrawer"
      >
        <v-button type="primary" @click="showChildrenDrawer">
          This is two-level drawer
        </v-button>
      </v-drawer>
      <div
        :style="{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }"
      >
        <v-button
          style="marginRight: 8px"
          @click="onClose"
        >
          Cancel
        </v-button>
        <v-button @click="onClose" type="primary">
          Submit
        </v-button>
      </div>
    </v-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      childrenDrawer: false
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    showChildrenDrawer() {
      this.childrenDrawer = true
    },
    onChildrenDrawerClose() {
      this.childrenDrawer = false
    },
  },
}
</script>
```
:::

