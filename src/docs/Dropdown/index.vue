<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <context-menu id="context-menu"></context-menu>
      <dropdown-button id="dropdown-button"></dropdown-button>
      <event id="event"></event>
      <item id="item"></item>
      <overlay-visible id="overlay-visible"></overlay-visible>
      <placement id="placement"></placement>
      <sub-menu id="sub-menu"></sub-menu>
      <trigger id="trigger"></trigger>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#context-menu" title="右键菜单" />
        <v-anchor-link href="#dropdown-button" title="带下拉框的按钮" />
        <v-anchor-link href="#event" title="触发事件" />
        <v-anchor-link href="#item" title="其他元素" />
        <v-anchor-link href="#overlay-visible" title="菜单隐藏方式" />
        <v-anchor-link href="#placement" title="弹出位置" />
        <v-anchor-link href="#sub-menu" title="多级菜单" />
        <v-anchor-link href="#trigger" title="触发方式" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import contextMenu from './context-menu.md';
import dropdownButton from './dropdown-button.md';
import event from './event.md';
import item from './item.md';
import overlayVisible from './overlay-visible.md';
import placement from './placement.md';
import subMenu from './sub-menu.md';
import trigger from './trigger.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    contextMenu,
    dropdownButton,
    event,
    item,
    overlayVisible,
    placement,
    subMenu,
    trigger,
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


