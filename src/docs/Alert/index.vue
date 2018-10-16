<template>
  <v-row :gutter="16">
    <v-col :span="20" class="components-alert-demo">
      <header-info></header-info>
      <basic id="basic"></basic>
      <styles id="style"></styles>
      <banner id="banner"></banner>
      <closable id="closable"></closable>
      <close-text id="close-text"></close-text>
      <description id="description"></description>
      <icons id="icon"></icons>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#style" title="四种样式" />
        <v-anchor-link href="#banner" title="顶部公告" />
        <v-anchor-link href="#closable" title="可关闭的警告提示" />
        <v-anchor-link href="#close-text" title="自定义关闭" />
        <v-anchor-link href="#description" title="含有辅助性文字介绍" />
        <v-anchor-link href="#icon" title="图标" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import styles from './style.md';
import banner from './banner.md';
import closable from './closable.md';
import closeText from './close-text.md';
import description from './description.md';
import icons from './icon.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    styles,
    banner,
    closable,
    closeText,
    description,
    icons,
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
.components-alert-demo .vcu-alert {
  margin-bottom: 16px;
}
</style>


