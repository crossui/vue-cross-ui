<template>
  <v-config-provider :getPopupContainer="getPopupContainer" :locale="zh_CN">
    <div id="app">
      <router-view />
    </div>
  </v-config-provider>
</template>
<script>
import zh_CN from "../components/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
export default {
  data() {
    return {
      zh_CN
    };
  },
  computed: {},
  methods: {
    getPopupContainer(el, dialogContext) {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      } else {
        return document.body;
      }
    }
  },
  watch: {},
  mounted() {},
};
</script>
<style lang="less">
@import "../components/index.less";
@import "./styles/index.less";
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: auto;
}
.app-main {
  height: 100vh;
  .sider-wrap {
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
