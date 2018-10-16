> 联动

:::demo 省市联动是典型的例子。

```html
<template>
  <div>
    <v-select :defaultValue="provinceData[0]" style="width: 120px" @change="handleProvinceChange">
      <v-select-option v-for="province in provinceData" :key="province">{{province}}</v-select-option>
    </v-select>
    <v-select v-model="secondCity" style="width: 120px">
      <v-select-option v-for="city in cities" :key="city">{{city}}</v-select-option>
    </v-select>
  </div>
</template>
<script>
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
export default {
  data() {
    return {
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
    }
  },
  methods: {
    handleProvinceChange(value) {
      this.cities = cityData[value]
      this.secondCity = cityData[value][0]
    }
  }
}
</script>
```
:::