<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <status id="status"></status>
      <links id="link"></links>
      <no-wrapper id="no-wrapper"></no-wrapper>
      <dot id="dot"></dot>
      <change id="change"></change>
      <overflow id="overflow"></overflow>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#status" title="状态点" />
        <v-anchor-link href="#link" title="可点击" />
        <v-anchor-link href="#no-wrapper" title="独立使用" />
        <v-anchor-link href="#dot" title="讨嫌的小红点" />
        <v-anchor-link href="#change" title="动态" />
        <v-anchor-link href="#overflow" title="封顶数字" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import status from './status.md';
import links from './link.md';
import noWrapper from './no-wrapper.md';
import dot from './dot.md';
import change from './change.md';
import overflow from './overflow.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    status,
    links,
    noWrapper,
    dot,
    change,
    overflow,
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
.components-badge-demo .head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
}
.components-badge-demo .vcu-badge:not(.vcu-badge-status) {
  margin-right: 20px;
}
</style>


