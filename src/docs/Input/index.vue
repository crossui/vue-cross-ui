<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <search-input id="search-input"></search-input>
      <textareas id="textarea"></textareas>
      <autosize-textarea id="autosize-textarea"></autosize-textarea>
      <presuffix id="presuffix"></presuffix>
      <addon id="addon"></addon>
      <group id="group"></group>
      <tooltip id="tooltip"></tooltip>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本使用" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#search-input" title="搜索框" />
        <v-anchor-link href="#textarea" title="文本域" />
        <v-anchor-link href="#autosize-textarea" title="适应文本高度的文本域" />
        <v-anchor-link href="#presuffix" title="前缀和后缀" />
        <v-anchor-link href="#addon" title="前置/后置标签" />
        <v-anchor-link href="#group" title="输入框组合" />
        <v-anchor-link href="#tooltip" title="输入时格式化展示" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import size from './size.md';
import searchInput from './search-input.md';
import textareas from './textarea.md';
import autosizeTextarea from './autosize-textarea.md';
import presuffix from './presuffix.md';
import addon from './addon.md';
import group from './group.md';
import tooltip from './tooltip.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    size,
    searchInput,
    textareas,
    autosizeTextarea,
    presuffix,
    addon,
    group,
    tooltip
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


