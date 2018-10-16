> 三种大小

:::demo 三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```html
<template>
  <div>
    <v-radio-group v-model="size">
      <v-radio-button value="large">Large</v-radio-button>
      <v-radio-button value="default">Default</v-radio-button>
      <v-radio-button value="small">Small</v-radio-button>
    </v-radio-group>
    <br /><br />
    <v-select
      :size="size"
      defaultValue="a1"
      style="width: 200px"
      @change="handleChange"
    >
      <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </v-select-option>
    </v-select>
    <br />
    <v-select
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
      @popupScroll="popupScroll"
    >
      <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </v-select-option>
    </v-select>
    <br />
    <v-select
      mode="tags"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a1', 'b2']"
      style="width: 200px"
      @change="handleChange"
    >
      <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{(i + 9).toString(36) + i}}
      </v-select-option>
    </v-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 'default',
    }
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
    },
    popupScroll(){
      console.log('popupScroll')
    }
  }
}
</script>
```
:::