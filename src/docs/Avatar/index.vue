<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <badge id="badge"></badge>
      <dynamic id="dynamic"></dynamic>
      <types id="types"></types>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#badge" title="带徽标的头像" />
        <v-anchor-link href="#dynamic" title="自动调整字符大小" />
        <v-anchor-link href="#types" title="类型" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import badge from './badge.md';
import dynamic from './dynamic.md';
import types from './types.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    badge,
    dynamic,
    types,
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


