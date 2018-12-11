> 对象编辑

:::demo 用于承载编辑相关操作，需要点击关闭按钮关闭。

```html
<template>
  <div>
    <v-button type="primary" @click="showDrawer">
      Open
    </v-button>
    <v-drawer
      title="Create"
      width=720
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      style="height: calc(100% - 55px);overflow: 'auto';paddingBottom: 53px"
    >
      <v-form layout="vertical" hideRequiredMark>
        <v-row :gutter="16">
          <v-col :span="12">
            <v-form-item label="Name" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'please enter user name' }]}">
              <v-input placeholder="please enter user name" ></v-input>
            </v-form-item>
          </v-col>
          <v-col :span="12">
            <v-form-item label="Url" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'please enter url' }]}">
              <v-input
                  style="width: 100%"
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="please enter url"
                ></v-input>
            </v-form-item>
          </v-col>
        </v-row>
        <v-row :gutter="16">
          <v-col :span="12">
            <v-form-item label="Owner" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'Please select an owner' }]}">
              <v-select placeholder="Please v-s an owner" style="width:200px">
                <v-select-option value="xiao">Xiaoxiao Fu</v-select-option>
                <v-select-option value="mao">Maomao Zhou</v-select-option>
              </v-select>
            </v-form-item>
          </v-col>
          <v-col :span="12">
            <v-form-item label="Type" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'Please choose the type' }]}">
              <v-select placeholder="Please choose the type" style="width:200px">
                <v-select-option value="private">Private</v-select-option>
                <v-select-option value="public">Public</v-select-option>
              </v-select>
            </v-form-item>
          </v-col>
        </v-row>
        <v-row :gutter="16">
          <v-col :span="12">
            <v-form-item label="Approver" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'Please choose the approver' }]}">
              <v-select placeholder="Please choose the approver" style="width:200px">
                  <v-select-option value="jack">Jack Ma</v-select-option>
                  <v-select-option value="tom">Tom Liu</v-select-option>
                </v-select>
            </v-form-item>
          </v-col>
          <v-col :span="12">
            <v-form-item label="DateTime" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'Please choose the dateTime' }]}">
              <v-date-picker
                style="width:200px"
                :getPopupContainer="trigger => trigger.parentNode"
              ></v-date-picker>
            </v-form-item>
          </v-col>
        </v-row>
        <v-row :gutter="16">
          <v-col :span="24">
            <v-form-item label="Description" :fieldDecoratorOptions="{ rules: [{ required: true, message: 'please enter url description' }]}">
              <v-textarea :rows="4" placeholder="please enter url description" style="width:500px"></v-textarea>
            </v-form-item>
          </v-col>
        </v-row>
      </Form>
      <div
        :style="{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }"
      >
        <v-button
          :style="{
            marginRight: 8,
          }"
          @click="onClose"
        >
          Cancel
        </v-button>
        <v-button @click="onClose" type="primary">Submit</v-button>
      </div>
    </v-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    }
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
