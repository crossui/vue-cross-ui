<template>
  <div>
    <v-date-picker @change="onChange"></v-date-picker>
    <br/>  
    <br/>
    <v-month-picker @change="onChange" placeholder="Select month"></v-month-picker>
    <br/>  
    <br/>
    <v-range-picker @change="onChange"></v-range-picker>
    <br/>  
    <br/>
    <v-week-picker @change="onChange" placeholder="Select week"></v-week-picker>
    <br/>  
    <br/>
    <v-date-picker
      placeholder="Select year"
      format="YYYY"
      mode="year"
      :allowClear="false"
      v-model="yearDate"
      :open="yearOpen"
      @openChange="onOpenChangeYear"
      @panelChange="onChangeYear"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      yearDate: null,
      yearOpen: false,
    }
  },
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    onOpenChangeYear(status) {
      this.yearOpen = status
    },
    onChangeYear(date) {
      this.yearDate = date
      this.yearOpen = false
    },
  }
}
</script>