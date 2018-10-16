<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <coordinated id="coordinated"></coordinated>
      <dynamic-rule id="dynamic-rule"></dynamic-rule>
      <layout id="layout"></layout>
      <normal-login id="normal-login"></normal-login>
      <horizontal-login id="horizontal-login"></horizontal-login>
      <validate-static id="validate-static"></validate-static>
      <time-related-controls id="time-related-controls"></time-related-controls>
      <without-form-create id="without-form-create"></without-form-create>
      <advanced-search id="advanced-search"></advanced-search>
      <customized-form-controls id="customized-form-controls"></customized-form-controls>
      <validate-other id="validate-other"></validate-other>
      <dynamic-form-item id="dynamic-form-item"></dynamic-form-item>
      <globalState id="globalState"></globalState>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#coordinated" title="表单联动" />
        <v-anchor-link href="#dynamic-rule" title="动态校验规则" />
        <v-anchor-link href="#layout" title="表单布局" />
        <v-anchor-link href="#normal-login" title="登录框" />
        <v-anchor-link href="#horizontal-login" title="水平登录栏" />
        <v-anchor-link href="#validate-static" title="自定义校验" />
        <v-anchor-link href="#time-related-controls" title="时间类控件" />
        <v-anchor-link href="#without-form-create" title="自行处理表单数据" />
        <v-anchor-link href="#advanced-search" title="高级搜索" />
        <v-anchor-link href="#customized-form-controls" title="自定义表单控件" />
        <v-anchor-link href="#validate-other" title="校验其他组件" />
        <v-anchor-link href="#dynamic-form-item" title="动态增减表单项" />
        <v-anchor-link href="#globalState" title="表单数据存储于上层组件" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import coordinated from './coordinated.md';
import dynamicRule from './dynamic-rule.md';
import layout from './layout.md';
import normalLogin from './normal-login.md';
import horizontalLogin from './horizontal-login.md';
import validateStatic from './validate-static.md';
import timeRelatedControls from './time-related-controls.md';
import withoutFormCreate from './without-form-create.md';
import advancedSearch from './advanced-search-box.vue';
import customizedFormControls from './customized-form-controls-box.vue';
import validateOther from './validate-other-box.vue';
import dynamicFormItem from './dynamic-form-item-box.vue';
import globalState from './global-state-box.vue';
export default {
  components: {
    headerInfo,
    api,
    coordinated,
    dynamicRule,
    layout,
    normalLogin,
    horizontalLogin,
    validateStatic,
    timeRelatedControls,
    withoutFormCreate,
    advancedSearch,
    customizedFormControls,
    validateOther,
    dynamicFormItem,
    globalState
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


