> 位置

:::demo 位置有 12 个方向。

```html
<template>
  <div id="components-v-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <v-tooltip placement="topLeft" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>TL</v-button>
      </v-tooltip>
      <v-tooltip placement="top" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>Top</v-button>
      </v-tooltip>
      <v-tooltip placement="topRight" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>TR</v-button>
      </v-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <v-tooltip placement="leftTop" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>LT</v-button>
      </v-tooltip>
      <v-tooltip placement="left" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>Left</v-button>
      </v-tooltip>
      <v-tooltip placement="leftBottom" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>LB</v-button>
      </v-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
      <v-tooltip placement="rightTop" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>RT</v-button>
      </v-tooltip>
      <v-tooltip placement="right" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>Right</v-button>
      </v-tooltip>
      <v-tooltip placement="rightBottom" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>RB</v-button>
      </v-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <v-tooltip placement="bottomLeft" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>BL</v-button>
      </v-tooltip>
      <v-tooltip placement="bottom" >
        <template slot="title">
            <span>prompt text</span>
        </template>
        <v-button>Bottom</v-button>
      </v-tooltip>
      <v-tooltip placement="bottomRight" >
        <template slot="title">
          <span>prompt text</span>
        </template>
        <v-button>BR</v-button>
      </v-tooltip>
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
}
</script>
<style scoped>
#components-v-tooltip-demo-placement .vcu-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
:::