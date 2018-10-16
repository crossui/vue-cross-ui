> 查询模式 - 确定类目

:::demo 查询模式 - 确定类目

```html
<template>
  <div class="certain-category-search-wrapper" style="width: 250px">
    <v-auto-complete
      class="certain-category-search"
      dropdownClassName="certain-category-search-dropdown"
      :dropdownMatchSelectWidth="false"
      :dropdownStyle="{width: '300px'}"
      size="large"
      style="width: 100%"
      placeholder="input here"
      optionLabelProp="value"
    >
      <template slot="dataSource">
        <v-select-opt-group
          v-for="group in dataSource"
          :key="group.title"
        >
          <span slot="label">
            {{group.title}}
            <a
              style="float: right"
              href="https://www.google.com/search?q=crossui"
              target="_blank"
              rel="noopener noreferrer"
            >更多
            </a>
          </span>
          <v-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
            {{opt.title}}
            <span class="certain-search-item-count">{{opt.count}} 人 关注</span>
          </v-select-option>
        </v-select-opt-group>
        <v-select-option disabled key="all" class="show-all">
          <a
            href="https://www.google.com/search?q=crossui"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看所有结果
          </a>
        </v-select-option>
      </template>
      <v-input>
        <v-icon slot="suffix" type="search1" class="certain-category-icon"></v-icon>
      </v-input>
    </v-auto-complete>
  </div>
</template>
<script>
const dataSource = [{
  title: '话题',
  children: [{
    title: 'vcu',
    count: 10000,
  }, {
    title: 'vcu UI',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: 'vcu UI 有多好',
    count: 60100,
  }, {
    title: 'vcu 是啥',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'vcu 是一个设计语言',
    count: 100000,
  }],
}];
export default {
  data() {
    return {
      dataSource,
    }
  },
}
</script>
<style>
.certain-category-search-dropdown .vcu-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .vcu-select-dropdown-menu-item-group {
  border-bottom: 1px solid #F6F6F6;
}

.certain-category-search-dropdown .vcu-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .vcu-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .vcu-select-dropdown-menu {
  max-height: 300px;
}
</style>
<style scoped>
  .certain-category-search-wrapper >>> .certain-category-search.vcu-select-auto-complete .vcu-input-affix-wrapper .vcu-input-suffix {
    right: 12px;
  }
  .certain-category-search-wrapper >>> .certain-search-item-count {
    position: absolute;
    color: #999;
    right: 16px;
  }
  .certain-category-search-wrapper >>> .certain-category-search.vcu-select-focused .certain-category-icon {
    color: #108ee9;
  }
  .certain-category-search-wrapper >>> .certain-category-icon {
    color: #6E6E6E;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: 16px;
  }
</style>
```
:::