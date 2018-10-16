<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <button-group id="button-group"></button-group>
      <disabled id="disabled"></disabled>
      <icon id="icon"></icon>
      <ghost id="ghost"></ghost>
      <multiple id="multiple"></multiple>
      <loading id="loading"></loading>
      <block id="block"></block>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="按钮类型" />
        <v-anchor-link href="#size" title="按钮尺寸" />
        <v-anchor-link href="#button-group" title="按钮组合" />
        <v-anchor-link href="#disabled" title="不可用状态" />
        <v-anchor-link href="#icon" title="图标按钮" />
        <v-anchor-link href="#ghost" title="幽灵按钮" />
        <v-anchor-link href="#multiple" title="多个按钮组合" />
        <v-anchor-link href="#loading" title="加载中状态" />
        <v-anchor-link href="#block" title="block 按钮" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import basic from './basic.md';
import size from './size.md';
import buttonGroup from './button-group.md';
import disabled from './disabled.md';
import icon from './icon.md';
import ghost from './ghost.md';
import multiple from './multiple.md';
import loading from './loading.md';
import block from './block.md';
import api from './api.md';
export default {
  components: {
    headerInfo,
    basic,
    size,
    buttonGroup,
    disabled,
    icon,
    ghost,
    multiple,
    loading,
    block,
    api
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


