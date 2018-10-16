> 搜索用户

:::demo 一个带有远程搜索，节流控制，请求时序控制，加载状态的多选示例。

```html
<template>
  <v-select
    mode="multiple"
    labelInValue
    :value="value"
    placeholder="Select users"
    style="width: 100%"
    :filterOption="false"
    @search="fetchUser"
    @change="handleChange"
    :notFoundContent="fetching ? undefined : null"
  >
    <v-spin v-if="fetching" slot="notFoundContent" size="small"></v-spin>
    <v-select-option v-for="d in data" :key="d.value">{{d.text}}</v-select-option>
  </v-select>
</template>
<script>
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import debounce from 'lodash/debounce';

export default {
  data() {
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
    return {
      data: [],
      value: [],
      fetching: false,
    }
  },
  methods: {
    fetchUser (value) {
      console.log('fetching user', value);
      this.lastFetchId += 1;
      const fetchId = this.lastFetchId;
      this.data = []
      this.fetching = true
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then((body) => {
          if (fetchId !== this.lastFetchId) { // for fetch callback order
            return;
          }
          const data = body.results.map(user => ({
            text: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
          }));
          this.data = data
          this.fetching = false
        });
    },
    handleChange (value) {
      Object.assign(this, {
        value,
        data: [],
        fetching: false,
      })
    }
  }
}
</script>
```
:::