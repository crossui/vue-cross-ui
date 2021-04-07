<template>
  <div>
    <v-select default-value="jack" style="width: 120px" @change="handleChange" scrollChoose>
      <v-select-option value="jack"> Jack </v-select-option>
      <v-select-option value="lucy"> Lucy </v-select-option>
      <v-select-option value="disabled" disabled> Disabled </v-select-option>
      <v-select-option value="Yiminghe"> yiminghe </v-select-option>
    </v-select>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>