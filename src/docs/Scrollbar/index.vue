<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <handle-event id="handle-event"></handle-event>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#handle-event" title="触发事件" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import handleEvent from './handle-event.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    handleEvent,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


