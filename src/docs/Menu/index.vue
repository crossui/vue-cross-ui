<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <horizontal id="horizontal"></horizontal>
      <vertical id="vertical"></vertical>
      <inline id="inline"></inline>
      <inline-collapsed id="inline-collapsed"></inline-collapsed>
      <theme id="theme"></theme>
      <sider-current id="sider-current"></sider-current>
      <switch-mode id="switch-mode"></switch-mode>
      <recursion id="recursion"></recursion>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#horizontal" title="顶部导航" />
        <v-anchor-link href="#vertical" title="垂直菜单" />
        <v-anchor-link href="#inline" title="内嵌菜单" />
        <v-anchor-link href="#inline-collapsed" title="缩起内嵌菜单" />
        <v-anchor-link href="#theme" title="主题" />
        <v-anchor-link href="#sider-current" title="只展开当前父级菜单" />
        <v-anchor-link href="#switch-mode" title="切换菜单类型" />
        <v-anchor-link href="#recursion" title="单文件递归菜单" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import horizontal from './horizontal.md';
import vertical from './vertical.md';
import inline from './inline.md';
import inlineCollapsed from './inline-collapsed.md';
import theme from './theme.md';
import siderCurrent from './sider-current.md';
import switchMode from './switch-mode.md';
import recursion from './recursion.md';
export default {
  components: {
    headerInfo,
    api,
    horizontal,
    vertical,
    inline,
    inlineCollapsed,
    siderCurrent,
    switchMode,
    theme,
	recursion
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

