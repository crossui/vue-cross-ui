<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <disabled id="disabled"></disabled>
      <digit id="digit"></digit>
      <formatter id="formatter"></formatter>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#disabled" title="不可用" />
        <v-anchor-link href="#digit" title="小数" />
        <v-anchor-link href="#formatter" title="格式化展示" />
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
import disabled from './disabled.md';
import digit from './digit.md';
import formatter from './formatter.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    size,
    disabled,
    formatter,
    digit,
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


