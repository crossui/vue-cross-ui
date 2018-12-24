<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <certain-category id="certain-category"></certain-category>
      <custom id="custom"></custom>
      <non-case-sensitive id="non-case-sensitive"></non-case-sensitive>
      <options id="options"></options>
      <uncertain-category id="uncertain-category"></uncertain-category>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本使用" />
        <v-anchor-link href="#certain-category" title="查询模式 - 确定类目" />
        <v-anchor-link href="#custom" title="自定义输入组件" />
        <v-anchor-link href="#non-case-sensitive" title="不区分大小写" />
        <v-anchor-link href="#options" title="自定义选项" />
        <v-anchor-link href="#uncertain-category" title="查询模式 - 不确定类目" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import certainCategory from './certain-category.md';
import custom from './custom.md';
import nonCaseSensitive from './non-case-sensitive.md';
import options from './options.md';
import uncertainCategory from './uncertain-category.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    certainCategory,
    custom,
    nonCaseSensitive,
    options,
    uncertainCategory,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

