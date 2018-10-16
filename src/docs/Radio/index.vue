<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <disabled id="disabled"></disabled>
      <radio-button id="radio-button"></radio-button>
      <radio-group-more id="radio-group-more"></radio-group-more>
      <radio-group-options id="radio-group-options"></radio-group-options>
      <radio-group-with-name id="radio-group-with-name"></radio-group-with-name>
      <radio-group id="radio-group"></radio-group>
      <size id="size"></size>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#disabled" title="不可用" />
        <v-anchor-link href="#radio-button" title="按钮样式" />
        <v-anchor-link href="#radio-group-more" title="RadioGroup 垂直" />
        <v-anchor-link href="#radio-group-options" title="RadioGroup 组合 - 配置方式" />
        <v-anchor-link href="#radio-group-with-name" title="单选组合 - 配合 name 使用" />
        <v-anchor-link href="#radio-group" title="单选组合" />
        <v-anchor-link href="#size" title="单选组合（大小）" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import disabled from './disabled.md';
import radioButton from './radio-button.md';
import radioGroupMore from './radio-group-more.md';
import radioGroupOptions from './radio-group-options.md';
import radioGroupWithName from './radio-group-with-name.md';
import radioGroup from './radio-group.md';
import size from './size.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    disabled,
    radioButton,
    radioGroupMore,
    radioGroupOptions,
    radioGroupWithName,
    radioGroup,
    size,
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


