<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <text-lefts id="text-left"></text-lefts>
      <text-rights id="text-right"></text-rights>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#text-left" title="固定宽度靠左" />
        <v-anchor-link href="#text-right" title="固定宽度靠右" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import textLefts from './text-left.md';
import textRights from './text-right.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    textLefts,
    textRights,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


