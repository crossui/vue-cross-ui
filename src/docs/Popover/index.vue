<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <arrow-point-at-center id="arrow-point-at-center"></arrow-point-at-center>
      <control id="control"></control>
      <placement id="placement"></placement>
      <triggerType id="triggerType"></triggerType>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#arrow-point-at-center" title="箭头指向" />
        <v-anchor-link href="#control" title="从浮层内关闭" />
        <v-anchor-link href="#placement" title="位置" />
        <v-anchor-link href="#triggerType" title="三种触发方式" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import arrowPointAtCenter from './arrow-point-at-center.md';
import control from './control.md';
import placement from './placement.md';
import triggerType from './triggerType.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    arrowPointAtCenter,
    control,
    placement,
    triggerType,
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


