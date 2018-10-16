<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <checkable id="checkable"></checkable>
      <colorful id="colorful"></colorful>
      <control id="control"></control>
      <hot-tags id="hot-tags"></hot-tags>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#checkable" title="可选择" />
        <v-anchor-link href="#colorful" title="多彩标签" />
        <v-anchor-link href="#control" title="动态添加和删除" />
        <v-anchor-link href="#hot-tags" title="热门标签" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import checkable from './checkable.md';
import colorful from './colorful.md';
import control from './control.md';
import hotTags from './hot-tags.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    checkable,
    colorful,
    control,
    hotTags,
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


