<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <inside id="inside"></inside>
      <nested id="nested"></nested>
      <delayAndDebounce id="delayAndDebounce"></delayAndDebounce>
      <custom-indicator id="custom-indicator"></custom-indicator>
      <tip id="tip"></tip>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#inside" title="容器" />
        <v-anchor-link href="#nested" title="卡片加载中" />
        <v-anchor-link href="#delayAndDebounce" title="延迟" />
        <v-anchor-link href="#custom-indicator" title="自定义指示符" />
        <v-anchor-link href="#tip" title="自定义描述文案" />
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
import inside from './inside.md';
import nested from './nested.md';
import delayAndDebounce from './delayAndDebounce.md';
import customIndicator from './custom-indicator.md';
import tip from './tip.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    size,
    inside,
    nested,
    delayAndDebounce,
    customIndicator,
    tip,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


