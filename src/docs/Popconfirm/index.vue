<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <local id="local"></local>
      <dynamic-trigger id="dynamic-trigger"></dynamic-trigger>
      <placement id="placement"></placement>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#local" title="国际化" />
        <v-anchor-link href="#dynamic-trigger" title="条件触发" />
        <v-anchor-link href="#placement" title="位置" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import local from './local.md';
import dynamicTrigger from './dynamic-trigger.md';
import placement from './placement.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    local,
    dynamicTrigger,
    placement,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


