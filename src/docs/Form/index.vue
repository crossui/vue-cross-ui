<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <inline id="inline"></inline>
      <position id="position"></position>
      <form-validate id="form-validate"></form-validate>
      <custom-validation id="custom-validation"></custom-validation>
      <modal-validate id="modal-validate"></modal-validate>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#inline" title="行内表单" />
        <v-anchor-link href="#position" title="对齐方式" />
        <v-anchor-link href="#form-validate" title="表单验证" />
        <v-anchor-link href="#custom-validation" title="自定义验证" />
        <v-anchor-link href="#modal-validate" title="弹出窗表单验证" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import inline from './inline.md';
import position from './position.md';
import formValidate from './form-validate.md';
import customValidation from './custom-validation.md';
import modalValidate from './modal-validate.md';
export default {
  components: {
    headerInfo,
    api,
    inline,
    position,
    formValidate,
    customValidation,
    modalValidate
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


