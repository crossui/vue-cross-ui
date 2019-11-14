<template>
  <v-row :gutter="16">
    <v-col :span="20">
      <header-info></header-info>
      <basic id="basic"></basic>
      <avatar id="avatar"></avatar>
      <drag id="drag"></drag>
      <picture-card id="picture-card"></picture-card>
      <picture-style id="picture-style"></picture-style>
      <fileList id="fileList"></fileList>
      <defaultFileList id="defaultFileList"></defaultFileList>
      <upload-manually id="upload-manually"></upload-manually>
      <upload-directory id="upload-directory"></upload-directory>
      <api id="api"></api>
    </v-col>
    <v-col :span="4">
      <v-anchor :offsetTop="100">
        <v-anchor-link href="#basic" title="基本" />
        <v-anchor-link href="#avatar" title="用户头像" />
        <v-anchor-link href="#drag" title="拖拽上传" />
        <v-anchor-link href="#picture-card" title="照片墙" />
        <v-anchor-link href="#picture-style" title="图片列表样式" />
        <v-anchor-link href="#fileList" title="完全控制的上传列表" />
        <v-anchor-link href="#defaultFileList" title="已上传的文件列表" />
        <v-anchor-link href="#upload-manually" title="手动上传" />
		<v-anchor-link href="#upload-directory" title="上传文件" />
        <v-anchor-link href="#api" title="API" />
      </v-anchor>
    </v-col>
  </v-row>
</template>
<script>
import headerInfo from './header-info.md';
import api from './api.md';
import basic from './basic.md';
import avatar from './avatar.md';
import drag from './drag.md';
import pictureCard from './picture-card.md';
import pictureStyle from './picture-style.md';
import fileList from './fileList.md';
import defaultFileList from './defaultFileList.md';
import uploadManually from './upload-manually.md';
import uploadDirectory from './directory.md';
export default {
  components: {
    headerInfo,
    api,
    basic,
    avatar,
    drag,
    pictureCard,
    pictureStyle,
    fileList,
    defaultFileList,
    uploadManually,
	uploadDirectory
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>


