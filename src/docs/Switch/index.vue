<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <disabled id="disabled"></disabled>
      <loading id="loading"></loading>
      <size id="size"></size>
      <texts id="text"></texts>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#disabled" title="不可用" />
        <v-anchor-link href="#loading" title="加载中" />
        <v-anchor-link href="#size" title="两种大小" />
        <v-anchor-link href="#text" title="文字和图标" />
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
import loading from './loading.md';
import size from './size.md';
import texts from './text.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    disabled,
    loading,
    size,
    texts,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


