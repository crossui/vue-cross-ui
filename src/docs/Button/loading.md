> 加载中状态

:::demo 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

```html
<template>
  <div>
    <v-button type="primary" loading>
      Loading
    </v-button>
    <v-button type="primary" size="small" loading>
      Loading
    </v-button>
    <br /><br />
    <v-button type="primary" :loading="loading" @mouseenter="enterLoading">
      mouseenter me!
    </v-button>
    <v-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
      延迟1s
    </v-button>
    <br /><br />
    <v-button shape="circle" loading></v-button>
    <v-button type="primary" shape="circle" loading></v-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      iconLoading: false,
    }
  },
  methods: {
    enterLoading () {
      this.loading = true
    },
    enterIconLoading () {
      this.iconLoading = { delay: 1000 }
    },
  },
}
</script>
```

:::

