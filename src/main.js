import Vue from 'vue'
import App from './App'
import { router } from './router/index'
import ElementDataset from 'element-dataset'
import 'babel-polyfill'
ElementDataset();

import vcu from '../components/index';
import '../components/_style/index.less';
Vue.use(vcu)

import DemoBlock from './demo-block.vue';
Vue.component("demo-block", DemoBlock);


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})