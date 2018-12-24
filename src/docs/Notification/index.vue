<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <placement id="placement"></placement>
      <duration id="duration"></duration>
      <custom-icon id="custom-icon"></custom-icon>
      <custom-style id="custom-style"></custom-style>
      <with-btn id="with-btn"></with-btn>
      <with-icon id="with-icon"></with-icon>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#placement" title="位置" />
        <v-anchor-link href="#duration" title="自动关闭的延时" />
        <v-anchor-link href="#custom-icon" title="自定义图标" />
        <v-anchor-link href="#custom-style" title="自定义图标" />
        <v-anchor-link href="#with-btn" title="带有按钮" />
        <v-anchor-link href="#with-icon" title="带有图标" />
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
import duration from './duration.md';
import customIcon from './custom-icon.md';
import customStyle from './custom-style.md';
import withBtn from './with-btn.md';
import withIcon from './with-icon.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    placement,
    duration,
    customIcon,
    customStyle,
    withBtn,
    withIcon,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


