<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <statics id="static"></statics>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#static" title="静态位置" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import statics from './static.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    statics,
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


