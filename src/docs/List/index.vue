<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <vertical id="vertical"></vertical>
      <simple id="simple"></simple>
      <grids id="grid"></grids>
      <resposive id="resposive"></resposive>
      <loadmore id="loadmore"></loadmore>
      <infinite-virtualized-load id="infinite-virtualized-load"></infinite-virtualized-load>
      <infinite-load id="infinite-load"></infinite-load>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#vertical" title="竖排列表样式" />
        <v-anchor-link href="#simple" title="三种大小" />
        <v-anchor-link href="#grid" title="栅格列表" />
        <v-anchor-link href="#resposive" title="响应式的栅格列表" />
        <v-anchor-link href="#loadmore" title="加载更多" />
        <v-anchor-link href="#infinite-virtualized-load" title="滚动加载无限长列表" />
        <v-anchor-link href="#infinite-load" title="滚动加载" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import vertical from './vertical.md';
import simple from './simple.md';
import grids from './grid.md';
import resposive from './resposive.md';
import loadmore from './loadmore.md';
import infiniteVirtualizedLoad from './infinite-virtualized-load.md';
import infiniteLoad from './infinite-load.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    vertical,
    simple,
    grids,
    resposive,
    loadmore,
    infiniteVirtualizedLoad,
    infiniteLoad,
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


