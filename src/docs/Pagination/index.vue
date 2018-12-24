<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <more id="more"></more>
      <changer id="changer"></changer>
      <controlled id="controlled"></controlled>
      <custom-changer id="custom-changer"></custom-changer>
      <item-render id="item-render"></item-render>
      <jump id="jump"></jump>
      <mini id="mini"></mini>
      <simple id="simple"></simple>
      <total id="total"></total>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#more" title="更多" />
        <v-anchor-link href="#changer" title="改变" />
        <v-anchor-link href="#controlled" title="受控" />
        <v-anchor-link href="#custom-changer" title="自定义下拉选项" />
        <v-anchor-link href="#item-render" title="上一步和下一步" />
        <v-anchor-link href="#jump" title="跳转" />
        <v-anchor-link href="#mini" title="迷你" />
        <v-anchor-link href="#simple" title="简洁" />
        <v-anchor-link href="#total" title="总数" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import more from './more.md';
import changer from './changer.md';
import controlled from './controlled.md';
import customChanger from './custom-changer.md';
import itemRender from './item-render.md';
import jump from './jump.md';
import mini from './mini.md';
import simple from './simple.md';
import total from './total.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    more,
    changer,
    controlled,
    customChanger,
    itemRender,
    jump,
    mini,
    simple,
    total
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


