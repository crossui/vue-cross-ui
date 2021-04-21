<template>
  <div>
    <v-card class="mt-100">
      <v-menu mode="horizontal" isFirstClickOpen>
        <template v-for="item in menuList">
          <v-sub-menu :key="item.name">
            <span slot="title">
              {{ item.meta.title }}
            </span>
            <template v-for="subItem in item.children">
              <v-menu-item :key="subItem.name"> {{subItem.meta.title}} </v-menu-item>
            </template>
          </v-sub-menu>
        </template>
      </v-menu>
    </v-card>
  </div>
</template>
<script>
import menuList from "./menu.json";
export default {
  data() {
    return {
      menuList,
      selectedKeys: [],
      openKeys: ["patient-book-register"],
      current: "patient-book-register",
    };
  },
  methods: {},
};
</script>
