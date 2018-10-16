<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <duration id="duration"></duration>
      <loading id="loading"></loading>
      <other id="other"></other>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="普通提示" />
        <v-anchor-link href="#duration" title="修改延时" />
        <v-anchor-link href="#loading" title="加载中" />
        <v-anchor-link href="#other" title="其他提示类型" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import duration from './duration.md';
import loading from './loading.md';
import other from './other.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    duration,
    loading,
    other,
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


