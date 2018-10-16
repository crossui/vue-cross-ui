<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <vertical id="vertical"></vertical>
      <event id="event"></event>
      <marks id="mark"></marks>
      <tip-formatter id="tip-formatter"></tip-formatter>
      <input-number id="input-number"></input-number>
      <icon-slider id="icon-slider"></icon-slider>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#vertical" title="垂直" />
        <v-anchor-link href="#event" title="事件" />
        <v-anchor-link href="#mark" title="带标签的滑块" />
        <v-anchor-link href="#tip-formatter" title="自定义提示" />
        <v-anchor-link href="#input-number" title="带输入框的滑块" />
        <v-anchor-link href="#icon-slider" title="带 icon 的滑块" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import vertical from './vertical.md';
import event from './event.md';
import marks from './mark.md';
import tipFormatter from './tip-formatter.md';
import inputNumber from './input-number.md';
import iconSlider from './icon-slider.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    vertical,
    event,
    marks,
    tipFormatter,
    inputNumber,
    iconSlider,
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


