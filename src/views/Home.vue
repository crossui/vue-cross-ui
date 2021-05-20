<template>
  <div>
    <v-cascader
      :options="options"
      @change="onChange"
      placeholder="Please select"
    ></v-cascader>
  </div>
</template>
<script>
import { areaData } from "../../components/index.js";
export default {
  data() {
    return {
      options: areaData.provinceAndCityData,
    };
  },
  mounted() {
    console.info(areaData);
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>