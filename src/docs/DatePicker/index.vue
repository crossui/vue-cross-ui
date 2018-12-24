<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <date-render id="date-render"></date-render>
      <disabled id="disabled"></disabled>
      <disabled-date id="disabled-date"></disabled-date>
      <extra-footer id="extra-footer"></extra-footer>
      <format id="format"></format>
      <mode id="mode"></mode>
      <presetted-ranges id="presetted-ranges"></presetted-ranges>
      <start-end id="start-end"></start-end>
      <times id="times"></times>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本用法" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#date-render" title="定制日期单元格" />
        <v-anchor-link href="#disabled" title="禁用" />
        <v-anchor-link href="#disabled-date" title="不可选择日期和时间" />
        <v-anchor-link href="#extra-footer" title="额外的页脚" />
        <v-anchor-link href="#format" title="日期格式" />
        <v-anchor-link href="#mode" title="受控面板" />
        <v-anchor-link href="#presetted-ranges" title="预设范围" />
        <v-anchor-link href="#start-end" title="自定义日期范围选择" />
        <v-anchor-link href="#times" title="日期时间选择" />
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
import dateRender from './date-render.md';
import disabled from './disabled.md';
import disabledDate from './disabled-date.md';
import extraFooter from './extra-footer.md';
import format from './format.md';
import mode from './mode.md';
import presettedRanges from './presetted-ranges.md';
import startEnd from './start-end.md';
import times from './time.md';
export default {
  components: {
    headerInfo,
    basic,
    size,
    dateRender,
    disabled,
    disabledDate,
    extraFooter,
    format,
    mode,
    presettedRanges,
    startEnd,
    times,
    api,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


