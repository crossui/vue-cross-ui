<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info id="often"></header-info>
      <base-table id="tables"></base-table>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#often" title="常用" />
        <v-anchor-link href="#tables" title="表格" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import baseTable from './base-table.md';
export default {
  components: {
    headerInfo,
    baseTable
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


