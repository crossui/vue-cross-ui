<template>
  <div>
    <blockquote class="api-blockquote">
      <p>高级搜索</p>
    </blockquote>
    <div class="demo-block">
      <div class="demo-block-source">
        <advancedSearch />
      </div>
      <div class="demo-block-meta">
        三列栅格式的表单排列方式，常用于数据表格的高级搜索。
        <br /> 有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。
        <span class="demo-block-code-icon" @click="showCodeChange"><img alt="expand code" src="../../assets/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show"></span>
      </div>
      <div class="demo-block-code" v-show="showCode">
        <advancedSearchMd />
      </div>
    </div>
  </div>
</template>
<script>
import advancedSearch from './advanced-search.vue';
import advancedSearchMd from './advanced-search.md';

export default {
  components: {
    advancedSearch,
    advancedSearchMd
  },
  data() {
    return {
      showCode: false
    };
  },
  mounted() {
  },
  methods: {
    showCodeChange() {
      this.showCode = !this.showCode
    }
  }
};
</script>
<style>
@import "highlight.js/styles/color-brewer.css";
.demo-block {
  border: 1px solid #ebedf0;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.demo-block:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
.demo-block .demo-block-code-icon {
  position: absolute;
  right: 16px;
  bottom: 14px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
}
.demo-block .demo-block-code-icon img {
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  vertical-align: baseline;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.demo-block .demo-block-source {
  border-bottom: 1px solid #ebedf0;
  padding: 20px 24px 20px;
  color: #444;
  position: relative;
  margin-bottom: -1px;
}
.demo-block .demo-block-meta {
  position: relative;
  padding: 12px 50px 12px 20px;
  border-radius: 0 0 2px 2px;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 14px;
  color: #444;
  font-size: 14px;
  line-height: 2;
  border-radius: 0;
  border-bottom: 1px dashed #ebedf0;
  margin-bottom: -1px;
}
.demo-block .demo-block-meta code {
  margin: 0 1px;
  background: #f2f4f5;
  padding: 0.1em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
  border: 1px solid #eee;
}
.demo-block .demo-block-code {
  background-color: #f7f7f7;
  font-size: 0;
}
.demo-block .demo-block-code code {
  background-color: #f7f7f7;
  border: none;
  display: block;
  font-size: 14px;
  padding: 16px 32px;
}
code.language-json,
code.language-handlebars,
code.language-jsx {
  padding: 10px;
  display: block;
  background-color: #eee;
}
</style>


