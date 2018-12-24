<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <search id="search"></search>
      <custom-item id="custom-item"></custom-item>
      <advanced id="advanced"></advanced>
      <large-data id="large-data"></large-data>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#search" title="带搜索框" />
        <v-anchor-link href="#custom-item" title="自定义渲染行数据" />
        <v-anchor-link href="#advanced" title="高级用法" />
        <v-anchor-link href="#large-data" title="大数据性能测试" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import search from './search.md';
import customItem from './custom-item.md';
import advanced from './advanced.md';
import largeData from './large-data.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    search,
    customItem,
    advanced,
    largeData,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

