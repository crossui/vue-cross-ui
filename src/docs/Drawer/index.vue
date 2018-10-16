<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic-right id="basic-right"></basic-right>
      <basic-left id="basic-left"></basic-left>
      <from-drawer id="from-drawer"></from-drawer>
      <multi-level-drawer id="multi-level-drawer"></multi-level-drawer>
      <user-profile id="user-profile"></user-profile>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic-right" title="基础抽屉" />
        <v-anchor-link href="#basic-left" title="左侧滑出" />
        <v-anchor-link href="#from-drawer" title="对象编辑" />
        <v-anchor-link href="#multi-level-drawer" title="多层抽屉" />
        <v-anchor-link href="#user-profile" title="信息预览抽屉" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basicRight from './basic-right.md';
import basicLeft from './basic-left.md';
import fromDrawer from './from-drawer.md';
import multiLevelDrawer from './multi-level-drawer.md';
import userProfile from './user-profile.md';
export default {
  components: {
    headerInfo,
    api,
    basicRight,
    basicLeft,
    fromDrawer,
    multiLevelDrawer,
    userProfile,
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


