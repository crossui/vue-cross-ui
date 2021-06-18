<template>
  <div>
    <v-card>
      <v-directory-tree
        multiple
        default-expand-all
        :contextMenu="treeMenu"
        :selectedKeys="selectedKeys"
        @rightClick="rightClick"
        @contextMenuClick="contextMenuClick"
      >
        <v-tree-node key="0-0" title="parent 0">
          <v-tree-node key="0-0-0" title="leaf 0-0" is-leaf></v-tree-node>
          <v-tree-node key="0-0-1" title="leaf 0-1" is-leaf></v-tree-node>
        </v-tree-node>
        <v-tree-node key="0-1" title="parent 1">
          <v-tree-node key="0-1-0" title="leaf 1-0" is-leaf></v-tree-node>
          <v-tree-node key="0-1-1" title="leaf 1-1" is-leaf></v-tree-node>
        </v-tree-node>
      </v-directory-tree>
    </v-card>
  </div>
</template>
<script>
import XEUtils from "xe-utils";
export default {
  data() {
    return {
      selectedKeys: [],
      treeMenu: {
        className: "my-context-menus",
        disabled: false,
        zIndex: 3000,
        options: [
          {
            key: "add",
            title: "新增节点",
            icon: "plus-square",
          },
          {
            key: "del",
            title: "删除节点",
            disabled: true,
            icon: "delete",
            iconType: "iconfont",
            visible: false,
          },
          {
            key: "edit",
            title: "修改节点",
            icon: "edit",
          },
          {
            key: "other",
            title: "其他",
            icon: "unordered-list",
            children: [
              {
                key: "copy",
                title: "复制节点",
                icon: "copy",
              },
              {
                key: "print",
                title: "打印节点",
              },
            ],
          },
        ],
        visibleMethod: this.visibleMethod,
      },
    };
  },
  methods: {
    rightClick({ event, node }) {
      this.selectedKeys = [node.eventKey];
    },
    contextMenuClick({ selectoption, node }) {
      console.info(selectoption, node);
    },
    visibleMethod(options, key) {
      XEUtils.eachTree(options, (item) => {
        if (key == "0-0" && item.key == "add") {
          item.disabled = true;
        }
        if (key == "0-1" && item.key == "del") {
          item.visible = true;
        }
        if (
          ["0-0-0", "0-0-1", "0-1-0", "0-1-1"].includes(key) &&
          item.key == "del"
        ) {
          item.disabled = false;
          item.visible = false;
        }
      });
      return options;
    },
  },
};
</script>
<style lang="less">
.my-context-menus {
  .vcu-menu-vertical .vcu-menu-item:not(:last-child),
  .vcu-menu-vertical-left .vcu-menu-item:not(:last-child),
  .vcu-menu-vertical-right .vcu-menu-item:not(:last-child),
  .vcu-menu-inline .vcu-menu-item:not(:last-child) {
    margin-bottom: 0px;
  }

  .vcu-menu-vertical > .vcu-menu-item,
  .vcu-menu-vertical-left > .vcu-menu-item,
  .vcu-menu-vertical-right > .vcu-menu-item,
  .vcu-menu-inline > .vcu-menu-item,
  .vcu-menu-vertical > .vcu-menu-submenu > .vcu-menu-submenu-title,
  .vcu-menu-vertical-left > .vcu-menu-submenu > .vcu-menu-submenu-title,
  .vcu-menu-vertical-right > .vcu-menu-submenu > .vcu-menu-submenu-title,
  .vcu-menu-inline > .vcu-menu-submenu > .vcu-menu-submenu-title {
    height: 30px;
    line-height: 30px;
  }
}
</style>