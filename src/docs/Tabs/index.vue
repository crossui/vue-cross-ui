<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <disabled id="disabled"></disabled>
      <slide id="slide"></slide>
      <extra id="extra"></extra>
      <icons id="icon"></icons>
      <position id="position"></position>
      <editable-card id="editable-card"></editable-card>
      <cards id="card"></cards>
      <card-top id="card-top"></card-top>
      <custom-add-trigger id="custom-add-trigger"></custom-add-trigger>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#size" title="大小" />
        <v-anchor-link href="#disabled" title="禁用" />
        <v-anchor-link href="#slide" title="滑动" />
        <v-anchor-link href="#extra" title="附加内容" />
        <v-anchor-link href="#icon" title="图标" />
        <v-anchor-link href="#position" title="位置" />
        <v-anchor-link href="#editable-card" title="新增和关闭页签" />
        <v-anchor-link href="#card" title="卡片式页签" />
        <v-anchor-link href="#card-top" title="卡片式页签容器" />
        <v-anchor-link href="#custom-add-trigger" title="自定义新增页签触发器" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import size from './size.md';
import disabled from './disabled.md';
import slide from './slide.md';
import extra from './extra.md';
import icons from './icon.md';
import position from './position.md';
import editableCard from './editable-card.md';
import cards from './card.md';
import cardTop from './card-top.md';
import customAddTrigger from './custom-add-trigger.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    size,
    disabled,
    slide,
    extra,
    icons,
    position,
    editableCard,
    cards,
    cardTop,
    customAddTrigger,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


