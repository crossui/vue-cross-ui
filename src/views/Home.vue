<template>
  <div>
    <v-select
      mode="multiple"
      :defaultValue="['a1', 'b2']"
      style="width: 100px"
      @change="handleChange"
      placeholder="Please select"
      :maxTagCount="1"
      :showMaxTagCount="false"
    >
      <v-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{
        (i + 9).toString(36) + i
      }}</v-select-option>
    </v-select>

    <v-tree-select
      showSearch
      style="width: 100px"
      :value="value"
      :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allowClear
      multiple
      :maxTagCount="1"
      :showMaxTagCount="false"
      treeDefaultExpandAll
      @change="onChange"
      @search="onSearch"
      @select="onSelect"
    >
      <v-tree-select-node value="parent 1" title="parent 1" key="0-1">
        <v-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
          <v-tree-select-node
            value="leaf1"
            title="my leaf"
            key="random"
          ></v-tree-select-node>
          <v-tree-select-node
            value="leaf2"
            title="your leaf"
            key="random1"
          ></v-tree-select-node>
        </v-tree-select-node>
        <v-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">
          <v-tree-select-node value="sss" key="random3">
            <b style="color: #08c" slot="title">sss</b>
          </v-tree-select-node>
        </v-tree-select-node>
      </v-tree-select-node>
    </v-tree-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: undefined,
    };
  },
  methods: {
    onChange(value) {
      console.log(arguments);
      this.value = value;
    },
    onSearch() {
      console.log(arguments);
    },
    onSelect() {
      console.log(arguments);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>