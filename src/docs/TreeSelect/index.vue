<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <multiple id="multiple"></multiple>
      <checkable id="checkable"></checkable>
      <treeData id="treeData"></treeData>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#multiple" title="多选" />
        <v-anchor-link href="#checkable" title="可勾选" />
        <v-anchor-link href="#treeData" title="从数据直接生成" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import multiple from './multiple.md';
import checkable from './checkable.md';
import treeData from './treeData.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    multiple,
    checkable,
    treeData,
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


