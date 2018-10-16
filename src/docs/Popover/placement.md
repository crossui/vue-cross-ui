> 位置

:::demo 位置有十二个方向。

```html
<template>
<div id="components-popover-demo-placement">
  <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
    <v-popover placement="topLeft">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>TL</v-button>
    </v-popover>
    <v-popover placement="top">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>Top</v-button>
    </v-popover>
    <v-popover placement="topRight">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>TR</v-button>
    </v-popover>
  </div>
  <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
    <v-popover placement="leftTop">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>LT</v-button>
    </v-popover>
    <v-popover placement="left">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>Left</v-button>
    </v-popover>
    <v-popover placement="leftBottom">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>LB</v-button>
    </v-popover>
  </div>
  <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
    <v-popover placement="rightTop">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>RT</v-button>
    </v-popover>
    <v-popover placement="right">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>Right</v-button>
    </v-popover>
    <v-popover placement="rightBottom">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>RB</v-button>
    </v-popover>
  </div>
  <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
    <v-popover placement="bottomLeft">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>BL</v-button>
    </v-popover>
    <v-popover placement="bottom">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>Bottom</v-button>
    </v-popover>
    <v-popover placement="bottomRight">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <template slot="title">
        <span>Title</span>
      </template>
      <v-button>BR</v-button>
    </v-popover>
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
<style>
#components-popover-demo-placement .vcu-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
:::
