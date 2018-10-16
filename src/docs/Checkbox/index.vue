<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <check-all id="check-all"></check-all>
      <controller id="controller"></controller>
      <disabled id="disabled"></disabled>
      <group id="group"></group>
      <layout id="layout"></layout>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本用法" />
        <v-anchor-link href="#check-all" title="全选" />
        <v-anchor-link href="#controller" title="受控的checkbox" />
        <v-anchor-link href="#disabled" title="不可用" />
        <v-anchor-link href="#group" title="Checkbox组" />
        <v-anchor-link href="#layout" title="布局" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import checkAll from './check-all.md';
import controller from './controller.md';
import disabled from './disabled.md';
import group from './group.md';
import layout from './layout.md';
export default {
  components: {
    headerInfo,
    basic,
    checkAll,
    controller,
    disabled,
    group,
    layout,
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
<style>
</style>


