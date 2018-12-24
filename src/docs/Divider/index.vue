<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <vertical id="vertical"></vertical>
      <horizontal id="horizontal"></horizontal>
      <orientation id="orientation"></orientation>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#vertical" title="垂直分割线" />
        <v-anchor-link href="#horizontal" title="水平分割线" />
        <v-anchor-link href="#orientation" title="标题位置" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import vertical from './vertical.md';
import horizontal from './horizontal.md';
import orientation from './orientation.md';
export default {
  components: {
    headerInfo,
    api,
    vertical,
    horizontal,
    orientation,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


