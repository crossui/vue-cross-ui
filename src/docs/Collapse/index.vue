<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <accordion id="accordion"></accordion>
      <borderless id="borderless"></borderless>
      <custom id="custom"></custom>
      <mix id="mix"></mix>
      <noarrow id="noarrow"></noarrow>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#accordion" title="手风琴" />
        <v-anchor-link href="#borderless" title="简洁风格" />
        <v-anchor-link href="#custom" title="自定义面板" />
        <v-anchor-link href="#mix" title="面板嵌套" />
        <v-anchor-link href="#noarrow" title="隐藏箭头" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import accordion from './accordion.md';
import borderless from './borderless.md';
import custom from './custom.md';
import mix from './mix.md';
import noarrow from './noarrow.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    accordion,
    borderless,
    custom,
    mix,
    noarrow,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


