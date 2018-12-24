<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <simple id="simple"></simple>
      <small-size id="small-size"></small-size>
      <icon id="icon"></icon>
      <customized-progress-dot id="customized-progress-dot"></customized-progress-dot>
      <error id="error"></error>
      <progress-dot id="progress-dot"></progress-dot>
      <step-next id="step-next"></step-next>
      <vertical id="vertical"></vertical>
      <vertical-small id="vertical-small"></vertical-small>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#simple" title="基本用法" />
        <v-anchor-link href="#small-size" title="迷你版" />
        <v-anchor-link href="#icon" title="带图标的步骤条" />
        <v-anchor-link href="#customized-progress-dot" title="自定义点状步骤条" />
        <v-anchor-link href="#error" title="步骤运行错误" />
        <v-anchor-link href="#progress-dot" title="点状步骤条" />
        <v-anchor-link href="#step-next" title="步骤切换" />
        <v-anchor-link href="#vertical" title="竖直方向的步骤条" />
        <v-anchor-link href="#vertical-small" title="竖直方向的小型步骤条" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import customizedProgressDot from './customized-progress-dot.md';
import error from './error.md';
import icon from './icon.md';
import progressDot from './progress-dot.md';
import simple from './simple.md';
import smallSize from './small-size.md';
import stepNext from './step-next.md';
import verticalSmall from './vertical-small.md';
import vertical from './vertical.md';
export default {
  components: {
    headerInfo,
    api,
    customizedProgressDot,
    error,
    icon,
    progressDot,
    simple,
    smallSize,
    stepNext,
    verticalSmall,
    vertical
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


