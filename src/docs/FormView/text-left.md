> 固定宽度靠左

:::demo 固定宽度靠左 `lableWidth`。

```html
<template>
  <div>
    <v-row>
        <v-col :span="12">
          <v-form-view title="Full Name" lableWidth="120px" content="Lily" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Account" lableWidth="120px" content="vcu@example.com" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="City" lableWidth="120px" content="HangZhou" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Country" lableWidth="120px" content="China🇨🇳" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view title="Birthday" lableWidth="120px" content="February 2,1900" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view title="Website" lableWidth="120px" content="-" ></v-form-view>
        </v-col>
      </v-row>
      <v-row>
        <v-col :span="12">
          <v-form-view
            lableWidth="120px"
            title="Message"
            content="Make things as simple as possible but no simpler."
          ></v-form-view>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <p>Company</p>
      <v-row>
        <v-col :span="12">
          <v-form-view lableWidth="120px" title="Position" content="Programmer" ></v-form-view>
        </v-col>
        <v-col :span="12">
          <v-form-view lableWidth="120px" title="Responsibilities" content="Coding" ></v-form-view>
        </v-col>
      </v-row>
  </div>
</template>
```
:::