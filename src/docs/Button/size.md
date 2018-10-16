> 按钮尺寸

:::demo 按钮有大、中、小三种尺寸。通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```html
<template>
  <div>
    <v-radio-group :value="size" v-on:change="handleSizeChange">
      <v-radio-button value="large">Large</v-radio-button>
      <v-radio-button value="default">Default</v-radio-button>
      <v-radio-button value="small">Small</v-radio-button>
    </v-radio-group>
    <br /><br />
    <v-button type="primary" :size="size">Primary</v-button>
    <v-button type="info" :size="size">info</v-button>
    <v-button type="success" :size="size">success</v-button>
    <v-button type="warning" :size="size">warning</v-button>
    <v-button type="error" :size="size">error</v-button>
    <v-button type="text" :size="size">text</v-button>
    <v-button :size="size">Normal</v-button>
    <v-button type="dashed" :size="size">Dashed</v-button>
    <v-button type="danger" :size="size">Danger</v-button>
    <br /><br />
    <v-button type="primary" shape="circle" icon="download" :size="size"></v-button>
    <v-button type="primary" icon="download" :size="size">Download</v-button>
    <br /><br />
    <v-button-group :size="size">
      <v-button type="primary">
        <v-icon type="left"></v-icon>Backward
      </v-button>
      <v-button type="primary">
        Forward<v-icon type="right"></v-icon>
      </v-button>
    </v-button-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      size: 'default',
    }
  },
  methods: {
    handleSizeChange (e) {
      this.size = e.target.value
    }
  },
}
</script>
```

:::