<template>

  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <search id="search"></search>
      <change-on-select id="change-on-select"></change-on-select>
      <custom-render id="custom-render"></custom-render>
      <custom-trigger id="custom-trigger"></custom-trigger>
      <default-value id="default-value"></default-value>
      <disabled-option id="disabled-option"></disabled-option>
      <hover id="hover"></hover>
      <lazy id="lazy"></lazy>
      <fields-name id="fields-name"></fields-name>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#size" title="大小" />
        <v-anchor-link href="#search" title="搜索" />
        <v-anchor-link href="#change-on-select" title="选择即改变" />
        <v-anchor-link href="#custom-render" title="自定义已选项" />
        <v-anchor-link href="#custom-trigger" title="可以自定义显示" />
        <v-anchor-link href="#default-value" title="默认值" />
        <v-anchor-link href="#disabled-option" title="禁用选项" />
        <v-anchor-link href="#hover" title="移入展开" />
        <v-anchor-link href="#lazy" title="动态加载选项" />
        <v-anchor-link href="#fields-name" title="自定义字段名" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import changeOnSelect from './change-on-select.md';
import customRender from './custom-render.md';
import customTrigger from './custom-trigger.md';
import defaultValue from './default-value.md';
import disabledOption from './disabled-option.md';
import hover from './hover.md';
import lazy from './lazy.md';
import search from './search.md';
import size from './size.md';
import fieldsName from './fields-name.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    changeOnSelect,
    customRender,
    customTrigger,
    defaultValue,
    disabledOption,
    hover,
    lazy,
    search,
    size,
    fieldsName,
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


