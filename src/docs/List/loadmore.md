> 加载更多

:::demo 可通过 `loadMore` 属性实现加载更多功能。

```html
<template>
  <v-list
    class="demo-loadmore-list"
    :loading="loading"
    itemLayout="horizontal"
    :dataSource="data"
  >
    <div v-if="showLoadingMore" slot="loadMore" :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
      <v-spin v-if="loadingMore"></v-spin>
      <v-button v-else @click="onLoadMore">loading more</v-button>
    </div>
    <v-list-item slot="renderItem" slot-scope="item, index">
      <a slot="actions">edit</a>
      <a slot="actions">more</a>
      <v-list-item-meta
        description="a design language for background applications, is refined by vcu UED Team"
      >
        <a slot="title" href="#">{{item.name.last}}</a>
        <v-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></v-avatar>
      </v-list-item-meta>
      <div>content</div>
    </v-list-item>
  </v-list>
</template>
<script>
import reqwest from 'reqwest'

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

export default {
  data () {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    }
  },
  mounted () {
    this.getData((res) => {
      this.loading = false
      this.data = res.results
    })
  },
  methods: {
    getData  (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: (res) => {
          callback(res)
        },
      })
    },
    onLoadMore () {
      this.loadingMore = true
      this.getData((res) => {
        this.data = this.data.concat(res.results)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    },
  },
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
```
:::