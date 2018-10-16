<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <custom-trigger id="custom-trigger"></custom-trigger>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本结构" />
        <v-anchor-link href="#custom-trigger" title="自定义触发器" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import customTrigger from './custom-trigger.md';
export default {
  components: {
    headerInfo,
    basic,
    customTrigger,
    api
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
.icon_lists {
  width: 100% !important;
}

.icon_lists li {
  float: left;
  width: 100px;
  height: 180px;
  text-align: center;
  list-style: none !important;
}
.icon_lists .vcuicon {
  font-size: 42px;
  line-height: 100px;
  margin: 10px 0;
  color: #333;
  -webkit-transition: font-size 0.25s ease-out 0s;
  -moz-transition: font-size 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s;
}
.icon_lists .vcuicon:hover {
  font-size: 100px;
}
</style>


