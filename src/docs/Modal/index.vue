<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <async id="async"></async>
      <confirm id="confirm"></confirm>
      <confirm-promise id="confirm-promise"></confirm-promise>
      <footers id="footer"></footers>
      <infos id="info"></infos>
      <locale id="locale"></locale>
      <manual id="manual"></manual>
      <position id="position"></position>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#async" title="异步关闭" />
        <v-anchor-link href="#confirm" title="确认对话框" />
        <v-anchor-link href="#confirm-promise" title="确认对话框(异步关闭)" />
        <v-anchor-link href="#footer" title="自定义页脚" />
        <v-anchor-link href="#info" title="信息提示" />
        <v-anchor-link href="#locale" title="国际化" />
        <v-anchor-link href="#manual" title="手动移除" />
        <v-anchor-link href="#position" title="自定义位置" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import async from './async.md';
import confirm from './confirm.md';
import confirmPromise from './confirm-promise.md';
import footers from './footer.md';
import infos from './info.md';
import locale from './locale.md';
import manual from './manual.md';
import position from './position.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    async,
    confirm,
    confirmPromise,
    footers,
    infos,
    locale,
    manual,
    position,
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


