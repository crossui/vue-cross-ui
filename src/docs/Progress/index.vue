<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <line-mini id="line-mini"></line-mini>
      <segment id="segment"></segment>
      <dynamic id="dynamic"></dynamic>
      <circles id="circle"></circles>
      <circle-mini id="circle-mini"></circle-mini>
      <circle-dynamic id="circle-dynamic"></circle-dynamic>
      <dashboard id="dashboard"></dashboard>
      <format id="format"></format>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#line-mini" title="小型进度条" />
        <v-anchor-link href="#segment" title="分段进度条" />
        <v-anchor-link href="#dynamic" title="动态展示" />
        <v-anchor-link href="#circle" title="进度圈" />
        <v-anchor-link href="#circle-mini" title="小型进度圈" />
        <v-anchor-link href="#circle-dynamic" title="进度圈动态展示" />
        <v-anchor-link href="#dashboard" title="仪表盘" />
        <v-anchor-link href="#format" title="自定义文字格式" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import lineMini from './line-mini.md';
import segment from './segment.md';
import dynamic from './dynamic.md';
import circles from './circle.md';
import circleMini from './circle-mini.md';
import circleDynamic from './circle-dynamic.md';
import dashboard from './dashboard.md';
import format from './format.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    lineMini,
    segment,
    dynamic,
    circles,
    circleMini,
    circleDynamic,
    dashboard,
    format,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


