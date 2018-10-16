> 所有组件

:::demo 此处列出需要国际化支持的组件，你可以在演示里切换语言。

```html
<template>
<div>
  <div class="change-locale">
    <span :style="{ marginRight: '16px' }">Change locale of components: </span>
    <v-radio-group :defaultValue="null" @change="changeLocale">
      <v-radio-button key="en" :value="null">English</v-radio-button>
      <v-radio-button key="cn" :value="zhCN">中文</v-radio-button>
    </v-radio-group>
  </div>
  <v-locale-provider :locale="locale">
    <div class="locale-components" :key="(!!locale).toString()"> 

        <div class="example">
          <v-pagination :defaultCurrent="1" :total="50" showSizeChanger></v-pagination>
        </div>

        <div class="example">
          <v-select showSearch style="width: 200px">
            <v-select-option value="jack">jack</v-select-option>
            <v-select-option value="lucy">lucy</v-select-option>
          </v-select>
          <v-date-picker></v-date-picker>
          <v-time-picker></v-time-picker>
          <v-range-picker style=" width: 200px "></v-range-picker>
        </div>


        <div class="example">
          <v-button type="primary" @click="showModal">Show Modal</v-button>
          <v-button @click="info">Show info</v-button>
          <v-button @click="confirm">Show confirm</v-button>
          <v-popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </v-popconfirm>
        </div>


        <div class="example">
          <v-transfer
            :dataSource="[]"
            showSearch
            :targetKeys="[]"
            :render="item => item.title"
          ></v-transfer>
        </div>

        <div :style="{ width: '319px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
          <v-calendar :fullscreen="false" :value="moment()"></v-calendar>
        </div>

        <v-modal title="Locale Modal" v-model="visible">
          <p>Locale Modal</p>
        </v-modal>
      </div>
  </v-locale-provider>
</div>
</template>
<script>
import zhCN from '../../../components/locale-provider/zh_CN';    
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'filter1',
    value: 'filter1',
  }],
}, {
  title: 'Age',
  dataIndex: 'age',
}];
export default {
  data() {
    return {
      visible: false,
      locale: null,
      zhCN,
    }
  },
  methods: {
    moment,
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    info() {
      this.$info({
        title: 'some info',
        content: 'some info',
      });
    },
    confirm() {
      this.$confirm({
        title: 'some info',
        content: 'some info',
      });
    },
    changeLocale(e) {
      const localeValue = e.target.value;
      this.locale = localeValue
      if (!localeValue) {
        moment.locale('en');
      } else {
        moment.locale('zh-cn');
      }
    },
  }
}
</script>

<style scoped>
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
</style>
```
:::
