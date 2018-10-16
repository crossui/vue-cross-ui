<template>

  <v-row :gutter="16">
    <v-col :span="20">
      <div class="grid-demo">
        <header-info></header-info>
        <basic id="basic"></basic>
        <flex id="flex"></flex>
        <flex-align id="flex-align"></flex-align>
        <flex-order id="flex-order"></flex-order>
        <gutter id="gutter"></gutter>
        <offset id="offset"></offset>
        <playfround id="playfround"></playfround>
        <responsive id="responsive"></responsive>
        <responsive-more id="responsive-more"></responsive-more>
        <sort id="sort"></sort>
        <api id="api"></api>
      </div>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基础栅格" />
        <v-anchor-link href="#flex" title="Flex 布局" />
        <v-anchor-link href="#flex-align" title="Flex 对齐" />
        <v-anchor-link href="#flex-order" title="Flex 排序" />
        <v-anchor-link href="#gutter" title="区块间隔" />
        <v-anchor-link href="#offset" title="左右偏移" />
        <v-anchor-link href="#playfround" title="栅格配置器" />
        <v-anchor-link href="#responsive" title="响应式布局" />
        <v-anchor-link href="#responsive-more" title="其他属性的响应式" />
        <v-anchor-link href="#sort" title="栅格排序" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import flex from './flex.md';
import flexAlign from './flex-align.md';
import flexOrder from './flex-order.md';
import gutter from './gutter.md';
import offset from './offset.md';
import playfround from './playfround.md';
import responsive from './responsive.md';
import responsiveMore from './responsive-more.md';
import sort from './sort.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    flex,
    flexAlign,
    flexOrder,
    gutter,
    offset,
    playfround,
    responsive,
    responsiveMore,
    sort
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
.grid-demo .vcu-row-flex > div,
.grid-demo .vcu-row > div,
.grid-demo .vcu-row-flex > div,
.grid-demo .vcu-row > div,
[id^="components-grid-demo-"] .vcu-row-flex > div,
[id^="components-grid-demo-"] .vcu-row > div,
[id^="components-grid-demo-"] .vcu-row-flex > div,
[id^="components-grid-demo-"] .vcu-row > div {
  padding: 5px 0;
  text-align: center;
  border-radius: 0;
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
}

.grid-demo .vcu-row-flex > div:not(.gutter-row),
.grid-demo .vcu-row > div:not(.gutter-row),
[id^="components-grid-demo-"] .vcu-row-flex > div:not(.gutter-row),
[id^="components-grid-demo-"] .vcu-row > div:not(.gutter-row) {
  background: #00a0e9;
  padding: 16px 0;
}
.grid-demo .vcu-row-flex > div:not(.gutter-row):nth-child(odd),
.grid-demo .vcu-row > div:not(.gutter-row):nth-child(odd),
[id^="components-grid-demo-"]
  .vcu-row-flex
  > div:not(.gutter-row):nth-child(odd),
[id^="components-grid-demo-"] .vcu-row > div:not(.gutter-row):nth-child(odd) {
  background: rgba(0, 160, 233, 0.7);
}

.grid-demo .vcu-row-flex,
.grid-demo .vcu-row-flex,
[id^="components-grid-demo-"] .vcu-row-flex,
[id^="components-grid-demo-"] .vcu-row-flex {
  background: #f5f5f5;
}

.grid-demo .source p {
  margin-top: 20px;
}
</style>


