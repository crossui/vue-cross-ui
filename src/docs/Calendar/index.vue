<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <cards id="card"></cards>
      <selects id="select"></selects>
      <notice-calendar id="notice-calendar"></notice-calendar>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#card" title="卡片模式" />
        <v-anchor-link href="#select" title="选择功能" />
        <v-anchor-link href="#notice-calendar" title="通知事项日历" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import cards from './card.md';
import selects from './select.md';
import noticeCalendar from './notice-calendar.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    cards,
    selects,
    noticeCalendar,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


