<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic">
      </basic>
      <sizes id="size"></sizes>
      <templates id="template"></templates>
      <ajaxs id="ajax"></ajaxs>
      <bordered id="bordered"></bordered>
      <edit-row id="edit-row"></edit-row>
      <edit-cell id="edit-cell"></edit-cell>
      <colspan-rowspan id="colspan-rowspan"></colspan-rowspan>
      <custom-filter-panel id="custom-filter-panel"></custom-filter-panel>
      <expand-children id="expand-children"></expand-children>
      <expand id="expand"></expand>
      <nested-table id="nested-table"></nested-table>
      <heads id="head"></heads>
      <grouping-columns id="grouping-columns"></grouping-columns>
      <fixed-header id="fixed-header"></fixed-header>
      <fixed-columns id="fixed-columns"></fixed-columns>
      <fixed-columns-header id="fixed-columns-header"></fixed-columns-header>
      <reset-filter id="reset-filter"></reset-filter>
      <row-selection-and-operation id="row-selection-and-operation"></row-selection-and-operation>
      <row-selection-custom id="row-selection-custom"></row-selection-custom>
      <row-selection id="row-selection"></row-selection>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100" class="table-anchor">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#size" title="紧凑型" />
        <v-anchor-link href="#template" title="template 风格的 API" />
        <v-anchor-link href="#ajax" title="远程加载数据" />
        <v-anchor-link href="#bordered" title="带边框" />
        <v-anchor-link href="#edit-row" title="可编辑行" />
        <v-anchor-link href="#edit-cell" title="可编辑单元格" />
        <v-anchor-link href="#colspan-rowspan" title="表格行/列合并" />
        <v-anchor-link href="#custom-filter-panel" title="自定义筛选菜单" />
        <v-anchor-link href="#expand-children" title="树形数据展示" />
        <v-anchor-link href="#expand" title="可展开" />
        <v-anchor-link href="#nested-table" title="嵌套子表格" />
        <v-anchor-link href="#head" title="筛选和排序" />
        <v-anchor-link href="#grouping-columns" title="表头分组" />
        <v-anchor-link href="#fixed-header" title="固定表头" />
        <v-anchor-link href="#fixed-columns" title="固定列" />
        <v-anchor-link href="#fixed-columns-header" title="固定头和列" />
        <v-anchor-link href="#reset-filter" title="可控的筛选和排序" />
        <v-anchor-link href="#row-selection-and-operation" title="选择和操作" />
        <v-anchor-link href="#row-selection-custom" title="自定义选择项" />
        <v-anchor-link href="#row-selection" title="可选择" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import sizes from './size.md';
import templates from './template.md';
import ajaxs from './ajax.md';
import bordered from './bordered.md';
import editRow from './edit-row.md';
import editCell from './edit-cell.md';
import colspanRowspan from './colspan-rowspan.md';
import customFilterPanel from './custom-filter-panel.md';
import expandChildren from './expand-children.md';
import expand from './expand.md';
import nestedTable from './nested-table.md';
import heads from './head.md';
import groupingColumns from './grouping-columns.md';
import fixedHeader from './fixed-header.md';
import fixedColumns from './fixed-columns.md';
import fixedColumnsHeader from './fixed-columns-header.md';
import resetFilter from './reset-filter.md';
import rowSelectionAndOperation from './row-selection-and-operation.md';
import rowSelectionCustom from './row-selection-custom.md';
import rowSelection from './row-selection.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    sizes,
    templates,
    ajaxs,
    bordered,
    editRow,
    editCell,
    colspanRowspan,
    customFilterPanel,
    expandChildren,
    expand,
    nestedTable,
    heads,
    groupingColumns,
    fixedHeader,
    fixedColumns,
    fixedColumnsHeader,
    resetFilter,
    rowSelectionAndOperation,
    rowSelectionCustom,
    rowSelection,
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
.table-anchor .vcu-anchor-link {
  padding: 5px 0 5px 16px;
}
</style>


