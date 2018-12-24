<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <size id="size"></size>
      <tags id="tags"></tags>
      <automatic-tokenization id="automatic-tokenization"></automatic-tokenization>
      <!-- <combobox id="combobox"></combobox> -->
      <coordinate id="coordinate"></coordinate>
      <label-in-value id="label-in-value"></label-in-value>
      <multiple id="multiple"></multiple>
      <optgroups id="optgroup"></optgroups>
      <options id="options"></options>
      <search-box id="search-box"></search-box>
      <search id="search"></search>
      <select-users id="select-users"></select-users>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本使用" />
        <v-anchor-link href="#size" title="三种大小" />
        <v-anchor-link href="#tags" title="标签" />
        <v-anchor-link href="#automatic-tokenization" title="自动分词" />
        <!-- <v-anchor-link href="#combobox" title="智能提示" /> -->
        <v-anchor-link href="#coordinate" title="联动" />
        <v-anchor-link href="#label-in-value" title="获得选项的文本" />
        <v-anchor-link href="#multiple" title="多选" />
        <v-anchor-link href="#optgroup" title="分组" />
        <v-anchor-link href="#options" title="从数据直接生成" />
        <v-anchor-link href="#search-box" title="搜索框" />
        <v-anchor-link href="#search" title="带搜索框" />
        <v-anchor-link href="#select-users" title="搜索用户" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import size from './size.md';
import tags from './tags.md';
import automaticTokenization from './automatic-tokenization.md';
/* import combobox from './combobox.md'; */
import coordinate from './coordinate.md';
import labelInValue from './label-in-value.md';
import multiple from './multiple.md';
import optgroups from './optgroup.md';
import options from './options.md';
import searchBox from './search-box.md';
import search from './search.md';
import selectUsers from './select-users.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    size,
    tags,
    automaticTokenization,
    //combobox,
    coordinate,
    labelInValue,
    multiple,
    optgroups,
    options,
    searchBox,
    search,
    selectUsers,
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


