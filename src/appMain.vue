<template>
  <div class="main">
    <app-header></app-header>
    <div class="main-container">
      <v-row>
        <v-col :span="4">
          <menu-component></menu-component>
        </v-col>
        <v-col :span="20">
          <div class="main-router-view">
            <router-view></router-view>
          </div>
        </v-col>
      </v-row>
    </div>
    <app-footer></app-footer>
    <v-back-top v-if="$route.name!='BackTop'"></v-back-top>
  </div>
</template>
<script>
import appHeader from "./appHeader.vue";
import appFooter from "./appFooter.vue";
import menuComponent from "./menu.vue";
export default {
  components: {
    appHeader,
    appFooter,
    menuComponent
  }
}
</script>
<style lang="less">
@import "highlight.js/styles/github.css";
@import "./style/nprogress.less";
@import "./style/main.less";
</style>

