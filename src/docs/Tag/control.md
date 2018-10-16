> 动态添加和删除

:::demo 用数组生成一组标签，可以动态添加和删除，通过监听删除动画结束的事件 `afterClose` 实现。

```html
<template>
  <div>
    <template v-for="(tag, index) in tags">
      <v-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
        <v-tag :key="tag" :closable="index !== 0" @afterClose="() => handleClose(tag)">
          {{`${tag.slice(0, 20)}...`}}
        </v-tag>
      </v-tooltip>
      <v-tag v-else :key="tag" :closable="index !== 0" @afterClose="() => handleClose(tag)">
        {{tag}}
      </v-tag>
    </template>
    <v-input
      v-if="inputVisible"
      ref="input"
      type="text"
      size="small"
      :style="{ width: '78px' }"
      :value="inputValue"
      @change="handleInputChange"
      @blur="handleInputConfirm"
      @keyup.enter="handleInputConfirm"
    ></v-input>
    <v-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
      <v-icon type="plus"></v-icon> New Tag
    </v-tag>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
      inputVisible: false,
      inputValue: '',
    }
  },
  methods: {
    handleClose (removedTag) {
      const tags = this.tags.filter(tag => tag !== removedTag)
      console.log(tags)
      this.tags = tags
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(function () {
        this.$refs.input.focus()
      })
    },

    handleInputChange (e) {
      this.inputValue = e.target.value
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      let tags = this.tags
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue]
      }
      console.log(tags)
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: '',
      })
    },
  },
}
</script>
```
:::
