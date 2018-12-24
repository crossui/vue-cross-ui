<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <on-change id="on-change"></on-change>
      <target id="target"></target>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#on-change" title="固定状态改变的回调" />
        <v-anchor-link href="#target" title="滚动容器" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import onChange from './on-change.md';
import target from './target.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    target,
    onChange
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


