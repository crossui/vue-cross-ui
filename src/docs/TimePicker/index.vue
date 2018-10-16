<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <disabled id="disabled"></disabled>
      <size id="size"></size>
      <value id="value"></value>
      <interval-options id="interval-options"></interval-options>
      <hide-column id="hide-column"></hide-column>
      <addon id="addon"></addon>
      <twelve-hours id="twelve-hours"></twelve-hours>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#disabled" title="禁用" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#value" title="受控组件" />
        <v-anchor-link href="#interval-options" title="步长选项" />
        <v-anchor-link href="#hide-column" title="选择时分" />
        <v-anchor-link href="#addon" title="附加内容" />
        <v-anchor-link href="#twelve-hours" title="12 小时制" />
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
import size from './size.md';
import value from './value.md';
import intervalOptions from './interval-options.md';
import hideColumn from './hide-column.md';
import addon from './addon.md';
import twelveHours from './twelve-hours.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    disabled,
    size,
    value,
    intervalOptions,
    hideColumn,
    addon,
    twelveHours,
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


