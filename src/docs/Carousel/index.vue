<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <fades id="fade"></fades>
      <vertical id="vertical"></vertical>
      <autoplay id="autoplay"></autoplay>
      <customArrows id="customArrows"></customArrows>
      <customPaging id="customPaging"></customPaging>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#fade" title="渐显" />
        <v-anchor-link href="#vertical" title="垂直" />
        <v-anchor-link href="#autoplay" title="自动切换" />
        <v-anchor-link href="#customArrows" title="自定义箭头" />
        <v-anchor-link href="#customPaging" title="自定义分页" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import fades from './fade.md';
import vertical from './vertical.md';
import autoplay from './autoplay.md';
import customArrows from './customArrows.md';
import customPaging from './customPaging.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    fades,
    vertical,
    autoplay,
    customArrows,
    customPaging,
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


