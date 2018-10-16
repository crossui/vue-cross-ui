<template>
  <v-locale-provider :locale="zh_CN">
    <div id="app">
      <router-view></router-view>
    </div>
  </v-locale-provider>
</template>

<script>
import zh_CN from '../components/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
export default {
  data() {
    return {
      zh_CN,
    }
  }
}
</script>
