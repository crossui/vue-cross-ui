<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <colors id="color"></colors>
      <custom id="custom"></custom>
      <pending id="pending"></pending>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#color" title="圆圈颜色" />
        <v-anchor-link href="#custom" title="自定义时间轴点" />
        <v-anchor-link href="#pending" title="最后一个" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import colors from './color.md';
import custom from './custom.md';
import pending from './pending.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    colors,
    custom,
    pending,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


