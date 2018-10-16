> 位置

:::demo 位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。

```html
<template>
  <div id="components-v-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <v-popconfirm placement="topLeft" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>TL</v-button>
      </v-popconfirm>
      <v-popconfirm placement="top" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>Top</v-button>
      </v-popconfirm>
      <v-popconfirm placement="topRight" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>TR</v-button>
      </v-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <v-popconfirm placement="leftTop" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>LT</v-button>
      </v-popconfirm>
      <v-popconfirm placement="left" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>Left</v-button>
      </v-popconfirm>
      <v-popconfirm placement="leftBottom" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>LB</v-button>
      </v-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
      <v-popconfirm placement="rightTop" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>RT</v-button>
      </v-popconfirm>
      <v-popconfirm placement="right" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>Right</v-button>
      </v-popconfirm>
      <v-popconfirm placement="rightBottom" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>RB</v-button>
      </v-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <v-popconfirm placement="bottomLeft" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>BL</v-button>
      </v-popconfirm>
      <v-popconfirm placement="bottom" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
            <p>Are you sure delete this task?</p>
            <p>Are you sure delete this task?</p>
        </template>
        <v-button>Bottom</v-button>
      </v-popconfirm>
      <v-popconfirm placement="bottomRight" okText="Yes" cancelText="No" @confirm="confirm">
        <template slot="title">
          <p>Are you sure delete this task?</p>
          <p>Are you sure delete this task?</p>
        </template>
        <v-button>BR</v-button>
      </v-popconfirm>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      buttonWidth: 70,
    }
  },
  methods: {
    confirm () {
      this.$message.info('Click on Yes.')
    },
  },
}
</script>
<style scoped>
#components-v-popconfirm-demo-placement .vcu-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
:::

