<template>
    <v-row :gutter="16">
        <v-col :span="20">
            <header-info />
            <basic id="basic" />
            <asyn id="asyn" />
            <api id="api" />
            <callback id="callBack" />
        </v-col>
        <v-col :span="4">
            <v-anchor :offsetTop="100">
                <v-anchor-link href="#basic" title="基本" />
                <v-anchor-link href="#asyn" title="异步加载" />
                <v-anchor-link href="#api" title="API" />
                <v-anchor-link href="#callBack" title="回调事件" />
            </v-anchor>
        </v-col>
    </v-row>

</template>
<script>
import headerInfo from './header-info.md';
import basic from './basic.md';
import asyn from './asyn.md';
import api from './api.md';
import callback from './callBack.md';
export default {
    components: {
        headerInfo,
        basic,
        asyn,
        api,
        callback
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
<style>
</style>                