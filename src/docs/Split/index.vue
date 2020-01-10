<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <top-bottom id="topBottom"></top-bottom>
      <nesting id="nesting"></nesting>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#topBottom" title="上下" />
        <v-anchor-link href="#nesting" title="嵌套" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import topBottom from './top-bottom.md';
import nesting from './nesting.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    topBottom,
    nesting
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


