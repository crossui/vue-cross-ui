<template functional>
  <v-sub-menu v-on="listeners" v-bind="data.attrs" :key="data.key">
    <span slot="title"><v-icon type="mail" /><span>{{data.attrs.menuInfo.title}}</span></span>
    <template v-for="item in data.attrs.menuInfo.children">
      <v-menu-item v-if="!item.children" :key="item.key">
        <v-icon type="pie-chart" />
        <span>{{item.title}}</span>
      </v-menu-item>
      <sub-menu v-else :menuInfo="item" :key="item.key"/>
    </template>
  </v-sub-menu>
</template>
