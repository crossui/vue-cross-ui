> 信息预览抽屉

:::demo 需要快速预览对象概要时使用，点击遮罩区关闭。

```html
<template>
  <div>
    <v-list
      :dataSource="[
        {
          name: 'Lily',
        },
        {
          name: 'Lily',
        },
      ]"
      bordered
    >
      <v-list-item slot="renderItem" slot-scope="item, index">
        <a slot="actions" @click="showDrawer">View Profile</a>
        <v-list-item-meta
          description="Progresser AFX"
        >
          <a slot="title" href="#">{{item.name}}</a>
          <v-avatar slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"></v-avatar>
        </v-list-item-meta>
      </v-list-item>
    </v-list>
    <v-drawer
      width=640
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p :style="[pStyle, pStyle2]">User Profile</p>
      <p :style="pStyle">Personal</p>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Full Name" content="Lily" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Account" content="vcu@example.com" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="City" content="HangZhou" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Country" content="China🇨🇳" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Birthday" content="February 2,1900" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Website" content="-" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view
            title="Message"
            content="Make things as simple as possible but no simpler."
          ></v-form-view>
        </v-col>
      </v-row>
      <v-divider ></v-divider>
      <p :style="pStyle">Company</p>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Position" content="Programmer" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Responsibilities" content="Coding" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Department" content="AFX" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Supervisor" >
            <a slot="content">Lin</a>
          </v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="24">
          <v-form-view
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          ></v-form-view>
        </v-col>
      </v-row>
      <v-divider ></v-divider>
      <p :style="pStyle">Contacts</p>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Email" content="vuejs@example.com" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Phone Number" content="+86 181 0000 0000" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="24">
          <v-form-view
            title="Github"
          >
            <a slot='content' href="https://github.com">
              github.com
            </a>
          </v-form-view>
        </v-col>
      </v-row>
    </v-drawer>
  </div>
</template>
<script>
import descriptionItem from './descriptionItem'

export default {
  data() {
    return {
      visible: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px',
      },
      pStyle2: {
        marginBottom: '24px'
      }
    }
  },
  components: {
    descriptionItem,
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>
```
:::