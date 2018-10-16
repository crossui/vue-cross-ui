<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <disabled id="disabled"></disabled>
      <half id="half"></half>
      <texts id="text"></texts>
      <character id="character"></character>
      <clear id="clear"></clear>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#disabled" title="只读" />
        <v-anchor-link href="#half" title="半星" />
        <v-anchor-link href="#text" title="文案展现" />
        <v-anchor-link href="#character" title="其他字符" />
        <v-anchor-link href="#clear" title="清除" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import disabled from './disabled.md';
import half from './half.md';
import texts from './text.md';
import character from './character.md';
import clear from './clear.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    disabled,
    half,
    texts,
    character,
    clear,
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


