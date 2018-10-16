<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <placement id="placement"></placement>
      <auto-adjust-overflow id="auto-adjust-overflow"></auto-adjust-overflow>
      <arrow-point-at-center id="arrow-point-at-center"></arrow-point-at-center>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#placement" title="位置" />
        <v-anchor-link href="#auto-adjust-overflow" title="自动调整位置" />
        <v-anchor-link href="#arrow-point-at-center" title="箭头指向" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import placement from './placement.md';
import autoAdjustOverflow from './auto-adjust-overflow.md';
import arrowPointAtCenter from './arrow-point-at-center.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    placement,
    autoAdjustOverflow,
    arrowPointAtCenter,
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


