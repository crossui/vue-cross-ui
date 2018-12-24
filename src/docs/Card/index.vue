<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <concise id="concise"></concise>
      <colRowCard id="colRowCard"></colRowCard>
      <flexible-content id="flexible-content"></flexible-content>
      <grids id="grid"></grids>
      <inline id="inline"></inline>
      <loading id="loading"></loading>
      <moreConfigs id="moreConfigs"></moreConfigs>
      <noBorder id="noBorder"></noBorder>
      <tabsCard id="tabsCard"></tabsCard>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#concise" title="简洁卡片" />
        <v-anchor-link href="#colRowCard" title="栅格卡片" />
        <v-anchor-link href="#flexible-content" title="更灵活的内容展示" />
        <v-anchor-link href="#grid" title="网格型内嵌卡片" />
        <v-anchor-link href="#inline" title="内部卡片" />
        <v-anchor-link href="#loading" title="预加载的卡片" />
        <v-anchor-link href="#moreConfigs" title="支持更多内容配置" />
        <v-anchor-link href="#noBorder" title="无边框" />
        <v-anchor-link href="#tabsCard" title="带页签的卡片" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import concise from './concise.md';
import colRowCard from './colRowCard.md';
import flexibleContent from './flexible-content.md';
import grids from './grid.md';
import inline from './inline.md';
import loading from './loading.md';
import moreConfigs from './moreConfigs.md';
import noBorder from './noBorder.md';
import tabsCard from './tabsCard.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    concise,
    colRowCard,
    flexibleContent,
    grids,
    inline,
    loading,
    moreConfigs,
    noBorder,
    tabsCard,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


