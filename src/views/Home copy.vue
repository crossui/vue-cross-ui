<template>
  <div>
    <v-card>
      <v-menu v-model="current" mode="horizontal" isFirstClickOpen>
        <v-menu-item key="mail">
          <v-icon type="mail" />Navigation One
        </v-menu-item>
        <v-menu-item key="app" disabled>
          <v-icon type="appstore" />Navigation Two
        </v-menu-item>
        <v-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><v-icon type="setting" />Navigation Three - Submenu</span
          >
          <v-menu-item-group title="Item 1">
            <v-menu-item key="setting:1"> Option 1 </v-menu-item>
            <v-menu-item key="setting:2"> Option 2 </v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="Item 2">
            <v-menu-item key="setting:3"> Option 3 </v-menu-item>
            <v-menu-item key="setting:4"> Option 4 </v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
        <v-sub-menu>
          <span slot="title" class="submenu-title-wrapper1"
            ><v-icon type="setting" />Navigation Three - Submenu11</span
          >
          <v-menu-item-group title="Item 11">
            <v-menu-item key="setting:11"> Option 111 </v-menu-item>
            <v-menu-item key="setting:21"> Option 2 </v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="Item 21">
            <v-menu-item key="setting:31"> Option 311 </v-menu-item>
            <v-menu-item key="setting:41"> Option 411 </v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
        <v-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
            >Navigation Four - Link</a
          >
        </v-menu-item>
      </v-menu>
    </v-card>

    <v-card class="mt-100">
      <v-menu v-model="current" mode="horizontal">
        <v-menu-item key="mail">
          <v-icon type="mail" />Navigation One
        </v-menu-item>
        <v-menu-item key="app" disabled>
          <v-icon type="appstore" />Navigation Two
        </v-menu-item>
        <v-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><v-icon type="setting" />Navigation Three - Submenu</span
          >
          <v-menu-item-group title="Item 1">
            <v-menu-item key="setting:1"> Option 1 </v-menu-item>
            <v-menu-item key="setting:2"> Option 2 </v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="Item 2">
            <v-menu-item key="setting:3"> Option 3 </v-menu-item>
            <v-menu-item key="setting:4"> Option 4 </v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
        <v-sub-menu>
          <span slot="title" class="submenu-title-wrapper1"
            ><v-icon type="setting" />Navigation Three - Submenu11</span
          >
          <v-menu-item-group title="Item 11">
            <v-menu-item key="setting:11"> Option 111 </v-menu-item>
            <v-menu-item key="setting:21"> Option 2 </v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="Item 21">
            <v-menu-item key="setting:31"> Option 311 </v-menu-item>
            <v-menu-item key="setting:41"> Option 411 </v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
        <v-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
            >Navigation Four - Link</a
          >
        </v-menu-item>
      </v-menu>
    </v-card>

    <v-card class="mt-20">
      <v-menu style="width: 256px" mode="vertical">
        <v-menu-item key="1">
          <v-icon type="mail"></v-icon>
          Navigation One
        </v-menu-item>
        <v-menu-item key="2">
          <v-icon type="calendar"></v-icon>
          Navigation Two
        </v-menu-item>
        <v-sub-menu key="sub1">
          <span slot="title"
            ><v-icon type="appstore"></v-icon
            ><span>Navigation Three</span></span
          >
          <v-menu-item key="3">Option 3</v-menu-item>
          <v-menu-item key="4">Option 4</v-menu-item>
          <v-sub-menu key="sub1-2" title="Submenu">
            <v-menu-item key="5">Option 5</v-menu-item>
            <v-menu-item key="6">Option 6</v-menu-item>
          </v-sub-menu>
        </v-sub-menu>
        <v-sub-menu key="sub2">
          <span slot="title"
            ><v-icon type="setting"></v-icon><span>Navigation Four</span></span
          >
          <v-menu-item key="7">Option 7</v-menu-item>
          <v-menu-item key="8">Option 8</v-menu-item>
          <v-menu-item key="9">Option 9</v-menu-item>
          <v-menu-item key="10">Option 10</v-menu-item>
        </v-sub-menu>
      </v-menu>
    </v-card>

    <v-card class="mt-20">
      <v-menu
        style="width: 256px"
        :defaultSelectedKeys="['1']"
        :openKeys.sync="openKeys1"
        mode="inline"
      >
        <v-sub-menu key="sub1">
          <span slot="title"
            ><v-icon type="mail"></v-icon><span>Navigation One</span></span
          >
          <v-menu-item-group key="g1">
            <template slot="title"
              ><v-icon type="qq"></v-icon><span>Item 1</span></template
            >
            <v-menu-item key="1">Option 1</v-menu-item>
            <v-menu-item key="2">Option 2</v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group key="g2" title="Item 2">
            <v-menu-item key="3">Option 3</v-menu-item>
            <v-menu-item key="4">Option 4</v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
        <v-sub-menu key="sub2">
          <span slot="title"
            ><v-icon type="appstore"></v-icon><span>Navigation Two</span></span
          >
          <v-menu-item key="5">Option 5</v-menu-item>
          <v-menu-item key="6">Option 6</v-menu-item>
          <v-sub-menu key="sub3" title="Submenu">
            <v-menu-item key="7">Option 7</v-menu-item>
            <v-menu-item key="8">Option 8</v-menu-item>
          </v-sub-menu>
        </v-sub-menu>
        <v-sub-menu key="sub4">
          <span slot="title"
            ><v-icon type="setting"></v-icon><span>Navigation Three</span></span
          >
          <v-menu-item key="9">Option 9</v-menu-item>
          <v-menu-item key="10">Option 10</v-menu-item>
          <v-menu-item key="11">Option 11</v-menu-item>
          <v-menu-item key="12">Option 12</v-menu-item>
        </v-sub-menu>
      </v-menu>
    </v-card>

    <v-card class="mt-20">
      <v-menu style="width: 256px" mode="vertical-right">
        <v-menu-item key="1">
          <v-icon type="mail"></v-icon>
          Navigation One
        </v-menu-item>
        <v-menu-item key="2">
          <v-icon type="calendar"></v-icon>
          Navigation Two
        </v-menu-item>
        <v-sub-menu key="sub1">
          <span slot="title"
            ><v-icon type="appstore"></v-icon
            ><span>Navigation Three</span></span
          >
          <v-menu-item key="3">Option 3</v-menu-item>
          <v-menu-item key="4">Option 4</v-menu-item>
          <v-sub-menu key="sub1-2" title="Submenu">
            <v-menu-item key="5">Option 5</v-menu-item>
            <v-menu-item key="6">Option 6</v-menu-item>
          </v-sub-menu>
        </v-sub-menu>
        <v-sub-menu key="sub2">
          <span slot="title"
            ><v-icon type="setting"></v-icon><span>Navigation Four</span></span
          >
          <v-menu-item key="7">Option 7</v-menu-item>
          <v-menu-item key="8">Option 8</v-menu-item>
          <v-menu-item key="9">Option 9</v-menu-item>
          <v-menu-item key="10">Option 10</v-menu-item>
        </v-sub-menu>
      </v-menu>
    </v-card>

    <v-card class="mt-20"> </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"],
      current1: ["mail"],
      openKeys1: ["sub1"],

      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name1: "",
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    },
  },
};
</script>
