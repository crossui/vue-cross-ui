<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <separator id="separator"></separator>
      <with-icon id="with-icon"></with-icon>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#separator" title="分隔符" />
        <v-anchor-link href="#with-icon" title="带有图标的" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import separator from './separator.md';
import withIcon from './withIcon.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    separator,
    withIcon,
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


