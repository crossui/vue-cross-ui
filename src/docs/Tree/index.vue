<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <lines id="line"></lines>
      <search id="search"></search>
      <dynamic id="dynamic"></dynamic>
      <draggable id="draggable"></draggable>
      <customized-icon id="customized-icon"></customized-icon>
      <basic-controlled id="basic-controlled"></basic-controlled>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#line" title="连接线" />
        <v-anchor-link href="#search" title="可搜索" />
        <v-anchor-link href="#dynamic" title="异步数据加载" />
        <v-anchor-link href="#draggable" title="拖动示例" />
        <v-anchor-link href="#customized-icon" title="自定义图标" />
        <v-anchor-link href="#basic-controlled" title="受控操作示例" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import lines from './line.md';
import search from './search.md';
import dynamic from './dynamic.md';
import draggable from './draggable.md';
import customizedIcon from './customized-icon.md';
import basicControlled from './basic-controlled.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    lines,
    search,
    dynamic,
    draggable,
    customizedIcon,
    basicControlled,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style>
</style>


